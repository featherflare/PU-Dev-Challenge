import { gsap } from 'gsap';
import Chart from './Chart';
import { forwardRef, useEffect, useRef, RefObject } from 'react';

interface CasesProps {
  active: string;
}

const Cases = forwardRef<HTMLElement, CasesProps>((props, ref) => {
  const { active } = props;

  // Transition in and out with gsap lib
  const ref1: RefObject<any> = useRef();
  const ref2: RefObject<any> = useRef();
  const ref3: RefObject<any> = useRef();
  const ref4: RefObject<any> = useRef();

  useEffect(() => {
    if (active != '') {
      gsap.fromTo(
        ref1.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          onComplete: () => {
            gsap.fromTo(
              ref2.current,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                onComplete: () => {
                  gsap.fromTo(
                    ref3.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5 }
                  );
                  gsap.fromTo(
                    ref4.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5 }
                  );
                },
              }
            );
          },
        }
      );
    } else {
      gsap.to(ref4.current, 0.5, {
        opacity: 0,
        y: 20,
      });
      gsap.to(ref3.current, 0.5, {
        opacity: 0,
        y: 20,
        onComplete: () => {
          gsap.to(ref2.current, 0.5, {
            opacity: 0,
            y: 20,
            onComplete: () => {
              gsap.to(ref1.current, 0.5, {
                opacity: 0,
                y: 20,
              });
            },
          });
        },
      });
    }
  }, [active]);

  return (
    <section className={`section invert flex ${active}`} ref={ref}>
      <div className='margin'>
        <div className='IBM header2 opacity' ref={ref1}>
          จำนวนคดีที่เกิดขึ้น
        </div>
        <div className='IBM body padding2 opacity' ref={ref2}>
          มาตรา 112 มีการตีความการกระทำอย่างไร้ขอบเขต
          แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้
          จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี
          2548 เป็นต้นมา
        </div>
        <div className='margin3 aspect4-3 padding2 opacity' ref={ref3}>
          <Chart />
        </div>
        <div className='IBM body2 center opacity' ref={ref4}>
          ที่มา:{' '}
          <span>
            <a href='https://freedom.ilaw.or.th/node/817'>iLaw</a>
          </span>
        </div>
      </div>
    </section>
  );
});

export default Cases;
