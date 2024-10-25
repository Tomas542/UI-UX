import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Rooms from './pages/Rooms.tsx';
import Menu from './pages/Menu.tsx';
import Games from './pages/Games.tsx';
// import theme from "./theme";

// import { ChakraProvider } from '@chakra-ui/react';

// export const App = () => {
//   return (
//     <ChakraProvider theme={theme}>
//        <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </ChakraProvider>
//   );
// }
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App