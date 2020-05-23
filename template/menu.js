import React, { Component } from 'react'
import Logo from "./assets/img/logo.png"
import { Link } from "react-router-dom"

export class LeftSide extends Component{
      render(){
            return(
                  <div className="box-kiri">
                        <div className="header"><img src={Logo} alt="Logo.png"/></div>
                        <div className="box-menu">
                              <div className="head-navbar">
                                    <Link to="/dashboard">
                                          <i class="fas fa-home"></i><span>Dashboard</span>
                                    </Link>
                              </div>
                              <div className="navbar">
                                    <div className="nav-data-barang">
                                                <i class="fas fa-database"></i><span>Data TokoIndo</span>
                                    </div>
                                    <div className="nav-barang-masuk">
                                    <i class="fas fa-arrow-right"></i><span>Data Barang</span>
                                    <Link to = "/barang-total">
                                                <li>Data Barang Total</li>
                                          </Link>
                                          <Link to = "/barang-masuk">
                                                <li>Input Barang Masuk</li>
                                          </Link>
                                          <Link to = "/data-barang-masuk">
                                               <li>Data Barang Masuk</li>
                                          </Link>
                                    </div>
                                    <div className="nav-barang-keluar">
                                    <i class="fas fa-arrow-right"></i><span>Data Supplier</span>
                                          <Link to = "/data-supplier">
                                                <li>Data Supplier</li>
                                          </Link>
                                          <Link to = "/tambah-supplier">
                                                <li>Tambah Supplier</li>
                                          </Link>
                                          <Link to = "/edit-supplier">
                                                <li>Edit Supplier</li>
                                          </Link>
                                    </div>
                                    <div className="nav-barang-keluar">
                                    <i class="fas fa-arrow-right"></i><span>Data Sales</span>
                                          <Link to = "/sales">
                                                <li>Data Keuntungan</li>
                                          </Link>
                                          <Link to = "/penjualan">
                                                <li>Data Penjualan</li>
                                          </Link>
                                          <Link to = "/pembayaran">
                                                <li>Metode Pembayaran</li>
                                          </Link>
                                    </div>
                                    <div className="nav-barang-keluar">
                                    <i class="fas fa-arrow-right"></i><span>Data Admin</span>
                                          <Link to = "/tambah-admin">
                                                <li>Tambah Admin</li>
                                          </Link>
                                          <Link to = "/edit-admin">
                                                <li>Edit Admin</li>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                        <div className="logout">
                              <div>
                              <Link to = "/">
                                    <i class="fas fa-sign-out-alt"></i><span>Logout</span>
                              </Link>
                              </div>
                        </div>
                  </div>
            )
      }
}
