import React, { Component } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

class Home extends Component {
  handleClick = e => {
    console.log("test");
    return this.props.updateState(this.state);
  };
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>kind</th>
              <th>Id</th>
              <th>etag</th>
              <th>selfLink</th>
            </tr>
          </thead>
          <tbody>
            {this.props &&
              this.props.data &&
              this.props.data.map(book => {
                return (
                  <tr key={book.id}>
                    <td>{book.kind}</td>
                    <td>{book.id}</td>
                    <td>{book.etag}</td>
                    <td>{book.selfLink}</td>
                    <td>
                      <div
                        className="addfavoritebutton"
                        onClick={() => this.props.updateState(book)}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </td>
                    <td>readmore</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Home;
