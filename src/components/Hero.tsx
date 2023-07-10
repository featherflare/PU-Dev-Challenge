import { LegacyRef, forwardRef } from 'react';

const Hero = forwardRef((props, ref: LegacyRef<HTMLElement> | undefined) => {
  return (
    <section className='section flex' ref={ref}>
      <div className='IBM header center typed margin'>ม.๑๑๒</div>
      <div className='IBM body center margin padding1 delays1 fade'>
        “ผู้ใดหมิ่นประมาท ดูหมิ่น หรือแสดงความอาฆาตมาดร้าย พระมหากษัตริย์
        พระราชินี รัชทายาท หรือผู้สำเร็จราชการแทนพระองค์
        ต้องระวางโทษจำคุกตั้งแต่สามปีถึงสิบห้าปี”
      </div>
    </section>
  );
});

export default Hero;
