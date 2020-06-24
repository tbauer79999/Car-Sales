import React from 'react';
import { connect } from "react-redux";
import {addFeature} from  '../actions/';

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button"
      onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



const mapDispatchToProps = {addFeature}
export default connect(null, mapDispatchToProps)(AdditionalFeature);