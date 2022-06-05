import React, { useContext, useEffect, useState } from 'react';
import FloatProxy from '../components/Float/FloatProxy';

export default function Foo() {
  const [size, setSize] = useState(200);
  const enlarge = () => {
    setSize(size + 20);
  };
  return (
    <>
      <button onClick={(e) => enlarge()} className="bg-green-200 cursor-pointer px-2 py-1 rounded-md">
        enlarge
      </button>

      <div className="m-10 flex">
        <p className="flex-auto w-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <FloatProxy style={{ width: `${size}px`, height: `${size}px` }} className="rounded-full" />
      </div>
    </>
  );
}
