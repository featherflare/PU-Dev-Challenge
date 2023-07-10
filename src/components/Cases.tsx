import Chart from './Chart';
import { LegacyRef, forwardRef } from 'react';

const Cases = forwardRef((props, ref: LegacyRef<HTMLElement> | undefined) => {
  return (
    <section className='section invert flex' ref={ref}>
      <div className='margin'>
        <div className='IBM header2'>จำนวนคดีที่เกิดขึ้น</div>
        <div className='IBM body padding2'>
          มาตรา 112 มีการตีความการกระทำอย่างไร้ขอบเขต
          แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้
          จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี
          2548 เป็นต้นมา
        </div>
        <div className='margin3 aspect4-3 padding2'>
          <Chart />
        </div>
        <div className='IBM body2 center'>
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
