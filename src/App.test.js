import { render, screen } from '@testing-library/react';
import App from './App';

test('finds textbox by role and placeholder', () => {
  render(<App />)
const inputNode = screen.getByPlaceholderText('Message')
});
