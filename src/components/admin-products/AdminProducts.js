import React, { Fragment } from "react";
import Pagination from "../../components/pagination/Pagination";
import axiosInstance from "../../api/axiosInstance";
import AdminProductCard from "../../components/admin-product-card/AdminProductCard";

class AdminProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      total: 1,
      pageSize: 1,
      pageNumber: 1,
      editIndex: 0,
      showEditor: false,
    };
  }

  getPrevPage = (prevPage) => {
    this.getCurrentPage(prevPage);
  };

  getCurrentPage = (currentPage) => {
    console.log("1++++++++=======");

    console.log("page", this.state.pageNumber);
    this.setState({ pageNumber: currentPage }, () => {
      axiosInstance({
        url: `/products/${this.state.pageNumber}/${this.state.pageSize}`,
        method: "GET",
      })
        .then((res) => res.data.result)
        .then((data) => {
          this.setState({
            products: data,
          });
        })
        .catch((err) => console.log("err", err));
    });
  };

  getNextPage = (nextPage) => {
    this.getCurrentPage(nextPage);
  };

  handleEditClick = (index) => {
    let indexInt = parseInt(index);
    this.setState({
      editIndex: indexInt,
      showEditor: true,
    });
  };
  removeItem = () => {
    console.log("222222");
  };

  componentDidMount() {
    axiosInstance({
      url: `/products/${this.state.pageNumber}/${this.state.pageSize}`,
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => {
        console.log("idddd")
        window.sessionStorage.setItem("ProductId",data.result._id)
        this.setState({
          products: data.result,
        });
        this.setState(
          {
            total: data.total,
          },
          () => {
            console.log("total", this.state.total);
            this.getCurrentPage();
          }
        );
      })
      .catch((err) => console.log("err", err));
  }

  render() {
    const productList = this.state.products;
    const item =  this.state.products[0]?this.state.products[0].items:null
    console.log("now", item);

    return (
      <Fragment>
        {productList.map((item) => {
          return (
            <AdminProductCard
              key={item._id}
              product={item}
              handleEditClick={this.handleEditClick}
              removeItem={this.removeItem}
            />
          );
        })}
        {this.state.showEditor && (
          <form className="Editor" onSubmit={this.handleSubmit}>
            ID:{" "}
            <input type="text" value={productList.items[this.state.index].id} />
            Item Name:{" "}
            <input
              type="text"
              placeholder={productList.items[this.state.index].name}
            />
            Item Price:{" "}
            <input
              type="text"
              placeholder={productList.items[this.state.index].price}
            />
            Item Description:{" "}
            <input
              type="text"
              placeholder={productList.items[this.state.index].description}
            />
            Item Image:{" "}
            <input
              type="text"
              placeholder={productList.items[this.state.index].imgDetail}
            />
            Item Cover:{" "}
            <input
              type="text"
              placeholder={productList.items[this.state.index].imgSrc}
            />
            <input type="text" />
          </form>
        )}
        <Pagination
          total={this.state.total}
          onGetCurrentPage={this.getCurrentPage}
          onGetPrevPage={this.getPrevPage}
          onGetNextPage={this.getNextPage}
        />
      </Fragment>
    );
  }
}

export default AdminProducts;
