import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white py-5 mt-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h5>Footer Listing</h5>
                        </div>
                        <div className="col-sm-4">
                            <h5>Footer Listing</h5>
                        </div>
                        <div className="col-sm-4">
                            <h5>Footer Listing</h5>
                        </div>
                        <div className="col-sm-12 text-center fsocial">
                            <span>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-pinterest-p"></i></a>
                                <a href=""><i className="fa fa-vk"></i></a>
                                <a href=""><i className="fa fa-vimeo"></i></a>
                            </span>
                        </div>
                        <div className="col-sm-12 text-center copy">
                           <p className="mb-0">©  2021 E-Com  ® All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;