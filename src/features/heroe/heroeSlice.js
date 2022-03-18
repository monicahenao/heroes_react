import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'heroe',
  initialState: {
    heroes: 
    [
      {
        "_name": "Anthony Stark",
        "_height": 6.1,
        "_picture": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
        "_nickname": "Iron Man"
      },
      {
        "_name": "Peter Parker",
        "_height": 5.1,
        "_picture": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg",
        "_nickname": "Spider-Man"
      },
      {
        "_name": "James Howlett",
        "_height": 5.3,
        "_picture": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg",
        "_nickname": "Wolverine"
      },
      {
        "_name": "Robert Bruce ",
        "_height": 5.9,
        "_picture": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
        "_nickname": "Hulk"
      },
      {
        "_name": "Thor Odinson",
        "_height": 6.6,
        "_picture": "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
        "_nickname": "Thor"
      },
      {
        "_name": " Piotr Rasputin",
        "_height": 6,
        "_picture": "http://x.annihil.us/u/prod/marvel/i/mg/6/e0/51127cf4b996f/standard_xlarge.jpg",
        "_nickname": "COLOSSUS"
      },
      {
        "_name": "Ororo Munroe",
        "_height": 5.11,
        "_picture": "http://x.annihil.us/u/prod/marvel/i/mg/c/c0/537bc5db7c77d/standard_xlarge.jpg",
        "_nickname": "Storm"
      },
      {
        "_name": "Remy Etienne ",
        "_height": 6.1,
        "_picture": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/537baad144c79/standard_xlarge.jpg",
        "_nickname": "Gambit"
      },
      {
        "_name": "Norrin Radd",
        "_height": 6.4,
        "_picture": "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png",
        "_nickname": "Silver Surfer"
      }
    ]
  },
  reducers: {
    editHeroe: (state,  action) => {
      const {heroe, index} = action.payload;

      const newHeroes = [ ...state.heroes];
      newHeroes[index] = {...heroe};



      return { ...state, heroes: newHeroes }
    },
    deleteHeroe: (state, action) => {
      const {index: indexId} = action.payload;

      const newDeleteHeroe = state.heroes.filter((heroe,index )=> index != indexId)
    

      return {...state, heroes: newDeleteHeroe}

    }
  }
})

export const { editHeroe, deleteHeroe } = counterSlice.actions


export default counterSlice.reducer