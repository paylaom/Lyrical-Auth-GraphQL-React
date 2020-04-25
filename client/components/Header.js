import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link, useHistory } from 'react-router-dom';
import { GET_USER } from '../queries/currentUser';
import { LOGOUT } from '../mutations/auth';

const Header = () => {
  const { loading, data } = useQuery(GET_USER);
//   const [logout] = useMutation( LOGOUT, { refetchQueries: [{ query: GET_USER, data: { user: null } }]});
  const [logout] = useMutation( LOGOUT, { update(cache) { cache.writeQuery({ query: GET_USER, data: { user: null } })}});

//   const [addSong] = useMutation(ADD_SONG, { refetchQueries: [{ query: GET_SONGS }]});
//   const history = useHistory();

//   const onClicklogout = e => {
//     // e.preventDefault();
//     logout({ }).then(({data}) => {
//         console.log("Hello I M");
//       history.push("/login");
//     })
//   }

  if (loading) return <div />;

  const renderButtons = () => {
    const { user } = data;
    if (user) {
      return (
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/songlist" className="brand-logo left">Home</Link>
        <ul className="right">
          {renderButtons()}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
