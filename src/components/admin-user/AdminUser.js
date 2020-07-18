import React from "react";
import axiosInstance from "../../api/axiosInstance";
import Title from "./Title";
import UserInfo from "./UserInfo";
import Pagination from "./Pagination";
import AdminNav from "../admin-nav/AdminNav";
import "./admin-user.scss";
class AdminUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 1,
      pageSize: 4,
      totalUsers: 0,
      totalPages: 0,
    };
  }

  fetchData(currentPage, pageSize) {
    axiosInstance({
      url: `/user/${currentPage}/${pageSize}`,
      method: "GET",
    })
      .then((res) => {
        console.log("res.data", res.data);
        this.setState({
          users: res.data.results,
          currentPage: currentPage,
          totalUsers: res.data.total,
          totalPages: Math.ceil(res.data.total / pageSize),
        });
      })
      .catch((err) => console.log("err", err));
  }

  componentDidMount() {
    this.fetchData(this.state.currentPage, this.state.pageSize);
  }

  pageUpdate = (currentPage, pageSize) => {
    console.log("currentPage", currentPage);
    this.fetchData(currentPage, pageSize);
  };

  render() {
    const { users, currentPage, pageSize, totalPages } = this.state;
    return (
      <div className="admin-user-page">
        <AdminNav />
        <div className="admin-user-page__table">
          <Title />
          <UserInfo
            users={users}
            pageUpdate={this.pageUpdate}
            currentPage={currentPage}
            pageSize={pageSize}
          />
          <Pagination
            pageUpdate={this.pageUpdate}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={totalPages}
          />
        </div>
      </div>
    );
  }
}

export default AdminUser;
