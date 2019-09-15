import React from 'react';

class Page extends React.Component {

  render() {
    return (
      <ul className="list">
        {this.props.data.map((dat, index) => {
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
      </ul>);
  }

}

export default Page;