import React, { Component } from 'react'
import Device from '../listItems/Device'

class DeviceContainer extends Component {
  state = {
    id: this.props.id || '',
    year: this.props.year || '',
    brand: this.props.brand || '',
    model: this.props.model || '',
    price: this.props.price || '',
    category: this.props.category || '',
    editMode: false
  }

  handleButtonClick = () => {
    const  { editMode } = this.state
    this.setState({
      editMode: !editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { editMode, id, year, brand, model, price, category } = this.state
    console.log(id)
    console.log(year)
    console.log(brand)
    return (
      <Device
        editMode={editMode}
        id={id}
        year={year}
        brand={brand}
        model={model}
        price={price}
        category={category}
        onButtonClick={this.handleButtonClick}
        onInputChange={this.handleInputChange}
      />
    )
  }
}
export default DeviceContainer
