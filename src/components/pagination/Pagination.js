import React, { Fragment } from "react";
import "./Pagination.scss";

class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      currentPage: 1,
      pageSize: 1,
      displayedPage: 3,
      startPage: 1,
      totalPage: 1,
    };
  }

  pageClick = (e) => {
    e.preventDefault();
    console.log("target1", e.target);
    const { displayedPage } = this.state;
    let currentPage = e.target.innerHTML;

    if (currentPage >= displayedPage) {
      this.setState({ startPage: currentPage - 1 });
    }

    if (currentPage < displayedPage) {
      this.setState({
        startPage: 1,
      });
    }

    if (currentPage === 1) {
      this.setState({
        startPage: 1,
      });
    }

    this.setState({currentPage},()=>{
      this.props.onGetCurrentPage(currentPage)
    })

  };

  prePageHandler = (e) => {
    e.preventDefault();

    let { currentPage,displayedPage, startPage } = this.state;
    //minimum page should be 1
    if (currentPage - 1 !== 0) {
      let prePage = currentPage - 1;
      this.setState({ currentPage:prePage },()=>{
        //current < 3, start page =1
        if(currentPage<=displayedPage){
          this.setState({startPage:1})
        }else{
          this.setState({startPage: startPage+1})
        }
      });
      
      this.props.onGetPrevPage(prePage);
    }
  };

  nextPageHandler = (e) => {
    e.preventDefault();
    console.log("target", e.target);
    let { currentPage, totalPage,displayedPage ,startPage} = this.state;
    //the max page should be 8
    if (currentPage + 1 !== totalPage+1) {
      let nextPage = parseInt(currentPage) + 1;
      this.setState({ currentPage:nextPage },()=>{
        //current page > 5,start page should be 5, displayed pages are 567, last page is firmed. 
        if(currentPage>totalPage-displayedPage){
          this.setState({startPage:totalPage-displayedPage})
        }else{
          this.setState({startPage:startPage+1})
        }
      });
      this.props.onGetNextPage(nextPage);
    }
  };

  createPage = () => {
    const totalPage = this.props.total
    const { currentPage, displayedPage, startPage } = this.state;
    let pages = [];
    const current = parseInt(currentPage);
    pages.push(
      <li
        className={current === 1 ? "noMore" : null}
        onClick={this.prePageHandler}
        key={0}
      >
        Prev
      </li>
    );
    //display all the page when pages < 5
    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(
          <li
            className={current === i ? "activePage" : null}
            onClick={this.pageClick}
            key={i}
          >
            {i}
          </li>
        );
      }
    } else {
      //page 1
      pages.push(
        <li
          className={current === 1 ? "activePage" : null}
          onClick={this.pageClick}
          key={1}
        >
          1
        </li>
      );

      let pageLength = 0;
      if (displayedPage + startPage > totalPage) {
        pageLength = totalPage;
      } else {
        pageLength = displayedPage + startPage;
      }
      //only display 5 pages,start page + displayed pages > 5, omit former pages
      if (current > displayedPage) {
        pages.push(
          <li className="" key={-1}>
            ...
          </li>
        );
      }
      //display pages except start page and last page
      for (let i = startPage; i < pageLength; i++) {
        if (i < totalPage && i > 1) {
          pages.push(
            <li
              className={current === i ? "activePage" : null}
              key={i}
              onClick={this.pageClick}
            >
              {i}
            </li>
          );
        }
      }

      if (totalPage - startPage > displayedPage) {
        pages.push(
          <li className="" key={-2}>
            ···
          </li>
        );
      }

      //last page
      pages.push(
        <li
          className={current === totalPage ? "activePage" : null}
          key={totalPage}
          onClick={this.pageClick}
        >
          {totalPage}
        </li>
      );

      //next page button
      pages.push(
        <li
          className={current === totalPage ? "noMore" : null}
          key={totalPage + 1}
          onClick={this.nextPageHandler}
        >
          Next
        </li>
      );
    }
    return pages;
  };

  componentDidMount() {
    this.setState({
      totalPage: this.props.total,
    });
  }

  render() {
    console.log("pag-current", this.state.currentPage);
    return (
      <Fragment>
        <ul className="pagination">{this.createPage()}</ul>
      </Fragment>
    );
  }
}

export default Pagination;
