import React from 'react';
import { Link } from 'react-router-dom';

const TambahDlc = () => {
    return (
        <section id="main">
            <div class="row">
                <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
                <div class="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col s10 m6 l6">
                                <h5 class="breadcrumbs-title mt-0 mb-0"><span>Dlc Page</span></h5>
                                <ol class="breadcrumbs mb-0">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <Link to="/dlc">Tabel Dlc</Link>
                                    </li>
                                    <li class="breadcrumb-item active">Tambah Dlc
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="col s12 m12 l12">
                    <div id="placeholder" class="card card card-default scrollspy">
                        <div class="card-content">
                            <h4 class="card-title">Form with placeholder</h4>
                            <form>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="John Doe" id="name2" type="text"/>
                                            <label for="name2" class="active">Name</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="john@domainname.com" id="email2" type="email"/>
                                            <label for="email" class="active">Email</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="YourPassword" id="password2" type="password"/>
                                            <label for="password" class="active">Password</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <button class="btn cyan waves-effect waves-light right" type="submit" name="action">Submit
                                                <i class="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TambahDlc;