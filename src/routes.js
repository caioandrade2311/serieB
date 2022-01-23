//Importar as dependências
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar as páginas
import VascoMode from './pages/VascoMode/VascoMode';
import BascoMode from './pages/BascoMode/BascoMode';


//Criar o componentes com as rotas
function RoutesLanding(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VascoMode/>} />
                <Route path="/BascoSerieB" element={<BascoMode/>} />     
            </Routes>              
        </BrowserRouter>
    );
};

export default RoutesLanding;