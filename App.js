import './App.css';
import axios from 'axios';
// import {Formik,Form,Field,ErrorMessage} from "formik";
import {useEffect,useState} from 'react';

function App() {

  const [tabla1, settabla1] = useState([]);
  const [tabla2, settabla2] = useState([]);
  const [tabla3, settabla3] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Tabla1Pais").then((response) => {
      settabla1(response.data);
    });
    axios.get("http://localhost:3001/Tabla2Departamento").then((response) => {
      settabla2(response.data);
    });
    axios.get("http://localhost:3001/Tabla3Persona").then((response) => {
      settabla3(response.data);
      
    });
    
  }, []);


//   const onSubmit = (data) => {
//     console.log(data);

// };

const onSubmitAdd = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  axios.post("http://localhost:3001/Tabla1Pais",data).then((response) => {
    settabla1([...tabla1,response.data]);
});
  // Rest of your code...
};


const onSubmitAdd2 = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  axios.post("http://localhost:3001/Tabla2Departamento",data).then((response) => {
    settabla2([...tabla2,response.data]);
});
  // Rest of your code...
};

const onSubmitAdd3 = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  axios.post("http://localhost:3001/Tabla3Persona",data).then((response) => {
    settabla3([...tabla3,response.data]);
});
  // Rest of your code...
};




const onDelete = (event) => {
  event.preventDefault();

  
  const formData = new FormData(event.target);
  console.log(formData);
  const idToDelete = event.target.elements.idToDelete.value; // Access the value directly from the input field
    console.log(idToDelete);

  axios.delete(`http://localhost:3001/Tabla1Pais/byId/${idToDelete}`)
    .then((response) => {
      console.log(response);
      // Filter out the deleted row from the state
      settabla1(tabla1.filter((row) => row.id !== idToDelete));
      window.location.reload(); // Refresh the page
    })
    .catch((error) => {
      console.error(error);
    });
};

const onDelete2 = (event) => {
  event.preventDefault();

  
  const formData = new FormData(event.target);
  console.log(formData);
  const idToDelete = event.target.elements.idToDelete.value; // Access the value directly from the input field
    console.log(idToDelete);

  axios.delete(`http://localhost:3001/Tabla2Departamento/byId/${idToDelete}`)
    .then((response) => {
      console.log(response);
      // Filter out the deleted row from the state
      settabla2(tabla2.filter((row) => row.id !== idToDelete));
      window.location.reload(); // Refresh the page
    })
    .catch((error) => {
      console.error(error);
    });
};

const onDelete3 = (event) => {
  event.preventDefault();

  
  const formData = new FormData(event.target);
  console.log(formData);
  const idToDelete = event.target.elements.idToDelete.value; // Access the value directly from the input field
    console.log(idToDelete);

  axios.delete(`http://localhost:3001/Tabla3Persona/byId/${idToDelete}`)
    .then((response) => {
      console.log(response);
      // Filter out the deleted row from the state
      settabla3(tabla3.filter((row) => row.id !== idToDelete));
      window.location.reload(); // Refresh the page
    })
    .catch((error) => {
      console.error(error);
    });
};


const onSubmitUpdate = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const paisToUpdate = formData.get("paisToUpdate");
  const nompaisToUpdate = formData.get("nompaisToUpdate");

  axios
    .put(`http://localhost:3001/Tabla1Pais/byId/${paisToUpdate}`, {
      nompais: nompaisToUpdate,
    })
    .then((response) => {
      console.log(response);
      // Actualizar el estado con los datos modificados
      settabla1(
        tabla1.map((row) =>
          row.pais === paisToUpdate ? { ...row, nompais: nompaisToUpdate } : row
        )
      );
    })
    .catch((error) => {
      console.error(error);
    });
};


const onSubmitUpdate2 = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const paisToUpdate = formData.get("paisToUpdate");
  const deptoToUpdate = formData.get("deptoToUpdate");
  const nomdeptoToUpdate = formData.get("nomdeptoToUpdate");

  axios
    .put(`http://localhost:3001/Tabla2Departamento/byId/${paisToUpdate}/${deptoToUpdate}`, {
      nomdepto: nomdeptoToUpdate,
    })
    .then((response) => {
      console.log(response);
      // Actualizar el estado con los datos modificados
      settabla2(
        tabla2.map((row) =>
          row.pais === paisToUpdate && row.depto === deptoToUpdate
            ? { ...row, nomdepto: nomdeptoToUpdate }
            : row
        )
      );
    })
    .catch((error) => {
      console.error(error);
    });
};



