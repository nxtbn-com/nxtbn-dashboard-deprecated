import React, { useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Image from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Code from '@editorjs/code';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import LinkTool from '@editorjs/link';
import Marker from '@editorjs/marker';


interface EditorProps {
  onChange?: (content: OutputData) => void;
  defaultValue?: OutputData;
}

const EditorField: React.FC<EditorProps> = ({ onChange, defaultValue }) => {
  const editorInstance = useRef<EditorJS | null>(null);
  const customImageUploader = {
    uploadByFile(file: File) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({
            success: 1,
            file: {
              url: reader.result as string,
            },
          });
        };
        reader.onerror = () => {
          reject(new Error('File reading error'));
        };
        reader.readAsDataURL(file);
      });
    },
    uploadByUrl(url: string) {
      return new Promise((resolve) => {
        resolve({
          success: 1,
          file: {
            url: url,
          },
        });
      });
    },
  };

  useEffect(() => {
    const initializeEditor = async () => {
      if (!editorInstance.current) {
        editorInstance.current = new EditorJS({
          autofocus:true,
          holder: 'editorjs',
          data: defaultValue,
          tools: {
            h1: {
              class: Header,
              inlineToolbar: true,
              config: {
                placeholder: 'Enter h1 header',
                levels: [1],
                defaultLevel: 1,
              },
              toolbox: {
                icon: 'H1',
                title: 'Heading 1',
              },
            },
            h2: {
              class: Header,
              inlineToolbar: true,
              config: {
                placeholder: 'Enter h2 header',
                levels: [2],
                defaultLevel: 2,
              },
              toolbox: {
                icon: 'H2',
                title: 'Heading 2',
              },
            },
            h3: {
              class: Header,
              inlineToolbar: true,
              config: {
                placeholder: 'Enter h3 header',
                levels: [3],
                defaultLevel: 3,
              },
              toolbox: {
                icon: 'H3',
                title: 'Heading 3',
              },
            },
            list: List,
            paragraph: {
              class: Paragraph,
              inlineToolbar: true,
            },
            image: {
              class: Image,
              config: {
                uploader: customImageUploader,
              },
            },
            checklist: Checklist,
            quote: Quote,
            code: Code,
            embed: Embed,
            table: Table,
            linkTool: LinkTool,
            Marker: {
              class: Marker,
              shortcut: 'CMD+SHIFT+M',
            },
          },
          onReady: () => {
            console.log('Editor.js is ready to work!');
          },
          onChange: async (api:any, event:any) => {
            const content = await api.saver.save();
            if (onChange) {
              onChange(content);
            }
          },
        });
      }
    };

    initializeEditor();

  }, [onChange]);

  return <div id="editorjs" className="p-4 border border-gray-300 rounded-md z-[60] bg-white" />;
};

export default EditorField;
