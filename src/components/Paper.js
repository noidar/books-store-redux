import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

const styles = theme => ({
  root: {
	...theme.mixins.gutters(),
	paddingTop: theme.spacing.unit * 2,
	paddingBottom: theme.spacing.unit * 2,
  },
});

const PaperSheet = (props) => {
  const { classes } = props;
  const { booksList } = props;
  
  return (
	<div>
	<Paper className={`${classes.root} app-paper`} elevation={1}>
			<List>
				{booksList}
			</List>
	</Paper>
	</div>
  );
}


export default withStyles(styles)(PaperSheet);