import React, { Fragment } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import UpdateCharacter from '../forms/UpdateCharacter'
import RemoveCharacter from '../buttons/RemoveCharacter'
import DisplayCard from '../cards/DisplayCard'
import Devices from '../lists/Devices'

const Character = (props) => {
  const { editMode, id, firstName, lastName, onButtonClick, onInputChange } = props
  const fullName = `${firstName} ${lastName} `
  return (
    <DisplayCard>
      <Fragment>
      {
        editMode ?
          <UpdateCharacter
            id={id}
            firstName={firstName}
            lastName={lastName}
            editMode={editMode}
            onButtonClick={onButtonClick}
            onInputChange={onInputChange}
          />
          :
          <ListItem id ='color'>
            <ListItemText 
              primary= {fullName}
            />
            <Button
              onClick={onButtonClick}
              variant='contained'
              style={{ margin: '5px' }}
            >
              Edit
            </Button>
            <RemoveCharacter
              id={id}
              firstName={firstName}
              lastName={lastName}
              
            />
          </ListItem>
        }
        <Devices/>
        <CardActions>
          <Button color='primary' size='small' variant='outlined'>
          <BrowserRouter>
          <Link to={{
            pathname: `/character/${id}`,
            state: { character: firstName }
          }}
          >
            Learn More
          </Link>
          </BrowserRouter>
          </Button>
        </CardActions>
      </Fragment>
    </DisplayCard>
  )
}
export default Character
