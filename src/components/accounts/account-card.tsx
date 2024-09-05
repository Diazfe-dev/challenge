import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { AccountEntity, TransactionEntity, TransactionType } from '@/domain'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'

interface Props {
  account: {
    id: number
    accountName: string
    accountNumber: string
    accountBalance: number
    transactions?: TransactionEntity[]
  }
}

export const AccountCard = (props: Props) => {
  const { account } = props

  const lastTransaction =
    account.transactions && account.transactions.length > 0
      ? account.transactions[account.transactions.length - 1]
      : null

  const transactionStyle =
    lastTransaction?.type === TransactionType.DEPOSIT
      ? 'text-green-500'
      : 'text-red-500'

  return (
    <Card className='m-auto h-[200px] w-[350px] p-4'>
      <div className='flex h-full flex-col items-start justify-start gap-2'>
        <div>
          <span className='text-md font-bold text-zinc-600'>
            {account.accountName}
          </span>
        </div>
        <div>
          <span className='text-sm font-medium'>Número de cuenta: </span>
          <span className='text-sm font-thin'>{account.accountNumber}</span>
        </div>
        <div>
          <span className='text-sm font-medium'>Balance: </span>
          <span className='text-sm font-thin'>{account.accountBalance}</span>
        </div>
        <Separator />
        <div>
          <span className='text-md font-bold text-zinc-600'>
            Última transacción:
          </span>
          {lastTransaction && (
            <div>
              <div
                className='flex flex-row content-center items-center justify-start text-center'
                key={lastTransaction.id}
              >
                <span className='text-md font-regular'>
                  {lastTransaction.type === TransactionType.DEPOSIT
                    ? 'Deposito:'
                    : 'Retiro'}
                </span>
                <span className={cn('text-md font-bold ml-2', transactionStyle)}>
                  ${lastTransaction.amount}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
