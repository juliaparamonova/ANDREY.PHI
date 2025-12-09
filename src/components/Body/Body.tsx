import css from './Body.module.css';
import BodyPC from '../../img/BodyPC.png';

export default function Body() {
  return (
    <section className={css.section_body}>
      <div className={css.body_pct}>
        <h1 className={css.title_body}>ANDREY.PHI </h1>
        <picture className={css.picture_body}>
          <source srcSet={BodyPC} type="image/png" />
          <img src={BodyPC} alt="Fotografie eines der Werke" />
        </picture>
      </div>
    </section>
  );
}
