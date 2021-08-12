import { render, screen, fireEvent } from "@testing-library/react";
import Quotes from './';

const quote = 'Teste';

test('renders the app with quote and a button', () => {
  render(<Quotes quote={quote}/>);
 
  const buttonEl = screen.getByRole('button');
  const textEl = screen.getByText(quote);
    
  expect(buttonEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});

test('calls a callback when button is pressed', () => {
  const callback = jest.fn();

  render(<Quotes quote={quote} onUpdate={callback} />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);
  expect(callback).toHaveBeenCalledTimes(1);
});