import React, { Component } from 'react';

//define const array with params
const List = ['table',
				'fox',
				'butterfly',
				'paper',
				'olives',
				'mountains',
				'jump'];
let newList = [];				
class Table extends Component {
	random() {
		newList = [];
		for(let i=0; i < Math.round(Math.random()*100); i++) { 
			newList.push(List[Math.round(Math.random()*(List.length-1))]);
		}
		console.log(newList.join(","));
		this.setState({elements: newList});
	}
  render() {
	  
	  let list = this.state ? this.state.elements.map((elem, id) => {
		return <li key={id}> {elem} </li>;
	  }):List.map((elem, id) => {
		return <li key={id}> {elem} </li>;
	  });
	  
	 
    return (
     <div key = "div1"> <ul> {list} </ul> 
	 <button onClick={() => this.random()}>
			Click me
		</button>
	 </div>
    );
  }
}

export default Table;
