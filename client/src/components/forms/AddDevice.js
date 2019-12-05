import React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { useQuery } from '@apollo/react-hooks'

import { Select, MenuItem } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { GET_CHARACTERS } from '../../queries'
import { ADD_DEVICE, GET_DEVICES } from '../../queries'

const AddDevice = ({ id, year, brand, model, price, category, onInputChange }) => {
  const [addDevice] = useMutation(
    ADD_DEVICE,
    {
      update(cache, { data: { addDevice } }) {
        const { devices } = cache.readQuery({ query: GET_DEVICES })
        cache.writeQuery({
          query: GET_DEVICES,
          data: { devices: devices.concat([addDevice])}
        })
      }
    }
  )

  const { loading, error, data } = useQuery(GET_CHARACTERS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)

  let type = []
    {data.characters.map(({ firstName, lastName }) => (
    type.push(<MenuItem value={firstName+" "+lastName}>{firstName} {lastName}</MenuItem>)
    ))}  
    console.log("Category:", category)

  return (
    <form onSubmit={e => {
      e.preventDefault()
      addDevice({
        variables: {
          id, year, brand, model, price, category
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addDevice: {
            __typename: 'Device',
            id,
            year,
            brand,
            model,
            price,
            category
          }
        }
      })
    }}>
      <TextField
        label='Year'
        value={year}
        placeholder='Year'
        onChange={e => onInputChange('year', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Brand'
        value={brand}
        placeholder='Brand'
        onChange={e => onInputChange('brand', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Model'
        value={model}
        placeholder='Model'
        onChange={e => onInputChange('model', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
    <TextField
        label='Price'
        value={price}
        placeholder='Price'
        onChange={e => onInputChange('price', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      
      <Select
      variant='outlined'
      placeholder='Micky Mouse'
      style={{ display: 'flex', margin: '10px', textAlign: 'left' }}>
      {type}
      </Select>

      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Device
      </Button>
    </form>
  )
}
export default AddDevice
