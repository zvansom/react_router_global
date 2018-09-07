import React, { Component } from 'react';

export default class Food extends Component {
  state = {
    food: {},
  }

  async componentDidMount() {
    const searchTerm = 'chicken';
    const API_KEY = '6263211e212479e5d6d19ed2ea07a56b';
    const endpoint = 'https://www.food2fork.com/api/search?key=';
    try {
      const res = await fetch(`${endpoint}${API_KEY}&q=${searchTerm}`);
      const recipes = await res.json();

      this.setState({
        food: recipes.recipes[Math.floor(Math.random() * (20))],
      });
    } catch (e) { console.log(e); }
  }

  render() {
    const { food } = this.state;
    return (
      <div>
        <h1>FOOD PAGE</h1>
        <p>Here's a food!</p>

        <h2>{food.title}</h2>
        <img src={food.image_url} alt={food.title} />
      </div>
    );
  }
}
