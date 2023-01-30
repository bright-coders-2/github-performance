import React, { useState, useEffect } from "react";
import "../css/TableRepos1.css";
import MaterialTable from "material-table";
import axios from "axios";
import { Modal, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const columns = [{ title: "Repositorie", field: "repositorie" }];

const baseUrl = "http://localhost:3001/saverepositories";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #0000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

// https://api.github.com/search/repositories?q=html
function TableRepos1() {
  //Constantes para la busqueda de los repositorios
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [repos, setRepos] = React.useState([]);

  //Constantes para la definicion de la tabla de los repositorios
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [repositorioseleccionado, setRepositorioSeleccionado] = useState({
    repositorie: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepositorioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPost = async () => {
    await axios
      .post(baseUrl, repositorioseleccionado)
      .then((response) => {
        setData(data.concat(response.data));
        abrirCerrarModalInsertar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPut = async () => {
    await axios
      .put(baseUrl + "/" + repositorioseleccionado.id, repositorioseleccionado)
      .then((response) => {
        var dataNueva = data;
        dataNueva.map((repositorie) => {
          if (repositorie.id === repositorioseleccionado.id) {
            repositorie.repositorie = repositorioseleccionado.repositorie;
          }
        });
        setData(dataNueva);
        abrirCerrarModalEditar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionDelete = async () => {
    await axios
      .delete(baseUrl + "/" + repositorioseleccionado.id)
      .then((response) => {
        setData(
          data.filter(
            (repositorie) => repositorie.id !== repositorioseleccionado.id
          )
        );
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const seleccionarrepositorio = (repositorie, caso) => {
    setRepositorioSeleccionado(repositorie);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  React.useEffect(() => {
    if (!inputValue) {
      return;
    }
    setIsLoading(true);
    // make API calls
    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setRepos(data.items);
        console.log(data.items);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nuevo Repositorio</h3>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setInputValue(evt.target.elements.query.value);
        }}
      >
        <input
          type="text"
          name="query"
          className="github_search_input"
          placeholder="Search Github Repositories"
        />
      </form>
      {isLoading && <div>Loading...</div>}
      {error && (
        <div>
          Unexpected Error Occurred fetching data. Please try again later!
        </div>
      )}
      <ul className="repo_list">
        {repos.map((repo) => {
          return (
            <li key={repo.id} className="repo_item">
            <a href={repo.html_url} target="_blank">
              <TextField className={styles.inputMaterial} name="repositorie"  onChange={handleChange}>{repo.name}</TextField>
            </a>
            <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
            <p>{repo.description}</p>
          </li>
          );
        })}
      </ul>
      
      <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
    </div>
  );

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Repositorio</h3>
      <TextField
        className={styles.inputMaterial}
        label="Repositorie"
        name="repositorie"
        onChange={handleChange}
        value={repositorioseleccionado && repositorioseleccionado.repositorie}
      />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>
          Editar
        </Button>
        <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        Estás seguro que deseas eliminar al repositorio{" "}
        <b>{repositorioseleccionado && repositorioseleccionado.repositorie}</b>?{" "}
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()}>
          Sí
        </Button>
        <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <div>
      <br />
      <Button onClick={() => abrirCerrarModalInsertar()}>
        insertar repositorio
      </Button>
      <br />
      <br />
      <MaterialTable
        columns={columns}
        data={data}
        title="repositorios guardados"
        actions={[
          {
            icon: "edit",
            tooltip: "Editar repositorio",
            onClick: (event, rowData) =>
              seleccionarrepositorio(rowData, "Editar"),
          },
          {
            icon: "delete",
            tooltip: "Eliminar Artista",
            onClick: (event, rowData) =>
              seleccionarrepositorio(rowData, "Eliminar"),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: "Acciones",
          },
        }}
      />

      <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>

      <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
    </div>
  );
}

export default TableRepos1;
