import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg'
              text='My Neighbor Totoro (となりのトトロ) '
              label='fantasy'
              path='/services'
            />
            <CardItem
              src='https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg'
              text='Your Name (君の名は。)'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i.pinimg.com/474x/cc/35/09/cc35099b644481a49b6dcf4daa0d9696.jpg'
              text='In this Corner of the World (この世界の片隅に)'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://miro.medium.com/max/1400/1*C6pHHqvEPGb24NbqjAHCng.jpeg'
              text='The End of Evangelion (新世紀エヴァンゲリオン劇場版 Air/まごころを、君に)'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://m.media-amazon.com/images/M/MV5BZjU1ZTM3MGItNDdiNS00ZjE2LTk4NTAtNTU0YmE4MDJmNjc0XkEyXkFqcGdeQXVyMzkzODQwMA@@._V1_FMjpg_UX1000_.jpg'
              text='Dragon Ball Z: Resurrection ‘F’ (ドラゴンボールZ 復活の「F」)'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;