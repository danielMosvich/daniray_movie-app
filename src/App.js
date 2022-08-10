import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./router";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	);
}

export default App;
