import Button from "./Button.tsx";
import {useTheme} from "../../context/ThemeContext.tsx";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"


function ThemeSwitcher() {
    const { toggleTheme, theme } = useTheme()

    const RenderIcon = theme === 'light' ? HiOutlineMoon : HiOutlineSun

    return (
        <Button className="ml-6" onClick={toggleTheme} aria-label="Toggle theme">
            <RenderIcon className="text-base sm:text-xl md:text-2xl" />
        </Button>
    )
}

export default ThemeSwitcher
