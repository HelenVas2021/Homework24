import { Component } from "react";
import Sidebar from './Sidebar';
import Main from './Main';
import './Body.css';

class Body extends Component{
	render(){
		return(
			<div className="body">
			<Sidebar/>
			<Main/>
			</div>
			
		)
			
	}
}
export default Body;