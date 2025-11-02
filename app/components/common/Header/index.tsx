import { ThemeToggle } from "../ModeToggle"

const Header = () => {
    return (
        <div className="w-full h-full flex justify-start items-start p-4 bg-gray-100 rounded-md border border-gray-200">
            <img src="/quizshare_logo.svg" />
            <ThemeToggle />
        </div>
    )
}

export default Header