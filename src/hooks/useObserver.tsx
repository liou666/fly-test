import type { MutableRefObject } from "react";
import { useEffect } from "react";

type MutationObserverInit = {
  childList?: boolean;
  attributes?: boolean;
  characterData?: boolean;
  subtree?: boolean;
  attributeOldValue?: boolean;
  characterDataOldValue?: boolean;
}
type MutationCallback = (
  mutations: MutationRecord[],
  observer: MutationObserver
) => void;

const config: MutationObserverInit = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

function useMutationObserver(
  ref: MutableRefObject<HTMLElement | null>,
  callback: MutationCallback,
  options: MutationObserverInit = config
): void {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver((x) => {
        console.log(x,444444)
      });
      observer.observe(ref.current, options);
      return () => {
        observer.disconnect();
      };
    }
  }, [callback, options]);
}

export default  useMutationObserver ;
