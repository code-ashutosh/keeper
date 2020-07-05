import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import SignIn from "./SignIn";
import fire from '../config/fire';
function App() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  return (
    <div>
      {user ? (
        <div>
          <Header />
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
          <Footer />{" "}
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
