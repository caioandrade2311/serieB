//Importar as dependências
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar as páginas
import Basco from './pages/Basco/Basco.js';



//Criar o componentes com as rotas
function RoutesLanding(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Basco/>} />
            </Routes>              
        </BrowserRouter>
    );
};

export default RoutesLanding;