import {  useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {API_URL} from "./config"


interface Deck{
  _id: string | null;
  title: String;
}


function App() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    try {
      axios.get(`${API_URL}/displayDeck`)
      .then((data)=> {
        setDecks(data.data);
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>){
    setTitle(e.target.value);
  }

  async function handleDelete (deckId: any){
    await axios.delete(`${API_URL}/deleteDeck/${deckId}`)
    .then((data)=> {
      console.log(data.data)
    })
    setDecks(decks.filter((deck)=> deck._id !== deckId));

  }

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    axios.post(`${API_URL}/createDeck`,{title})
    .then((data)=> {
      console.log(data.data)
      setDecks([...decks, data.data]);
    });
    setTitle("");
    // setDecks()
  }

  return (
    <>
      <div className='container'>
        {decks.map((deck)=> (
          <div className="deck" key={deck._id}>
            <button className='deleteButton' onClick={() => handleDelete(deck._id)}>🗑️</button>
            <Link to={`deck/${deck._id}`}><h1>{deck.title}</h1></Link>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor='deck-title'>
          Deck Title:
          <input value={title} placeholder='eg. Shopping Cart' id='deck-title' onChange={handleTitleChange}></input>
        </label>
        <button>Create Deck</button>
      </form>
    </>
  )
}

export default App
