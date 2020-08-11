import React, { Component } from "react";
import IceCreamList from "./components/icecream-list/icecream-list.component";
import "./App.scss";
import Logo from "./assets/logo.png";
import BackGroundIceCreams from "./assets/ice1.jpg";
import IceCreamData from "./assets/icecream-list";
import CoffeeData from "./assets/coffee-list";

class App extends Component {
  constructor() {
    super();
    this.state = {
      iceCreamList: [],
      coffeeList: [],
    };
  }

  componentDidMount() {
    this.setState({ iceCreamList: IceCreamData, coffeeList: CoffeeData });
  }

  render() {
    const { iceCreamList, coffeeList } = this.state;
    return (
      <div className="App">
        <header className="header">
          <div className="header__box">
            <img src={Logo} alt="logo" className="logo" />{" "}
            <span className="headline">בחר פריט מהתצוגה</span>
          </div>
        </header>
        <div className="content">
          <div className="content__bg1"></div>
          <IceCreamList iceCreamList={iceCreamList} coffeeList={coffeeList} />
        </div>
      </div>
    );
  }
}

export default App;
