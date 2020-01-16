import React from 'react';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EventIcon from '@material-ui/icons/Event';
import PlaceIcon from '@material-ui/icons/Place';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import InfoIcon from '@material-ui/icons/Info';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import '../../css/categories-menu.css';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const CategoryMenu = () => {
    return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3 my-3">
                        <Link to="/hotels">
                            <div className="card">
                            <ApartmentIcon style={{ fontSize: 75, margin: 'auto' }}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Hotels</h5>
                                    <p className="card-text">This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 my-3">
                        <Link to="/events">
                            <div className="card">
                            <EventIcon style={{ fontSize: 75, margin: 'auto' }}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Events</h5>
                                    <p className="card-text">This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 my-3">
                        <Link to="/mustsee">
                            <div className="card">
                            <PlaceIcon style={{ fontSize: 75, margin: 'auto' }}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Must See</h5>
                                    <p className="card-text">This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 my-3">
                        <Link to="/shops">
                            <div className="card">
                            <StorefrontIcon style={{ fontSize: 75, margin: 'auto' }}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Shops</h5>
                                    <p className="card-text">This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 my-3">
                        <Link to="/transport">
                            <div className="card">
                                <DirectionsTransitIcon style={{ fontSize: 75, margin: 'auto' }}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Transport</h5>
                                    <p className="card-text">This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 my-3">
                        <Link to="/restaurants">
                            <div className="card">
                                <RestaurantIcon style={{ fontSize: 75, margin: 'auto' }}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Restaurants</h5>
                                    <p className="card-text">This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 my-3">
                        <Link to="/bars">
                            <div className="card">
                                <LocalBarIcon style={{ fontSize: 75, margin: 'auto' }}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Bars</h5>
                                    <p className="card-text">This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 my-3">
                        <Link to="/info">
                            <div className="card">
                                <InfoIcon style={{ fontSize: 75, margin: 'auto' }}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Info</h5>
                                    <p className="card-text">This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default CategoryMenu;