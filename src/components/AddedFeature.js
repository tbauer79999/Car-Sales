import React from 'react';
import { connect } from "react-redux";
import {removeFeature} from  '../actions';


const AddedFeature = props => {
  console.log(props.feature)
  return (
    <li>
      { }
      <button className="button"onClick={() => props.removeFeature(props.feature) }>X</button>
      {props.feature.name}
    </li>
  );
};



const mapDispatchToProps = {removeFeature};
export default connect(null, mapDispatchToProps)(AddedFeature);