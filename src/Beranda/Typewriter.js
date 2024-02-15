import { useEffect, useRef } from 'react';

const useTypewriter = (text) => {
  const headingRef = useRef();

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (headingRef.current) {
        headingRef.current.innerText += text[index];
        index++;

        if (index === text.length) {
          clearInterval(interval);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return headingRef;
};

export default useTypewriter;
