import React, { Component } from 'react'
import { LeftSide } from "./menu.js"

import axios from 'axios'
import NotifikasiBarang from './notifikasi_barang_masuk_keluar'

class EditSupplier extends Component{
      constructor(props){
            super(props)
            this.state = {
                  forms: [{}],
                  tambahAdmin: [{
                        idPenjualan: null,
                        metodePembayaran: null
                  }],
                  notif: false,
                  textNotif: null
            }
      }
      cancelForms = () => {
            const cancel = this.state.forms
            cancel.splice(1)
            this.setState(()=>({
                  forms: cancel
            }))
      }
      handleChangeIdPenjualan = event =>{
            this.setState({ idPenjualan: event.target.value})
      }
      handleChangeMetodePembayaran = event =>{
            this.setState({ metodePembayaran: event.target.value})
      }
      handleSubmit = event => {
            event.preventDefault()

            const tambahAdmin = ({
                  idPenjualan: this.state.idPenjualan,
                  metodePembayaran: this.state.metodePembayaran
            })
            const URL = 'http://localhost:12/penjualan/setStatusPembayaran'
            
            axios({
                 method: 'POST',
                 url: URL,
                 data: JSON.stringify(tambahAdmin),
                 headers: { 'content-type': 'application/json' }
            })
            .then(resp => {
                  console.log('berhasil...')
                  this.setState({
                        notif: true,
                        textNotif: 'Pembayaran Sukses'
                  })
            })
            .catch((err) => {
                  console.log(err)
                  this.setState({
                        notif: true,
                        textNotif: 'Pembayaran Gagal!!!'
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
                                    <h1 className="content-title">Pembayaran</h1>
                                    <form method="POST" onSubmit={this.handleSubmit}>
                                    <div className="box-label">
                                                <div className="label-form">Id Pembayaran</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Id Pembayaran" 
                                                                        onChange={this.handleChangeIdPenjualan}></input>
                                          </div>
                                          <div className="box-label">
                                                <div className="label-form">Metode Pembayaran</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Metode Pembayaran" 
                                                                        onChange={this.handleChangeMetodePembayaran}></input>
                                          </div>
                                          <input type="submit" className="submit" value="Save"></input>
                                          <button type="button" className="submit" value="Cancel" onClick={this.cancelForms}>Cancel</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            );
      }
}

export default EditSupplier;