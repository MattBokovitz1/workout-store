import React, { Component } from "react";
import axios from "axios";

export default class WeightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: [],
      renderWeights: [],
    };
  }
  componentDidMount() {
    axios.get("https://exercise-be.herokuapp.com/weights").then((res) => {
      console.log(res.data.weightsData);
      this.setState({
        weights: res.data.weightsData,
        renderWeights: res.data.weightsData,
      });
    });
  }

  render() {
    return (
      <main className="weight-list">
        {this.state?.weights?.map((weight) => (
          <div className="weight-card" key={weight.id}>
            <img className="weight-image" src={weight.img} alt={weight.name} />
            <div className="weight-details">
              <h2 className="weight-name">{weight.name}</h2>
              <p className="weight-made">{weight.made}</p>
              <p>{weight.description}</p>
              <p>color: {weight.color}</p>
              <div className="weight-bottom-row">
                <p>${weight.price}</p>
              </div>
              <button
                className="weight-button"
                onClick={() => this.props.addToCart(weight)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
