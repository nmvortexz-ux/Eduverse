'use client';

import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

export default function MathText({ text, className = '' }: MathTextProps) {
  if (!text) return null;

  // Regex to split text into math delimiters: $$...$$, $...$, \[...\], \(...\)
  const regex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        let mathContent = '';
        let isDisplay = false;

        if (part.startsWith('$$') && part.endsWith('$$')) {
          mathContent = part.slice(2, -2);
          isDisplay = true;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          mathContent = part.slice(1, -1);
          isDisplay = false;
        } else if (part.startsWith('\\[') && part.endsWith('\\]')) {
          mathContent = part.slice(2, -2);
          isDisplay = true;
        } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
          mathContent = part.slice(2, -2);
          isDisplay = false;
        } else {
          return <span key={index}>{part}</span>;
        }

        try {
          const html = katex.renderToString(mathContent.trim(), {
            displayMode: isDisplay,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: html }}
              className="inline-block mx-0.5"
            />
          );
        } catch {
          return <span key={index}>{part}</span>;
        }
      })}
    </span>
  );
}
