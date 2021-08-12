import { render, screen, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from './App';


const response = {value: 'testing', url: 'testing'};

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('renders the app with a button and two images', () => {
  render(<App />);
 
  const buttonEl = screen.getByRole('button');
    
  expect(buttonEl).toBeInTheDocument();
});

test('calls api on button click and update its text', async () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(response.value);

  expect(quoteEl).toBeInTheDocument();

});
