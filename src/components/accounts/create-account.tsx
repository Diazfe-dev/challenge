import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { CreateAccountForm } from "./form";

interface Props { }
export const CreateAccount = (props: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Agregar cuenta</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Nueva cuenta</DialogTitle>
                    <DialogDescription>
                        Completa los datos y comenza a operar!
                    </DialogDescription>
                </DialogHeader>
                <CreateAccountForm />
            </DialogContent>
        </Dialog>
    )
}