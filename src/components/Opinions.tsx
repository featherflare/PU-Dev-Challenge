import { opinions } from '../assets/data/Opinionsdata';
import { forwardRef, useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';

interface OpinionsProps {
  active: string;
}

const Opinions = forwardRef<HTMLElement, OpinionsProps>((props, ref) => {
  const { active } = props;

  // Transition in and out with gsap lib
  const ref1: RefObject<any> = useRef();
  const groupRefs = useRef([]);
  groupRefs.current = [];

  const addToRefs = (el: never) => {
    if (el && !groupRefs.current.includes(el)) {
      groupRefs.current.push(el);
    }
  };

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
              groupRefs.current[0],
              { opacity: 0, x: 50 },
              {
                opacity: 1,
                x: 0,
                duration: 0.5,
                onComplete: () => {
                  gsap.fromTo(
                    groupRefs.current[1],
                    { opacity: 0, x: -50 },
                    {
                      opacity: 1,
                      x: 0,
                      duration: 0.5,
                      onComplete: () => {
                        gsap.fromTo(
                          groupRefs.current[2],
                          { opacity: 0, x: 50 },
                          { opacity: 1, x: 0, duration: 0.5 }
                        );
                      },
                    }
                  );
                },
              }
            );
          },
        }
      );
    } else {
      gsap.to(groupRefs.current[2], 0.5, {
        opacity: 0,
        x: 50,
        onComplete: () => {
          gsap.to(groupRefs.current[1], 0.5, {
            opacity: 0,
            x: -50,
            onComplete: () => {
              gsap.to(groupRefs.current[0], 0.5, {
                opacity: 0,
                x: 50,
                onComplete: () => {
                  gsap.to(ref1.current, 0.5, {
                    opacity: 0,
                    y: 20,
                  });
                },
              });
            },
          });
        },
      });
    }
  }, [active]);

  return (
    <section ref={ref} className={active}>
      <div className='margin padding1'>
        <div className='IBM header2 opacity' ref={ref1}>
          ความเห็นนักวิชาการ
        </div>
        {opinions.map((item, i) => {
          return (
            <div
              className={`margin2 opacity ${
                i % 2 != 1 ? 'padding3' : 'padding4'
              }`}
              key={i}
              ref={addToRefs}
            >
              <div className='IBM body3'>{item.comment}</div>
              <div
                className={`flex ${
                  i % 2 != 1 ? 'direction-invert' : 'direction-normal'
                } paddingTop`}
              >
                <div>
                  <div
                    className={`IBM body3-bold ${
                      i % 2 != 1 ? 'direction-invert' : 'direction-normal'
                    }`}
                  >
                    {item.name}
                  </div>
                  <div
                    className={`IBM body2 ${
                      i % 2 != 1 ? 'direction-invert' : 'direction-normal'
                    }`}
                  >
                    {item.from}
                  </div>
                </div>
                <div
                  className='img'
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Opinions;
