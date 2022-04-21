import React from 'react';
import Header from './components/Header';
import News from './components/News';
function App() {
  return (
    <section className="app contenedor-app">
      <Header />
      <div className="container contenedor-noticias">
        <News />
      </div>
    </section>
  );
}

export default App;
