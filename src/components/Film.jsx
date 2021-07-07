import React from "react";

class Film extends React.Component {
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
              <div key={film.id} className="card col-5  m-1 mt-4 bg-primary">
                <div className="card-body bg-dark">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-dark ">
                      <h5 className="card-title text-center ">
                        {film.title}
                      </h5>
                    </li>
                    <li className="list-group-item text-white bg-dark ">
                      Director:&nbsp; {film.director}
                    </li>
                    <li className="list-group-item text-white  bg-dark">
                      Producer:&nbsp; {film.producer}
                    </li>
                    <li className="list-group-item  text-white bg-dark">
                      Release Date:&nbsp; {film.release_date}
                    </li>
                    <li className="list-group-item text-white  bg-dark">
                      Rotten Tomatoes Score:&nbsp; {film.rt_score}%
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

export default Film;
