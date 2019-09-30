import React, { Component } from "react";
import { Table } from "reactstrap";

class Favorites extends Component {
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

export default Favorites;
