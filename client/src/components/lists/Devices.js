import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_DEVICES } from '../../queries'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import DeviceContainer from '../containers/DeviceContainer'

const Devices = () => {
  const { loading, error, data } = useQuery(GET_DEVICES)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)
  return (
    
  <div>
      {data.devices.map(({ id, year, brand, model, price }) => (
        
        <Container key={id}>
          <List >
            <DeviceContainer 
              key={id}
              id={id}
              year={year}
              brand={brand}
              model={model}
              price={price}
              
            />
          </List> 
        </Container>
      ))}
    </div>
  )
}

export default Devices
