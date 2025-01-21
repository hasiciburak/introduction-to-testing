import { screen, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createButton } from './button.js';

describe('createButton', () => {
  it('should create a button element', () => {
    const button = createButton();
    expect(button).toBeInstanceOf(HTMLButtonElement);

    expect(button.tagName).toBe('BUTTON');
  });

  it('should have the text "Click Me"', () => {
    const button = createButton();

    expect(button.textContent).toBe('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', { name: 'Click Me' });

    await userEvent.click(button);

    expect(button.textContent).toBe('Clicked!');
  });
});
