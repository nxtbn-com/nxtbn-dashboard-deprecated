class MarkerTool {
    private api: any; // Replace 'any' with the actual type of api if possible
    private button: HTMLButtonElement | null;
    private _state: boolean;
    private tag: string;
    private class: string;
    private colorPicker: HTMLInputElement | null;

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

        this.tag = 'MARK';
        this.class = 'cdx-marker';
        this.colorPicker = null;
    }

    render(): HTMLButtonElement {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = 'M'
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
        const mark = document.createElement(this.tag);

        mark.classList.add(this.class);
        mark.appendChild(selectedText);
        range.insertNode(mark);

        this.api.selection.expandToTag(mark);
    }

    unwrap(range: Range): void {
        const mark = this.api.selection.findParentTag(this.tag, this.class);
        const text = range.extractContents();

        if (mark) {
            mark.remove();
            range.insertNode(text);
        }
    }

    checkState(): void {
        const mark = this.api.selection.findParentTag(this.tag);

        this.state = !!mark;

        if (this.state) {
            this.showActions(mark);
        } else {
            this.hideActions();
        }
    }

    renderActions(): HTMLInputElement {
        this.colorPicker = document.createElement('input');
        this.colorPicker.type = 'color';
        this.colorPicker.value = '#f5f1cc';
        this.colorPicker.hidden = true;

        return this.colorPicker;
    }

    showActions(mark: HTMLElement | null): void {
        if (!mark || !this.colorPicker) return;

        const { backgroundColor } = mark.style;
        this.colorPicker.value = backgroundColor ? this.convertToHex(backgroundColor) : '#f5f1cc';

        this.colorPicker.onchange = () => {
            if (mark) {
                mark.style.backgroundColor = this.colorPicker!.value; // using '!' to assert non-null
            }
        };
        this.colorPicker.hidden = false;
    }

    hideActions(): void {
        if (this.colorPicker) {
            this.colorPicker.onchange = null;
            this.colorPicker.hidden = true;
        }
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

export default MarkerTool