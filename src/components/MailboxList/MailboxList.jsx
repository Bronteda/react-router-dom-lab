import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.length > 0 ? (
          props.mailboxes.map((mailbox) => (
            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>
                {" "}
                Mailbox {mailbox._id}{" "}
              </Link>
              {/* {mailbox.boxOwner} has a {mailbox.boxSize} Mailbox */}
            </li>
          ))
        ) : (
          <p>Mailbox Is empty </p>
        )}
      </ul>
    </>
  );
};

export default MailboxList;
