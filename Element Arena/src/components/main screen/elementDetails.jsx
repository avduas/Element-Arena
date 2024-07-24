import React from 'react';
import './elementDetails.css';

export default function ElementDetails({ element }) {
    if (!element) return null;

    const elementData = {
        Fire: {
            attack: 8,
            defense: 4,
            speed: 6,
            magic: 7,
            sphere: "Fire sphere",
            description: "You have chosen Fire, the element of destructive power and indomitable energy. Your attack will be as hot and powerful as the flame itself. Prepare to burn everyone in your path and leave a trail of ash behind you."
        },
        Water: {
            attack: 6,
            defense: 7,
            speed: 5,
            magic: 8,
            sphere: "Water sphere",
            description: "You have chosen Water, the element of flexibility and unchanging strength. Your attack will be like a powerful river flow that washes away all obstacles. Be ready to drown your enemies and remain calm in the storm."
        },
        Earth: {
            attack: 7,
            defense: 8,
            speed: 4,
            magic: 5,
            sphere: "Earth sphere",
            description: "You have chosen Earth, the element of stability and power. Your attack will be like an earthquake, destroying everything in its path. Get ready to crush your enemies with the indomitable force of nature."
        },
        Wind: {
            attack: 5,
            defense: 6,
            speed: 9,
            magic: 7,
            sphere: "Wind sphere",
            description: "You have chosen Air, the element of freedom and swiftness. Your attack will be like a hurricane that leaves nothing in its path. Get ready to lift your enemies into the sky and tear them apart in a whirlwind."
        },
        Ice: {
            attack: 7,
            defense: 7,
            speed: 5,
            magic: 8,
            sphere: "Ice sphere",
            description: "You have chosen Ice, the element of cold and ruthlessness. Your attack will be like frost, paralyzing all living things. Get ready to freeze your enemies to the ground and smash them into pieces."
        },
        Lightning: {
            attack: 9,
            defense: 5,
            speed: 8,
            magic: 7,
            sphere: "Lightning",
            description: "You have chosen Lightning, the element of speed and fury. Your attack will be like a lightning strike, instantaneous and devastating. Be ready to strike from the sky and crush your enemies in an instant."
        }
    };

    const { attack, defense, speed, magic, sphere, description } = elementData[element];

    return (
        <div className="elementDetails">
            <h2>{element}</h2>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Speed: {speed}</p>
            <p>Magic: {magic}</p>
            <p>Attack sphere: {sphere}</p>
            <p>{description}</p>
        </div>
    );
}
