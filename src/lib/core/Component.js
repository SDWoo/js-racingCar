export default class Component {
  $target;
  props;

  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.initEventListener();
  }
  initEventListener() {}
  render() {
    this.mountTemplate();
    this.mountChildTemplate();
  }

  mountTemplate() {}
  mountChildTemplate() {}
}
