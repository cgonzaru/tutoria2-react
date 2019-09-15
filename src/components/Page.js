import React from 'react';
import Header from '../components/Header';
import DataList from '../components/DataList';
import Footer from '../components/Footer';



class Page extends React.Component {

  render() {
    return (
      <React.Fragment >
        <Header />
        <DataList data={this.props.data}/>
      </React.Fragment>
    );
  }

}

export default Page;