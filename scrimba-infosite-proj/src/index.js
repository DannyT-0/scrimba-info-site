import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function StaticPage() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

root.render(<StaticPage />);
