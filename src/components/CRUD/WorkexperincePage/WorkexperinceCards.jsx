import React, { Component } from "react";
import WorkexperinceCard from "./WorkexperinceCard";
import WorkExperience from '../../../api/WorkExperince';
class WorkexperinceCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Workexperinces: null
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.Workexperinces &&
      this.state.Workexperinces.length === nextState.Workexperinces.length
    ) {
      return false;
    } else {
      return true;
    }
  }
  componentDidMount() {
    if (!this.state.projects) {
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
  }
  render() {
    let cards = [];
    const { Workexperinces } = this.state;
    if (Workexperinces) {
      let temp = [];
      for (let index = 0; index < Workexperinces.length; index++) {
        const element = Workexperinces[index];
        if (index % 3 !== 0 || index === 0) {
          temp.push(element);
        } else {
          cards.push(
            <WorkexperinceCard
              key={(cards.length + 1).toString()}
              work={temp}
              token={this.props.token}
            ></WorkexperinceCard>
          );
          temp = [];
          temp.push(element);
        }
      }
      if (temp.length !== 0) {
        cards.push(
          <WorkexperinceCard
            key={(cards.length + 1).toString()}
            work={temp}
            token={this.props.token}
          ></WorkexperinceCard>
        );
      }
    }
    return <div className="container">{cards}</div>;
  }
}

export default WorkexperinceCards;
