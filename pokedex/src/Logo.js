import React from "react";
const Logo = (props) => {
    
    // const appName = "Pokedex"
    console.log(props)
      return (
        <div>
          <header>
            <h1> Welcome to {props.appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt ="pokemon" />
          </header>
        </div>
      );
    }
    
    
export default Logo;