import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe.todo('logger', () => {
  describe('development', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'development');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('logs the console in development mode', () => {
      const logSpy = vi.spyOn(console, 'log');
      log('Hello World');
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledWith('Hello World');
    });
  });

  describe('production', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'production');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should not log the console in production mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello World');
      expect(logSpy).not.toHaveBeenCalled();
    });
  });
});
