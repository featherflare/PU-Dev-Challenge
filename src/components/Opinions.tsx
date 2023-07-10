import { opinions } from '../assets/data/Opinionsdata';
import { LegacyRef, forwardRef } from 'react';

const Opinions = forwardRef(
  (props, ref: LegacyRef<HTMLElement> | undefined) => {
    return (
      <section ref={ref}>
        <div className='margin padding1'>
          <div className='IBM header2'>ความเห็นนักวิชาการ</div>
          {opinions.map((item, i) => {
            return (
              <div
                className={`margin2 ${i % 2 != 1 ? 'padding3' : 'padding4'}`}
                key={i}
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
  }
);

export default Opinions;
