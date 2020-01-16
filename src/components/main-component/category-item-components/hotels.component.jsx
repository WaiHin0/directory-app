import React from 'react';

const Hotels = () => {
    return (
        <div style={{backgroundColor: 'lightgray'}}>
            <div className="container">
                <ol className="breadcrumb">
                    <li><a href="http://shtheme.net/demosd/accommodo/">Home</a></li>
                                    <li><a href="#/">                                    Listing                                    </a></li>
                                                        <li className="active">                                    Detail                                    </li>
                </ol>
                <div className="row">
                    <div className="col-md-3 bg-light">
                        <div className="sidebar">
                            <div className="box filter">
                                <h2>Search</h2>
                                <form id="form-filter" className="labels-uppercase">
                                    <div className="form-group">
                                        <label htmlFor="form-filter-destination">Destination</label>
                                        <input type="text" className="form-control" id="form-filter-destination" name="destination" placeholder="Destination" />
                                    </div>
                                    <div className="form-group-inline">
                                        <div className="form-group">
                                            <label htmlFor="form-filter-check-in">Check In</label>
                                            <input type="text" className="form-control date" id="form-filter-check-in" name="check-in" placeholder="Check In" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="form-filter-check-out">Nights</label>
                                            <div className="input-number">
                                                <div className="change-button plus">
                                                    <i className="fa fa-caret-up"></i>
                                                </div>
                                                <div className="change-button minus">
                                                    <i className="fa fa-caret-down"></i>
                                                </div>
                                                <input type="number" className="form-control" id="form-filter-check-out" name="check-out" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <a href="#filter-advanced-search" className="link icon" data-toggle="collapse" aria-expanded="false" aria-controls="filter-advanced-search">Advanced Search<i className="fa fa-plus"></i></a>
                                    </div>
                                    <div className="collapse" id="filter-advanced-search">
                                        <div className="wrapper">
                                            <section>
                                                <h3>Rate (per night)</h3>
                                                <ul className="checkboxes list-unstyled">
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="hotel" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            $0 - $50
                                                        <span>12</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="apartment" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            $50 - $100
                                                        <span>48</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="breakfast-only" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            $150 - $150
                                                        <span>36</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="spa-wellness" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            $150+
                                                        <span>56</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </section>
                                            <section>
                                                <h3>Property Type </h3>
                                                <ul className="checkboxes">
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="hotel" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            Apartmets
                                                        <span>67</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="apartment" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            Hotels
                                                        <span>31</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="breakfast-only" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            Boats<span>68</span></label></li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="spa-wellness" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            Villas<span>52</span></label></li>
                                                </ul>
                                                <div className="collapse" id="all-property-types">
                                                    <ul className="checkboxes">
                                                        <li>
                                                            <label>
                                                                <div className="icheckbox">
                                                                    <input type="checkbox" name="ski-center" style={{ position: "absolute", opacity: 0 }} />
                                                                    <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                                </div>
                                                                Ski Center<span>67</span></label></li>
                                                        <li>
                                                            <label>
                                                                <div className="icheckbox">
                                                                    <input type="checkbox" name="cottage" style={{ position: "absolute", opacity: 0 }} />
                                                                    <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                                </div>
                                                                Cottage<span>31</span></label></li>
                                                        <li>
                                                            <label>
                                                                <div className="icheckbox">
                                                                    <input type="checkbox" name="hostel" style={{ position: "absolute", opacity: 0 }} />
                                                                    <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                                </div>
                                                                Hostel<span>68</span></label></li>
                                                        <li>
                                                            <label>
                                                                <div className="icheckbox">
                                                                    <input type="checkbox" name="boat" style={{ position: "absolute", opacity: 0 }} />
                                                                    <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                                </div>
                                                                Boat<span>52</span></label></li>
                                                    </ul>
                                                </div>

                                                <a href="#all-property-types" className="link" data-toggle="collapse" aria-expanded="false" aria-controls="all-property-types">Show all</a>
                                            </section>

                                            <section>
                                                <h3>Property Facility</h3>
                                                <ul className="checkboxes no-bottom-margin">
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="wi-fi" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            Wi-fi<span>12</span></label></li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="free-parking" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            Free Parking<span>48</span></label></li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="airport" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            Airport Shuttle<span>36</span></label></li>
                                                    <li>
                                                        <label>
                                                            <div className="icheckbox">
                                                                <input type="checkbox" name="family-rooms" style={{ position: "absolute", opacity: 0 }} />
                                                                <ins className="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: 0, padding: 0, background: "rgb(255, 255, 255)", border: 0, opacity: 0 }}></ins>
                                                            </div>
                                                            Family Rooms<span>56</span></label></li>
                                                </ul>

                                            </section>

                                        </div>

                                    </div>

                                    <div className="form-group center">
                                        <button type="submit" className="btn btn-primary btn-rounded form-control">Search</button>
                                    </div>
                                </form>

                            </div>


                            <div id="text-2" className="sidebar widget-recent-post search-widget  widget_text">			<div className="textwidget"><a href="#/" className="advertising-banner">
                                <span className="banner-badge">Advertising</span>
                                <img src="http://shtheme.net/demosd/accommodo/wp-content/themes/accommodo/assets/img/ad-banner-02.jpg" alt="" />
                            </a></div>
                            </div>                    </div>
                    </div>
                    <div className="col-md-9">
                        <div className="main-content">
                            <div className="title">
                                <h1>Hotel Listing</h1>
                                <div className="display-selector">
                                    <span>Display : </span>
                                    <a href="#/" className="active" data-toggle="tooltip" data-placement="left" title="" data-original-title="Display list">
                                        <i className="fa fa-th-list"></i>
                                    </a>
                                    <a href="#/" data-toggle="tooltip" data-placement="left" title="" data-original-title="Display matrix">
                                        <i className="fa fa-th"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="itemlist">
                                <div className="image-wrapper">
                                    <a href="http://shtheme.net/demosd/accommodo/?accommodation=8-2" className="wrapper">
                                        <img src="http://shtheme.net/demosd/accommodo/wp-content/uploads/2016/08/02.jpg" className="owl-lazy" alt="" data-src="" />
                                    </a>
                                </div>
                                <div className="description">
                                    <div className="meta">
                                        <span>
                                            <i className="fa fa-star"></i>
                                            8.9
                                        </span>
                                        <span>
                                            <i className="fa fa-bed"></i>
                                            365
                                        </span>
                                    </div>
                                    <div className="info">
                                        <a href="http://shtheme.net/demosd/accommodo/?accommodation=8-2">
                                            <h3>Spring Hotel</h3>
                                        </a>
                                        <figure className="location">Montenegro </figure>
                                        <figure className="label label-info">Hotel</figure>
                                        <figure className="live-info">3 Persons watching now!</figure>
                                        <p>Description Spend Great Time in Our Hotel! Consectetur adipiscing elit. Vivamus nec augue ac dui sodales euismod. Suspendisse at dui sit amet felis commodo dictum. ClassNclassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer commodo eleifend erat, vitae tincidunt urna volutpat et. Mauris laoreet,...</p>
                                        <div className="price-info">
                                            From
                                            <span className="price">$32</span>
                                            <span className="appendix">/night</span>
                                        </div>
                                        <a href="http://shtheme.net/demosd/accommodo/?accommodation=8-2" className="btn btn-rounded btn-default btn-framed btn-small">View detail</a>
                                    </div>
                                </div>
                            </div> */}




                            <div className="card itemlist mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4 image-wrapper">
                                        <a href="http://shtheme.net/demosd/accommodo/?accommodation=8-2" className="wrapper">
                                            <img src="http://shtheme.net/demosd/accommodo/wp-content/uploads/2016/08/02.jpg" className="img-fluid" alt="" data-src="" />
                                        </a>
                                    </div>
                                    <div className="col-md-8 description">
                                        <div className="card-body info h-100 py-3">
                                            <a href="http://shtheme.net/demosd/accommodo/?accommodation=8-2">
                                                <h3 className="card-title">Spring Hotel</h3>
                                            </a>
                                            <p className="card-text overflow-hidden" style={{maxHeight: 72}}>Description Spend Great Time in Our Hotel! Consectetur adipiscing elit. Vivamus nec augue ac dui sodales euismod. Suspendisse at dui sit amet felis commodo dictum. ClassNclassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer commodo eleifend erat, vitae tincidunt urna volutpat et. Mauris laoreet,...</p>
                                            <div className="card-text price-info position-absolute justify-content-between d-flex align-items-center" style={{bottom: 16, width: "90%"}}>
                                                <div className="">
                                                    <span className="mr-3">From</span>
                                                    <span className="price mr-1">$32</span>
                                                    <span className="appendix">/night</span>
                                                </div>
                                                <div className="">
                                                    <a href="http://shtheme.net/demosd/accommodo/?accommodation=8-2" class="btn rounded-pill btn-default btn-framed btn-sm btn-outline-secondary">View detail</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;