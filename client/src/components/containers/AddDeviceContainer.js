import React, { Component } from 'react'

import AddDevice from '../forms/AddDevice'
const uuidv4 = require('uuid/v4')

class AddDeviceContainer extends Component {
  state = {
    id: uuidv4(),
    year: '',
    brand: '',
    model: '',
    price: '',
    category: '',
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    const { id, year, brand, model, price, category } = this.state
    return (
      <AddDevice
        id={id}
        year={year}
        brand={brand}
        model={model}
        price={price}
        category={category}
        onInputChange={this.handleInputChange}
      />
    )
  }
}
export default AddDeviceContainer
