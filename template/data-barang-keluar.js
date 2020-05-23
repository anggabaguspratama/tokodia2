import React, { Component } from 'react'
import axios from 'axios'

class DataBarangKeluar extends Component{
      constructor(props){
            super(props)
            this.state = {
                  barangKeluar: [{
                        namaBarang: null,
                        idBarangKeluar: null,
                        qttBarang: null,
                        tglKeluar: null                       
                  }],
                  datas:  [{
                        nama: null,
                  }]
            }
      }
      componentDidMount(){
            const URL = 'http://localhost:12/api_3/BarangKeluar'
            axios({
                  method: 'GET',
                  url: URL
            })
            .then(resp => {
                  const mapData = resp.data.data.map((val) =>{
                        return{
                              namaBarang: val.namaBarang,
                              idBarangKeluar: val.idBarangKeluar,
                              qttBarang: val.qttBarangKeluar,
                              tglKeluar: val.tanggalKeluar
                        }
                  })
                  
                  this.setState({
                        barangKeluar: mapData
                  })
                  console.log(this.state.barangKeluar)
            })
            .catch(err => {
                  console.log('=======', err)
            })
      }
      render(){
            const barang = this.state.barangKeluar
            return(
                  <div className="data-barang">
                        <div className="judul">Tabel Barang Keluar</div>
                        <table>
                              <tr>
                                    <th>No</th>
                                    <th>Nama Barang</th>
                                    <th>Qtt. Barang Keluar</th>
                                    <th>Tanggal Barang Keluar</th>
                              </tr>{
                                    barang.map((_, idx) => {
                                          return(
                                                <tr>
                                                      <td>{idx+1}</td>
                                                      <td className="nama-barang">{barang[idx].namaBarang}</td>
                                                      <td>{barang[idx].qttBarang}</td>
                                                      <td>{barang[idx].tglKeluar}</td>
                                                </tr>
                                          )
                                    })
                              }
                        </table>
                  </div>
            )
      }
}
export default DataBarangKeluar