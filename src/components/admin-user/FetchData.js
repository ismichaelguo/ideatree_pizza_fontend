import axiosInstance from "../../api/axiosInstance";

export default function fetchData(currentPage, pageSize) {
  axiosInstance({
    url: `/user/${currentPage}/${pageSize}`,
    method: "GET",
  })
    .then((res) => {
      console.log("res.data", res.data);
      this.setState({
        users: res.data.results,
        totalUsers: res.data.total,
        totalPages: Math.ceil(res.data.total / pageSize),
      });
    })
    .catch((err) => console.log("err", err));
}
