
import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Whygoworld from "./components/pages/Whygoworld";
import Coaching from "./components/pages/Coaching";
import Apply from "./components/pages/Apply";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='#home' element={<Home></Home>} />
				<Route path='#a' element={<About></About>} />
				<Route path='#b' element={<Whygoworld></Whygoworld>} />
				<Route path='#c' element={<Coaching></Coaching>} />
				<Route path='#d' element={<Apply></Apply>} />
			</Routes>

			<Home/>
			<About/>
			<Whygoworld/>
			<Coaching/>
		</>
	);
}

export default App;
