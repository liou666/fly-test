import React, { useEffect, useContext, useRef, useState } from 'react';
import FloatContext, { FloatState } from '~/contexts/FloatContext';
import cs from 'classnames'
import {useMutationObserver} from '~/hooks'
// type Rect = {
//   bottom?: number;
//   height?: number;
//   left: number;
//   right?: number;
//   top: number;
// };

export default function FloatProxy(props:  React.Attributes & { children: React.ReactNode }) {
  const { attr, proDispatch } = useContext<FloatState>(FloatContext);
  const cb = () => {
  console.log(123123)
  }
  console.log('style',props)
 
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new MutationObserver((x) => {
      console.log(x,3333)
    });
    if (ref.current) {
      console.log(123)
    }
    observer.observe(ref?.current!, {
      attributes:true
    });
    return () => {
      observer.disconnect();
    };
  },[])
  // useMutationObserver(ref, cb);
 
  useEffect(() => {
    const { current } = ref;
    let styles = { left: 0, top: 0 };
    if (current) {
      const { top, left } = current.getBoundingClientRect();
      styles = { left, top };
    }
    proDispatch({ type: 'SET_ATTRS', payload: { attr: {...props,styles} } });
  }, []);
  return (
    <>
      {/* <>{attr}</> */}
      <div {...props}  ref={ref} />
    </>
  );
}
