import React from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import styles from './layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
