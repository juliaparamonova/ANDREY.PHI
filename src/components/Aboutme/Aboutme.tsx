import css from './Aboutme.module.css';

export default function Aboutme() {
  return (
    <section className={css.section_body}>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>

      <div className={css.contacts}>
        <h2 className={css.title_contacts}>Whatsapp / E-mail</h2>
        <button>
          <h3>alle Werke erkunden</h3>
        </button>
      </div>
    </section>
  );
}
