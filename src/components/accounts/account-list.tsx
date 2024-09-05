import { useSelector } from 'react-redux'
import { RootState } from '@/infra/store'

import { AccountCard } from './account-card'

export const AccountList = () => {
  const accounts = useSelector((state: RootState) => state.accounts)
  return (
    <div className='flex flex-wrap justify-center gap-4 wrap'>
      {accounts &&
        accounts.map(account => (
          <div key={account.accountNumber}>
            <AccountCard account={account} />
          </div>
        ))}
    </div>
  )
}
