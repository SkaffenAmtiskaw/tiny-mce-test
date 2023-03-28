import React, { useEffect, useRef } from 'react';
import tinymce, { type Editor } from 'tinymce';

const Field = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const target = useRef<HTMLDivElement>(null);
  const editor = useRef<Editor>();

  useEffect(() => {
    tinymce.init({
      inline: false,
      // @ts-ignore
      target: target.current,
      setup: (e: Editor) => {
        e.setContent(value);

        e.on('keyup', () => {
          onChange(e.getContent());
        })
      },
    }).then((editors) => {
      editor.current = editors[0];
    });

    return () => {
      tinymce.remove(editor.current!);
    }
  }, []);

  return (
    <form>
      <div ref={target} />
    </form>
  )
}

export default Field;