import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';

function CadastroCategoria () {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues ] = useState(valoresIniciais);

  function setValue (chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange (event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={function handleSubmit (event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>
        <FormField
          label="Nome da Categoria: "
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        {/* <div>
          <label>Descrição:
            <textarea
              type="text"
              name="descricao"
              value= {values.descricao}
              onChange={handleChange}
              />
          </label>
        </div> */}

        <FormField
          label="Descrição: "
          name="descricao"
          type="text" 
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
          <label>Cor:
            <input
              type="color"
              name="cor"
              value= {values.cor}
              onChange={handleChange}
              />
          </label>
        </div> */}

        <FormField
          label="Cor: "
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange} 
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;