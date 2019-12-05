import React from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { UPDATE_DEVICE } from '../../queries'
import { Select } from '@material-ui/core'

const UpdateDevice = (props) => {
  const { id, year, brand, model, price, category, onButtonClick, onInputChange } = props
  const [updateDevice] = useMutation(UPDATE_DEVICE)
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        updateDevice({
          variables: {
            id, year, brand, model, price, category
          }
        })
        onButtonClick()
      }}
    >
      <TextField
        label='Year'
        defaultValue={year}
        placeholder='Year'
        onChange={e => onInputChange('year', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Brand'
        defaultValue={brand}
        placeholder='Brand'
        onChange={e => onInputChange('brand', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Model'
        defaultValue={model}
        placeholder='Model'
        onChange={e => onInputChange('model', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Price'
        defaultValue={price}
        placeholder='Price'
        onChange={e => onInputChange('price', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <Select
      value={category}
      label='character'
      variant='outlined'
      style={{ display: 'flex', margin: '10px' }}
      />
      
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ margin: '10px' }}
      >
        Update Device
      </Button>
      <Button
        onClick={onButtonClick}
        variant='contained'
        color='secondary'
        style={{ margin: '10px'}}
      >
        Cancel
      </Button>
    </form>
  )
}
export default UpdateDevice
