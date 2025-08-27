"use client"

import {
    Dialog,
    DialogOverlay,
    DialogContent,
} from "./dialog"
import { useRouter } from "next/navigation"

export function Modal({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()

    const handleOpenChange = (open: boolean) => {
        if (!open) router.back()
    }

    return (
        <Dialog open={true} defaultOpen={true} onOpenChange={handleOpenChange}>
            <DialogOverlay>
                <DialogContent className="overflow-y-hidden">
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}
