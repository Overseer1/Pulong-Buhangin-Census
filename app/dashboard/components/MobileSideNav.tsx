"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideBar } from "./SideNav";
import { useEffect } from "react";

export default function MobileSideNav({ isAdmin, userSession }: { isAdmin: any, userSession: any }) {
	useEffect(() => {
		window.addEventListener("resize", (e: UIEvent) => {
			const w = e.target as Window;
			if (w.innerWidth >= 1024) {
				document.getElementById("sidebar-close")?.click();
			}
		});
		return () => {
			window.removeEventListener("resize", () => { });
		};
	}, []);

	return (
		<Sheet>
			<SheetTrigger asChild id="toggle-sidebar">
				<span></span>
			</SheetTrigger>
			<SheetContent side={"left"} className="dark:bg-graident-dark flex">
				<SideBar isAdmin={isAdmin} userSession={userSession} />
			</SheetContent>
		</Sheet>
	);
}
