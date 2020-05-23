import React, { Component } from 'react'
import { LeftSide } from "./menu.js"

import axios from 'axios'
import NotifikasiBarang from './notifikasi_barang_masuk_keluar'

class BarangMasuk extends Component{
      constructor(props){
            super(props)
            this.state = {
                  forms: [{}],
                  barangMasuk: [{
                        qtyMasuk: null,
                        tanggalMasuk: null,
                        namaProduct: null
                  }],
                  notif: false,
                  textNotif: null
            }
      }

      addForms = () => {
            this.setState( prevState => ({
                  forms: [...prevState.forms, {}]
            }))
      }
      removeForms = e => {
            const remove = this.state.forms
            console.log(remove)
            remove.splice(e, 1)
            console.log(e)
            this.setState( () => ({
                  forms: remove
            }))
      }
      cancelForms = () => {
            const cancel = this.state.forms
            cancel.splice(1)
            this.setState(()=>({
                  forms: cancel
            }))
      }

      handleChangeQtyMasuk = event =>{
            this.setState({ qtyMasuk: event.target.value})
      }
      handleChangeTanggalMasuk = event =>{
            this.setState({tanggalMasuk: event.target.value})
      }
      handleChangeNamaProduct = event =>{
            this.setState({namaProduct: event.target.value})
      }

      handleSubmit = event => {
            event.preventDefault()

            const inputBarang = [({
                  qtyMasuk: this.state.qtyMasuk,
                  tanggalMasuk: this.state.tanggalMasuk,
                  namaProduct: this.state.namaProduct
            })]
            const URL = 'http://localhost:12/product/addProductStock'
            
            axios({
                 method: 'POST',
                 url: URL,
                 data: JSON.stringify(inputBarang),
                 headers: { 'content-type': 'application/json' }
            })
            .then(resp => {
                  console.log('berhasil...')
                  this.setState({
                        notif: true,
                        textNotif: 'Barang Berhasil Ditambahkan'
                  })
            })
            .catch((err) => {
                  console.log(err)
                  this.setState({
                        notif: true,
                        textNotif: 'Data Masih Kosong!!!'
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
            let {forms} = this.state

            return(
                  <div className="container">
                        <LeftSide/>
                        {this.showNotif()}                        
                        <div className="box-content">
                              <div className="header-content">
                                    <div><i class="fas fa-user"></i></div>
                              </div>
                              <div className="content">
                                    <h1 className="content-title">Barang Masuk</h1>
                                    <form method="POST" onSubmit={this.handleSubmit}>
                                          <div className="box-label">
                                                <div className="label-form">Nama Product</div>
                                                <div className="label-form">Tanggal Masuk</div>
                                                <div className="label-form">Jumlah Barang</div>
                                          </div>
                                          {
                                                forms.map(() => {
                                                      return(
                                                            <div className="form">
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        placeholder="Nama Product" 
                                                                        onChange={this.handleChangeNamaProduct}></input>
                                                                  <input type="date" 
                                                                        className="supplier" 
                                                                        name="supplier" 
                                                                        onChange={this.handleChangeTanggalMasuk}></input>
                                                                  <input type="number" 
                                                                        className="jumlah-barang" 
                                                                        placeholder="Jumlah Barang"
                                                                        onChange={this.handleChangeQtyMasuk}></input>
                                                            </div>
                                                      )
                                                })
                                          }
                                          <div className="box-button">
                                                <button className="button-plus" 
                                                      type="button" 
                                                      onClick={this.addForms}>
                                                            <i class="fas fa-plus"></i>
                                                </button>
                                                <button className="button-min" 
                                                      type="button" 
                                                      onClick={this.removeForms}>
                                                            <i class="fas fa-times"></i>
                                                </button>
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

export default BarangMasuk;