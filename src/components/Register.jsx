import React from 'react';
import '../css/Register.css';
import { Facebook, Github, Google, Twitter } from 'react-bootstrap-icons';
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';

const Register = () => {

  const { text } = useContext(LanguageContext);

  return (
    <section className="text-center text-lg-start">
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right backdrop">
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">{text.login.title}</h2>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">{text.login.firstname}</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">{text.login.lastname}</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">{text.login.email}</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">{text.login.password}</label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    {text.login.signup}
                  </button>
                </form>
              </div>
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

export default Register;