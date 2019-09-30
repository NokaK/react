import React, { Component } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

class Home extends Component {
  render() {
    const { books } = this.props;
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
            {this.props.books.map(book => {
              return (
                <tr key={book.id}>
                  <td>{book.kind}</td>
                  <td>{book.id}</td>
                  <td>{book.etag}</td>
                  <td>{book.selfLink}</td>
                  <td>
                    <div className="addfavoritebutton">
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
