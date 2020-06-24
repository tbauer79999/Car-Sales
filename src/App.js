import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from "react-redux";




const App = (props) => {
 
  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures  />
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total />
      </div>
    </div>
  );
};




  const mapStateToProps = state => {
  return {
    additionalPrice: state.car.additionalPrice,
    car: {
      price: state.car.price,
      name: state.car.name,
      image:state.car.image,
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }]
  };
};




export default connect( null,{mapStateToProps})(App);
