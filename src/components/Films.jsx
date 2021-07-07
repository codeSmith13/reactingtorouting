import React  from "react";
import { Link } from "react-router-dom";

class Films extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => this.setState({ films }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container d-flex">
        <div className="row justify-content-center">
          {this.state.films.map((film) => {
            return (
              <div key={film.id} className="card col-5 m-1 mt-4 bg-primary">
                <div className="card-body bg-dark">
                  <Link className="link" to={`/films/${film.id}`}>
                    <h5 className="card-title text-center">{film.title}</h5>
                  </Link>
                  <p className="card-text ">
                    &emsp; &emsp;{film.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Films;
