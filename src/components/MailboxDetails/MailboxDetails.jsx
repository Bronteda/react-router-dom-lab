import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const currentMailbox = mailboxes.find((mailbox) => {
    return mailbox._id === Number(mailboxId);
  });

  const selectedLetters = letters.filter((letter) => {
    return letter.mailboxId === Number(mailboxId);
  });

  //console.log(currentMailbox);
  return (
    <>
      <h1>Mailbox {currentMailbox._id} </h1>
      <h2>Details</h2>
      <p>Boxholder: {currentMailbox.boxOwner}</p>
      <p>Box Size: {currentMailbox.boxSize}</p>
      <p>
        Letters:
        {selectedLetters.map((letter) => (
          <span key={letter.mailboxId}> {letter.message} </span>
        ))}
      </p>
    </>
  );
};

export default MailboxDetails;
