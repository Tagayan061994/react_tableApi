import React from "react";
import Table from "./table";
import axios from "axios";

export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      this.setState({
        apiData: res.data
      });
    });
  }

  render() {
    if (this.state.apiData) {
      return (
        <div>
          {
            <Table
              history={this.props.history}
              apiData={this.state.apiData}
              title={"Users Table"}
            />
          }
        </div>
      );
    } else {
      return <h1>There is no content to view</h1>;
    }
  }
}
