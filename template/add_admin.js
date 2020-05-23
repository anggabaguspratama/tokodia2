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
                        namaAdmin: null,
                        email: null,
                        password: null,
                        telephon:null,
                        status: null
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

      handleChangeNamaAdmin = event =>{
            this.setState({ namaAdmin: event.target.value})
      }
      handleChangeEmail = event =>{
            this.setState({email: event.target.value})
      }
      handleChangePassword = event =>{
            this.setState({password: event.target.value})
      }
      handleChangeTelephon = event =>{
            this.setState({telephon: event.target.value})
      }
      handleChangeStatus = event =>{
            this.setState({status: event.target.value})
      }
      handleSubmit = event => {
            event.preventDefault()

            const tambahAdmin = ({
                  namaAdmin: this.state.namaAdmin,
                  email: this.state.email,
                  password: this.state.password,
                  telephon: this.state.telephon,
                  status: this.state.status,
            })
            const URL = 'http://localhost:12/admin/addAdmin'
            
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
                        textNotif: 'Data Admin Berhasil diTambah'
                  })
            })
            .catch((err) => {
                  console.log(err)
                  this.setState({
                        notif: true,
                        textNotif: 'Data Admin Masih Kosong!!!'
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
                                    <h1 className="content-title">Tambah Data Admin</h1>
                                    <form method="POST" onSubmit={this.handleSubmit}>
                                          <div className="box-label">
                                                <div className="label-form">Nama Admin</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Nama Admin" 
                                                                        onChange={this.handleChangeNamaAdmin}></input>
                                          </div>
                                          <div className="box-label">
                                                <div className="label-form">Email</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Email" 
                                                                        onChange={this.handleChangeEmail}></input>
                                          </div>
                                          <div className="box-label">
                                                <div className="label-form">Password</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="password" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Password" 
                                                                        onChange={this.handleChangePassword}></input>
                                          </div>
                                          <div className="box-label">
                                                <div className="label-form">Telepon Supplier</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Telephon" 
                                                                        onChange={this.handleChangeTelephon}></input>
                                          </div><div className="box-label">
                                                <div className="label-form">Status</div>
                                          </div>
                                          <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier"
                                                                        onChange={this.handleChangeStatus}></input>
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