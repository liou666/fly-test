import React from 'react';
import cs from 'classnames';
export default function TheImage({ className, top, left,style }: { className?: string; top?: number; left?: number,style?:any }) {
  const [flag, setFlag] = React.useState(false);
  console.log(top, left,style);
  return (
    <div
      style={ style }
      onClick={(e) => setFlag(!flag)}
      className={cs('relative overflow-hidden', className)}
    >
      {flag ? (
        <img className="w-full h-full " src="https://img2.woyaogexing.com/2022/06/01/58fc694cee0b8821.jpg" alt="" />
      ) : (
        <img className="w-full h-full" src="https://img2.woyaogexing.com/2022/06/01/82826b457698533d.jpg" alt="" />
      )}
    </div>
  );
}
