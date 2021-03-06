import React from 'react';

import useStyles from './__styles_';

const Header = ({ tittle= null, menu={} }) => {
  const styles = useStyles();

  return(
      <header className={styles.head}>
        <div className={styles.tittle}>
          <h3>{tittle}</h3>
        </div>
        <nav className={styles.menu}>
          <ul>
            {
              menu.map( (subMenu, i) => (
                <li className={styles.subMenu} key={i}><a href='#'>{subMenu.name}</a></li>
              ))
            }
          </ul>
        </nav>
      </header>
  );
}

export default Header;
