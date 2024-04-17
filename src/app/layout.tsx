"use client"; 
import React, { useState } from 'react';
import './globals.css'; // Tuodaan globaalit tyylitiedostot

const tarotCards = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Hierophant",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgement",
  "The World"
];

const Sidebar = () => {
  const [showImage, setShowImage] = useState(false);

  const handleCardClick = (cardName: string) => {
    // Aseta tila, joka kertoo, että kuva näytetään
    setShowImage(true);
    
    // Aseta kuvaan oikea lähde ja alt-teksti
    const image = document.getElementById('main-image') as HTMLImageElement;
    if (image) {
      image.src = 'The_Fool.jpg';
      image.alt = cardName;
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-content">
          <h2>Tarot-kortit</h2>
          <ul>
            {tarotCards.map((card, index) => (
              <li key={index}>
                {/* Lisää napille tapahtumankäsittelijä */}
                <button id={card} onClick={() => handleCardClick(card)}>{card}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="image-container">
          {/* Näytä kuva vain jos showImage on true */}
          {showImage && <img id="main-image" src="" alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
