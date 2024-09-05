import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { AccountEntity } from '@/domain'
import { Separator } from '../ui/separator'

interface Props {
  account: AccountEntity
}

export const AccountCard = (props: Props) => {
  const { account } = props
  const { accountBalance, accountName, accountNumber } = account
  return (
    <Card className='m-auto h-[200px] w-[350px] p-4'>
      <div className='flex h-full flex-col items-start justify-start gap-4'>
        <div>
          <span className='text-xl font-bold text-slate-300'>
            {accountName}
          </span>
        </div>
        <div>
          <span>Número de cuenta: </span>
          <span className='text-sm font-thin'>{accountNumber}</span>
        </div>
        <div>
          <span>Balance: </span>
          <span className='text-sm font-thin'>{accountBalance}</span>
        </div>
        <Separator />
        <div>
          <span>Ultima transaccion</span>
        </div>
      </div>
    </Card>
  )
}
