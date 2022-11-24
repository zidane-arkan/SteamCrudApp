import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DlcBox from './DlcBox';
import axios from 'axios';

const TambahDlc = () => {
    const inputId = useRef();

    const addNewDlc = (e) => {
        e.preventDefault();
        console.log(inputId.current.value);
    };
    return (
        <DlcBox dlcPath={"Tambah"}>
            <div className="row">
                <div class="col s12 m12 l12">
                    <div id="placeholder" class="card card card-default scrollspy">
                        <div class="card-content">
                            <h4 class="card-title">Tambah Data DLC</h4>
                            <form onSubmit={addNewDlc}>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="Blood & Hate" id="text2" type="text" />
                                        <label for="text" class="active">Nama Dlc</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="YourPassword" id="password2" type="password" />
                                        <label for="password" class="active">Tanggal Pembaruan</label>
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
        </DlcBox>
    );
};

export default TambahDlc;