import { opinions } from '../assets/data/Opinionsdata';

export default function Opinions() {
  return (
    <section>
      <div className='Inter'>ความเห็นนักวิชาการ</div>
      {opinions.map((item, i) => {
        return (
          <div key={i}>
            <div className='IBM'>{item.comment}</div>
            <div>
              <div>
                <div className='IBM'>{item.name}</div>
                <div className='IBM'>{item.from}</div>
              </div>
              <div style={{ backgroundImage: `url(${item.image})` }}></div>
            </div>
          </div>
        );
      })}
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
}
