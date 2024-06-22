import gambar from "./assets/angel-warrior-anime-girl-sword-8k-wallpaper-uhdpaper.com-731@3@a.jpg";
import React from 'react';

function App() {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '-10vh', // Membuat kontainer memiliki tinggi minimal 100% dari tinggi viewport
  };

  const titleStyle = {
    color: '#333',
    fontSize: '2.5rem',
    margin: '1px 0',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '5px auto',
    border: '5px solid #ddd',
    borderRadius: '100px',
    boxShadow: '0 10px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',

  };

  const imgHoverStyle = {
    transform: 'scale(1.05)',
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Walaweeeee</h1>
      <img
        src={gambar}
        alt="Deskripsi Gambar"
        style={hover ? { ...imgStyle, ...imgHoverStyle } : imgStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
}

export default App;
