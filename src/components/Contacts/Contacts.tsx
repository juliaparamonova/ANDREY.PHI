import css from './Contacts.module.css';
import backgroundContacts from '../../img/background_contacts.png';

const Contacts: React.FC = () => {
  return (
    <section
      className={css.section_contacts}
      style={{ backgroundImage: `url(${backgroundContacts})` }}
    >
      <div>
        <h2 className={css.title_info}>FOR COLLABORATIONS & INQUIRIES</h2>
      </div>
      <div className={css.footer_contacts}>
        <ul className={css.list_contacts_footer}>
          <li className={css.contact_column}>
            <h3 className={css.title_cnt}>Contact</h3>
            <a href="mailto:andreas.altfater@gmail.com" className={css.email}>
              andreas.altfater@gmail.com
            </a>
          </li>
          <li className={css.contact_column}>
            <h3 className={css.social}>Social networks</h3>
            <h3 className={css.social_1}>Whatsapp</h3>
            <h3 className={css.social_1}>Telegram</h3>
          </li>
        </ul>
      </div>

      <div className={css.contacts}>
        <h3 className={css.title_city}>Berlin</h3>
        <button className={css.btn}>alle Werke erkunden</button>
      </div>
    </section>
  );
};

export default Contacts;
