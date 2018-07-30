import random from '../../utils/random'

const defaultBooksList = [
	{title: 'You dont know Js', completed: false, id: random() },
	{title: 'I way to remember', completed: false, id: random()},
	{title: 'Five ways to Mars', completed: false, id: random()},
]

const booksState = (state = defaultBooksList, action) => {
	switch(action.type) {
		case 'TOGGLE_READ':
			console.log('TOGGLE_READ', action);
			return state.map( book => ( (action.id === book.id) ? ({...book, completed: !book.completed} ) : book) );


		default:
			return state
			
	}
}

export default booksState;