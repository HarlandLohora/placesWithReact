import React from "react";

class Title extends React.Component{
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<br/>
				<p>Descubre lugares de manera simple</p>
			</div>
		);
	}
}



export default Title;