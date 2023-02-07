import React from 'react';
import './sass/App.scss';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            isLoaded: false,
        };
    }

   componentDidMount() {
        fetch("http://api.nbp.pl/api/exchangerates/tables/A/")
        .then(
            (response) => response.json()
        )
        .then(
            (data) => {
                this.setState({
                    currencies: data[0].rates,
                    isLoaded: true,
                });
            }
        )
    };

    render() {
        const { isLoaded, currencies } = this.state;
        if (!isLoaded) return(<div><h1> Pleses wait some time.... </h1></div>);
        return (
          <ul>
            {
                currencies.map((item) => (
                    <li key={item.code}>
                      <strong>CURRENCY:</strong> {item.currency} / <strong>CODE:</strong> {item.code} / <strong>MID:</strong> {item.mid}
                    </li>
                ))
            }
          </ul>
        )
    }
};

export default App;
