import React from "react";
import { Table } from "reactstrap";
import { Button } from "react-bootstrap";

const ReposTable =()=>{
  <>
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>cAcciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.date.map((elemento) => (
          <tr>
            <td>{elemento.id}</td>
            <td>{elemento.nombre}</td>
            <td><Button color="primary">Editar</Button>
            <Button color="primary">Borrar</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>;
    </>
  }

export default ReposTable;