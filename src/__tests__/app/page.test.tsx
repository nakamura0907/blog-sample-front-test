import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home page', () => {
  it('renders Deploy now button', () => {
    render(<Home />);

    const button = screen.getByRole('link', {
      name: /deploy now/i,
    });

    expect(button).toBeInTheDocument();
  });
});
