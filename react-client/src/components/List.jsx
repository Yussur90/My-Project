import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map(item => 
    		<div>
    		<h2>{item.username}</h2>:<h2>{item.weight}</h2>
    		<ListItem item={item}/>
    		</div>
    		)
    	}
  </div>
)

export default List;