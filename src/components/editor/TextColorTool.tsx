class TextColorTool {
    private api: any; // Replace 'any' with the actual type of api if possible
    private button: HTMLButtonElement | null;
    private _state: boolean;
    private tag: string;
    private class: string;
    private colorPicker: HTMLInputElement | null;
    private colorPalette: HTMLSelectElement | null;
    private presetColors: string[];
    private actionsWrapper: HTMLElement | null;

    static get isInline(): boolean {
        return true;
    }

    get state(): boolean {
        return this._state;
    }

    set state(state: boolean) {
        this._state = state;
        if (this.button) {
            this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
        }
    }

    constructor({ api }: { api: any }) {
        this.api = api;
        this.button = null;
        this._state = false;

        this.tag = 'SPAN';
        this.class = 'cdx-text-color';
        this.colorPicker = null;
        this.colorPalette = null;
        this.actionsWrapper = null;
        this.presetColors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']; // Example preset colors
    }

    render(): HTMLButtonElement {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = '<svg width="20" height="18"><path d="M10.458 12.04l2.919 1.686-.781 1.417-.984-.03-.974 1.687H8.674l1.49-2.583-.508-.775.802-1.401zm.546-.952l3.624-6.327a1.597 1.597 0 0 1 2.182-.59 1.632 1.632 0 0 1 .615 2.201l-3.519 6.391-2.902-1.675zm-7.73 3.467h3.465a1.123 1.123 0 1 1 0 2.247H3.273a1.123 1.123 0 1 1 0-2.247z"/></svg>';
        this.button.classList.add(this.api.styles.inlineToolButton);

        return this.button;
    }

    surround(range: Range): void {
        if (this.state) {
            this.unwrap(range);
            return;
        }

        this.wrap(range);
    }

    wrap(range: Range): void {
        const selectedText = range.extractContents();
        const span = document.createElement(this.tag);

        span.classList.add(this.class);
        span.appendChild(selectedText);
        range.insertNode(span);

        this.api.selection.expandToTag(span);
    }

    unwrap(range: Range): void {
        const span = this.api.selection.findParentTag(this.tag, this.class);
        const text = range.extractContents();

        if (span) {
            span.remove();
            range.insertNode(text);
        }
    }

    checkState(): void {
        const span = this.api.selection.findParentTag(this.tag);

        this.state = !!span;

        if (this.state) {
            this.showActions(span);
        } else {
            this.hideActions();
        }
    }

    renderActions(): HTMLElement {
        this.actionsWrapper = document.createElement('div');
        this.actionsWrapper.style.position = 'absolute';
        this.actionsWrapper.style.zIndex = '10';
        this.actionsWrapper.style.background = '#fff';
        this.actionsWrapper.style.border = '1px solid #ddd';
        this.actionsWrapper.style.padding = '5px';
        this.actionsWrapper.style.display = 'flex';
        this.actionsWrapper.style.gap = '5px';
        this.actionsWrapper.style.marginTop='50px'
        this.actionsWrapper.hidden = true;

        this.colorPicker = document.createElement('input');
        this.colorPicker.type = 'color';
        this.colorPicker.value = '#000000'; // default color

        this.colorPalette = document.createElement('select');
        this.presetColors.forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.style.backgroundColor = color;
            option.innerText = color;
            this.colorPalette!.appendChild(option);
        });

        

        this.colorPalette.onchange = () => {
            this.applyColor(this.colorPalette!.value);
            
        };

        this.colorPicker.onchange = () => {
            this.applyColor(this.colorPicker!.value);
        };

        this.actionsWrapper.appendChild(this.colorPalette);
        this.actionsWrapper.appendChild(this.colorPicker);

        document.body.appendChild(this.actionsWrapper);

        return this.actionsWrapper;
    }

    showActions(span: HTMLElement | null): void {
        if (!span || !this.colorPicker || !this.colorPalette || !this.actionsWrapper) return;

        const { color } = span.style;
        this.colorPicker.value = color ? this.convertToHex(color) : '#000000';
        this.colorPalette.value = this.colorPicker.value;

        const rect = span.getBoundingClientRect();
        this.actionsWrapper.style.top = `${rect.top + window.scrollY + rect.height}px`;
        this.actionsWrapper.style.left = `${rect.left + window.scrollX}px`;
        this.actionsWrapper.hidden = false;

        document.addEventListener('mousedown', this.handleOutsideClick);
    }

    hideActions(): void {
        if (this.actionsWrapper) {
            this.actionsWrapper.remove()
          
        }

        document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    handleOutsideClick = (event: MouseEvent): void => {
        if (this.actionsWrapper && !this.actionsWrapper.contains(event.target as Node)) {
            this.hideActions();
            this.colorPalette = null
            this.colorPicker = null
        }
    }

    applyColor(color: string): void {
        const selection = window.getSelection();
        if (!selection) return;

        const range = selection.getRangeAt(0);
        const span = this.api.selection.findParentTag(this.tag, this.class);

        if (span) {
            span.style.color = color;
            this.hideActions()
        
        } else {
            const selectedText = range.extractContents();
            const newSpan = document.createElement(this.tag);
            newSpan.classList.add(this.class);
            newSpan.style.color = color;
            newSpan.appendChild(selectedText);
            range.insertNode(newSpan);

            this.api.selection.expandToTag(newSpan);
        }

        this.colorPicker!.value = color;
        this.colorPalette!.value = color;
    }

    convertToHex(color: string): string {
        const rgb = color.match(/(\d+)/g);

        if (rgb) {
            let hexr = parseInt(rgb[0]).toString(16);
            let hexg = parseInt(rgb[1]).toString(16);
            let hexb = parseInt(rgb[2]).toString(16);

            hexr = hexr.length === 1 ? '0' + hexr : hexr;
            hexg = hexg.length === 1 ? '0' + hexg : hexg;
            hexb = hexb.length === 1 ? '0' + hexb : hexb;

            return '#' + hexr + hexg + hexb;
        }

        return '#000000';
    }
}

export default TextColorTool;
