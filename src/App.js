import './App.css';
import Drawer from './components/Drawer';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer current="home" />
      <main style={{ flex: 1, background: '#0f1115', color: '#e6f0ff', padding: 24 }}>
        <h1 style={{ marginTop: 0 }}>Welcome</h1>
        <p>This is a placeholder content area for your portfolio sections.</p>
      </main>
    </div>
  );
}

export default App;
