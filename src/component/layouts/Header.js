import React from 'react';
import Login from '../user/Login';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/action/UserAction';
import { useAlert } from 'react-alert';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const alert = useAlert()
  const {user, loading} = useSelector(state => state.auth)
  console.log(user)

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/')
    alert.success('logout successfully')

  }

  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              <a className="text-body mr-3" href="">About</a>
              <a className="text-body mr-3" href="">Contact</a>
              <a classNameName="text-body mr-3" href="">Help</a>
              <a classNameName="text-body mr-3" href="">FAQs</a>
            </div>
          </div>
          
          <div className="col-lg-6 text-center text-lg-right">
<div className="d-inline-flex align-items-center" style={{ gap: "10px" }}>
                            {
                                user ? (
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">{user && user.name}</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                           <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
                                                <img style={{ height: "18px", width: "18px", borderRadius: "100%", marginLeft: "20px" }} src={user.image && user.image.url} className='rounded-circle' alt={user && user.name} />
                                                <span className="dropdown-item">{user && user.name}</span>
                                            </div>
                                            {
                                                user && user.role !== 'admin' ? (
                                                    <Link className="dropdown-item" to='/orders/me'>Orders</Link>
                                                ) : (
                                                    <Link className="dropdown-item" to='/admin/dashboard'>Dashboard</Link>
                                                )
                                            }
                                            <Link className="dropdown-item" to='/profile'>Profile</Link>
                                            <Link to='/' className="dropdown-item" onClick={handleLogout}>Logout</Link>
                                        </div>
                                    </div>
                                ) : !loading && <Link className="dropdown-item" to='/login'>Sign in</Link>
                            }
                            </div>


            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark"></i>
                <span className="badge text-dark border border-dark rounded-circle"  ></span>
              </a>
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark"></i>
                <span className="badge text-dark border border-dark rounded-circle">0</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}


      
    </>
  );
}

export default Header;
