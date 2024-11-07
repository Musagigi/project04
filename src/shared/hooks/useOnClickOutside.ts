import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handleOutsideClick: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!ref.current || ref.current.contains(target)) return;
      handleOutsideClick(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handleOutsideClick]);
};
