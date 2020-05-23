import React, { Component } from 'react'
import { LeftSide } from "./menu.js"

import DataBarangDetail from "./data-barang-total"
import DataSupplier from "./data-supplier"
import DataBarangMasuk from "./data-barang-masuk"


class DataBarang extends Component{
      constructor(props){
            super(props);
            this.state = {
                  tableMasuk: false,
                  tableSupplier: false,
                  tableDetail: false
            }
      }

      barangMasuk = () => {
            this.setState({
                  tableMasuk: true,
                  tableSupplier: false,
                  tableDetail: false
            })
      }
      dataSupplier = () => {
            this.setState({
                  tableSupplier: true,
                  tableMasuk: false,
                  tableDetail: false
            })
      }
      barangDetail = () => {
            this.setState({
                  tableDetail: true,
                  tableMasuk: false,
                  tableSupplier: false                  
            })
      }
      showTable = () => {
            if (this.state.tableMasuk === true){
                  return <DataBarangMasuk/>
            } else if (this.state.tableSupplier === true){
                  return <DataSupplier/>
            } else if (this.state.tableDetail === true) {
                  return <DataBarangDetail/>
            }
      }

      render(){
            return(
                  <div className="container">
                        <LeftSide/>
                        <div className="box-content">
                              <div className="header-content">
                                    <div><i class="fas fa-user"></i></div>
                              </div>
                              <div className="content">
                                    <h1 className="content-title">Data Barang</h1>
                                    <div className="box-button">
                                          <button className="barang-masuk-button" 
                                                onClick={this.barangMasuk}>Barang Masuk</button>
                                          <button className="barang-keluar-button" 
                                                onClick={this.dataSupplier}>Data Supplier</button>
                                          <button className="detail-barang-button" 
                                                onClick={this.barangDetail}>Data Barang</button>
                                    </div>
                                    {this.showTable()}
                              </div>
                        </div>
                        
                  </div>
            );
      }
}

export default DataBarang;