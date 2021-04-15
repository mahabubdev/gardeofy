import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('testing app rendering', async () => {
  const containTest = document.createElement('div');
  containTest.id = 'test_react_render';
  await render(<App />, containTest);
  setTimeout(() => {
    containTest.remove();
  }, 5000)
});
