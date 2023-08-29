import React from 'react';
import styled from 'styled-components'
const Footer = () => {
  return (
    <Foot>
    <footer>
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
    </Foot>
  );
};
const Foot = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
`;
export default Footer;
