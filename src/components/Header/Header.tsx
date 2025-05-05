import css from './Header.module.css';
import logo from '../../img/Frame.png';

export default function Header() {
  return (
    <header className={css.header_body}>
      <div className={css.img}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}
