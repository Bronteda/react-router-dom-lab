import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* home*/}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* mailbox list */}
            <Link to="/mailboxes">Mailboxes</Link>
          </li>
          <li>
            {/* mailbox form */}
            <Link to="/new-mailbox">New Mailbox</Link>
          </li>
          <li>
            {/* New Letter - form to add a letter  */}
            <Link to="/new-letter">New Letter</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
