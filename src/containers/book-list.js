import React,{Component} from 'react';

import {connect} from 'react-redux';

class BookList extends Component{

	renderList(){
		return this.props.books.map((book)=>{
			return (
				<li key={book.title} className="list-group-item">
				{book.title}
				</li>
			)
		});
	}
	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	//Whatever will be the return from here ,will be show up as props inside Booklist
	return {
		books: state.books	
	};
}

export default connect(mapStateToProps)(BookList)
