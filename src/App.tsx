import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main className='app'>
				<h1 className='main-heading'>Favourite Books Journal</h1>
				<div className='main-container'></div>
			</main>
		</ThemeProvider>
	);
}

export default App;
