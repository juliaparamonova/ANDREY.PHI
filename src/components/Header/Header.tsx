import css from './Header.module.css';
import logo from '../../img/Frame.png';

type HeaderProps = {
  showButtons: boolean;
};

export default function Header({ showButtons }: HeaderProps) {
  return (
    <header className={css.header_body}>
      <div className={css.img}>
        <img src={logo} alt="logo" />
      </div>

      {showButtons && (
        <div className={css.header_btn}>
          <button>
            <h3 className={css.translete_header}>DE</h3>
          </button>
          <h3 className={css.translete_header}>/</h3>
          <button>
            <h3 className={css.translete_header}>EN</h3>
          </button>
          <h3 className={css.translete_header}>/</h3>
          <button>
            <h3 className={css.translete_header}>UK</h3>
          </button>
          <h3 className={css.translete_header}>/</h3>
          <button>
            <h3 className={css.translete_header}>RU</h3>
          </button>
        </div>
      )}
    </header>
  );
}
