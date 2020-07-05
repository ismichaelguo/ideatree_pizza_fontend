import React, { Fragment } from 'react';
import AdminNav from '../admin-nav/AdminNav'

class AdminUser extends React.Component {
  render () {
    return (
      <Fragment>
        <AdminNav />
        <h3>AdminOrder</h3>
      </Fragment>
    )
  }
}

export default AdminUser;