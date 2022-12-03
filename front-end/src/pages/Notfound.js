import { useHistory } from 'react-router-dom';

function Notfound() {
  const history = useHistory();

  return (
    <div>
      <h1>404</h1>
      <button
        type="button"
        // className={ `${selected === 'exit' ? 'selected' : ''} exit` }
        className="exit"
        onClick={ () => {
          history.push('/login');
          tokenService.clearLocalStorage();
        } }
      >
        Voltar
      </button>
    </div>
  );
}

export default Notfound;
