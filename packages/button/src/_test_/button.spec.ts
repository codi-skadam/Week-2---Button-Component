import { OrxeButton } from '../';
import { toHaveAttribute } from '@testing-library/jest-dom/matchers';

describe('orxe-button', () => {
  let button;

  let buttonComponent: OrxeButton;

  beforeEach(async function () {

    OrxeButton;

    button = (await document.body.appendChild(document.createElement('orxe-button'))) as OrxeButton;

  });



  afterEach(async function () {

    await button.remove();

  });

  /**

   * Function that sets properties on the Custom Element.

   */

  async function setProperties(properties: object): Promise<void> {

    for (const property in properties) {

      if (button.hasOwnProperty(property)) {

        button[property] = properties[property];

      }

    }

    await button.requestUpdate();

  }

  /**

   * Function that returns an element containing the testId data attribute.

   */

  function getByTestId(id: string): HTMLElement {

    return button.shadowRoot.querySelector(`[class=${id}]`);

  }

  it('should check default value for properties for button', () => {

    expect(button.buttonType).toEqual('primary');

  });

  it('Should set large button size', async () => {
    await setProperties({ buttonSize: 'large' });
    expect(button.buttonSize).toEqual('large');
  });

  it('Should set tertiary button Type', async () => {
    await setProperties({ buttonType: 'tertiary' });
    expect(button.buttonType).toEqual('tertiary');
  });

  it('Should set disabled propery', async () => {
    await setProperties({ disabled: true });
    expect(button.disabled).toEqual(true);
  });

  it('Should set primary button type and small button size', async () => {
    await setProperties({ buttonType: 'primary',buttonSize:'small' });
    expect(button.buttonSize).toEqual('small');
    expect(button.buttonType).toEqual('primary');
  });

  
  it('Should set text button type and large button size', async () => {
    await setProperties({ buttonType: 'text',buttonSize:'large' });
    expect(button.buttonSize).toEqual('large');
    expect(button.buttonType).toEqual('text');
  });



});