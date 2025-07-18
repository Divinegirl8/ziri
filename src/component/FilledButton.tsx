import React from 'react';
import type { FilledButtonProps } from '../interface';
import { Link } from 'react-router-dom';

const FilledButton: React.FC<FilledButtonProps> = ({
  backgroundColor,
  textColor,
  text,
  img,
  pathname,
  width
}) => {
  return (
    <Link
      to={pathname ?? "/"}
      style={{ backgroundColor, color: textColor ,width:width}}
      className='flex items-center justify-center gap-2 px-4 py-2 rounded transition hover:opacity-80 text-[14px]'
    >
      {text}
      {img && <img src={img} alt="" className="w-2 h-2 object-contain" />}
    </Link>
  );
};

export default FilledButton;
