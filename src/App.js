import React, { Component } from "react";
import HemisphereDisplay from "./HemisphereDisplay";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: null,
  //     errorMessage: "",
  //   };
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({ latitude: position.coords.latitude });
  //     },
  //     (error) => this.setState({ errorMessage: error.message })
  //   );
  // }

  // Viet State kieu nay cho gon
  state = {
    latitude: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    const { latitude, errorMessage } = this.state;

    // if (this.state.errorMessage && !this.state.latitude) {
    //   return <div>{this.state.errorMessage}</div>;
    // }
    // if (!this.state.errorMessage && this.state.latitude) {
    //   return <HemisphereDisplay latitude={this.state.latitude} />;
    // } else {
    //   return <div>Loading...</div>;
    // }

    if (latitude > 1 && !errorMessage) {
      return <HemisphereDisplay latitute={latitude} />;
    } else if (latitude < 1 && !errorMessage) {
      return <HemisphereDisplay latitute={latitude} />;
    } else {
      return <div>Loading... {errorMessage}</div>;
    }

    // return (
    //   <div>
    //     {latitude}
    //     {this.state.errorMessage}
    //   </div>
    // );
  }
}
