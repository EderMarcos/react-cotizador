import React, { Component } from 'react';
import { primeraMayuscula } from '../helpers';

class Resumen extends Component {

  showResume = () => {
    const { datos: { brand, year, plan } } = this.props;
    if (!brand || !year || !plan) return;
    return (
      <div className="resumen">
        <h2>Resumen de cotizacion</h2>
        <li>Marca: { primeraMayuscula(brand) }</li>
        <li>Plan: { primeraMayuscula(plan) }</li>
        <li>Año del auto: { primeraMayuscula(year) }</li>
      </div>
    );
  };

  render() {
    return (
      <div>
        { this.showResume() }
      </div>
    );
  }
}

export default Resumen;
