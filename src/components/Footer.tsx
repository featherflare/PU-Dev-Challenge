import { forwardRef } from 'react';

interface FooterProps {
  active: string;
}

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const { active } = props;

  return (
    <section className={`invert flex ${active}`} ref={ref}>
      <div className='padding1'>
        <div className='IBM'>© PU Dev Challenge - Developed by Dachatorn</div>
      </div>
    </section>
  );
});

export default Footer;
