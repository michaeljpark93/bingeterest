import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FollowShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers().then((usersData) => {
      this.setState({ users: usersData.users });
    });
  }

  render() {
    return (
      <div>
        <h2>Following</h2>

      </div>
    );
  }
}

export default withRouter(FollowShow);
