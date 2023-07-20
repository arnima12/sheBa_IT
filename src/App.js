import { RouterProvider } from 'react-router-dom';
import router from './Pages/Routes/Routes/Routes';
import { SocketProvider } from './context/SocketProvider/Socket';

function App() {
  return (
    <div className="max-w-[1290px] mx-auto overflow-hidden" style={{ fontFamily: 'Jost' }}>
      <SocketProvider><RouterProvider router={router} /></SocketProvider>
    </div>
  );
}

export default App;
