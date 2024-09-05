'use client';

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { CreateTransactionForm } from './form'
import { useState } from 'react'

interface Props {}
export const CreateTransaction = ({}: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Transacciones</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Nueva cuenta</DialogTitle>
          <DialogDescription>
            Completa los datos y comenza a operar!
          </DialogDescription>
        </DialogHeader>
        <CreateTransactionForm handleClose={handleClose}/>
      </DialogContent>
    </Dialog>
  )
}
