import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import { calcularMarca, obtenerDiferenciaAnio, obtenerPlan } from './helpers';

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  };

  cotizarSeguro = (auto) => {
    const { brand, year, plan } = auto;
    let resultado = 2000;
    let diferencia = obtenerDiferenciaAnio(year);
    resultado -= ((diferencia * 3) * resultado ) / 100;
    resultado = calcularMarca(brand) * resultado;
    resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2);

    this.setState({ resultado, datos: auto })
  };

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de Seguro de Auto"/>
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={ this.cotizarSeguro } />
          <Resumen datos={ this.state.datos } />
          <Resultado resultado={ this.state.resultado } />
        </div>
      </div>
    );
  }
}

export default App;
