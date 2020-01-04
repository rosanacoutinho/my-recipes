import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div>
            
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
                <img scr={image} alt="img"/> 
        </div>
    );

}

export default Recipe;
//https://www.youtube.com/watch?v=U9T6YkEDkMo