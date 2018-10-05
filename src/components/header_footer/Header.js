import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer';



export default class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
        }else{
            this.setState({
                headerShow: false
            })
        }
    }
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
  render() {
    return (
      <AppBar
      position= "fixed"
        style={{
            background: this.state.headerShow ? "#2f2f2f" : "transparent",
            padding: "10px 0",
            boxShadow: "none"

        }}
      >
       <ToolBar>
           <div className="header_logo">
               <div className="font_righteous header_logo_venue">Eventu</div>
                <div className="header_logo_title">Musical Event</div>
           </div>
           <IconButton
             aria-label= "Menu"
              color="inherit"
              onClick={()=> this.toggleDrawer(true)}
           >
               <MenuIcon />
           </IconButton>
           <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value)=> this.toggleDrawer(value)}
           />
       </ToolBar>
      </AppBar>
    )
  }
}
