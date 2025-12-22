import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <section className={css.section_body}>
      <div className={css.contacts}>
        <h2 className={css.title_contacts}>Whatsapp / E-mail</h2>
        <button>
          <h3>alle Werke erkunden</h3>
        </button>
      </div>
    </section>
  );
}
