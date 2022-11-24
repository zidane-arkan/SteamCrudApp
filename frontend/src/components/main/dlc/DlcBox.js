import React from 'react'
import { Link } from 'react-router-dom'

function DlcBox({children,dlcPath}) {
  return (
      <section id="main">
          <div className="row">
              <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
              <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                  <div className="container">
                      <div className="row">
                          <div className="col s10 m6 l6">
                              <h5 className="breadcrumbs-title mt-0 mb-0"><span>Dlc Page</span></h5>
                              <ol className="breadcrumbs mb-0">
                                  <li className="breadcrumb-item"><a href="index.html">Home</a>
                                  </li>
                                  <li className="breadcrumb-item">
                                      <Link to="/dlc">Tabel Dlc</Link>
                                  </li>
                                  <li className="breadcrumb-item active">
                                      {dlcPath} Dlc
                                  </li>
                              </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col s12 m12 l12">
                    {children}
              </div>
          </div>
      </section>
  )
}

export default DlcBox