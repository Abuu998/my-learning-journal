
function Footer() {
    return (
        <footer
            className="full-bleed py-8 sm:py-12 text-sm sm:text-base bg-slate-900 text-white row-span-1"
        >
            <div className="flex flex-col place-items-center">
                <span>My Learning Journal</span>
                <small className="text-slate-300">Copyright &copy; {new Date().getFullYear()}</small>
            </div>
        </footer>
    )
}

export default Footer
