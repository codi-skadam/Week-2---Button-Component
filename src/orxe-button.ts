import { html, customElement, LitElement,property } from 'lit-element';
import styles from './button-css';
import ripple from '@orxe/theme/dist/utils/js/ripple';
import { initRipple } from '@orxe-components/utils';
import '@orxe-components/icon';

@customElement('orxe-button')
export default class OrxeButton extends LitElement {
  /**
   *
   * @memberof OrxeButton
   * This is used to give the type of a button(primary,tertiary etc)
   */
  @property({ type: String, reflect: true, attribute: 'button-type' })
  buttonType = 'primary';

    /**
   *
   * @memberof OrxeButton
   * This is used to give the size of a button(large,medium,small,extra small)
   */
  @property({ type: String, reflect: true, attribute: 'button-size' })
  buttonSize = 'large';

     /**
   *
   * @memberof OrxeButton
   * This is used to give the size of a button(large,medium,small,extra small)
   */
  @property({ type: String, reflect: true, attribute: 'a11yLabel' })
  a11yLabel = '';

     /**
   *
   * @memberof OrxeButton
   * This is used to give the icon type
   */
  @property({ type: String, reflect: true, attribute: 'icon' })
  icon = '';


      /**
   *
   * @memberof OrxeButton
   * This is used to disable the button
   */
  @property({ type: Boolean,attribute: 'disabled' })
  disabled = false;
  
  _handleClick(event) {
    initRipple(event);
}

returnIcon() {
      return html `
              <orxe-icon
                aria-label=${this.icon}
                icon=${this.icon}
                part="icon"
                size=${this.buttonSize}
              ></orxe-icon>
      `;
}

  render() {
    if(this.buttonType!=='floating'){
      return html`
      <div class="button-container">
      ${
      (this.buttonType === 'text' || this.buttonType === 'icon' || this.buttonType === 'iconAndText')? 
       html`
      <a 
      class="orxe-text orxe-text--${this.buttonSize} ${this.buttonType==='text'?'orxe-text-underline':''}"
      aria-label="${this.a11yLabel} "
      >
      ${this.icon !==''?this.returnIcon():''}
      ${this.buttonType !== 'icon'?html`<slot></slot>`:''}
      </a>
      ` :html`
      <button 
      @click="${this._handleClick}"
      class="
      ${this.buttonType==='primary'? 'primary':''} 
      ${this.buttonType==='tertiary'? 'tertiary':''} 
      ${this.buttonType==='secondary'? 'secondary':''} 
      ${'orxe-btn--'+this.buttonSize}
      orxe-button"
      aria-label="${this.a11yLabel}"
      ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `    
  }
      </div>
    `;
    } else if(this.buttonType === 'floating'){
      return html`
      <div class="floating-button-container">
      <slot></slot>
      </div>`;
    }
    
  }

  // static styles = styles;
  static get styles() {
    return [ripple, styles];
}
}
