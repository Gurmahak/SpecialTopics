import React from 'react'

import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import UpdateDevice from '../forms/UpdateDevice'
import RemoveDevice from '../buttons/RemoveDevice'

const Device = (props) => {
  const { editMode, id, year, brand, model, price, onButtonClick, onInputChange } = props
  const fullName = `${year} ${brand} ${model} `
  return (
    <div>
      {
        editMode ?
        <UpdateDevice
          id={id}
          year={year}
          brand={brand}
          model={model}
          price={price}
          editMode={editMode}
          onButtonClick={onButtonClick}
          onInputChange={onInputChange}
        />
        :
        <ListItem id ='color'>
          <ListItemText
            primary={fullName}
            secondary={price}
          />
          <Button
            onClick={onButtonClick}
            variant='contained'
            style={{ margin: '5px' }}
          >
            Edit
          </Button>
          <RemoveDevice
            id={id}
            year={year}
            brand={brand}
            model={model}
            price={price}
          />
        </ListItem>
      }
    </div>
  )
}
export default Device
