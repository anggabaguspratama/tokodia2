import React, { Component } from 'react'
import { LeftSide } from "./menu.js"

import axios from 'axios'
import NotifikasiBarang from './notifikasi_barang_masuk_keluar'

class Inventory extends Component{
      constructor(props){
            super(props)
            this.state = {
                  tgl: null,
                  tglAkhir:null,
                  barangOrder: [{
                        namaProduct: null,
                        qtyProductMasuk: null,
                        qtyStock: null,
                        qtyPenjualan: null,
                        qtyMinStock: null
                  }]
            }
      }
      tableData() {
            console.log("Data Inventory Barang")
            return this.state.barangOrder.map((val, idx) => {
                  const { 
                        namaProduct,
                        qtyProductMasuk,
                        qtyStock,
                        qtyPenjualan,
                        qtyMinStock

                  } = val

                  return(
                        <tr>
                              <td>{idx+1}</td>
                              <td className="text">{namaProduct}</td>
                              <td className="text">{qtyProductMasuk}</td>
                              <td className="text">{qtyStock}</td>
                              <td className="text">{qtyPenjualan}</td>
                              <td className="text">{qtyMinStock}</td>
                        </tr>
                  )
            })
      }
      handleChangeTgl = event =>{
            this.setState({tgl: event.target.value})
      } 
      handleChangeTglAkhir = event =>{
            this.setState({tglAkhir: event.target.value})
      }
      handleSubmit = event => {
            event.preventDefault()

            const inputBarang = ({
                  tgl: this.state.tgl,
                  tglAkhir: this.state.tglAkhir
            })
            const URL = 'http://localhost:12/report/getInventoryReport'
            
            axios({
                 method: 'POST',
                 url: URL,
                 data: JSON.stringify(inputBarang),
                 headers: { 'content-type': 'application/json' }
            })
            .then(resp => {
                  console.log('berhasil...')
                  const mapData = resp.data.data.map(val => {  
                        return{
                              namaProduct: val.namaProduct,
                              qtyProductMasuk: val.qtyProductMasuk,
                              qtyStock: val.qtyStock,
                              qtyPenjualan: val.qtyPenjualan,
                              qtyMinStock: val.qtyMinStock                        }
                  })
                  this.setState({
                        barangOrder: mapData
                  })
            })
            .catch((err) => {
                  console.log(err)
                  this.setState({
                        notif: true,
                        textNotif: 'Failed!!!'
                  })
            })
      }

      setFalse = () => {
            this.setState({notif: false})
      }

      showNotif = () => {
            if (this.state.notif === true){
                  return (
                        <div className="notifikasi">
                              <NotifikasiBarang textNotif={this.state.textNotif} />
                              <button onClick={this.setFalse}>OK</button>
                        </div>
                  )
            }
      }

      render(){
            return(
                  <div className="container">
                        <LeftSide/>  
                        {this.showNotif()}                   
                        <div className="box-content">
                              <div className="header-content">
                                    <div><i class="fas fa-user"></i></div>
                              </div>
                              <div className="content">
                                    <h1 className="content-title">Inventory Report</h1>
                                    <form method="POST" onSubmit={this.handleSubmit}>
                                          <div className="box-label">
                                                <div className="label-form">Tanggal Mulai</div>
                                                <div className="label-form">Tanggal Akhir</div>
                                          </div>
                                          <div className="form">
                                                <input className="surat-masuk" 
                                                      type="date" name="inputtanggal" 
                                                      onChange={this.handleChangeTgl}></input>
                                                <input className="surat-masuk" 
                                                      type="date" name="inputtanggal" 
                                                      onChange={this.handleChangeTglAkhir}></input>
                                          </div>
                                          <input type="submit" className="submit" value="Search"></input>
                                    </form>
                                    <div className="data-barang">
                                          <div className="judul">Tabel Data Sales</div>
                                          <table>
                                                <tr>
                                                      <th>No</th>
                                                      <th>Nama Product</th>
                                                      <th>Jumlah Product Masuk</th>
                                                      <th>Jumlah Stock</th>
                                                      <th>Jumlah Penjualan</th>
                                                      <th>Jumlah Minimum Stock</th>

                                                </tr>
                                                <tbody>
                                                      {this.tableData()}
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      }
}

export default Inventory;