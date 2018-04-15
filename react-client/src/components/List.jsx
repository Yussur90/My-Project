import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> the weight schedule </h4>
   
    { props.items.map(item => 
    		<div>

    		<h1>username:</h1><h2>{item.username}</h2>
            weight:<h2>{item.weight}</h2>
            date:<h2>{item.date}</h2>

    		<ListItem item={item}/>
    		</div>
    		)
    	}
  </div>
)

export default List;