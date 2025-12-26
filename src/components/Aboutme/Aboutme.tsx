import css from './Aboutme.module.css';
import Andrii from '../../img/Andrii.png';

export default function Aboutme() {
  return (
    <section className={css.section_body}>
      <ul className={css.listabout}>
        <li className={css.list_photo}>
          <img src={Andrii} alt="Photo autor" />
        </li>
        <li>
          <div className={css.list_text_about}>
            <div>
              <h3 className={css.text_title}>
                <span className={css.text_title_bold}>Andrey Phi:</span> Eine
                Reise durch Kunst und Dualitat Geboren in Sibirien und
                aufgewachsen in Berlin,
              </h3>
            </div>
            <div>
              <h4 className={css.text_title_more}>
                ist Andrey Phi ein Künstler, dessen Werke von einer tiefen
                Verbindung zur Natur und der Vielfalt des städtischen Lebens
                geprägt sind. Seine Kunst, die er unter dem Namen "Spectra"
                schafft, ist eine hypnotische Verschmelzung von Reflexionen,
                Symmetrie und psychedelischen Mustern...
              </h4>
            </div>
          </div>
          <div>
            <button className={css.btn_more}>mehr über</button>
          </div>
        </li>
      </ul>

      <div className={css.contacts}>
        <h2 className={css.title_contacts}>Whatsapp / E-mail</h2>
        <button className={css.btn}>
          <h3>alle Werke erkunden</h3>
        </button>
      </div>
    </section>
  );
}
