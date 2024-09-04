import { UserAvatar } from "./userAvatar"

interface Props { }

export const Navbar = (props: Props) => {
    return (
        <nav className="p-8 w-full flex flex-row justify-between">
            <div>
                <h1 className="text-white"> Magoya - Software Engineer - Challenge </h1>
            </div>

            <div>
                <UserAvatar />
            </div>
        </nav>
    )
}