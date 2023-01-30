import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import SearchBar from "../subcomponents/SearchBar";

const data = [
  { id: 1, name: "brigcoders" },
  { id: 2, name: "brigcoders" },
  { id: 3, name: "brigcoders" },
];

class TableRepos extends React.Component{
  
  state = {
    data: data,
    form: {
      id: "",
      name: "",
    },
    modalinsertar: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  mostrarmodalinsertar = () => {
    this.setState({ modalinsertar: true });
  };

  ocultarmodalinsertar = () => {
    this.setState({ modalinsertar: false });
  };

  mostrarmodaleditar=(registro)=>{
    this.setState({modalEditar:true, form: registro});
  }

  ocultarmodaleditar=()=>{
    this.setState({modalEditar:false})
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista,modalinsertar:false})
  }

  editar=(dato)=>{
    var contador=0;
    var lista=this.state.data;
    lista.map((registro)=>{
      if(dato.id==registro.id){
        lista[contador].name=dato.name;

      }
      contador++;
    })
    this.setState({data:lista, modalEditar:false});
  }

  eliminar=(dato)=>{
    var opcion=window.confirm("Realmente quieres eliminar el registro numero "+dato.id)
    if(opcion){
      var contador=0;
      var lista= this.state.data;
      lista.map((registro)=>{
        if(registro.id==dato.id){
          lista.splice(contador,1);
        }
        contador++;
      });
      this.setState({data:lista});
    }
  }

  render() {
    return (
      <>
        <Container>
          <Button color="primary" onClick={this.mostrarmodalinsertar}>
            Insertar Nueva busqueda
          </Button>
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.name}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={()=>this.mostrarmodaleditar(elemento)}
                    >
                      Editar
                    </Button>
                    {"  "}
                    <Button color="danger" onClick={()=>this.eliminar(elemento)}>Borrar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>


        <Modal isOpen={this.state.modalinsertar}>
          <ModalHeader>
            <div>
              <h3>Search Repositories</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <SearchBar></SearchBar>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.insertar}>
              Insetar
            </Button>
            <Button color="danger" onClick={this.ocultarmodalinsertar}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id</label>
              <input className="form-control" name="id" type="text" value={this.state.form.id}></input>
            </FormGroup>
            <FormGroup>
              <label>Name</label>
              <input className="form-control" name="name" type="text" onChange={this.handleChange} value={this.state.form.name}></input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.editar(this.state.form)}>Editar</Button>
            <Button color="danger" onClick={()=>this.ocultarmodaleditar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default TableRepos;
