import React, { useEffect, useState } from 'react';
import './App.css';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import { BrowserRouter,Route,Routes, Redirect, Navigate, redirect } from 'react-router-dom';
import SobreNosotros from './componentes/SobreNosotros';
import LoginFormulario from './componentes/LoginFormulario';
import RegistroFormulario from './componentes/RegistroFormulario';
import AreaTrabajoPrincipal from './componentes/AreaTrabajoPrincipal';
import Contacto from './componentes/Contacto';
import { ProtectedRoute,ProtectedLogin } from './componentes/ProtectedRoute';
function App() {
  return (
   <BrowserRouter>
  <Routes>
  <Route path='/' element={<PaginaPrincipal/>}/>  
  <Route path='/SobreNosotros' element={<SobreNosotros/>}/> 
  <Route element={<ProtectedLogin/>}>
  <Route path='/login' element={<LoginFormulario/>}/>
  <Route path='/registro' element={<RegistroFormulario/>}/>
  </Route>
  <Route
  path='/Area-Trabajo'  element={
    <ProtectedRoute>
      <AreaTrabajoPrincipal/>
    </ProtectedRoute>
  }/>    
  <Route path='/contacto' element={<Contacto/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
