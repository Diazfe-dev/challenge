"use client";
import { createAccountSchema } from '@/domain/schemas';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


export const CreateAccountForm = () => {
    const form = useForm<z.infer<typeof createAccountSchema>>({
        resolver: zodResolver(createAccountSchema),
        defaultValues: {}
    })
    const { register } = form;

    

    return (
        <form>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Nombre de la cuenta
                    </Label>
                    <Input
                        id="name"
                        defaultValue=""
                        placeholder="Nombre de la cuenta"
                        className="col-span-3"
                        {...register('accountName')}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Numero de cuenta
                    </Label>
                    <Input
                        id="accountNumber"
                        defaultValue=""
                        placeholder="123456789"
                        className="col-span-3"
                        {...register('accountNumber')}
                    />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Balance inicial
                    </Label>
                    <Input
                        id="balance"
                        type="number"
                        placeholder="1000"
                        className="col-span-3"
                        {...register('balance')}
                    />
                </div>
            </div>
            <div className='flex flex-row justify-end'>
                <Button type="submit">Agregar cuenta</Button>
            </div>
        </form>
    )
}