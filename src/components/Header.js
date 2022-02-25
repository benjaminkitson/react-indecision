import React from 'react';

Header.defaultProps = {
  title: 'Random',
  subtitle: 'Randomly choose stuff, I guess?'
};

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

export default Header;
