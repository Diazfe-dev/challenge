import { UserAvatar } from './userAvatar'

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <nav className='flex w-full flex-row justify-between p-8'>
      <div>
        <h1 className='text-white'> Magoya - Software Engineer - Challenge </h1>
      </div>

      <div>
        <UserAvatar />
      </div>
    </nav>
  )
}
