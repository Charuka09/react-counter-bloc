import { Component } from 'react';

class AsyncSnapshot {
  constructor(data) {
    this._data = data;
  }
  get data() {
    return this._data;
  }
}

class StreamBuilder extends Component {
  constructor(props) {
    super(props);

    const { initialData, stream } = props;

    this.state = {
      snapshot: new AsyncSnapshot(initialData),
    };

    stream.subscribe(
      data => {
        this.setState({
          snapshot: new AsyncSnapshot(data, null),
        });
      }
    );
  }

  render() {
    return this.props.builder(this.state.snapshot);
  }
}

export default StreamBuilder;
