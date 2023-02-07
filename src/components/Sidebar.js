import { Component } from "react";
import './Sidebar.css'

class Sidebar extends Component{
	render(){
		return(
			<div className="sidebar">
         		<h4>Sidebar</h4>
				<div>Menu</div>
				<ul>
					<li>item1</li>
					<li>item2</li>
					<li>item3</li>
				</ul>
			</div>
			
		)
	}
}
export default Sidebar;