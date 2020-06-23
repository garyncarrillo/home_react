import React from 'react';

import useStyles from './__styles_';

const Slider = () =>{
  const styles = useStyles();

  return(
    <div className={styles.slider}>
      <h2 className={styles.tittle}> Bienvenidos al Curso de React</h2>
      <button>ir a Home</button>
    </div>
  )
}

export default Slider;
