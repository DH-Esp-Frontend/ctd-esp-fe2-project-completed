import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PaginaDetalle from './pages/Detalle.pagina';
import PaginaInicio from './pages/Inicio.pagina';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
    </Provider>
  );
}

export default App;
