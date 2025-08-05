import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const currentMailbox = mailboxes.find((mailbox) => {
    return mailbox._id === Number(mailboxId);
  });

  console.log(currentMailbox);
  return (
    <>
      <h1>Mailbox {currentMailbox._id} </h1>
      <h2>Details</h2>
      <p>Boxholder: {currentMailbox.boxOwner}</p>
      <p>Box Size: {currentMailbox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
