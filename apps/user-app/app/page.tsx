"use client";
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
	const session = useSession();
	return (
		<div className={""}>
			<main className={""}>
				<h1 className="text-3xl font-bold underline text-blue-600">
					Hello world!
				</h1>
			</main>
			<footer className={""}>Copyright © 2025 SupraPay</footer>
		</div>
	);
}
