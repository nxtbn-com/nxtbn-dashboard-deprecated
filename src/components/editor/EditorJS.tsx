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
import TextColorTool from './TextColorTool';


interface EditorProps {
  onChange?: (content: OutputData) => void;
  defaultValue?: OutputData;
  errorData?: any;
  name?: string;
}

const EditorField: React.FC<EditorProps> = ({ onChange, defaultValue, errorData, name }) => {
  const editorInstance = useRef<EditorJS | null>(null);

  const errorMessages = name && errorData && errorData[name] ? errorData[name] : [];

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
            header: {
              class: Header,
              inlineToolbar: true,
              config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3], // Configure all header levels here
                defaultLevel: 1,
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
            Color: {
              class: TextColorTool,
              inlineToolbar: true
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

  return  (
    <>
      <div id="editorjs" className={`p-2 border rounded-md bg-white ${errorMessages.length > 0 ? 'border-red-500' : 'border-gray-300'}`} />
      {errorMessages.length > 0 && (
        <div className="text-red-600 text-sm mt-1">
          {errorMessages.map((error:any, index:number) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </>
  )
};

export default EditorField;
