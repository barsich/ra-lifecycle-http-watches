import { Component } from 'react';
import { calcTime } from '../../../../utils';

export default class WatchesItem extends Component {
  constructor(props) {
    super(props);
    this.item = props.item;
    this.name = this.item.name;
    this.timezone = this.item.timezone;
    this.state = {
      time: calcTime(this.item.timezone),
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ time: calcTime(this.item.timezone) }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="watches-list__item">
        <div className="watches-list__item-body">
          <p className="watches-list__item-name">{this.item.name}</p>
          <p className="watches-list__item-time">{this.state.time}</p>
        </div>
        <div
          className="watches-list__item-delete material-icons"
          onClick={() => this.props.onDelete(this.item.id)}
        >
          close
        </div>
      </div>
    );
  }
}
