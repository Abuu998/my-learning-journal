import React, {createContext, useContext, useEffect, useCallback, useState} from "react"

type ThemeValue = {
    theme: string
    toggleTheme: () => void
}

type ThemeProviderProps = {
    children: React.ReactNode
}

const ThemeContext = createContext<ThemeValue>({
    theme: 'light',
    toggleTheme: ()=>{}
})

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem('preferredTheme') || 'light'
    )

    useEffect(() => {
        document.documentElement.setAttribute('data-mode', theme)
        localStorage.setItem('preferredTheme', theme)
    }, [theme]);


    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }, [])

    const parameters = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={parameters}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeValue {
    return useContext(ThemeContext)
}