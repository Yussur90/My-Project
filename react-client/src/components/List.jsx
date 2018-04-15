import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4 > The weight schedule </h4>
   
    { props.items.map(item => 
    		<div>
              
    		<h1>Username:</h1><h3>{item.username}</h3>
            <h1>Weight:</h1><h3>{item.weight}</h3>
            <h1>Date:</h1><h3>{item.date}</h3>

    		<ListItem item={item}/>
    		</div>
    		)
    	}
  </div>
)

export default List;