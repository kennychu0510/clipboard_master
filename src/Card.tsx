import React, { useRef, useState } from 'react';

type Props = {
  onClick: () => void;
  copied: boolean;
  copy: (value: string) => void;
};

export default function Card(props: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { onClick, copied, copy } = props;

  function onCopy() {
    onClick();
    copy(ref.current?.value.trim() || '')
  }
  return (
    <div className='Card'>
      <textarea
        className='Input'
        ref={ref}
      ></textarea>
      {copied ? (
        <button
          className='CopyButton'
          onClick={onCopy}
          style={{ backgroundImage: 'linear-gradient(144deg, #3bef98, #42f357 50%, #81eb00)', color: 'black' }}
        >
          Copied
        </button>
      ) : (
        <button
          className='CopyButton'
          onClick={onCopy}
        >
          Copy
        </button>
      )}
    </div>
  );
}
