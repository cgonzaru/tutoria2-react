import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "name": "Francisco Molina",
          "email": "paco.molina@gmail.com",
          "passwords": ["redbull", "contraseña", "god"],
          "bank": {
            "iban": "ES57 3919 3283 8402 7522 0643",
            "pin": "8970"
          }
        },
        {
          "name": "Bruno Díaz",
          "email": "bruno.diaz@aol.com",
          "passwords": ["bruno-y-ricardo", "thebatrocks", "BB"],
          "bank": {
            "iban": "US24 0776 0001 0000 0000 0001",
            "pin": "0228"
          }
        },
        {
          "name": "Angeles Iglesias",
          "email": "angeles.iglesias@hotmail.com",
          "passwords": ["sword", "0000", "123"],
          "bank": {
            "iban": "ES39 2002 4104 2471 4443 4466",
            "pin": "6732"
          }
        },
        {
          "name": "Lourdes Parra",
          "email": "lourdes.parra@gmail.com",
          "passwords": ["bonnie", "123", "0000"],
          "bank": {
            "iban": "ES23 9636 3150 7215 8752 3353",
            "pin": "3127"
          }
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul className="list">
          {this.state.data.map((dat, index) =>{
            return (
              <li className="item" key={index}>
                <div className="name">{dat.name}</div>
                <div className="email">{dat.email}</div>
                <div className="password">{dat.passwords}</div>
                <ul className="bank"></ul>
                <div className="iban">{dat.bank.iban}</div>
                <div className="pin">{dat.bank.pin}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
