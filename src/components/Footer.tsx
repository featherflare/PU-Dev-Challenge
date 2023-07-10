import { LegacyRef, forwardRef } from 'react';

const Footer = forwardRef((props, ref: LegacyRef<HTMLElement> | undefined) => {
  return (
    <section className='invert flex' ref={ref}>
      <div className='padding1'>
        <div className='IBM'>© PU Dev Challenge - Developed by Dachatorn</div>
      </div>
    </section>
  );
});

export default Footer;
