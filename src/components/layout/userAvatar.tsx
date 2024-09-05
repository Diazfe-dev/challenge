import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface Props {}

export const UserAvatar = (props: Props) => {
  return (
    <Avatar>
      <AvatarFallback>FD</AvatarFallback>
    </Avatar>
  )
}
