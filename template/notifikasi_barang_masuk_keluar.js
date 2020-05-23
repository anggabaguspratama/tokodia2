import React, { Component } from 'react'

class NotifikasiBarang extends Component{
      constructor(props){
            super(props)
            this.state = {
                  text: this.props.textNotif
            }
      }
      render(){
            return(
                  <>
                        <div className="notif">
                              <div className="info">{this.state.text}</div>
                        </div>
                  </>

            )
      }
}
export default NotifikasiBarang