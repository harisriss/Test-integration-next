import { FC, ReactNode } from 'react';
import Footer from '~organisms/Footer';
import Header from '~organisms/Header';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />

      <div className="uam_container">
        {children}
      </div>

      <Footer />
    </>);
};

export default Layout;
