import css from './Hero.module.css';
import Group from '../../img/Group.png';

export default function Hero() {
  return (
    <section className={css.hero}>
      <video className={css.hero_video} autoPlay loop muted>
        <source src="/src/video/hero1.MP4" type="video/mp4" />
      </video>
      <div></div>
      {/* <h1>WELCOME TO MY ART WORLD</h1> */}
      <img src={Group} alt="title" />
    </section>
  );
}
