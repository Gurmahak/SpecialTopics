import React, { Fragment } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import DisplayCard from '../cards/DisplayCard'
import '../../App'


const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Show = (props) => {
  const { id, firstName, lastName, year, brand, model, price } = props
  const fullName = `${firstName} ${lastName} `
  const fullDetail = `${year} ${brand} ${model}`
  const classes = useStyles()

  return (
    <Container className='App'>
      <DisplayCard>
        <Fragment>
          <ListItem>
            <ListItemText
              primary={fullName}
            />
          </ListItem>
          <ul>
            <DisplayCard>
              <ListItem>
                <ListItemText
                  primary={fullDetail}
                  secondary={price}
                />
              </ListItem>
            </DisplayCard>
          </ul>
        </Fragment>
        <CardActions>
          <Button color='primary' size='small' variant='outlined'>
          <BrowserRouter>
          <Link to={{
              pathname: '/',
              state: { character: id }
            }}
            >
            Go Back Home
            </Link>
            </BrowserRouter>
          </Button>
        </CardActions>
      </DisplayCard>
    </Container>
  )
}

export default Show
