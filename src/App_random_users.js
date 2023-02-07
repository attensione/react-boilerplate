import React from 'react';
import './sass/App.scss';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoaded: false,
        };
    };

   componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://randomuser.me/api/?results=5", true);
        xhr.onload = () => {
            if(xhr.status===200) {
                this.setState({
                    users: JSON.parse(xhr.responseText),
                    isLoaded: true,
                });
            };
        };
        xhr.send(null);
    };

    render() {
        const { isLoaded, users } = this.state;
        console.log(users);
        if(!isLoaded) return(<div><h1> Pleses wait some time.... </h1></div>);
        return (
          <ul>
            {
                users.results.map((item, index) => (
                    <li key={ index }>
                      <strong>ID:</strong> { item.id.value } / <strong>NAME:</strong> { item.name.first } { item.name.last }
                    </li>
                ))
            }
          </ul>
        );
    };
};

export default App;
