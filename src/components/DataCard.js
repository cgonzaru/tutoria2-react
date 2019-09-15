import React from 'react';

class DataCard extends React.Component {

  render() {
    return (
      <li className="item" key={this.props.index}>
              <div className="name">{this.props.dat.name}</div>
              <div className="email">{this.props.dat.email}</div>
              <div className="password">{this.props.dat.passwords}</div>
              <ul className="bank"></ul>
              <div className="iban">{this.props.dat.bank.iban}</div>
              <div className="pin">{this.props.dat.bank.pin}</div>
            </li>
    );
  }

}

export default DataCard;