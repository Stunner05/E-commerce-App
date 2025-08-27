"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ReactFormState } from "react-dom/client";

interface paramProps {
    href: string,
    children: ReactNode
}

export default function NavLink({ href, children }: paramProps) {
	console.log("🚀 ~ NavLink ~ href:", href)
	const path = usePathname();
    const isActive = path === href;
	console.log("🚀 ~ NavLink ~ path:", path)
	return (
		<Link href={href} className={isActive ? "active" : undefined}>
			{children}
		</Link>
	);
}
