import React from "react";
import { Link } from "react-router-dom";
import WorkExperinceCard from "./WorkexperinceCard";
import WorkExperience from '../../../api/WorkExperince';

class WorkExperinceSection extends React.Component {
  state = {
    Workexperinces: []
  };

  componentDidMount() {
    this.getWorkExperinces();
  }

  getWorkExperinces = () => {
    WorkExperience.Get()
      .then(res => {
        this.setState({
          Workexperinces: res.data.list_Workexperience
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  createCardsRow = () => {
    let cards = [];
    const { Workexperinces } = this.state;
    let temp = [];
    for (let index = 0; index < Workexperinces.length; index++) {
      const element = Workexperinces[index];
      if (index % 3 !== 0 || index === 0) {
        temp.push(element);
      } else {
        cards.push(
          <WorkExperinceCard
            key={(cards.length + 1).toString()}
            work={temp}
            token={this.props.token}
            refresh={this.getWorkExperinces}
          ></WorkExperinceCard>
        );
        temp = [];
        temp.push(element);
      }
    }
    if (temp.length !== 0) {
      cards.push(
        <WorkExperinceCard
          key={(cards.length + 1).toString()}
          work={temp}
          token={this.props.token}
          refresh={this.getWorkExperinces}
        ></WorkExperinceCard>
      );
    }
    return cards;
  }

  render() {
    return (
      <div className="container">
        <h1>Work Experince</h1>
        <Link
          to={{
            pathname: "/CRUD/NewWorkExperince/",
            state: {
              proj: null,
              token: this.props.token,
            },
          }}
          className="btn btn-primary"
        >
          <i></i>Create New Work Experince
        </Link>
        <div style={{ marginTop: "20px" }}>
          <div className="container">
            {this.createCardsRow()}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperinceSection;
