import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailBoxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import "./App.css";

const initialState = [
  { _id: 1 },
  { _id: 2, boxSize: "Medium", boxOwner: "Laine" },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
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
          element={<MailboxDetails mailboxes={mailboxes} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
