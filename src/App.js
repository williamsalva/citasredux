import React from 'react';
import Agregarcita from './comonentes/AgregarCita';
import ListadoCitas from './comonentes/ListadoCitas';
//Redux
import store from './store';
import {Provider} from 'react-redux';




function App() {
  return (
    <Provider store={store}>
       <div className="container">
     
     <header>
       <h1>Administrador de pacientes</h1>
     </header>

     <div className="row">
       <div className="col-md-6">
          <Agregarcita/>
       </div>
       <div className="col-md-6">
          <ListadoCitas/>
       </div>

     </div>
    </div>


    </Provider>
   
  );
}

export default App;
