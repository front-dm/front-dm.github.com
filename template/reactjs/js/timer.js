var Clock = React.createClass({
	getInitialState: function () {
		return {
			play: false,
			minutes: 0,
			seconds: 0
		};
	},

	tick: function (){
		this.seconds = this.state.seconds + 1;
		this.minutes = this.state.minutes;

		this.setState({
			seconds: this.seconds
		});

		if(this.seconds == 60){
			this.setState({
				minutes: this.minutes + 1,
				seconds: 0
			});
		}

	},

	startTimer: function (){
		this.timer = setInterval(this.tick, 1000);
		this.setState({
			play: true
		});
	},

	pauseTimer: function () {
		clearInterval(this.timer);
		this.setState({
			play: false
		});
	},

	stopTimer: function (){
		clearInterval(this.timer);
		this.setState({
			play: false,
			minutes: 0,
			seconds: 0
		});
	},

	render: function () {
		return (<div>
					{this.state.play ? <img src="img/pause.png" onClick={this.pauseTimer}/> : <img src="img/play.png" onClick={this.startTimer}/>}
					<span className="timer-text">{this.state.minutes}:{this.state.seconds}</span>
					<img src="img/reset.png" onClick={this.stopTimer}/>
				</div>
					);
	}
});

ReactDOM.render(<Clock />, document.getElementById('content'));
