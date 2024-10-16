import { logo } from "../../assets"
import MyLink from "./MyLink.tsx";

const LINKS = ['Home', 'About me']

function Navbar() {
	const navLinks = LINKS.map(item => (
		<li key={`${item}-navigation-link`}>
			<MyLink
				to={item === 'Home' ? '/' : item === 'About me' ? '/about' : `/${item}` }
				className="uppercase tracking-wide link-item text-xs"
			>{item}</MyLink>
		</li>
	))

	return (
		<nav
			className="py-4 bg-white full-bleed row-span-1 sticky top-0 inset-x-0 z-10 shadow-sm shadow-slate-300"
		>
			<div className="flex items-center justify-between">
				<MyLink to="/">
					<div className='flex items-center'>
						<img src={logo} alt="Logo Image" className="w-6 aspect-square block" />
						<span className="font-semibold tracking-tighter ml-2">My Learning journal</span>
					</div>
				</MyLink>

				<ul className="flex items-center gap-6">
					{ navLinks }
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
