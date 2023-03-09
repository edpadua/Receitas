import React from 'react'

import './Receita.css';




function Receita({ receita }) {
    return (
        <div className="Receita">
            <div className="ReceitaContent">
                <img className="imagem" src={receita.recipe.image} alt="" />
                <h2>{receita.recipe.label}</h2>
                <ol className='ingredientes'>
                    {receita.recipe.ingredients.map(ingrediente => (
                        <li className='ingrediente'>{ingrediente.text}</li>
                    ))}
                </ol>

                <ul className='tipos-de-culinaria'>
                    Tipo de Culinária: 
                    {receita.recipe.cuisineType.map(tipoDeCulinaria => (
                        <li className='tipo-de-culinaria'>{tipoDeCulinaria}</li>
                    ))}
                </ul>

                <p>Calorias : {receita.recipe.calories}</p>



                <a href={receita.recipe.url} target="_blank" rel="noopener noreferrer"><button className='button-principal'>Instruções</button></a>
            </div>
        </div>

    )
};

export default Receita;