import Component from '../lib/core/Component.js';

export default class WinnerContainer extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  initEventListener() {
    this.$target.addEventListener('click', e => {
      if (e.target.id === 'restart-btn') {
        this.props.reset();
      }
    });
  }

  render() {
    this.$target.innerHTML = `
      <h3 class="winner">π μ΅μ’ μ°μΉμ: ${this.props.winners.join(',')}</h3>
      <button id="restart-btn">λ€μ μμνκΈ°</button>
    `;
  }
}
