import React from 'react';
import AppBar from './AppBar';
import AddNewBook from '../redux/containers/AddNewBook';
import BooksStoreData from '../redux/containers/BooksStoreData';

const App = () => (
	<div>
	<AppBar/>
		<div className = 'app-wrapper'>
			<AddNewBook/>
			<BooksStoreData/>
		</div>
	</div>
)

export default App;
