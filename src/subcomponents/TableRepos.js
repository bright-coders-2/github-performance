import React, { Component } from "react";
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
  ButtonDropdown,
} from "reactstrap";
import SearchBar from "../subcomponents/SearchBar";
import Results from "./Results";
import { ThemeConsumer } from "styled-components";


const data = [
  { id: 1, name: "brigcoders" },
  { id: 2, name: "brigcoders" },
  { id: 3, name: "brigcoders" },
];

class TableRepos extends React.Component {
  state = {
    data: data,
    form: {
      id: "",
      name: "",
    },
    modalinsertar:false,
    modalEditar:false,
  };

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value,
      }
    })
  }

  mostrarmodalinsertar=()=>{
    this.setState({modalinsertar:true})
  }

  ocultarmodalinsertar=()=>{
    this.setState({modalinsertar:false})
  }

  mostrarmodalEditar=(registro)=>{
    this.setState({modalEditar:true ,form:registro})
  }

  ocultarmodalEditar=()=>{
    this.setState({modalEditar:false})
  }

  insertar=()=>{
    var valorNuevo={...this.state.form}
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista,modalinsertar:false})
  }

  render() {
    return (
      <>
        <Container>
          <Button color="primary" onClick={()=>this.mostrarmodalinsertar()}>Insertar Nueva busqueda</Button>
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
                    <Button color="primary" onClick={this.mostrarmodalEditar(elemento)}>Editar</Button>
                    {"  "}
                    <Button color="danger">Borrar</Button>
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
                  <label>Id</label>
                  <input className="form-control" type="text" ></input>
                </FormGroup>
                <FormGroup>
                  <label>name</label>
                  <input className="form-control" name="name" type="text" onChange={this.handleChange}></input>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.insertar}>Insetar</Button>
                <Button color="danger" onClick={this.ocultarmodalinsertar}>Cancelar</Button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEditar}>
            <ModalHeader>
                <div>
                    <h3>Search Repositories</h3>
                </div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                  <label>Id</label>
                  <input className="form-control" readOnly type="text" value={this.state.data.length+1}></input>
                </FormGroup>
                <FormGroup>
                  <label>name</label>
                  <input className="form-control" name="name" type="text" onChange={this.handleChange}></input>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" >Insetar</Button>
                <Button color="danger" onClick={this.ocultarmodalEditar}>Cancelar</Button>
            </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default TableRepos;
