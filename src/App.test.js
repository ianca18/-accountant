import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('devera encontrar o texto altenativo correto', () => {
    render(<App />);
    const textElement = screen.getByText('Contadores');
    expect(textElement).toBeInTheDocument();
  
    const buttonElement = screen.getByText('Iniciar');
    expect (buttonElement).toBeInTheDocument();
  
  });
  
 })