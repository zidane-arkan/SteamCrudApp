import React from 'react';
import { Link } from 'react-router-dom';

const DlcList = () => {
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
                                    <li className="breadcrumb-item"><a href="boy.html">Pages</a>
                                    </li>
                                    <li className="breadcrumb-item active">Tabel Dlc
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m12 l12">
                    <div id="bordered-table" className="card card card-default scrollspy">
                        <div className="card-content">
                            <h4 className="card-title">Tabel Dlc</h4>
                            <div className="row">
                                <div className="col s12">
                                    <Link to="/dlc/tambah"><button className="waves-effect waves-light  btn"><i className="material-icons right">add</i> Tambah Data</button></Link>
                                    <table className="bordered mt-1">
                                        <thead>
                                            <tr>
                                                <th data-field="id">Name</th>
                                                <th data-field="name">Item Name</th>
                                                <th data-field="price">Item Price</th>
                                                <th data-field="price">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Alvin</td>
                                                <td>Eclair</td>
                                                <td>$0.87</td>
                                                <td>
                                                    <Link className="btn-floating mb-1 btn waves-effect waves-light mr-4" to="/dlc/tambah">
                                                        <i class="material-icons">edit</i>
                                                    </Link>
                                                    <Link className="btn-floating mb-1 btn waves-effect waves-light mr-1" to="/dlc/edit">
                                                        <i class="material-icons">delete</i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DlcList;