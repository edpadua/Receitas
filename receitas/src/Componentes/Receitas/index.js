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



    const getBusca = e => {
        e.preventDefault();
        setQuery(busca);
        setBusca('');
    }

    const atualizaBusca = e => {
        setBusca(e.target.value);
    }





    useEffect(() => {
        const getReceitas = async () => {
            const res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            setReceitas(res.data.hits);
            console.log(res.data.hits);

        }

        getReceitas();
    }, [query, APP_ID, APP_KEY]);




    return (
        <div className="receitasContainer">
            <h2 className="receitasContainerTitulo">Receitas</h2>

            <form onSubmit={getBusca} className="busca-form">

                <input className="form-control busca-input" type="text" value={busca} onChange={atualizaBusca} placeholder="O que está procurando ?" />
                <button className="search-button button-principal" type="submit">Pesquisar</button>
            </form>

            <div className="receitas">
                {console.log("receitas", receitas)}


                {receitas != null &&
                    receitas.length != null &&
                    receitas.length > 0 ?
                    <>
                        <h2 className='palavra-chave'>Lista de receitas com a palavra: {query}</h2>

                        {receitas.map(receita => (
                            <Receita receita={receita} />

                        ))}
                    </>

                    : (

                        <h2 className='palavra-chave'>Não há receitas com a palavra: {query}</h2>
                        
                    )}


            </div>
        </div>

    )
};

export default Receitas;
