import { OrxeButton } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-button-axe', () => {
  let button;
  beforeEach(function () {
      OrxeButton;
      document.body.appendChild(document.createElement('orxe-button'));
      button = document.querySelector('orxe-button');
  });
  afterEach(function () {
      button.remove();
  });
  
  async function setProperty(property, value) {
    button[property] = value;
    await button.requestUpdate();
}
  it('should support all WCAG Accessibility Rules. when default button is rendered', async () => {
    await setProperty('a11yLabel', 'button');
    const result = await axe(button);
    expect(result).toHaveNoViolations();
  });
});
