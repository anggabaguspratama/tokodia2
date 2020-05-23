import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Login from "./template/login";
import Dashboard from "./template/dashboard"
import DataBarang from "./template/data_barang";
import BarangMasuk from "./template/barang_masuk";
import BarangKeluar from "./template/barang_keluar";
import DataBarangMasuk from "./template/data-barang-masuk";
import TambahSupplier from"./template/tambah_supplier";
import EditSupplier from "./template/edit_supplier";
import TambahAdmin from "./template/add_admin";
import Penjualan from "./template/data-sales";
import Penjualan2 from "./template/data-penjualan";
import Inventory from "./template/inventory-report";
import EditAdmin from "./template/edit_admin";
import DataBarangDetail from "./template/data-barang-total";
import DataSupplier from "./template/data-supplier";
import Pembayaran from "./template/metode-pembayaran";

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <div className="content">
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/data-barang" exact component={DataBarang}/>
            <Route path="/barang-masuk" exact component={BarangMasuk}/>
            <Route path="/barang-keluar" exact component={BarangKeluar}/>
            <Route path="/data-barang-masuk" exact component={DataBarangMasuk}/>
            <Route path="/tambah-supplier" exact component={TambahSupplier}/>
            <Route path="/edit-supplier" exact component={EditSupplier}/>
            <Route path="/tambah-admin" exact component={TambahAdmin}/>
            <Route path="/sales" exact component={Penjualan}/>
            <Route path="/penjualan" exact component={Penjualan2}/>
            <Route path="/inventory-report" exact component={Inventory}/>
            <Route path="/edit-admin" exact component={EditAdmin}/>
            <Route path="/barang-total" exact component={DataBarangDetail}/>
            <Route path="/data-supplier" exact component={DataSupplier}/>
            <Route path="/pembayaran" exact component={Pembayaran}/>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
