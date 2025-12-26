import css from './Gallery.module.css';

export default function Gallery() {
  return (
    <section className={css.section_gallery}>
      <div className={css.contacts}>
        <h2 className={css.title_contacts}>Whatsapp / E-mail</h2>
        <button className={css.btn}>
          <h3>alle Werke erkunden</h3>
        </button>
      </div>
    </section>
  );
}
