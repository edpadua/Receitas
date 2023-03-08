import React, { useEffect, useState } from 'react'

import Receita from '../Receita';

import './Receitas.css';

import axios from "axios";

function Receitas() {
    const APP_ID = process.env.REACT_APP_API_ID;
    const APP_KEY = process.env.REACT_APP_API_KEY;


    const [receitas, setReceitas] = useState([]);
    const [busca, setBusca] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getReceitas();
    }, [query]);

    const getBusca = e => {
        e.preventDefault();
        setQuery(busca);
        setBusca('');
    }

    const atualizaBusca = e => {
        setBusca(e.target.value);
    }



    const getReceitas = async () => {
        const res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        setReceitas(res.data.hits);
        console.log(res.data.hits);
        
    }


   /* const getReceitas = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setReceitas(data.hits);
        console.log(data.hits);
    }*/


    return (
        <div className="receitasContainer">
            <h2 className="receitasContainerTitulo">Receitas</h2>

            <form onSubmit={getBusca} className="busca-form">

                <input className="search-bar" type="text" value={busca} onChange={atualizaBusca} />
                <button className="search-button" type="submit">Pesquisar</button>
            </form>

            <div className="receitas">
                {console.log("receitas", receitas)}

               
                    {
                    receitas.map(receita => (
                        <div>
                            <Receita
                                receita={receita}
                                
                            />
                        </div>


                    ))}
            </div>
        </div>

    )
};

export default Receitas;
