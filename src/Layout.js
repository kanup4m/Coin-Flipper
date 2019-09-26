import React, { Component } from 'react';
class Layout extends Component {
	static defaultProps = {
		coins: [
			{
				side: 'head',
				imgSrc: 'https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png'
			},
			{
				side: 'tail',
				imgSrc: 'https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png'
			}
		]
	};

	state = {
		img: null,
		flip: 0,
		head: 0,
		tail: 0
	};

	handleClick = () => {
		const num = Math.floor(Math.random() * Math.floor(2));
		console.log(num);
		const newCoin = this.props.coins[num];
		console.log(newCoin);
		this.setState({
			img: newCoin,
			flip: this.state.flip + 1,
			head: this.state.head + (newCoin.side === 'head' ? 1 : 0),
			tail: this.state.tail + (newCoin.side === 'tail' ? 1 : 0)
		});
	};
	render() {
		return (
			<div>
				<h1>Let's flip a coin</h1>
				{this.state.img && <img src={this.state.img.imgSrc} alt={this.state.img.side} />}
				<br />
				<button onClick={this.handleClick}>Flip Me! </button>
				<h2>
					Out of {this.state.flip} flips, there have been {this.state.head} heads and {this.state.tail} tails
				</h2>
			</div>
		);
	}
}

export default Layout;
