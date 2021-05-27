import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRes from './__mocks__/giphy-response.json'
import fetchMock from 'jest-fetch-mock'
import App from './App';

// Tests to cover:
// 1. User enters a query in the form's input and submits
// 2. When the response arrives, user sees data is rendered

fetchMock.enableMocks();

describe('Gif search form', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('loads gifs and renders gifs on the page ', async () => {

    fetch.once(JSON.stringify(mockRes));

    render(
      <App/>
    );

    const gifInput = screen.getByLabelText("Search your favourite GIF");
    userEvent.type(gifInput, 'duggee');

    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);

    const numberOfImages = await screen.findAllByAltText(/desc:.*?/i);
    expect(await numberOfImages).toHaveLength(27);

    expect(fetch).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/search?q=duggee&api_key=g4PZMbDnfMsCegCjFQTZZCwhaH3q4RKE&limit=27');
    screen.debug(numberOfImages);
  })

})