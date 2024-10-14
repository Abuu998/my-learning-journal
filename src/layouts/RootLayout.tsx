import { Outlet } from "react-router-dom"
import Navbar from "../components/nav/Navbar.tsx";
import Footer from "../components/footer/Footer.tsx";

function RootLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default RootLayout
