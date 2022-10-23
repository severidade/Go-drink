import style from './UserDetailsHeader.module.css';

function UserDetailsHeader() {
  return (
    <div className={ style.container }>
      <p>Item</p>
      <p>Nome</p>
      <p>E-mail</p>
      <p>Tipo</p>
      <p>Excluir</p>
    </div>
  );
}

export default UserDetailsHeader;
