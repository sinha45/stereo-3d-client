
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider routes={routes}></RouterProvider>
    </div>
  );
}

export default App;
