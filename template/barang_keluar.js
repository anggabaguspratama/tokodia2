import React, {Component} from "react"
import {LeftSide} from "./menu"

import Notifikasi from './notifikasi'
import NotifikasiBarang from './notifikasi_barang_masuk_keluar'

import axios from 'axios'

class Dashboard extends Component{
      constructor(props){
            super(props)
            this.state = {
                  forms: [{}],
                  barangKeluar: [{
                        idBarang: null,
                        namaBarang: null,
                        idBarangKeluar: null,
                        qttBarangKeluar: null,
                        tglKeluar: null
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
            remove.splice(e, 1)
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

      handleChangeNamaBarang = (e) => {
            this.setState({namaBarang: e.target.value})
      }
      handleChangeIdBarang = (e) => {
            this.setState({idBarang: e.target.value})
      }
      handleChangeQtt = e => {
            this.setState({qttBarangKeluar: e.target.value})
      }
      handleChangeTgl = e => {
            this.setState({tglKeluar: e.target.value})
      }

      handleSubmit = e => {
            e.preventDefault()

            const inputBarang = ({
                  idBarang: this.state.idBarang,
                  namaBarang: this.state.namaBarang,
                  idBarangKeluar: this.state.idBarangKeluar,
                  qttBarangKeluar: this.state.qttBarangKeluar,
                  tanggalKeluar: this.state.tglKeluar
            })

            const URL = 'http://localhost:12/api_3/InputBarangKeluar'

            axios({
                  method: 'POST',
                  url: URL,
                  data: JSON.stringify(inputBarang),
                  headers: { 'content-type': 'application/json' }
            })
            .then(()=>{
                  console.log('berhasil...')
                  this.setState({
                        notif: true,
                        textNotif: 'Berhasil Input Barang Keluar'
                  })
            })
            .catch(()=>{
                  console.log('Saved failed!!!')
                  this.setState({
                        notif: true,
                        textNotif: 'Failed!!!'
                  })
            })
      }   
      setFalse = () => {
            this.setState({ notif: false })
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
                        { this.showNotif() }
                        <div className="box-content">
                              <div className="header-content">
                                    <div><i class="fas fa-user"></i></div>
                              </div>  
                              <div className="content">
                              <h1 className="content-title">Barang Keluar</h1>
                                    <form method="POST" onSubmit={this.handleSubmit}>
                                          <div className="box-label">
                                                <div className="label-form">Tanggal Barang Keluar</div>
                                          </div>
                                          <div className="form">
                                                <input className="tgl-barang-keluar" 
                                                type="date" 
                                                name="tglBarangMasuk"
                                                onChange={this.handleChangeTgl}></input>
                                          </div>
                                          <div className="box-label">
                                                <div className="label-form">Nama Barang</div>
                                                <div className="label-form">Id Barang</div>
                                                <div className="label-form">Jumlah Barang</div>
                                          </div>
                                          {
                                                forms.map(() => {
                                                      return(
                                                            <div className="form">
                                                                  <input type="text" className="supplier" 
                                                                        name="namaBarang" 
                                                                        placeholder="Nama Barang"
                                                                        onChange={this.handleChangeNamaBarang}></input>
                                                                  <input type="text" 
                                                                        className="supplier" 
                                                                        name="idBarang" 
                                                                        placeholder="Id Barang"
                                                                        onChange={this.handleChangeIdBarang}></input>
                                                                  <input type="number" 
                                                                        className="jumlah-barang" 
                                                                        placeholder="Jumlah Barang"
                                                                        onChange={this.handleChangeQtt}></input>
                                                            </div>
                                                      )
                                                })
                                          }
                                          <div className="box-button">
                                                <button className="button-plus" type="button" onClick={this.addForms}><i class="fas fa-plus"></i></button>
                                                <button className="button-min" type="button" onClick={this.removeForms}><i class="fas fa-times"></i></button>
                                          </div>
                                          <input type="submit" className="submit" value="Save"></input>
                                          <button type="button" className="submit" value="Cancel" onClick={this.cancelForms}>Cancel</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            )
      }
}
export default Dashboard;