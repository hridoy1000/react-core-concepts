/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['kaka','Jafor','Alomgir','Salam','Manna']
  const products = [
    {name:'Photoshop', price: '$10.00'},
    {name:'illustrator', price: '$20.00'},
    {name:'PDF Reader', price: '$25.00'}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);

   var person ={
     name : "Dr. Mahfuz",
     job : "Singer"

   }
   var person2 ={
    name : "Eva Aunty",
    job : "koli-kanta"

  }
  var style= {
    color : 'red',
    backgroundColor : 'yellow'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className ="" style={style}>My Heading: {person.name + ' ' + person.job}</h1>
        <h1 style={{color : 'red',backgroundColor : 'yellow'}}> Singer:{person2.name + ' ' + person2.job}</h1>
        <h2>My Math: {(2+3)*10}</h2>
        <p>My First React App</p>
        <Users></Users>
        <Counter></Counter>
        
        <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
         {/* <li>{nayoks[0]}</li>
         <li>{nayoks[1]}</li>
         <li>{nayoks[2]}</li>
         <li>{nayoks[3]}</li>
         <li>{nayoks[4]}</li> */}
            {
              products.map(product => <li>{product.name},{product.price}</li>)
            }
        </ul>
            {
              products.map(product => <Product product={product}></Product>)
            }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        
        <Player name= {nayoks[0]} naika="Moushumi"></Player>
        <Player name= "Jashim" naika="Shabana"></Player>
        <Player name= "Bappa" naika="Cheka"></Player>
        <Player name= "Elius" naika="kaka"></Player> 
        
      </header>
    </div>
  );
}


function Player(props){

const playerStyle={
  border: '2px solid red', 
  margin: '10px'
}

  return (
  <div style = {playerStyle/*{border: '2px solid red', margin: '10px'}*/}>
    <h1>Name : {props.name}</h1> 
    <h3>Hero of {props.naika}</h3>
  </div>
  )

}

function Counter(){

const [count, setCount] = useState(10);
const handleIncrease = () => setCount(count+1);
// {
//   // const newCount = count+1;
//   setCount(count+1);
// }

  return(
    <div>
    <h1>Count: {count}</h1>
    <button onClick={ () => setCount(count-1)}>Decrease</button>
    <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){

 const [users, setUsers] = useState([]);
 useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data));
 },[])

  return (
    <div>
    <h3>Dynamic Users:{users.length}</h3>
    <ul>
    {
      users.map(user=> <li>{user.name}</li>)
    }
    </ul>
    </div>
  )

}


function Product(props){
       const productStyle={
         border: '1px solid gray',
         borderRadius: '5px',
         backgroundColor: 'lightgray',
         height: '200px',
         width: '200px',
         float: 'left'
       }
       const {name, price }=props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>

    </div>
  )
}

export default App;
