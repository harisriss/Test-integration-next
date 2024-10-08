import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export interface FooterProps { }

const Footer: FC<FooterProps> = (props) => {

  return (
    <div className="uam_footer">
      <div className="uam_container">
        <div className="uam_footer_container">
          <div className="uam_footer_content">
            <div className="uam_footer_information">
              <div className="uam_footer_domaine">
                <div className="uam_footerDomaine">
                  <div className="uam_footerDomaine_logo">
                    <Image
                      src="images/Logo_entete_Blanc.png"
                      alt='logo blanc'
                      width={116}
                      height={50}
                    />
                  </div>
                  <div className="uam_footerDomaine_description">
                    <p>
                      <strong>Domaine Évasion Mont Revait</strong>,
                      accès à Saint-Michel, Saint-Nicolas, Courchevel,
                      Montgenèvre - Montgrandfont.
                    </p>
                  </div>
                </div>
              </div>
              <div className="uam_footer_payment">
                <div className="uam_footerPayment">
                  <h3 className="uam_footerPayment_title uam_footerTitle">
                    Moyens de paiement
                  </h3>
                  <div className="uam_footerPayment_logoList">
                    <Image
                      className="uam_footerPayment_logo"
                      alt='visa'
                      src="images/visa-card-1.png"
                      width={42}
                      height={30}
                    />
                    <Image
                      className="uam_footerPayment_logo"
                      src="images/mastercard.png"
                      alt='master card'
                      width={42}
                      height={30}
                    />
                    <Image
                      className="uam_footerPayment_logo"
                      src="images/american-express.png"
                      alt='american express'
                      width={42}
                      height={30}
                    />
                    <Image
                      className="uam_footerPayment_logo"
                      src="images/paypal.png"
                      alt='paypal'
                      width={118}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="uam_footer_links">
              <div className="uam_footerLinks">
                <h3 className="uam_footerLinks_title uam_footerTitle">
                  À propos
                </h3>
                <div className="uam_footerLinks_list">
                  <ul className="uam_footerLinkList">
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Réclamations
                      </Link>
                    </li>
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Points de retrait
                      </Link>
                    </li>
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Domaine skiable
                      </Link>
                    </li>
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Programme de fidélité
                      </Link>
                    </li>
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Office de tourisme
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="uam_footerLinks">
                <h3 className="uam_footerLinks_title uam_footerTitle">
                  Informations
                </h3>
                <div className="uam_footerLinks_list">
                  <ul className="uam_footerLinkList">
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Conditions générales
                      </Link>
                    </li>
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Kit de presse
                      </Link>
                    </li>
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Support
                      </Link>
                    </li>
                    <li className="uam_footerLinkList_item">
                      <Link className="uam_footerLinkList_link" href="#">
                        Mentions légales
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="uam_footer_footer">
            <div className="uam_footerFooter">
              <div className="uam_footerFooter_socialNetworksLinks">
                <Link href="#"><i className="site-facebook"></i></Link>
                <Link href="#"><i className="site-Instagram"></i></Link>
                <Link href="#">
                  <i className="site-LinkedIn"></i>
                </Link>
                <Link href="#"><i className="site-Twitter"></i></Link>
                <Link href="#"><i className="site-YouTube"></i></Link>
              </div>
              <div className="uam_footerFooter_line"></div>
              <div className="uam_footerFooter_copyright">
                <span className="js-cookie extraBottom-cookie">
                  Paramétrez vos cookies
                </span>
                <span> Made with ♡ by Un autre monde </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uam_footer_triangle"></div>
    </div>
  );
};

export default Footer;
