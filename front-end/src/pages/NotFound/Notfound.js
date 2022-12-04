import { Link, useHistory } from 'react-router-dom';

import styles from './Notfound.module.css';

function Notfound() {
  const history = useHistory();

  return (
    <div className={ styles.container_not_found }>
      <Link
        className={ styles.logo }
        to="/login"
      >
        GoDrink
      </Link>
      <div className={ styles.section_01 }>
        <div className={ styles.container_img_not_found } />
        <h2 className={ styles.codigo }>404</h2>
        <p className={ styles.frase }>Opps! Página não encontrada</p>
      </div>
      <button
        type="button"
        className={ styles.go_back_home }
        // className={ `${selected === 'exit' ? 'selected' : ''} exit` }
        onClick={ () => {
          history.push('/login');
          tokenService.clearLocalStorage();
        } }
      >
        Home
      </button>
    </div>
  );
}

export default Notfound;
