import { opinions } from '../assets/data/Opinionsdata';

export default function Opinions() {
  return (
    <section>
      <div className='margin padding1'>
        <div className='IBM header2'>ความเห็นนักวิชาการ</div>
        {opinions.map((item, i) => {
          return (
            <div className='margin2' key={i}>
              <div className='IBM body3'>{item.comment}</div>
              <div>
                <div>
                  <div className='IBM body2'>{item.name}</div>
                  <div className='IBM body2'>{item.from}</div>
                </div>
                <div style={{ backgroundImage: `url(${item.image})` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
