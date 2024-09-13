import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from './config';


function Deck() {
  const [cards, setCards] = useState<string[]>([]);
  const [cardText, setCardText] = useState('');
  let params = useParams();


  useEffect(()=> {
    axios.get(`${API_URL}/decks/${params.deckId}/cards`)
    .then((responce) => {
      setCards(responce.data)
    })
  }, [])

  function handleDelete(cardText: string) {
    // console.log(cardText)
    axios.delete(`${API_URL}/decks/${params.deckId}/cards`, {data: {cardToBeDeleted: cardText}})
    .then((data)=> {
      // console.log("axios responce data", data);
      alert(data.data.message)
      setCards(cards.filter((card)=> cardText !== cardText));
    })
  }

  function handleCardText (e:React.ChangeEvent<HTMLInputElement>) {
    setCardText(e.target.value)
    // console.log(e.target.value)
  }


  function handleSubmit() {
    axios.post(`${API_URL}/decks/${params.deckId}/cards`, {cardText})
    .then((response)=> {
      console.log(response);
    })
  }

  // console.log(cards);
  return (
    <div>
      <div className='container'>
     {cards.map((card, index)=> (
          <div className="deck" key={index}>
            <button className='deleteButton' onClick={() => handleDelete({card})}>🗑️</button>
            <h1>{card}</h1>
          </div>
        ))}
        </div>

        <form onSubmit={handleSubmit}>
        <label htmlFor='deck-title'>
          Deck Title:
          <input value={cardText} placeholder='eg. Shopping Cart' id='deck-title' onChange={handleCardText}></input>
        </label>
        <button>Create Deck</button>
      </form>
    </div>
  )
}

export default Deck