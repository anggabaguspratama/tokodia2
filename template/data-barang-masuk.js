import React, { Component } from 'react'
import {LeftSide} from "./menu"
import axios from 'axios'

// import DataBarang from './data_barang'

class DataBarangMasuk extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  barangMasuk: [{
                        idProductMasuk: null,
                        qtyMasuk: null,
                        tanggalMasuk: null,
                        idProduct: null  
                  }]
            }   
      }

      tableData() {
            console.log("Data Barang Masuk")
            return this.state.barangMasuk.map((val, idx) => {
                  const { 
                        idProductMasuk,
                        qtyMasuk,
                        tanggalMasuk,
                        idProduct  
                  } = val

                  return(
                        <tr>
                              <td>{idx+1}</td>
                              <td className="text">{idProductMasuk}</td>
                              <td className="text">{qtyMasuk}</td>
                              <td className="text">{tanggalMasuk}</td>
                              <td className="texts">{idProduct}</td>
                        </tr>
                  )
            })
      }
      
      componentDidMount(){
            axios.get('http://localhost:12/product/getProductMasuk')
            .then(resp => { 
                  const mapData = resp.data.data.map(val => {  
                        return{
                              idProductMasuk: val.idProductMasuk,
                              qtyMasuk: val.qtyMasuk,
                              tanggalMasuk: val.tanggalMasuk,
                              idProduct: val.idProduct
                        }
                  })
                  this.setState({
                        barangMasuk: mapData
                  })
            })
            .catch(err => {
                  console.log('==========',err)
            })
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
                              <h1 className="content-title">Barang Masuk</h1>
                                    <div className="data-barang">
                                          {/* <DataBarang/> */}
                                          <div className="judul">Tabel Barang Masuk</div>
                                          <table>
                                                <tr>
                                                      <th>No</th>
                                                      <th>Id Product Masuk</th>
                                                      <th>Jumlah Barang Masuk</th>
                                                      <th>Tanggal Masuk</th>
                                                      <th>Id Product</th>
                                                </tr>
                                                <tbody>
                                                      {this.tableData()}
                                                </tbody>
                                          </table>
                                     </div>
                              </div>
                        </div>
                  </div>
            )
      }
}
export default DataBarangMasuk