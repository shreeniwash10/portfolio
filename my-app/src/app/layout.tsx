import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provoder";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "John Anderson - Civil Engineer Portfolio",
	description:
		"Professional civil engineering services specializing in structural design, infrastructure development, and sustainable construction solutions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
