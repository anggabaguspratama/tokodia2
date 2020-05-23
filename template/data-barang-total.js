import React, { Component } from 'react'
import {LeftSide} from "./menu"
import axios from 'axios'

// import DataBarang from './data_barang'

class DataBarangMasuk extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  barangTotal: [{
                        namaProduct:null,
                        merek:null,
                        qtyMinStock:null,
                        qtyStock:null,
                        hargaBeli:null,
                        hargaJual:null,
                        kategori:null,
                        gambar:null,
                        ukuran:null,
                        rasa:null,
                        isiPerkarton:null,
                        idSupplier:null 
                  }]
            }   
      }

      tableData() {
            console.log("Data Barang Total")
            return this.state.barangTotal.map((val, idx) => {
                  const { 
                        namaProduct,
                        merek,
                        qtyMinStock,
                        qtyStock,
                        hargaBeli,
                        hargaJual,
                        kategori,
                        ukuran,
                        rasa,
                        isiPerkarton,
                        idSupplier  
                  } = val

                  return(
                        <tr>
                              <td>{idx+1}</td>
                              <td className="text">{namaProduct}</td>
                              <td className="text">{merek}</td>
                              <td className="text">{qtyMinStock}</td>
                              <td className="text">{qtyStock}</td>
                              <td className="text">{hargaBeli}</td>
                              <td className="text">{hargaJual}</td>
                              <td className="text">{kategori}</td>
                              <td className="text">{ukuran}</td>
                              <td className="text">{rasa}</td>
                              <td className="text">{isiPerkarton}</td>
                              <td className="text">{idSupplier}</td>
                              
                        </tr>
                  )
            })
      }
      
      componentDidMount(){
            axios.get('http://localhost:12/product/getProducts')
            .then(resp => { 
                  const mapData = resp.data.data.map(val => {  
                        return{
                              namaProduct: val.namaProduct,
                              merek: val.merek,
                              qtyMinStock: val.qtyMinStock,
                              qtyStock: val.qtyStock,
                              hargaBeli: val.hargaBeli,
                              hargaJual: val.hargaJual,
                              kategori: val.kategori,
                              ukuran: val.ukuran,
                              rasa: val.rasa,
                              isiPerkarton: val.isiPerkarton,
                              idSupplier: val.idSupplier   
                        }
                  })
                  this.setState({
                        barangTotal: mapData
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
                        <h1 className="content-title">Barang Total</h1>
                              <div className="data-barang">
                                    {/* <DataBarang/> */}
                                    <div className="judul">Tabel Barang Total</div>
                                    <table>
                                          <tr>
                                                <th>No</th>
                                                <th>Nama Product</th>
                                                <th>Merek</th>
                                                <th>Jumlah Minimum Stock</th>
                                                <th>Jumlah Stock</th>
                                                <th>Harga Beli</th>
                                                <th>Harga Jual</th>
                                                <th>Kategori</th>
                                                <th>Ukuran</th>
                                                <th>Rasa</th>
                                                <th>Isi Perkarton</th>
                                                <th>Id Supplier</th> 
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