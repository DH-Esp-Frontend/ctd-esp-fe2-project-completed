import { render } from '@testing-library/react';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';

type Props = {
  store: EnhancedStore;
};

function renderWithProviders(ui: React.ReactElement, { store }: Props) {
  const Wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;
  return { store, ...render(ui, { wrapper: Wrapper }) };
}

export { renderWithProviders };
