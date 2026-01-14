import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BookList from './components/BookList';
import { Provider } from 'react-redux';
import { store } from './state/store';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Provider store={store}>
				<CssBaseline />
				<main className='app'>
					<h1 className='main-heading'>Favourite Books Journal</h1>
					<div className='main-container'>
						<BookList />
					</div>
				</main>
			</Provider>
		</ThemeProvider>
	);
}

export default App;
