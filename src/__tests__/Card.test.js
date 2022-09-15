import React from 'react'
import { Card } from '../components/Card/Card'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import articleMock from '../__mocks__/articleMock.json'

describe("components-Card", () => {
  test("Debería renderizar con los parametros correctos", () => {
    const { container } = render(<Card item={articleMock} />);
    expect(container).not.toBeEmptyDOMElement();
    expect(screen.getAllByRole('heading')).toBeTruthy();
    expect(screen.getByRole('img')).toBeTruthy();
    expect(screen.getByText(/Che Guevara/i)).toBeTruthy();
  });
  test("No debería renderizar con los parametros incorrectos", () => {
    const { container } = render(<Card />);
    expect(container).toBeEmptyDOMElement();
  });
});