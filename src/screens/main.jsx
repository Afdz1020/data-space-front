import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {
  const [users, setUsers] = useState([]);
  const [copyUsers, setCopyUsers] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:5000/api/get-users', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
        setCopyUsers(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const onChangeID = (ev) => {
    setSearch(ev.target.value);
  };

  const searchUsers = (ev) => {
    ev.preventDefault();
    if (search && search.length) {
      const copy = [...copyUsers];
      const newUsers = copy.filter((user) => user.NIT === Number(search));
      setUsers(newUsers);
    }
  };

  const restoreUsers = (ev) => {
    ev.preventDefault();
    setUsers(copyUsers);
  };

  return (
    <div>
      <img
        className="centrado"
        src={require('../assets/imagenes/DataSpace.png')}
      />
      <a href="reporte.html">
        <img className="Rep" src={require('../assets/imagenes/report.png')} />
      </a>
      <br />
      <form className="searchBar">
        <input
          type="search"
          placeholder="Digite ID para Buscar"
          aria-label="Search"
          onChange={onChangeID}
        />
        <button type="submit" onClick={searchUsers}>
          Buscar
        </button>
        <button type="submit" onClick={restoreUsers}>
          Restaurar
        </button>
      </form>
      <br />

      <center>
        <table>
          <tr>
            <th>Nit</th>
            <th>Cuenta</th>
            <th>Saldo</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Observaciones</th>
          </tr>
          {users && users.length ? (
            users.map((user) => (
              <tr>
                <td>{user.NIT}</td>
                <td>{user.CUENTA}</td>
                <td>{user.SALDO}</td>
                <td>{user.USUARIO}</td>
                <td>{user.FECHA.split('T')[0]}</td>
                <td>{user.OBSERVACIONES}</td>
              </tr>
            ))
          ) : (
            <tr>
              <th></th> <td>No se encontraron resultados</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </table>
      </center>

      <br />
      <br />
      <br />
      <center>
        <button className="bottom">
          <Link to="/add">AGREGAR</Link>
        </button>
      </center>
    </div>
  );
};
