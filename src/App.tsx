import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './features/styles';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from 'features/navigation';
import { FC } from 'react';
import HomePage from 'pages/Home.page';
import LocationPage from 'pages/Location.page';
import { store } from 'store/store';
import FollowingPage from 'pages/Following.page';
import { LanguageComponent, LanguageProvider } from 'features/language';
import { TrackingProvider } from 'features/tracking/tracking.context';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <TrackingProvider>
        <LanguageProvider>
          <GlobalStyle />
          <LanguageComponent />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/location/:id" element={<LocationPage />} />
            <Route path="/following" element={<FollowingPage />} />
          </Routes>
        </LanguageProvider>
      </TrackingProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
