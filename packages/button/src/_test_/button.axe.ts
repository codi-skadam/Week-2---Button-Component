import { OrxeButton } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-button-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Button;

  beforeEach(async () => {
    OrxeButton;
    document.body.appendChild(document.createElement('Button'));
    Button = document.querySelector('Button') as OrxeButton;
  });

  afterEach(() => {
    Button.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Button);
    expect(result).toHaveNoViolations();
  });
});
