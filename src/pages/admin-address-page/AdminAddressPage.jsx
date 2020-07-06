import React from 'react';
import './admin-address-page.scss';
import { Link } from 'react-router-dom';
import axiosInstance from "../../api/server";
import 'font-awesome/css/font-awesome.min.css';
import AddressItem from '../../components/address-item/AddressItem';

class AdminAddressPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: [],
            currentPage: 1,
            PAGE_SIZE: 3,
            upperPageBound: 5,
            lowerPageBound: 1,
            pageInterval: 5,
            totalItems: 0,
            totalPages: 0,
            isPrevBtnActive: "disabled",
            isFirstBtnActive: "disabled",
            isNextBtnActive: "",
            isLastBtnActive: "",
        }
    }
    removeAddress=(id)=>{
        axiosInstance({
            url: `/address/${id}`,
            method: "DELETE",
          }).then(res => {
            console.log(`ID: ${id} delete success.`);
            this.fetchData(this.state.currentPage, this.state.PAGE_SIZE);
          }).catch(err => console.log('err', err))

    }
    fetchData = (currentPage, pageSize) => {
        axiosInstance({
            url: `/address/${currentPage}/${pageSize}`,
            method: "GET",
        }).then(res => {
            console.log('res.data', res.data);
            const newTotalPages = Math.ceil(res.data.totalItems / pageSize);
            //totalPages less than pageInterval
            if (newTotalPages < this.state.pageInterval) {
                this.setState({
                    pageInterval: newTotalPages,
                    upperPageBound: newTotalPages,
                    lowerPageBound: 1,
                }, () => {
                    console.log("Reset pageInterval and upperPageBound to:", this.state.pageInterval);
                });
            }

            this.setState({
                addresses: res.data.res,
                totalItems: res.data.totalItems,
                totalPages: newTotalPages,
            });
        }).catch(err => console.log('err', err))
    }

    componentWillMount() {
        this.fetchData(this.state.currentPage, this.state.PAGE_SIZE);

    }

    changeDirectionBtnStatus = () => {
        //excute this every time when clicking any btn
        const { currentPage, totalPages } = this.state;

        //Prev, First btn status
        if (currentPage === 1) {
            this.setState({
                isPrevBtnActive: 'disabled',
                isFirstBtnActive: 'disabled',
            });
        } else {
            this.setState({
                isPrevBtnActive: '',
                isFirstBtnActive: '',
            });
        }
        //Next,Last btn status
        if (currentPage === totalPages) {
            this.setState({
                isNextBtnActive: 'disabled',
                isLastBtnActive: 'disabled',
            });
        } else {
            this.setState({
                isNextBtnActive: '',
                isLastBtnActive: '',
            });
        }

    }
    changePageBound = (operation) => {
        const { pageInterval, totalPages, upperPageBound, lowerPageBound, currentPage } = this.state
        let gap = Math.floor(pageInterval / 2);
        switch (operation) {
            case "Next":
                if (upperPageBound !== totalPages && currentPage > upperPageBound - gap) {
                    this.setState({
                        upperPageBound: upperPageBound + 1,
                        lowerPageBound: upperPageBound + 1 - pageInterval + 1,
                    }, () => {
                        console.log("upperPageBound:", this.state.upperPageBound);
                        console.log("Currentpage:", this.state.currentPage);
                        console.log("lowerPageBound:", this.state.lowerPageBound);
                    });
                }
                break;
            case "Prev":
                if (lowerPageBound !== 1 && currentPage < lowerPageBound + gap) {
                    this.setState({
                        lowerPageBound: lowerPageBound - 1,
                        upperPageBound: lowerPageBound - 1 + pageInterval - 1,
                    }, () => {
                        console.log("upperPageBound:", this.state.upperPageBound);
                        console.log("Currentpage:", this.state.currentPage);
                        console.log("lowerPageBound:", this.state.lowerPageBound);
                    });
                }
                break;
            case "First":
                this.setState({
                    lowerPageBound: 1,
                    upperPageBound: 1 + pageInterval - 1,
                }, () => {
                    console.log("upperPageBound:", this.state.upperPageBound);
                    console.log("Currentpage:", this.state.currentPage);
                    console.log("lowerPageBound:", this.state.lowerPageBound);
                });
                break;
            case "Last":
                this.setState({
                    upperPageBound: totalPages,
                    lowerPageBound: totalPages - pageInterval + 1,
                }, () => {
                    console.log("upperPageBound:", this.state.upperPageBound);
                    console.log("Currentpage:", this.state.currentPage);
                    console.log("lowerPageBound:", this.state.lowerPageBound);
                });
                break;

            default:
                break;
        }
    }
    btnPrevClick = () => {
        const { currentPage, PAGE_SIZE } = this.state;
        this.fetchData(currentPage - 1, PAGE_SIZE);
        this.setState({ currentPage: currentPage - 1 }, () => {
            this.changeDirectionBtnStatus();
            console.log("Currentpage:", this.state.currentPage);
            const operation = "Prev";
            this.changePageBound(operation);
        });


    }
    btnNextClick = () => {
        const { currentPage, PAGE_SIZE } = this.state;
        this.fetchData(currentPage + 1, PAGE_SIZE);
        this.setState({ currentPage: currentPage + 1 }, () => {
            this.changeDirectionBtnStatus();
            console.log("Currentpage:", this.state.currentPage);
            const operation = "Next";
            this.changePageBound(operation);
        });
    }
    btnFirstClick = () => {
        const { PAGE_SIZE } = this.state;
        this.fetchData(1, PAGE_SIZE);
        this.setState({ currentPage: 1 }, () => {
            this.changeDirectionBtnStatus();
            const operation = "First";
            this.changePageBound(operation);
        });


    }
    btnLastClick = () => {
        const { totalPages, PAGE_SIZE } = this.state;
        this.fetchData(totalPages, PAGE_SIZE);
        this.setState({ currentPage: totalPages }, () => {
            this.changeDirectionBtnStatus();
            const operation = "Last";
            this.changePageBound(operation);
        });

    }
    btnNumberClick = (e) => {
        const { PAGE_SIZE,pageInterval,totalPages } = this.state;
        const number = parseInt(e.target.id, 10);
        let gap = Math.floor(pageInterval / 2);
        this.fetchData(number, PAGE_SIZE);
        switch (number) {
            //case for first page
            case 1:
                this.setState({ currentPage: 1 }, () => {
                    this.changeDirectionBtnStatus();
                    const operation = "First";
                    this.changePageBound(operation);
                });
                
                break;
            // last page
            case totalPages:
                this.setState({ currentPage: totalPages }, () => {
                    this.changeDirectionBtnStatus();
                    const operation = "Last";
                    this.changePageBound(operation);
                });
                
                break;
            //Second page or last second page
            case 2:
            case totalPages-1:
                this.setState({ currentPage: number }, () => {
                    console.log("Currentpage:", this.state.currentPage);
                    this.changeDirectionBtnStatus();
                });
                
                break;
            //other pages
            default:
                this.setState({ 
                    currentPage: number,
                    upperPageBound:number+gap,
                    lowerPageBound:number-gap,      
                 }, () => {
                    console.log("Currentpage:", this.state.currentPage);
                    this.changeDirectionBtnStatus();
                });

                break;
        }
        

    }

    render() {
        const { currentPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive, isFirstBtnActive, isLastBtnActive } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= this.state.totalPages; i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            if (number >= lowerPageBound && number <= upperPageBound) {
                if (number === currentPage) {
                    return (
                        <li key={number} id={number} className='chosen'><a href='#' id={number} onClick={this.btnNumberClick}>{number}</a></li>
                    )

                } else {
                    return (
                        <li key={number} id={number}><a href='#' id={number} onClick={this.btnNumberClick}>{number}</a></li>
                    )
                }
            }
        });

        const renderPrevBtn = <li className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={this.btnPrevClick}>Prev</a></li>;
        const renderNextBtn = <li className={isNextBtnActive}><a href='#' id="btnNext" onClick={this.btnNextClick}>Next</a></li>;
        const renderFirstBtn = <li className={isFirstBtnActive}><a href='#' id="btnFirst" onClick={this.btnFirstClick}>First</a></li>;
        const renderLastBtn = <li className={isLastBtnActive}><a href='#' id="btnLast" onClick={this.btnLastClick}>Last</a></li>;
        return (
            <div className="admin-address-page">
                <div className="admin-address-page__container">
                    <header className='banner'>
                        <Link to='' className="banner__logo-image">
                        </Link>
                        <div className="banner__description">
                            Admin-Address
                        </div>
                    </header>
                    <div className="admin-address-page__header">
                        <span className="admin-address-page__header-item">
                            Address ID
                        </span>
                        <span className="admin-address-page__header-item">
                            Unit
                        </span>
                        <span className="admin-address-page__header-item">
                           Street Number
                        </span>
                        <span className="admin-address-page__header-item">
                            Street Name
                        </span>
                        <span className="admin-address-page__header-item">
                            Suburb
                        </span>
                        <span className="admin-address-page__header-item">
                            Postcode
                        </span>
                        <span className="admin-address-page__header-item">
                            Operation
                        </span>
                    </div>
                    <div className="admin-address-page__items">
                        {this.state.addresses.map((address => (
                            <AddressItem key={address._id} address={address} removeAddress={this.removeAddress}
                                fetchData={this.fetchData} currentPage={this.state.currentPage}
                                pageSize={this.state.pageSize} />
                        )))}
                    </div>

                </div>
                <ul className="admin-address-page__pagination">
                    {renderFirstBtn}
                    {renderPrevBtn}
                    {renderPageNumbers}
                    {renderNextBtn}
                    {renderLastBtn}

                </ul>

            </div>

        );
    }
}

export default AdminAddressPage;