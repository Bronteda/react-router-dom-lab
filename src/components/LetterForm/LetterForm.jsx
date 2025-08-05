import { useState } from "react";
import { useNavigate } from "react-router";

const initialiseState = {
  mailboxId: 0,
  recipient: "",
  message: "",
};

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState(initialiseState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData);
    addLetter(formData);
    setFormData(initialiseState);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailbox}
          onChange={handleChange}
        >
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          name="recipient"
          id="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <input
          type="textarea"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit"> Send </button>
      </form>
    </>
  );
};

export default LetterForm;
