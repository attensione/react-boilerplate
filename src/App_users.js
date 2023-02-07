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
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xhr.onload = () => {
            if(xhr.status===200) {
                this.setState({
                    users: JSON.parse(xhr.responseText),
                    isLoaded: true,
                });
                console.log(JSON.parse(xhr.responseText));
            };
        };
        xhr.send(null);
    };

    render() {
        const { isLoaded, users } = this.state;
        if(!isLoaded) return(<div><h1> Pleses wait some time.... </h1></div>);
        return (
          <ul>
            {
                users.map((item, index) => (
                    <li key={ index }>
                      <strong>ID:</strong> { item.id } / <strong>NAME:</strong> { item.name } / <strong>USERNAME:</strong> { item.username } / <strong>EMAIL:</strong> { item.email }
                    </li>
                ))
            }
          </ul>
        );
    };
};

export default App;
