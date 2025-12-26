import css from './Contacts.module.css';
import backgound_contacts from '../../img/background_contacts.png';

export default function Contacts() {
  return (
    <section className={css.section_body}>
      <picture className={css.picture_body}>
        <source srcSet={backgound_contacts} type="image/png" />
        <img src={backgound_contacts} alt="background" />
      </picture>
      <div className={css.contacts}>
        <h2 className={css.title_contacts}>Whatsapp / E-mail</h2>
        <button>
          <h3>alle Werke erkunden</h3>
        </button>
      </div>
    </section>
  );
}
