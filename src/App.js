import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';

const list = [
  {
    name: "Person 1",
    phone: "123-4567",
    id: 11,
    hidden:true
  },
  {
    name: "Person 2",
    phone: "123-4567",
    id: 12,
    hidden:true
  },
  {
    name: "Person 3",
    phone: "123-4567",
    id: 23,
    hidden:true
  },
  {
    name: "Person 4",
    phone: "123-4567",
    id: 34,
    hidden:true
  },
  {
    name: "Person 5",
    phone: "123-4567",
    id: 45,
    hidden:true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    let updatedList = this.state.list.map(obj => {
      if(obj.id === item.id) {
        return Object.assign({}, obj, {
          hidden:!item.hidden
        });
      }
      return obj;
    });
    this.setState({
      list : updatedList
    });
  }

  render() {
    return (
        <div>
          <table>
            <tbody>
            {this.state.list.map(item =>
                <tr key={item.itemId}>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.phone}
                  </td>
                  <td >
                    <button hidden={item.hidden}> Action </button>
                  </td>
                  <td>
                    <button
                        className="delete"
                        onClick={() => this.handleClick(item)}
                    >
                      Change
                    </button>
                  </td>
                </tr>
            )}
            </tbody>
          </table>
        </div>
    );
  }
}
// ReactDOM.render(<App />, document.getElementById("app"));
export default App;
