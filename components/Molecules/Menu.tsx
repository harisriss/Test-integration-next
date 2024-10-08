import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export interface MenuProps {}

const Menu: FC<MenuProps> = (props) => {

  return (
    <header className="uam_header">
      <div className="uam_header_nav">
        <div className="uam_header_burger">
          <div className="uam_headerMenuIcon toggle-menu">
            <i className="site-menu"></i>
          </div>
        </div>

        <div className="uam_header_logo">
          <Link className="uam_headerLogo" href="#">
            <Image
              src="/images/Logo_entete_Blanc.png"
              alt='logo'
              className="img-responsive"
              width={116}
              height={50}
              />
          </Link>
        </div>
        <div className="uam_header_menu">
          <div className="uam_header_close">
            <div className="uam_headerMenuIcon">
              <i className="site-cross"></i>
            </div>
          </div>
          <div className="uam_headerMenu">
            <div className="uam_headerMenu_linkList">
              <ul className="uam_headerMenu_mainLink">
                <li>
                  <Link href="#" className="uam_headerMenuLink"> Domain </Link>
                </li>
                <li>
                  <Link href="#" className="uam_headerMenuLink">
                    Info Live
                  </Link>
                </li>
                <li>
                  <Link href="#" className="uam_headerMenuLink"> Webcams </Link>
                </li>
                <li>
                  <Link href="#" className="uam_headerMenuLink"> Tarifs </Link>
                </li>
                <li>
                  <Link href="#" className="uam_headerMenuLink">
                    Débutants
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="uam_header_userLink">
          <div className="uam_header_local">
            <Image
              src="images/ball-fr.svg"
              className="lang_flag"
              alt='fr' 
              width={25}
              height={25}
              />
            <span className="label_name">Langue</span>
          </div>
          <div className="uam_header_account">
            <span className="icon"></span>
            <span> Mon Compte </span>
          </div>
          <div className="uam_header_cart">
            <span className="icon"></span>
            <span> Mon Panier </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
