export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";




export const addFeature = newFeature => {
  console.log("adding new feature");
  return { 
    type: ADD_FEATURE,
    payload: {id: newFeature.id,
              name:newFeature.name,
              price: newFeature.price}
  };
};



export const removeFeature = oldFeature => {
    console.log("removing feature");
    return { 
      type: REMOVE_FEATURE,
      payload: oldFeature,
    };
  };
  



  