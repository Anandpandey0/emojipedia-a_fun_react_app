import React, { useState } from "react";
import "./styles.css";

const emojisList = {
  "😛":
    "Can variously convey a sense of fun, excitement, silliness, cuteness, happiness, or jesting, as if saying Just kidding!",
  "😶": " speechlessness, humility, and silence",
  "😪": " a character is tired or sleeping in anime or manga",
  "🤯": "shock",
  "😟": "anxiety",
  "🍇": "Depicted as red (purple-colored) grapes.",
  "🧗": "A rock climber",
  "🏌️‍♂️": "The Man Golfing emoji ",
  "😚":
    "A yellow face with smiling eyes, rosy cheeks, and puckered lips giving a kiss.",
  "😬":
    " represent a range of negative or tense emotions, especially nervousness, embarrassment, or awkwardness",
  "🤢": "physical illness or general disgust",
  "😢":
    "anx convey a moderate degree of sadness or pain, usually less intensely than 😭 Loudly Crying Face.iety"
};

const emojis = Object.keys(emojisList);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Meaning will be shown here..");

  function interpreter(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojisList) {
      setMeaning(emojisList[inputEmoji]);
    } else {
      setMeaning("Sorry, We don't have this in out database");
    }
  }

  function clickOnEmoji(inputEmoji) {
    setMeaning(emojisList[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <input
        onChange={interpreter}
        value={emoji}
        placeholder={"Search here"}
        style={{
          padding: "2rem",
          minWidth: "75%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => clickOnEmoji(emoji)}
          style={{ fontSize: "2.5rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
