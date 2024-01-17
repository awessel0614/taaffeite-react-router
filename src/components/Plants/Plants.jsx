import React from 'react';
// ! useHistory will NOT work in App.jsx!!!!!!!!
// useHistory is available within any component 
// that is a child of router
// App is technically not *within* the router... yeah, it's weird, I know
import { useHistory } from 'react-router-dom';
// useState, useEffect, and useHistory are all 'hooks'

let plants = [
  "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/bird_paradise_flower.jpg",
  "https://morningchores.com/wp-content/uploads/2018/12/Velvet-palm-600x400.jpg",
  "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/birds_nest_fern.jpg",
  "https://live.staticflickr.com/7523/27521082745_fc94a05059_b.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Kalanchoe_tomentosa_Panda_Plant_%28fabooj%29.jpg"
]

function Plants() {
  //Required for using history in your component!
  const history = useHistory();

  const handleClick = (e) => {
    //this navigates you back home  
    history.push('/');
  }
  return (
    <div>
      <h1>PLANTS</h1>
      <button onClick={handleClick}>Go Home</button>
      <br />
      {plants.map((plant, i) => 
        <img 
          key={i}
          src={plant}
        />
      )}
    </div>
  );
}

export default Plants;
