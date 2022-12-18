import React from 'react';
import { useContext } from 'react';
import { Facebook, Github, Google, Twitter } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import '../css/Login.css';

const Login = () => {

  const { text } = useContext(LanguageContext);

  return (
    <section className="text-center text-lg-start">
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="card cascading-right backdrop">
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Login</h2>
                <form>
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">{text.login.email}</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">{text.login.password}</label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    {text.login.signin}
                  </button>


                  <div className="text-center">
                    <p>{text.login.orsocial}</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <Facebook />
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <Google />
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <Github />
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <Twitter />
                    </button>
                  </div>
                </form>
              </div>
              <Link to='/register'>
                <h6 className="fw-bold mb-5 text-center pointer">{text.login.create}</h6>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
              alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;