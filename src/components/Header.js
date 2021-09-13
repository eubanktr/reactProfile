import React from 'react';

// Create a Header with a Navbar

// Display Welcome message/SiteName etc on the left or center

// Allow li to be customized from variables
  // add a tag with link
export default function Header(props) {
  // declare variables
  const h1Text = "Thomas Eubank"
  const link1Text = "About Me"
  const link2Text = "Projects"
  const link3Text = "GitHub"
  const linkStyle = { textDecoration: 'none', color: '#C1C9CA', fontSize: '20px', padding: '15px 25px 15px 25px' };
  

  return (
    <header  className=""
    style={{
      display: 'flex',
      fontFamily: 'helvetica',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 25px 15px 25px',
      color: '#C1C9CA',
      backgroundColor: '#264473'
    }}
    >
      <h1>{h1Text}</h1>
      <nav>
        <ul className="list-unstyled" 
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '15px 25px 15px 25px'
        }}
        >
          <li><a style={linkStyle} href="/" alt="">{link1Text}</a></li>
          <li><a style={linkStyle} href="#" alt="">{link2Text}</a></li>
          <li><a style={linkStyle} href="https://www.github.com/eubanktr" target="_blank">{link3Text}</a></li>
        </ul>
      </nav>
    </header>
  )
};