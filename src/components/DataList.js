import React from 'react';
import DataCard from '../components/DataCard';

class DataList extends React.Component {

  render() {
    return (
      <ul className="list">
        {this.props.data.map((dat, index) => {
          return (
            <DataCard dat={dat} index={index}/>
          );
        })}
      </ul>
    );
  }

}

export default DataList;