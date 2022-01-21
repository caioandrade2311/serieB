//Importar as dependências
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar as páginas
import DarkMode from './pages/darkMode/darkMode';
import LightMode from './pages/lightMode/lightMode';
import Test from './pages/test_AB/test_AB'


//Criar o componentes com as rotas
function RoutesLanding(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DarkMode/>} />
                <Route path="/light" element={<LightMode/>} />     
                <Route path="/test" element={<Test />} />
            </Routes>              
        </BrowserRouter>
    );
};

export default RoutesLanding;