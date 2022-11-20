import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DlcList from './main/dlc/DlcList';
import TambahDlc from './main/dlc/TambahDlc';
import EditDlc from './main/dlc/EditDlc';

const RouteApp = () => {
    return (
        <Routes>
            <Route path='dlc' element={<DlcList />} />
            <Route path='dlc/tambah' element={<TambahDlc />} />
            <Route path='dlc/edit' element={<EditDlc />} />
        </Routes>
    );
};

export default RouteApp;