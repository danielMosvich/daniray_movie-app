import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainView } from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
