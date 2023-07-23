import { RouterProvider } from 'react-router-dom';
import router from './Pages/Routes/Routes/Routes';

function App() {
  return (
    <div className="max-w-[1290px] mx-auto overflow-hidden" style={{ fontFamily: 'Jost' }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
