import React from 'react';
import PaperSheet from './Paper';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
	  ...theme.mixins.gutters(),
	  paddingTop: theme.spacing.unit * 2,
	  paddingBottom: theme.spacing.unit * 2,
	},
  });

const BookList = ({ props, classes }) => {

	const { books } = props;

	const booksList = books.map(book => (
		
		<ListItem key={book.id} dense button className={classes.listItem} style = {{textDecorationLine: (book.completed ? 'line-through' : '' )}}>
			<ListItemText primary={book.title} />
			<ListItemSecondaryAction>
				<IconButton aria-label="Delete" title="Delete"
					onClick={() => props.deleteBook(book.id)}
				>
					<DeleteIcon />
				</IconButton>
				<Checkbox title="Mark as read"
				  onChange={() => props.onClick(book.id)}
				  checked={book.completed}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	));

	return <PaperSheet booksList={booksList} />
}

export default withStyles(styles)(BookList)