import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom"

// LAYOUT
import RootLayout from "./layouts/RootLayout";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
        </Route>
    )
)

export default function App() {
    return <RouterProvider router={ROUTER} />
}