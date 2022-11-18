import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Add = () => {
  const [htmlFormData, sethtmlFormData] = useState({});

  const saveUser = (ev) => {
    ev.preventDefault();
    if (
      htmlFormData.nit &&
      htmlFormData.cuenta &&
      htmlFormData.saldo &&
      htmlFormData.usuario &&
      htmlFormData.observaciones
    ) {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify(htmlFormData);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://localhost:5000/api/create-user', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          alert('El usuario se guardo correctamente');
          sethtmlFormData({});
        })
        .catch((error) =>
          alert('Ocurrio un error por favor comuniquese con el administrador')
        );
    } else {
      alert('Revise los campos');
    }
  };

  return (
    <div>
      <h1 className="titileAdd">DATASPACE</h1>
      <img className="logo" src={require('../assets/imagenes/DataSpace.png')} />
      <section className="htmlFormulario">
        <br />
        <label htmlFor="Nit">Nit: </label>
        <input
          type="text"
          name="Nit"
          id="NIt"
          placeholder=""
          onChange={(ev) =>
            sethtmlFormData({ ...htmlFormData, nit: ev.target.value })
          }
          value={htmlFormData.nit ? htmlFormData.nit : ''}
        />
        <br />

        <br />
        <label htmlFor="Cuenta">Cuenta: </label>
        <input
          type="text"
          name="Cuenta"
          id="Cuenta"
          placeholder=""
          onChange={(ev) =>
            sethtmlFormData({ ...htmlFormData, cuenta: ev.target.value })
          }
          value={htmlFormData.cuenta ? htmlFormData.cuenta : ''}
        />
        <br />

        <br />
        <label htmlFor="Nit">Saldo: </label>
        <input
          type="text"
          name="Saldo"
          id="Saldo"
          placeholder=""
          onChange={(ev) =>
            sethtmlFormData({ ...htmlFormData, saldo: ev.target.value })
          }
          value={htmlFormData.saldo ? htmlFormData.saldo : ''}
        />
        <br />

        <br />
        <label htmlFor="Usuario">Usuario: </label>
        <input
          type="text"
          name="Usuario"
          id="Usuario"
          placeholder=""
          onChange={(ev) =>
            sethtmlFormData({ ...htmlFormData, usuario: ev.target.value })
          }
          value={htmlFormData.usuario ? htmlFormData.usuario : ''}
        />
        <br />

        <br />
        <label htmlFor="Observación">Observación: </label>
        <input
          type="text"
          name="Observación"
          id="Observación"
          placeholder=""
          onChange={(ev) =>
            sethtmlFormData({ ...htmlFormData, observaciones: ev.target.value })
          }
          value={htmlFormData.observaciones ? htmlFormData.observaciones : ''}
        />
        <br />
        <br />
        <br />
        <center>
          <input
            className="bottom"
            type="submit"
            value="AGREGAR"
            onClick={saveUser}
          />
          <button>
            <Link to="/">Ver usuarios</Link>
          </button>
        </center>
      </section>
    </div>
  );
};
