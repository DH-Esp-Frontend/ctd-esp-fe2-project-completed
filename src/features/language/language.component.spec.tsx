import { render, screen } from '@testing-library/react';
import { LanguageComponent, LanguageProvider } from 'features/language/index';
import userEvent from '@testing-library/user-event';

describe('LanguageComponent', () => {
  describe('when render default state', () => {
    it('should render three languages', async () => {
      render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );
      //
      expect(screen.getByText('Spanish')).toBeInTheDocument();
      expect(screen.getByText('Portuguese')).toBeInTheDocument();
      expect(screen.getByText('English')).toBeInTheDocument();
    });
    it('should render english language selected', async () => {
      render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );
      //
      expect(screen.getByText('English')).toHaveClass('active');
      expect(screen.getByText('Spanish')).not.toHaveClass('active');
      expect(screen.getByText('Portuguese')).not.toHaveClass('active');
    });
    describe('when click on spanish', () => {
      it('should render spanish language selected', async () => {
        render(
          <LanguageProvider>
            <LanguageComponent />
          </LanguageProvider>
        );
        //
        userEvent.click(screen.getByText('Spanish'));
        //
        expect(screen.getByText('Español')).toHaveClass('active');
        expect(screen.getByText('Inglés')).not.toHaveClass('active');
        expect(screen.getByText('Portugués')).not.toHaveClass('active');
      });
    });
    describe('when click on portuguese', () => {
      it('should render portuguese language selected', async () => {
        render(
          <LanguageProvider>
            <LanguageComponent />
          </LanguageProvider>
        );
        //
        userEvent.click(screen.getByText('Portuguese'));
        //
        expect(screen.getByText('Português')).toHaveClass('active');
        expect(screen.getByText('Inglês')).not.toHaveClass('active');
        expect(screen.getByText('Espanhol')).not.toHaveClass('active');
      });
    });
  });
});
