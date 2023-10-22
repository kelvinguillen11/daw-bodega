import React from 'react';
import './App.css';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SobreNosotros from './componentes/SobreNosotros';
import LoginFormulario from './componentes/LoginFormulario';
import RegistroFormulario from './componentes/RegistroFormulario';
import AreaTrabajoPrincipal from './componentes/AreaTrabajoPrincipal';
function App() {
  return (
   <BrowserRouter>
  <Routes>
  <Route path='/' element={<PaginaPrincipal/>}/>  
  <Route path='/SobreNosotros' element={<SobreNosotros/>}/> 
  <Route path='/login' element={<LoginFormulario/>}/>
  <Route path='/registro' element={<RegistroFormulario/>}/>
  <Route path='/Area-Trabajo' element={<AreaTrabajoPrincipal/>}/>    
</Routes>
</BrowserRouter>
  );
}

export default App;
