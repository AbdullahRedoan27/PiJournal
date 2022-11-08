import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="w-11/12 mx-auto rounded-lg">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
