import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Countries/Countries';
import Person from './components/person/Person';

function App() {
  return (
    <div className="App">

      
      { <Country></Country>}
      {/* {<Person></Person> */}
      {/* <LoadCountries></LoadCountries> */}



    </div>
  );
}


// make component
// function LoadCountries (){

//   const [countries, setCountries]= useState([]);
//   useEffect( () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data=> setCountries(data))

//   }, [])

//   return ( <div>
//     <h1>Visiting every country of the world</h1>
//     <h2>Available countries: {countries.length} </h2>
//     {
//      countries.map(country => <Country name={country.name.common}  population={country.population}></Country>)
     
//     }
//   </div>)
// }

// function Country(props){
// return ( 
//   <div>
//     <h2>Name: {props.name} </h2>
//     <h4>Population: {props.population}</h4>
//   </div>
//  )
// }

export default App;
