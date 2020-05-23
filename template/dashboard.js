import React, {Component} from "react"
import {LeftSide} from "./menu"
import Gambar from "./assets/img/bg.png";
import DashboardPhoto from "./assets/img/indoapril.jpg"

class Dashboard extends Component{
      render(){
            return(
                  <div className="container">
                        <div className="bg-dash">
                              <img src ={Gambar} alt = "gambar"/>
                        </div>
                        <LeftSide/>
                        <div className="box-content">
                              <div className="header-content">
                                    <div><i class="fas fa-user"></i></div>
                              </div>  
                              <div className="content">
                                    <h1 className="content-title">Dashboard</h1>
                                    <h2 className="sub-title">PT. IndoApril</h2>
                                    <img src={DashboardPhoto} alt="IndoApril.jpg"/>  
                                    <h3>Mudah-mudahan Hemat</h3>
                              </div>
                        </div>
                  </div>
            )
      } 
}
export default Dashboard;