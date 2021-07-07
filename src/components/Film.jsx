import React from "react";

class Film extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      film: [],
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((film) => this.setState({ film }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row ">
          <div className="card col-12  m-1 mt-4 bg-primary">
            <div className="card-body bg-dark">
              <ul className="list-group list-group-flush ">
                <li className="list-group-item bg-dark ">
                  <h5 className="card-title text-center ">
                    {this.state.film.title}
                  </h5>
                </li>
                <li className="list-group-item text-white bg-dark ">
                  Director:&nbsp; {this.state.film.director}
                </li>
                <li className="list-group-item text-white  bg-dark">
                  Producer:&nbsp; {this.state.film.producer}
                </li>
                <li className="list-group-item  text-white bg-dark">
                  Release Date:&nbsp; {this.state.film.release_date}
                </li>
                <li className="list-group-item text-white  bg-dark">
                  Rotten Tomatoes Score:&nbsp; {this.state.film.rt_score}%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
}

export default Film;
