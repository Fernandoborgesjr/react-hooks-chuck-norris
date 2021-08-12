import { render, screen } from "@testing-library/react";
import Button from './';

test('renders a button', () => {
  render(<Button>Próxima</Button>);
 
  const buttonEl = screen.getByText('Próxima');
    
  expect(buttonEl).toBeInTheDocument();
});