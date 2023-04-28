const root = ReactDOM.createRoot(document.getElementById('root'));
function FormattedDate(props){
    return(<h2>It is {props.date.toLocaleTimeString()}.</h2>)
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(() => { this.tick() }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    render() {
        return (
            <div>
                <h1>안녕 세상아!</h1>
                <h2>지금 {this.state.date.toLocaleTimeString()}이야.</h2>
                <FormattedDate date={this.state.date}/>
            </div>
        )
    }
}
root.render(<Clock />);
