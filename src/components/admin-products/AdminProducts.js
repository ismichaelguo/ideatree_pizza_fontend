import React, { Fragment } from "react";
import Pagination from "../../components/pagination/Pagination";
import axiosInstance from "../../api/axiosInstance";
import AdminProductCard from "../../components/admin-product-card/AdminProductCard";
import AdminNav from "../../components/admin-nav/AdminNav";
import "./admin-products.scss";

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
      currentProduct: {},
    };
  }

  getPrevPage = (prevPage) => {
    this.getCurrentPage(prevPage);
  };

  getCurrentPage = (currentPage) => {
    console.log("1++++++++=======", currentPage);

    console.log("page", this.state.pageNumber);
    this.setState({ pageNumber: currentPage }, () => {
      axiosInstance({
        url: `/products/${this.state.pageNumber}/${this.state.pageSize}`,
        method: "GET",
      })
        .then((res) => res.data.result)
        .then((data) => {
          window.sessionStorage.setItem("ProductId", data[0]._id);
          this.setState({
            products: data,
          });
        })
        .catch((err) => console.log("err", err));
    });
  };

  getNextPage = (nextPage) => {
    console.log("next", nextPage);
    this.getCurrentPage(nextPage);
  };

  handleEditClick = (index) => {
    let indexInt = parseInt(index);
    this.setState(
      {
        editIndex: indexInt,
        showEditor: true,
      },
      () => {
        this.setState({
          currentProduct: this.state.products[0].items[this.state.editIndex],
        });
      }
    );
  };
  removeItem = (itemId) => {
    let productId = window.sessionStorage.getItem("ProductId");
    axiosInstance({
      url: `/products/item/${productId}/${itemId}`,
      method:"DELETE"
    }).then(res=>{
      axiosInstance({
        url: `/products/${this.state.pageNumber}/${this.state.pageSize}`,
        method: "GET",
      })
        .then((res) => res.data)
        .then((data) => {
          window.sessionStorage.setItem("ProductId", data.result[0]._id);
          this.setState({
            products: data.result,
          });
        })
        .catch((err) => console.log("err", err));
    })
    .catch(err=>console.log(err))
  };

  handleCloseBtn = () => {
    this.setState({
      showEditor: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let itemId = e.target.elements[0].value;
    let name = e.target.elements[1].value;
    let price = e.target.elements[2].value;
    let description = e.target.elements[3].value;
    let imgDetail = e.target.elements[4].value;
    let productId = window.sessionStorage.getItem("ProductId");

    axiosInstance({
      url: `/products/item/${productId}/${itemId}`,
      method: "PUT",
      header: { "Content-type": "application/json" },
      data: {
        id: itemId,
        imgDetail: imgDetail,
        name: name,
        description: description,
        price: price,
      },
    }).then((res) => {
      axiosInstance({
        url: `/products/${this.state.pageNumber}/${this.state.pageSize}`,
        method: "GET",
      })
        .then((res) => res.data)
        .then((data) => {
          window.sessionStorage.setItem("ProductId", data.result[0]._id);
          this.setState({
            products: data.result,
          });
        })
        .catch((err) => console.log("err", err));
    })
      .catch((err) => console.log(err));

    this.setState({
      showEditor: false,
    });
  };

  itemNameInput = (e) => {
    this.setState({
      currentProduct: {
        ...this.state.currentProduct,
        name: e.target.value,
      },
    });
  };

  itemPriceInput = (e) => {
    this.setState({
      currentProduct: {
        ...this.state.currentProduct,
        price: e.target.value,
      },
    });
  };

  descriptionInput = (e) => {
    this.setState({
      currentProduct: {
        ...this.state.currentProduct,
        description: e.target.value,
      },
    });
  };

  itemImage = (e) => {
    this.setState({
      currentProduct: {
        ...this.state.currentProduct,
        imgDetail: e.target.value,
      },
    });
  };

  componentDidMount() {
    axiosInstance({
      url: `/products/${this.state.pageNumber}/${this.state.pageSize}`,
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => {
        window.sessionStorage.setItem("ProductId", data.result[0]._id);
        this.setState({
          products: data.result,
        });

        this.setState(
          {
            total: data.total,
          },
          () => {
            this.getCurrentPage();
          }
        );
      })
      .catch((err) => console.log("err", err));
  }

  render() {
    const productList = this.state.products;
    const item = this.state.products[0] ? this.state.products[0].items : null;
    console.log("currentProduct", this.state.currentProduct);

    return (
      <Fragment>
        <div className={"product-container"}>
          <AdminNav />
          <div className={this.state.showEditor ? "disable" : null}>
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
          </div>
          {this.state.showEditor && (
            <form
              className="product-container__Editor"
              onSubmit={this.handleSubmit}
            >
              <div>
                <p className="close-btn">
                  <i
                    className="fa fa-times-circle"
                    onClick={this.handleCloseBtn}
                  ></i>
                </p>
                ID:{" "}
                <input
                  type="text"
                  value={this.state.currentProduct.id}
                  readOnly
                />
                Item Name:{" "}
                <input
                  type="text"
                  value={this.state.currentProduct.name}
                  onChange={this.itemNameInput}
                />
                Item Price:{" "}
                <input
                  type="text"
                  value={this.state.currentProduct.price}
                  onChange={this.itemPriceInput}
                />
                Item Description:{" "}
                <input
                  type="text"
                  value={this.state.currentProduct.description}
                  onChange={this.descriptionInput}
                />
                Item Image:{" "}
                <input
                  type="text"
                  value={this.state.currentProduct.imgDetail}
                  onChange={this.itemImage}
                />
                <button>Confirm</button>
              </div>
            </form>
          )}
          <div className="product-container__pagination">
            <Pagination
              total={this.state.total}
              onGetCurrentPage={this.getCurrentPage}
              onGetPrevPage={this.getPrevPage}
              onGetNextPage={this.getNextPage}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AdminProducts;
