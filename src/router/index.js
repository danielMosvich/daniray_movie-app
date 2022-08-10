import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainView, SearchView,SearchResultsView } from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainView />} />
				<Route path="/search" element={<SearchView/>} />
				<Route path="/search/:searchText" element={<SearchResultsView/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
