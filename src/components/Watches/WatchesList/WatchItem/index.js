import { Component } from 'react';
import { calcTime } from '../../../../utils';

export default class WatchesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: calcTime(this.props.item.timezone),
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ time: calcTime(this.props.item.timezone) }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="watches-list__item">
        <div className="watches-list__item-body">
          <p className="watches-list__item-name">{this.props.item.name}</p>
          <p className="watches-list__item-time">{this.state.time}</p>
        </div>
        <div
          className="watches-list__item-delete material-icons"
          onClick={() => this.props.onDelete(this.props.item.id)}
        >
          close
        </div>
      </div>
    );
  }
}
