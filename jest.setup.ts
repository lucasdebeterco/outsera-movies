require('@testing-library/jest-dom')

Element.prototype.scrollIntoView = jest.fn()
HTMLElement.prototype.scrollIntoView = jest.fn()