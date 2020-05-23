import React, { Component } from 'react'
import {LeftSide} from "./menu"
import axios from 'axios'

// import DataBarang from './data_barang'

class DataSupplier extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  dataSupplier: [{
                        idSupplier: null,
                        namaSupplier: null,
                        alamatSupplier: null,
                        telepon: null  
                  }]
            }   
      }

      tableData() {
            console.log("Data Supplier")
            return this.state.dataSupplier.map((val, idx) => {
                  const { 
                        idSupplier,
                        namaSupplier,
                        alamatSupplier,
                        telepon   
                  } = val

                  return(
                        <tr>
                              <td>{idx+1}</td>
                              <td className="text">{idSupplier}</td>
                              <td className="text">{namaSupplier}</td>
                              <td className="text">{alamatSupplier}</td>
                              <td className="text">{telepon}</td>
                        </tr>
                  )
            })
      }
      
      componentDidMount(){
            axios.get('http://localhost:12/supplier/getSuppliers')
            .then(resp => { 
                  const mapData = resp.data.data.map(val => {  
                        return{
                              idSupplier: val.idSupplier,
                              namaSupplier: val.namaSupplier,
                              alamatSupplier: val.alamatSupplier,
                              telepon: val.telepon
                        }
                  })
                  this.setState({
                        dataSupplier: mapData
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
                                    <div className="data-barang">
                                          {/* <DataBarang/> */}
                                          <div className="judul">Tabel Data Supplier</div>
                                          <table>
                                                <tr>
                                                      <th>No</th>
                                                      <th>Id Supplier</th>
                                                      <th>Nama Supplier</th>
                                                      <th>Alamat Supplier</th>
                                                      <th>Telepon Supplier</th>
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
export default DataSupplier