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
      <h3 class="winner">🏆 최종 우승자: ${this.props.winners.join(',')}</h3>
      <button id="restart-btn">다시 시작하기</button>
    `;
  }
}
