import React, {useState, useEffect} from 'react'
import ReactJson from 'react-json-view'

const JsonView = ({ json, setJson}) => {

  useEffect(() => {
    console.log('JSON VIEW---->', json)
  }, [json])

  const editHandler = (edit) => {
    console.log('edit')

    setJson(edit.updated_src)
  }

  const addHandler = (add) => {
    console.log('add')

    setJson(add.updated_src)
  }

  const removeHandler = (remove) => {
    console.log('remove')

    setJson(remove.updated_src)
  }
  return (
    <ReactJson src={json} onEdit={editHandler} onDelete={removeHandler} onAdd={addHandler } />
  )
}

export default JsonView