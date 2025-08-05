import { useState } from "react";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailBoxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import LetterForm from "./components/LetterForm/LetterForm";
import "./App.css";

//practice data
const initialState = [
  { _id: 1, boxSize: "Medium", boxOwner: "Bronte" },
  { _id: 2, boxSize: "Medium", boxOwner: "Laine" },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = (newLetter) => {
    newLetter.mailboxId = letters.length + 1;
    console.log(newLetter);
    setLetters([...letters, newLetter]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        ></Route>
        <Route
          path="/mailboxes"
          element={<MailBoxList mailboxes={mailboxes} />}
        ></Route>
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        ></Route>
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        ></Route>
        <Route
          path="/new-Letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
