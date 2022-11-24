import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DlcBox from './DlcBox';
import axios from 'axios';

const DlcList = () => {
    const apiDlc = 'http://localhost:5000/api/dlc';
    const [dlcData, setDlcData] = useState([]);
    useEffect(() => {
        getAllDlc();
    }, []);
    const getAllDlc = async () => {
        const res = await axios.get(apiDlc);
        setDlcData(res.data);
    };
    const deleteDlc = async (e) => {
        e.preventDefault();
        const { id } = e.target;
        if (window.confirm("Apakah Anda Yakin Ingin menghapus Dlc Ini ? ")) {
            await axios.delete(`${apiDlc}/${id}`);
            getAllDlc();
            console.log(id);
        }
    };
    return (
        <DlcBox dlcPath={"List"}>
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
                                                <th data-field="id">Dlc Id</th>
                                                <th data-field="name">Nama Dlc</th>
                                                <th data-field="price">Tanggal Pembaruan</th>
                                                <th data-field="price">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                dlcData.map((dlc, index) => {
                                                    return (
                                                        <tr key={dlc.dlc_id}>
                                                            <td>{dlc.dlc_id}</td>
                                                            <td>{dlc.nama_dlc}</td>
                                                            <td>{dlc.tanggal_pembaruan}</td>
                                                            <td>
                                                                <Link className="btn-floating mb-1 btn waves-effect waves-light mr-4" to="/dlc/tambah">
                                                                    <i className="material-icons">edit</i>
                                                                </Link>
                                                                <button onClick={deleteDlc} className="btn-floating mb-1 btn waves-effect waves-light mr-1">
                                                                    <i id={dlc.dlc_id} className="material-icons">delete</i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DlcBox>
    );
};

export default DlcList;