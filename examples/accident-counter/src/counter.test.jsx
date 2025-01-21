import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';
import { act } from 'react';
import { vitest } from 'vitest';
import { after } from 'node:test';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');

    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const unit = screen.getByTestId('counter-unit');

    expect(unit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const counter = screen.getByTestId('counter-count');

    // We added await keyword since userEvent.click is an async function and
    // we might need to wait for the DOM to update.
    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(counter).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const unit = screen.getByTestId('counter-unit');

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(unit).toHaveTextContent('day');
  });

  // it('decrements the count when the "Decrement" button is clicked', async () => {
  //   render(<Counter initialCount={1} />);

  //   const decrementButton = screen.getByRole('button', {
  //     name: /decrement/i,
  //   });
  //   expect(decrementButton).not.toBeDisabled();
  // });

  it('does not allow decrementing below 0', async () => {
    const decrementButton = screen.getByRole('button', {
      name: /decrement/i,
    });
    const count = screen.getByTestId('counter-count');

    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(count).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });

    const resetButton = screen.getByRole('button', { name: /reset/i });
    const count = screen.getByTestId('counter-count');

    await act(async () => {
      await userEvent.click(resetButton);
    });

    expect(count).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when count is 0', () => {
    // Arrange
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });
    const count = screen.getByTestId('counter-count');

    // Assert
    expect(count).toHaveTextContent('0');
    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it.todo('updates the document title based on the count', async () => {});

  afterEach(() => {
    vitest.restoreAllMocks();
  });
});
