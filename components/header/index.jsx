import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const router = useRouter();
  const ref = React.createRef();
  const menuEng = {
    main: ['Home', 'Membership', 'Style Guide'],
    dropdown: ['Features', 'Authors', 'Tags', 'Subscribe', 'Contact', 'Get Theme'],
    auth: ['Sign in', 'Sign up'],
  };
  const menuJp = {
    main: ['ホーム', 'メンバーシップ', 'スタイルガイド'],
    dropdown: ['機能', '作成者', 'タグ', '購読', '連絡先', 'テーマの取得'],
    auth: ['サインイン', 'サインアップ'],
  };
  const menu = router.locale === 'en-US' ? menuEng : menuJp;

  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openDropdown && ref.current && !ref.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openDropdown]);
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">
          <a href="#">
            <Image src="/2020/11/okiro.svg" width="113px" height="54px" alt="Okiro" />
          </a>
        </div>
        <div className="header__nav">
          <div className="header__toggle">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </div>

          <nav>
            <ul>
              {menu.main.map((elm, index) => (
                <li key={index}>
                  <a className={elm === 'Home' || elm === 'ホーム' ? 'is-active' : ''}>{elm}</a>
                </li>
              ))}
              <li className="header--dropdown" onClick={() => handleDropdown()}>
                <svg role="img" viewBox="0 0 20 4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4A2 2 0 102.001.001 2 2 0 002 4zm8 0a2 2 0 10.001-3.999A2 2 0 0010 4zm8 0a2 2 0 10.001-3.999A2 2 0 0018 4z"></path>
                </svg>
                {openDropdown && (
                  <ul ref={ref}>
                    {menu.dropdown.map((elm, index) => (
                      <li key={index}>
                        <a>{elm}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
            <ul>
              <li id="search-open" className="search">
                <span>Search</span>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.281 19.26c-1.675 1.022-3.855 1.695-5.784 1.693C4.7 20.952 0 16.261 0 10.476S4.7 0 10.497 0s10.497 4.69 10.497 10.476c0 2-.633 4.034-1.618 5.644l3.902 3.893c.465.465.743 1.1.721 1.753-.04 1.121-.78 2-2.034 2.105-.663.056-1.313-.25-1.782-.717l-3.902-3.894zm-5.748-2.54c3.426-.02 6.238-2.841 6.238-6.265 0-3.435-2.834-6.264-6.275-6.264-3.443 0-6.278 2.829-6.278 6.264s2.835 6.262 6.278 6.262l.037.002z"></path>
                </svg>
              </li>
              <li className="signin">
                <a id="signin">{menu.auth[0]}</a>
              </li>
              <li className="signup">
                <a id="signup" className="global__button">
                  {menu.auth[1]}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
