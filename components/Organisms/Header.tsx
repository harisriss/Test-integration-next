import Image from 'next/image';
import { FC } from 'react';
import Menu from '~molecules/Menu';

export interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {

  return (
    <>
      <Menu />

      <div className="uam_blockHeader uam_blockHeader-selector">
        <Image
          className="uam_blockHeader_backgroundImage"
          src="images/header.jpg"
          alt='image de montagne'
          width={1276}
          height={675}
          />
        <div className="uam_container">
          <div className="uam_blockHeader_container">
            <div className="uam_blockHeader_label">
              Mont revait
              <div className="uam_icon-arrow" />
            </div>
            <div className="uam_blockHeader_content">
              <div className="uam_blockHeader_title">
                <div
                  className="uam_blockHeaderTitle uam_blockHeaderTitle-home">
                  <h1 className="uam_blockHeaderTitle_title">
                    Bienvenue au mont revait
                  </h1>
                  <p className="uam_blockHeaderTitle_description">
                    Au sommet du Mont Revait, vous serez en admiration devant un point de vue unique sur toute la chaîne des Alpes.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
