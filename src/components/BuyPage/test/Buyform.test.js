import React from 'react';
import TermsDisclaimer from '../TermsDisclaimer';
// import Paragraph from '../shared/Paragraph';

import { render, screen } from '@testing-library/react';

beforeEach(() => {
  render(<TermsDisclaimer />);
});

it('Should have a paragraph component', () => {
  const styledParagraph = screen.getByText(
    'By making a transaction you are agreeing to our'
  );
  expect(styledParagraph).toHaveTextContent(
    'By making a transaction you are agreeing to our Terms and Conditions'
  );
});

it('Should render a link', () => {
  const a = screen.getByRole('link');
  expect(a).toBeInTheDocument();
});

it('Should contain link to terms and conditions page( goes to homepage for now)', () => {
  const a = screen.getByText(/Terms and Conditions/i);
  expect(a).toHaveAttribute('href', '/');
});
