import React from 'react';
import {useSelector} from 'react-redux';
import { borrarCitaAction} from '../actions/citasActions';
import { useDispatch } from 'react-redux';


//sfc comoando para  funcion controlles

const ListadoCitas = () => {

    //obtener las citas del state
    const citas = useSelector((state)=> state.citas);
    console.log(citas);

    //mensaje condicional
    const mensaje = Object.keys (citas.citas).length === 0 ? 'No hay citas': 'Administa las Citas aqui';

    //dispach para mandar a llamar la funcion de eliminar
   
    const dispatch = useDispatch();


    return ( 
        <div className ="card mt-5">
            <div className="card-body">
                <h2 className ="card-title text-center"> {mensaje}</h2>
                <div className ="lista-citas">
                    {citas.citas.map(cita =>(
                        <div key ={cita.id} className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{cita.mascota}</h3>
                                <p className="card-text"><span>Nombre Dueño:</span>{cita.propietario}</p>
                                <p className="card-text"><span>Fecha:</span>{cita.fecha}</p>
                                <p className="card-text"><span>Hora:</span> {cita.hora}  </p>
                                <p className="card-text"><span>Sintomas:</span> <br /> {cita.sintomas} </p>
                                <button onClick = { ()=> dispatch (borrarCitaAction(cita.id))}
                                    className="btn btn-danger">Borrar &times;
                                    
                                    

                                </button>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>




     );
}
 
export default  ListadoCitas;