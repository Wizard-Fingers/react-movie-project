import React from 'react';
import  './searchbar.css';


function Searchbar() {
  return (
      <div>
          <input type="text"
              name="text"
              class="input"
              placeholder="Search" />
      </div>
  )
}

export default Searchbar