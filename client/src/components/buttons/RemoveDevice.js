import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import filter from 'lodash/filter'
import Button from '@material-ui/core/Button'

import { GET_DEVICES, REMOVE_DEVICE } from '../../queries'

const RemoveDevice = ({ id, year, brand, model, price, category}) => {
  const [removeDevice] = useMutation(
    REMOVE_DEVICE,
    {
      update(cache, { data: { removeDevice } }) {
        const { devices } = cache.readQuery({
          query: GET_DEVICES
        })
        cache.writeQuery({
          query: GET_DEVICES,
          data: { devices: filter(devices, c => { return c.id !== removeDevice.id })}
        })
      }
    }
  )

  return (
    <Button onClick={e => {
      e.preventDefault()
      removeDevice({
        variables: {
          id
        },
        optimisticResponse: {
          __typename: 'Mutation',
          removeDevice: {
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
    }}
      variant='contained'
      color='secondary'
      style={{ margin: '10px'}}
    >
      Delete
    </Button>
  )
}
export default RemoveDevice
