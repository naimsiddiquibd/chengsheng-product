import React from 'react';
import SideBar from '../../Shared/SideBar/SideBar';
import './SingleProduct.css';

const SingleProduct = () => {
    return (
        <div>
            <SideBar></SideBar>
            <div>
            <div className="container-fluid mt-5">
    <div className="row">
        <div className="col-md-5">
            <div className="carousel slide" data-ride="carousel" id="carousel-1">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active"><img className="img-thumbnail w-100 d-block" src="https://i.imgur.com/U46TQz6.jpg" alt="Slide Image" loading="lazy"/></div>
                    <div className="carousel-item"><img className="img-thumbnail w-100 d-block" src="https://i.imgur.com/YOWv57X.jpg" alt="Slide Image"/></div>
                    <div className="carousel-item"><img className="img-thumbnail w-100 d-block" src="https://i.imgur.com/gLYZpMo.jpg" alt="Slide Image"/></div>
                </div>
                <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
                <ol className="carousel-indicators">
                    <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-1" data-slide-to="1"></li>
                    <li data-target="#carousel-1" data-slide-to="2"></li>
                </ol>
            </div>
        </div>
        <div className="col-md-7">
            <h1>Macbook air 8GB RAM/ 256GB SSD</h1>

            <div className="d-flex align-items-center mt-2 offers mb-1">
                <i className="fa fa-check-square-o mt-1"></i>
                <span className="ml-1 font-weight-bold">Bank Offers</span>
                <span className="ml-1">20% Instant Discount on SBI Credit Cards<br></br></span>
            </div>
            <div className="d-flex align-items-center offers mb-1">
                <i className="fa fa-check-square-o mt-1"></i>
                <span className="ml-1 font-weight-bold">Bank Offers</span>
                <span className="ml-1">5% Unlimited Cashback on Axis Bank Credit Card<br></br>
                </span>
            </div>
            <div className="d-flex align-items-center offers mb-1">
                <i className="fa fa-check-square-o mt-1"></i>
                <span className="ml-1 font-weight-bold">Bank Offers</span>
                <span className="ml-1">Extra 5% off* with Axis Bank Buzz Credit Card<br></br></span>
            </div>
            <div className="d-flex align-items-center offers">
                <i className="fa fa-check-square-o mt-1"></i>
                <span className="ml-1 font-weight-bold">Bank Offers</span>
                <span className="ml-1">20% Instant Discount on pay with&nbsp;&nbsp;google wallet<br></br>
                </span>
            </div>
          

            <h1 className="mt-4">Macbook air 8GB RAM/ 256GB SSD</h1>

<div className="d-flex align-items-center mt-2 offers mb-1">
    <i className="fa fa-check-square-o mt-1"></i>
    <span className="ml-1 font-weight-bold">Bank Offers</span>
    <span className="ml-1">20% Instant Discount on SBI Credit Cards<br></br></span>
</div>
<div className="d-flex align-items-center offers mb-1">
    <i className="fa fa-check-square-o mt-1"></i>
    <span className="ml-1 font-weight-bold">Bank Offers</span>
    <span className="ml-1">5% Unlimited Cashback on Axis Bank Credit Card<br></br>
    </span>
</div>
<div className="d-flex align-items-center offers mb-1">
    <i className="fa fa-check-square-o mt-1"></i>
    <span className="ml-1 font-weight-bold">Bank Offers</span>
    <span className="ml-1">Extra 5% off* with Axis Bank Buzz Credit Card<br></br></span>
</div>
<div className="d-flex align-items-center offers">
    <i className="fa fa-check-square-o mt-1"></i>
    <span className="ml-1 font-weight-bold">Bank Offers</span>
    <span className="ml-1">20% Instant Discount on pay with&nbsp;&nbsp;google wallet<br></br>
    </span>
</div>

            <div className="mt-3"><button className="btn btn-dark mr-2" type="button">GET FREE QUOTE</button>
            </div>
        </div>
        
        <table className="table table-bordered ml-3 mt-3">
  <thead>
    <tr>
      <th scope="col">Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
    <tr>
      <td scope="row">Place of origin</td>
      <td>China</td>
    </tr>
  </tbody>
</table>



    </div>

    
    
</div>

        </div>
        </div>
    );
};

export default SingleProduct;