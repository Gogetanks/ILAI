import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const Navbar = () => {
  return (
    <NAVBAR>
      <nav>
        <ul>
          <li><Link to="/">InfiniteLoop AI</Link></li>
          <li className='right'><Link to="/">Login</Link></li>
          <li className='right'><Link to="/">Contact</Link></li>
          <li className='right'><Link to="/aboutus">Our Services</Link></li>
        </ul>
      </nav>
    </NAVBAR>
  );
};
const NAVBAR = styled.nav`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-left: 5rem;
  padding-top;2rem;
  padding-right: 5rem;
  overflow: hidden;
  font-size: 1.4rem;
  margin-left:-1rem;
  margin-right:-1rem;
          font-family: 'Oswald', sans-serif;
        font-family: 'Work Sans', sans-serif;  
}

li {
  float: left;

}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-radius: 5rem;
}
.right{
  float: right;
}

`;

export default Navbar;