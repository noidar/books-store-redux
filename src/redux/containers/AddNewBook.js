import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addNewBook } from '../actions'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},

	input: {
		marginTop: theme.spacing.unit * 5,
		width: '50%',
	},

	button: {
		alignSelf: 'center'
	}
});

class AddNewBook extends Component {
	state = { value: '' }
	
	hangleAddNewBook = event => {
		if (this.state.value.length ) {

			if (event.keyCode === 13 || event.type === 'click') {
				this.props.addNewBook(this.state.value)
				this.setState({ value: ''})
			}
		}
	}

	hangleChange = event => {
		this.setState({
			value: event.target.value
		})
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.container}>
				<Input
					placeholder="Add new book name in list"
					className={classes.input}
					fullWidth
					inputProps={{
						'aria-label': 'Description',
					}}
					value={this.state.value}
					onChange={this.hangleChange}
					onKeyDown={this.hangleAddNewBook}
				/>
				<div className={classes.button}>
					<Button variant="outlined" className={classes.button}
						onClick={this.hangleAddNewBook}
					>
						ADD
					</Button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addNewBook: (text) => dispatch(addNewBook(text)),
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddNewBook));



