import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext';

const Page404 = () => {

  const {text} = useContext(LanguageContext)
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span class="text-danger">{text.error.ops}</span> {text.error.notFound}</p>
                <p className="lead">
                    {text.error.dontExist}
                  </p>
                <a className="btn btn-primary">{text.error.home}</a>
            </div>
        </div>
  )
}

export default Page404;