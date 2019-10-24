import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends Component {

  	render() {
		// const menuStyles = {
	   //    borderRadius: '0',
	   //    marginBottom: '0',
	   //    height: '3.75em'
	   // }

	  	return (
			<Menu size="large" className="navbar" style={{backgroundColor: "rgb(136, 77, 77)"}}>
				<Menu.Item position="right">
					<a href="https://www.linkedin.com/in/justin-wang-profile/"><FontAwesomeIcon style={{color: "#FFF"}} icon={['fab', 'linkedin']} size="2x"/></a>
					<a href="https://github.com/justinw827"><FontAwesomeIcon style={{color: "#FFF", marginLeft: "1em"}} icon={['fab', 'github']} size="2x"/></a>
				</Menu.Item>
			</Menu>
	  	)
  	}
}

export default NavBar;
