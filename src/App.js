import './App.css';
import Drawer from './components/Drawer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer current="home" />
      <main style={{ flex: 1, background: '#0f1115', color: '#e6f0ff', padding: 24 }}>
        <AboutUs />
      </main>
    </div>
  );
}

export default App;
