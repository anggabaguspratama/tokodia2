import React, { Component } from 'react'
import { LeftSide } from "./menu.js"

import axios from 'axios'
import NotifikasiBarang from './notifikasi_barang_masuk_keluar'

class EditSupplier extends Component{
      constructor(props){
            super(props)
            this.state = {
                  forms: [{}],
                  editSupplier: [{
                        idSupplier: null,
                        namaSupplier: null,
                        alamatSupplier: null,
                        telepon:null
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

      handleChangeIdSupplier = event =>{
            this.setState({ idSupplier: event.target.value})
      }
      handleChangeNamaSupplier = event =>{
            this.setState({namaSupplier: event.target.value})
      }
      handleChangeAlamatSupplier = event =>{
            this.setState({alamatSupplier: event.target.value})
      }
      handleChangeTelepon = event =>{
            this.setState({telepon: event.target.value})
      }
      handleSubmit = event => {
            event.preventDefault()

            const editSupplier = ({
                  idSupplier: this.state.idSupplier,
                  namaSupplier: this.state.namaSupplier,
                  alamatSupplier: this.state.alamatSupplier,
                  telepon: this.state.telepon
            })
            const URL = 'http://localhost:12/supplier/editSupplier'
            
            axios({
                 method: 'POST',
                 url: URL,
                 data: JSON.stringify(editSupplier),
                 headers: { 'content-type': 'application/json' }
            })
            .then(resp => {
                  console.log('berhasil...')
                  this.setState({
                        notif: true,
                        textNotif: 'Data Supplier Berhasil diEdit'
                  })
            })
            .catch((err) => {
                  console.log(err)
                  this.setState({
                        notif: true,
                        textNotif: 'Data Terbaru Supplier Masih Kosong!!!'
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
                                    <h1 className="content-title">Edit Data Supplier</h1>
                                    <form method="POST" onSubmit={this.handleSubmit}>
                                          <div className="box-label">
                                                <div className="label-form">Id Supplier</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Id Supplier" 
                                                                        onChange={this.handleChangeIdSupplier}></input>
                                          </div>
                                          <div className="box-label">
                                                <div className="label-form">Nama Supplier</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Nama Supplier" 
                                                                        onChange={this.handleChangeNamaSupplier}></input>
                                          </div>
                                          <div className="box-label">
                                                <div className="label-form">Alamat Supplier</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Alamat Supplier" 
                                                                        onChange={this.handleChangeAlamatSupplier}></input>
                                          </div>
                                          <div className="box-label">
                                                <div className="label-form">Telepon Supplier</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Telepon Supplier" 
                                                                        onChange={this.handleChangeTelepon}></input>
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