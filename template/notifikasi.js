import React, { Component } from 'react'

class Notifikasi extends Component{
      constructor(props){
            super(props)
            this.state = {
                  notif: [{}],
                  text: this.props.textNotif
            }
      }
      removeNotif = () => {
            const remove = this.state.notif
            remove.splice(0)
            this.setState(()=>({
                  notif: remove
            }))
      }
      render(){
            let { notif } = this.state

            return(
                  <>
                  {
                        notif.map(() => {
                              return(
                                    <div className="notifikasi">
                                          <div className="notif-logo"><i class="far fa-bell"></i></div>
                                          <div className="notif-info">
                                                <div className="info">{this.state.text}</div>
                                                <div className="info">Minimum Stock</div>
                                                <div className="barang">Oreo : 2</div>
                                                <button type="button" onClick={this.removeNotif}>OK</button>
                                          </div>
                                    </div>
                              )
                        })
                  }
                  </>
            )
      }
}
export default Notifikasi