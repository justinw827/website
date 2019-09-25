import React, { Component, Fragment } from 'react'
import { Menu, Image, Icon } from 'semantic-ui-react'

class NavBar extends Component {

  	render() {
		const menuStyles = {
	      backgroundColor: "#02143B",
	      borderRadius: '0',
	      marginBottom: '0',
	      height: '3.75em'
	   }

	  	return (
			<Menu size="large" className="navbar" style={menuStyles}>
				<Menu.Item position="right">
					<p>About Me</p>
				</Menu.Item>
			</Menu>
	  	)
  	}
}

export default NavBar;
