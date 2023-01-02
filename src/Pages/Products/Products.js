import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import SideBar from '../../Shared/SideBar/SideBar';
import './Products.css';

const Products = () => {
    return (
      <>
        <div>
            <div>
    <SideBar></SideBar>
<section id="products">
<div className="container">
<div className="row">
<div className="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
        <Link to="/single-product">
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">Wooden chair with legs</p>
        </div>
      </div>
      </Link>
</div>
<div className="col-lg-3 offset-lg-0 col-sm-4 offset-sm-2 col-11 offset-1">
    <Link to="/single-product">
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">Ugly chair and table set</p>    
        </div>
      </div>
      </Link>
</div>
<div className="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
    <Link to="/single-product">
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">Leather Lounger</p>    
        </div>
      </div>
      </Link>
</div>
<div className="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
    <Link to="/single-product">
    <div className="card">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1537182534312-f945134cce34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">Tree Trunk table set</p>     
        </div>
    </div>
    </Link>
</div>
</div>
<div className="row mt-3">
<div className="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
    <Link to="/single-product">
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/3230274/pexels-photo-3230274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">Red Leather Bar Stool</p>       
        </div>
      </div>
      </Link>
</div>
<div className="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
    <Link to="/single-product">
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/3773571/pexels-photo-3773571.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">Modern Dining Table</p>      
        </div>
      </div>
      </Link>
</div>
<div className="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
    <Link to="/single-product">
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">Boring Dining Table</p>    
        </div>
      </div>
      </Link>
</div>
<div className="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
    <Link to="/single-product">
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">An Ugly Office</p>    
        </div>
    </div>
    </Link>
</div>
</div>
</div>
</section>

</div>

        </div>
        <Footer></Footer>
        </>
    );
};

export default Products;