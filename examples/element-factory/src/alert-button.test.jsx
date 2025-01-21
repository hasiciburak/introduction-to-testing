import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

  it('should trigger an alert', async () => {
    const handleSubmit = vi.fn();

    render(<AlertButton onSubmiy={handleSubmit} message="Default Message" />);
    const alertSpy = vi.spyOn(window, 'alert');
    const input = screen.getByLabelText('Message');

    const button = screen.getByRole('button', { name: /trigger alert/i });
 
    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'Hello');
      await userEvent.click(button);
    });

    // Look for the alert.
    expect(alertSpy).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Hello');
  });
});
