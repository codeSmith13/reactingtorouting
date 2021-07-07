import React from "react";
import { Link } from "react-router-dom";

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((people) => this.setState({ people }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container d-flex">
        <div className="row justify-content-center">
          {this.state.people.map((person) => {
            return (
              <div key={person.id} className="card col-5 m-1 mt-4 bg-primary">
                <div className="card-body bg-dark">
                  <ul className="list-group list-group-flush ">
                    <Link className="link" to={`/People/${person.id}`}>
                      <li className="list-group-item bg-dark">
                        <h5 className="card-title text-center ">
                          {person.name}
                        </h5>
                      </li>
                    </Link>
                    <li className="list-group-item bg-dark text-white">
                      Gender:&nbsp; {person.gender}
                    </li>
                    <li className="list-group-item bg-dark text-white ">
                      Age: &nbsp; {person.age}
                    </li>
                    <li className="list-group-item bg-dark text-white ">
                      Eye Color:&nbsp; {person.eye_color}
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      Hair Color:&nbsp; {person.hair_color}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default People;
