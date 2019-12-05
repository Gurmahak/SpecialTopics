import { gql } from 'apollo-server'
import { find, remove } from 'lodash'

const characters = [
  {
    id: '1',
    firstName: 'Mickey',
    lastName: 'Mouse'
  },
  {
    id: '2',
    firstName: 'Donald',
    lastName: 'Duck'
  },
  {
    id: '3',
    firstName: 'Peter',
    lastName: 'Pan'
  }
]

const devices = [
  {
    id: '1',
    year: '2019',
    brand: 'Apple',
    model: 'Mackbook',
    price: '$4000',
    category: 'Disney'
    
  },
  {
    
    id: '2',
    year: '2018',
    brand: 'Apple',
    model: 'iPhone XS Max',
    price: '$1300',
    category: 'Mickey'
  },
  {
    id: '3',
    year: '2017',
    brand: 'Apple ',
    model: 'ipad Air 2',
    price: '$400',
    category: 'Mickey'
  }
]

const typeDefs = gql`
  type Character {
    id: String!
    firstName: String
    lastName: String
  }

  type Device {
    id: String!
    year: String
    brand: String
    model: String
    price: String
    category: String
  }

  type Query {
    character(id: String!): Character,
    characters: [Character]
    device(id: String!): Device,
    devices: [Device]
  }

  
  type Mutation {
    addCharacter(id: String!, firstName: String!, lastName: String! ): Character
    updateCharacter(id: String!, firstName: String!, lastName: String! ): Character
    removeCharacter(id: String!): Character
  
    addDevice(id: String!, year: String!, brand: String!, model: String!, price: String!, category: String! ): Device
    updateDevice(id: String!, year: String!, brand: String!, model: String!, price: String!, category: String!): Device
    removeDevice(id: String!): Device
  }
`

const resolvers = {
  Query: {
    characters: () => characters,
    character(parent, args, context, info) {
      return find(characters, { id: args.id })
    },
    devices: () => devices,
    device(parent, args, context, info) {
      return find(devices, { id: args.id })
    }
  },
  

  Mutation: {

    addCharacter: (root, args) => {
      const newCharacter = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName
      
      }
      characters.push(newCharacter)
      return newCharacter
    },
    updateCharacter: (root, args) => {
      const character = find(characters, { id: args.id })
      if (!character) {
        throw new Error(`Couldn't find character with id ${args.id}`)
      }
      character.firstName = args.firstName
      character.lastName = args.lastName
      
      return character
    },
    removeCharacter: (root, args) => {
      const removedCharacter = find(characters, { id: args.id })
      if (!removedCharacter) {
        throw new Error(`Couldn't find character with id ${args.id}`)
      }
      remove(characters, c => { return c.id === removedCharacter.id })

      return removedCharacter
    },

    addDevice: (root, args) => {
      const newDevice = {
        id: args.id,
        year: args.year,
        brand: args.brand,
        model: args.model,
        price: args.price,
        category: args.category,

      }
      devices.push(newDevice)
      return newDevice
    },
    updateDevice: (root, args) => {
      const device = find(devices, { id: args.id })
      if (!device) {
        throw new Error(`Couldn't find device with id ${args.id}`)
      }
      device.year = args.year
      device.brand = args.brand
      device.model = args.model
      device.price = args.price
      device.category = args.category
      return device
    },
    removeDevice: (root, args) => {
      const removedDevice = find(devices, { id: args.id })
      if (!removedDevice) {
        throw new Error(`Couldn't find device with id ${args.id}`)
      }
      remove(devices, c => { return c.id === removedDevice.id })

      return removedDevice
    }
   }
}

export { typeDefs, resolvers }