const onSubmitUpdate3 = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const idpersonaToUpdate = formData.get("idpersonaToUpdate");
  const nombreCompletoToUpdate = formData.get("nombreCompletoToUpdate");
  const paisToUpdate = formData.get("paisToUpdate");
  const departamentoToUpdate = formData.get("departamentoToUpdate");
  const direccionToUpdate = formData.get("direccionToUpdate");

  axios
    .put(`http://localhost:3001/Tabla3Persona/byId/${idpersonaToUpdate}`, {
      nombre_completo: nombreCompletoToUpdate,
      pais: paisToUpdate,
      departamento: departamentoToUpdate,
      direccion: direccionToUpdate,
    })
    .then((response) => {
      console.log(response);
      // Update the state with the modified data
      settabla3(
        tabla3.map((row) =>
          row.Idpersona === parseInt(idpersonaToUpdate)
            ? {
                ...row,
                nombre_completo: nombreCompletoToUpdate,
                pais: paisToUpdate,
                departamento: departamentoToUpdate,
                direccion: direccionToUpdate,
              }
            : row
        )
      );
    })
    .catch((error) => {
      console.error(error);
    });
};




  return (
    <div className="App">

      <div className="tabla1">   
        <h1 id='title1'>Tabla 1 Pais</h1>
        <div className='titlecontainer'>
          <h3 className='title'>Pais</h3>
          <h3 className='title'>Nompais</h3>
        </div>
          {tabla1.map((value,key) => {

      return <div className='containertable1' >

      <div className="paistable1">{value.pais}</div>
      <div className="nompaistable1">{value.nompais}</div>
      </div>        


          })}

    <form onSubmit={onSubmitAdd}>
          <label>Pais</label>
          <input name="pais" />

          <label>Nompais</label>
          <input name="nompais" />

          <button type="submit" >INSERTAR</button>
    </form>

    <form onSubmit={onDelete}>
        <label>ID A BORRAR</label>
          <input name="idToDelete" />

          <button type="submit">BORRAR</button>
    </form>


      <form onSubmit={onSubmitUpdate}>
          <label>Pais a modificar</label>
          <input name="paisToUpdate" />

          <label>Nuevo nompais</label>
          <input name="nompaisToUpdate" />

          <button type="submit">MODIFICAR</button>
      </form>

        </div>
    

      <h1 id='title2'>Tabla 2 Departamento</h1>

      <div className='titlecontainer'>
        <h3 className='title'>Pais</h3>
        <h3 className='title'>Depto</h3>
        <h3 className='title'>Nomdepto</h3>

      </div>
          {tabla2.map((value,key) => {

            return <div className='containertable1' >

              <div className="paistable1">{value.pais}</div>
              <div className="nompaistable1">{value.depto}</div>
              <div className="nompaistable1">{value.nomdepto}</div>
              </div>           

          
          }
          
          
          )}

  <form onSubmit={onSubmitAdd2}>
                <label>Pais</label>
                <input name="pais" />

                <label>depto</label>
                <input name="depto" />

                <label>Nomdepto</label>
                <input name="nomdepto" />

                <button type="submit">INSERTAR</button>
    </form>


    <form onSubmit={onDelete2}>
        <label>ID A BORRAR</label>
          <input name="idToDelete" />

          <button type="submit">BORRAR</button>
    </form>

      <form onSubmit={onSubmitUpdate2}>
    <label>Pais a modificar</label>
    <input name="paisToUpdate" />

    <label>Depto a modificar</label>
    <input name="deptoToUpdate" />

    <label>Nuevo nomdepto</label>
    <input name="nomdeptoToUpdate" />

    <button type="submit">MODIFICAR</button>
  </form>




      <h1 id='title3'>Tabla 3 Persona</h1>
      <div className='titlecontainer' >
        <h3 className='titlecontainer3'>IdPersona</h3>
        <h3 className='titlecontainer3'>Nombre_completo</h3>
        <h3 className='titlecontainer3'>Pais</h3>
        <h3 className='titlecontainer3'>Departamento</h3>
        <h3 className='titlecontainer3'>Direccion</h3>



      </div>
          {tabla3.map((value,key) => {

            return <div className='containertable1'  >

              <div className="paistable1">{value.Idpersona}</div>
              <div className="nompaistable1">{value.nombre_completo}</div>
              <div className="nompaistable1">{value.pais}</div>
              <div className="nompaistable1">{value.departamento}</div>
              <div className="nompaistable1">{value.direccion}</div>


              </div>

     }  )}

<form onSubmit={onSubmitAdd3}>
                <label>Idpersona</label>
                <input name="Idpersona" />

                <label>nombre_completo</label>
                <input name="nombre_completo" />

                <label>pais</label>
                <input name="pais" />

                <label>departamento</label>
                <input name="departamento" />

                <label>direccion</label>
                <input name="direccion" />

                <button type="submit">INSERTAR</button>
    </form>


    <form onSubmit={onDelete3}>
        <label>ID A BORRAR</label>
          <input name="idToDelete" />

          <button type="submit">BORRAR</button>
    </form>
     
    <form onSubmit={onSubmitUpdate3}>
  <label>Idpersona a modificar</label>
  <input name="idpersonaToUpdate" />

  <label>Nuevo nombre_completo</label>
  <input name="nombreCompletoToUpdate" />

  <label>Nuevo país</label>
  <input name="paisToUpdate" />

  <label>Nuevo departamento</label>
  <input name="departamentoToUpdate" />

  <label>Nueva dirección</label>
  <input name="direccionToUpdate" />

  <button type="submit">MODIFICAR</button>
</form>




    </div>
  );
}

export default App;
