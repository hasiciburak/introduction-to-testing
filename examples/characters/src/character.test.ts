import { describe, it, vi } from 'vitest';
import { Character } from './character.js';
import { c } from 'vite/dist/node/types.d-aGj9QkWt.js';

const firstName = 'John';
const lastName = 'Doe';
const role = 'Warrior';

describe('Character', () => {
  let character: Object;

  it('should create a character with a first name, last name, and role', () => {
    beforeEach(() => {
      vi.spyOn(Math, 'random').mockImplementation(() => 0.5);
      character = new Character(firstName, lastName, role, 1);
    });

    expect(character).toEqual({
      charisma: 12,
      constitution: 12,
      createdAt: expect.any(Date),
      dexterity: 12,
      firstName,
      id: expect.any(String),
      intelligence: 12,
      lastModified: expect.any(Date),
      lastName,
      level: 1,
      role,
      strength: 12, 
      wisdom: 12,
    });
  });

  it('should allow you to increase the level', () => {
    const character = new Character('John', 'Doe', 'Warrior');

    character.levelUp();

    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character('John', 'Doe', 'Warrior');
    const lastModified = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(lastModified);
  });
});
