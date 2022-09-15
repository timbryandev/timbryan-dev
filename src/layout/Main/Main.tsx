import { ReactNode } from 'react';

import { NavBar } from '../../components/NavBar';
import ThemeToggle from '../../components/Theme/ThemeToggle';
import { AppConfig } from '../../utils/AppConfig';
import Footer from '../Footer';
import Header from '../Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="l-main">
    {props.meta}

    <div className="l-main__toggle-theme">
      <ThemeToggle />
    </div>

    <Header />

    <NavBar items={AppConfig.siteLinks} />

    <main>{props.children}</main>

    <Footer />
  </div>
);

export { Main };
