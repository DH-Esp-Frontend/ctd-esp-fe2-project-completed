import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PaginaDetalle from './pages/Detalle.pagina';
import PaginaInicio from './pages/Inicio.pagina';
import Navbar from 'features/Navigation/Navbar';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="detalle" element={<PaginaDetalle />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
