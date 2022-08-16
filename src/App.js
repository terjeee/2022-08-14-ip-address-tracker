import Header from './components/Header';
import Map from './components/Map';

import css from './App.module.css';

function App() {
  return (
    <main className={css.app}>
      <Header />
      <Map />
    </main>
  );
}

export default App;
