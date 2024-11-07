import { ContentSection1 } from 'modules/ContentSection1/ContentSection1';
import { ContentSection2 } from 'modules/ContentSection2/ContentSection2';
import { ContentSection3 } from 'modules/ContentSection3/ContentSection3';
import { ContentSection4 } from 'modules/ContentSection4/ContentSection4';
import { ContentSection5 } from 'modules/ContentSection5/ContentSection5';
import { ContentSection6 } from 'modules/ContentSection6/ContentSection6';
import { useEffect, useRef, useState } from 'react';
import { UiContainer } from 'shared/ui';

export const MainPage = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionsRef = useRef<HTMLElement>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '-300px' },
    );
    // console.log(isIntersecting);

    console.log('sectionsRef', sectionsRef.current);
    observer.observe(sectionsRef.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      sectionsRef.current.querySelectorAll('section').forEach((el) => {
        el.classList.add('slide-in');
      });
    } else {
      sectionsRef.current.querySelectorAll('section').forEach((el) => {
        el.classList.remove('slide-in');
      });
    }
  }, [isIntersecting]);
  return (
    <UiContainer
      component="main"
      className="main"
      ref={sectionsRef}
    >
      <ContentSection1 />
      <ContentSection2 />
      <ContentSection3 id="advantages" />
      <ContentSection4 />
      <ContentSection5 id="howWork" />
      <ContentSection6 />
    </UiContainer>
  );
};
