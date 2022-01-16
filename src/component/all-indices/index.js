import { filter } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { getAllIndices } from "../../action/Indices";
import "./Indices.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: "ALL",
      allIndices: [],
    };
  }

  componentWillMount() {
    this.props.getAllIndices((res) => {
      this.setState({
        allIndices: res,
      });
    });
  }

  submitFilter = () => {
    const { allIndices } = this.props;
    const { currentFilter } = this.state;
    if (currentFilter === "ALL") {
      this.setState({
        allIndices,
      });
    } else {
      let filteredArray = [];
      allIndices.map((indice) => {
        if (indice.key && indice.key == currentFilter) {
          filteredArray.push(indice);
        }
      });
      this.setState({
        allIndices: filteredArray,
      });
    }
  };

  render() {
    const { allIndices } = this.state;
    return (
      <div>
        <div className="filter-container">
          <select
            onChange={(e) => this.setState({ currentFilter: e.target.value })}
          >
            <option value="ALL" selected>
              ALL
            </option>
            <option value="BROAD MARKET INDICES">BROAD MARKET INDICES</option>
            <option value="SECTORAL INDICES">SECTORAL INDICES</option>
            <option value="STRATEGY INDICES">STRATEGY INDICES</option>THEMATIC
            INDICES
            <option value="THEMATIC INDICES">THEMATIC INDICES</option>
            <option value="FIXED INCOME INDICES">FIXED INCOME INDICES</option>
          </select>
          <button onClick={this.submitFilter} class="button">
            Filter
          </button>
        </div>
        <table className="customers">
          <thead>
            <tr>
              <th>Indices</th>
              <th>Last Price</th>
            </tr>
          </thead>
          <tbody>
            {allIndices.map((indice) => {
              return (
                <tr>
                  <td>
                    <div className="ind-title">{indice.index}</div>
                  </td>
                  <td>
                    <div className="ind-price">{indice.last}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allIndices: state.indices.allIndices,
  };
};

export default connect(mapStateToProps, { getAllIndices })(Dashboard);
