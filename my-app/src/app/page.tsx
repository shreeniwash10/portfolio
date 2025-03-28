"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	Award,
	Building2,
	HardHat,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NetworkBackground from "@/components/network-background";

export default function Home() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	console.log(
		"🧑‍💻 page.tsx|:29|mousePosition👉",
		JSON.stringify(mousePosition, null, 2),
		"👈 🛑"
	);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="flex flex-col min-h-screen relative overflow-hidden">
			<div className="fixed inset-0 z-0 opacity-20">
				<NetworkBackground />
			</div>

			{/* Hero Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 relative z-10 bg-gradient-to-b from-blue-50/80 via-purple-50/50 to-white/70 dark:from-gray-900/90 dark:via-purple-900/30 dark:to-gray-950/80 backdrop-blur-sm">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<motion.div
							className="flex flex-col justify-center space-y-4"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
									ShreeNiwash Sharma
								</h1>
								<p className="text-xl text-muted-foreground">
									Professional Civil Engineer
								</p>
							</div>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								Specializing in structural design, infrastructure development,
								and sustainable construction solutions with over 15 years of
								experience.
							</p>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button
									asChild
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
								>
									<Link href="#projects">
										View Projects <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button
									variant="outline"
									asChild
									className="border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:shadow-md hover:scale-105"
								>
									<Link href="#contact">Contact Me</Link>
								</Button>
							</div>
						</motion.div>
						<motion.div
							className="mx-auto lg:ml-auto"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>
								<img
									alt="Civil Engineer"
									className="relative mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-all duration-500 group-hover:scale-[1.02]"
									height="550"
									src="/placeholder.svg?height=550&width=550"
									width="550"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				className="w-full py-12 md:py-24 lg:py-32 relative z-10"
				id="about"
			>
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 px-3 py-1 text-sm">
								About Me
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
								Professional Background
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								With a passion for innovative design and sustainable
								development, I bring expertise in structural engineering,
								project management, and urban planning.
							</p>
						</div>
					</motion.div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
						<motion.div
							className="flex flex-col justify-center space-y-4"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<ul className="grid gap-6">
								<motion.li
									className="flex items-center gap-4 group"
									whileHover={{ x: 10 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								>
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 group-hover:scale-110">
										<Building2 className="h-5 w-5 text-white" />
									</div>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
											Structural Design
										</h3>
										<p className="text-muted-foreground">
											Expertise in designing resilient structures that meet
											safety standards and client requirements.
										</p>
									</div>
								</motion.li>
								<motion.li
									className="flex items-center gap-4 group"
									whileHover={{ x: 10 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								>
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 group-hover:scale-110">
										<HardHat className="h-5 w-5 text-white" />
									</div>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
											Project Management
										</h3>
										<p className="text-muted-foreground">
											Skilled in overseeing complex infrastructure projects from
											conception to completion.
										</p>
									</div>
								</motion.li>
								<motion.li
									className="flex items-center gap-4 group"
									whileHover={{ x: 10 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								>
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-600 dark:to-orange-600 group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300 group-hover:scale-110">
										<Award className="h-5 w-5 text-white" />
									</div>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
											Sustainable Solutions
										</h3>
										<p className="text-muted-foreground">
											Committed to implementing eco-friendly approaches in all
											engineering projects.
										</p>
									</div>
								</motion.li>
							</ul>
						</motion.div>
						<motion.div
							className="mx-auto lg:ml-auto"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>
								<img
									alt="Civil Engineer at work"
									className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full transition-all duration-500 group-hover:scale-[1.02]"
									height="310"
									src="/placeholder.svg?height=310&width=550"
									width="550"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				className="w-full py-12 md:py-24 lg:py-32 relative z-10 bg-gradient-to-b from-white/70 to-blue-50/80 dark:from-gray-950/80 dark:to-blue-900/30 backdrop-blur-sm"
				id="projects"
			>
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 px-3 py-1 text-sm">
								Portfolio
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
								Featured Projects
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								A showcase of my most significant civil engineering projects and
								achievements.
							</p>
						</div>
					</motion.div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								title: "Riverside Bridge",
								description:
									"A 500-meter suspension bridge designed to withstand extreme weather conditions while minimizing environmental impact.",
								gradient: "from-blue-600 to-cyan-600",
							},
							{
								title: "Metro Highway Extension",
								description:
									"A 25-kilometer highway extension project that included complex terrain challenges and innovative drainage solutions.",
								gradient: "from-purple-600 to-pink-600",
							},
							{
								title: "Eco Office Tower",
								description:
									"A 30-story commercial building designed with sustainable materials and energy-efficient systems.",
								gradient: "from-emerald-600 to-teal-600",
							},
							{
								title: "Municipal Water Treatment",
								description:
									"A state-of-the-art water treatment facility serving a community of 50,000 residents with innovative filtration technology.",
								gradient: "from-cyan-600 to-blue-600",
							},
							{
								title: "Hillside Residences",
								description:
									"A residential complex built on challenging terrain, requiring innovative foundation solutions and slope stabilization.",
								gradient: "from-amber-600 to-orange-600",
							},
							{
								title: "Valley Reservoir Dam",
								description:
									"A hydroelectric dam project that balanced power generation needs with environmental conservation requirements.",
								gradient: "from-rose-600 to-red-600",
							},
						].map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -10 }}
							>
								<Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
									<CardHeader className="p-4 relative overflow-hidden">
										<div
											className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500`}
										></div>
										<div className="relative z-10 overflow-hidden rounded-lg">
											<img
												alt={project.title}
												className="aspect-video overflow-hidden rounded-lg object-cover transition-all duration-500 group-hover:scale-110"
												height="225"
												src="/placeholder.svg?height=225&width=400"
												width="400"
											/>
										</div>
									</CardHeader>
									<CardContent className="p-4 pt-0 relative">
										<CardTitle
											className={`text-xl bg-clip-text text-transparent bg-gradient-to-r ${project.gradient}`}
										>
											{project.title}
										</CardTitle>
										<CardDescription className="line-clamp-2 text-sm">
											{project.description}
										</CardDescription>
									</CardContent>
									<CardFooter className="p-4 pt-0">
										<Button
											variant="outline"
											size="sm"
											className={`w-full border-0 bg-gradient-to-r ${project.gradient} bg-opacity-10 hover:bg-opacity-20 text-gray-800 dark:text-white transition-all duration-300 group-hover:shadow-md`}
										>
											View Details
										</Button>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				className="w-full py-12 md:py-24 lg:py-32 relative z-10"
				id="services"
			>
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 px-3 py-1 text-sm">
								Services
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
								Professional Expertise
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Comprehensive civil engineering services tailored to meet your
								project needs.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Tabs defaultValue="structural" className="w-full">
							<TabsList className="grid w-full grid-cols-3 p-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50">
								<TabsTrigger
									value="structural"
									className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 transition-all duration-300"
								>
									Structural
								</TabsTrigger>
								<TabsTrigger
									value="infrastructure"
									className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-400 transition-all duration-300"
								>
									Infrastructure
								</TabsTrigger>
								<TabsTrigger
									value="consulting"
									className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-amber-600 dark:data-[state=active]:text-amber-400 transition-all duration-300"
								>
									Consulting
								</TabsTrigger>
							</TabsList>
							<TabsContent
								value="structural"
								className="p-4 pt-6 border rounded-lg mt-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
							>
								<div className="grid gap-4">
									<h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
										Structural Engineering
									</h3>
									<p className="text-muted-foreground">
										Comprehensive structural analysis, design, and assessment
										services for buildings, bridges, and special structures.
									</p>
									<ul className="grid gap-2">
										{[
											"Building structural design",
											"Seismic analysis and retrofitting",
											"Foundation design",
											"Structural integrity assessments",
										].map((item, i) => (
											<motion.li
												key={i}
												className="flex items-center gap-2 group"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.3, delay: i * 0.1 }}
												whileHover={{ x: 5 }}
											>
												<div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-150 transition-all duration-300" />
												<span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
													{item}
												</span>
											</motion.li>
										))}
									</ul>
								</div>
							</TabsContent>
							<TabsContent
								value="infrastructure"
								className="p-4 pt-6 border rounded-lg mt-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
							>
								<div className="grid gap-4">
									<h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
										Infrastructure Development
									</h3>
									<p className="text-muted-foreground">
										Planning, design, and management of infrastructure projects
										that serve communities and businesses.
									</p>
									<ul className="grid gap-2">
										{[
											"Road and highway design",
											"Water supply and distribution systems",
											"Stormwater management",
											"Urban planning and development",
										].map((item, i) => (
											<motion.li
												key={i}
												className="flex items-center gap-2 group"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.3, delay: i * 0.1 }}
												whileHover={{ x: 5 }}
											>
												<div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-150 transition-all duration-300" />
												<span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
													{item}
												</span>
											</motion.li>
										))}
									</ul>
								</div>
							</TabsContent>
							<TabsContent
								value="consulting"
								className="p-4 pt-6 border rounded-lg mt-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
							>
								<div className="grid gap-4">
									<h3 className="text-xl font-bold text-amber-600 dark:text-amber-400">
										Engineering Consultation
									</h3>
									<p className="text-muted-foreground">
										Expert advice and solutions for complex engineering
										challenges and project optimization.
									</p>
									<ul className="grid gap-2">
										{[
											"Feasibility studies",
											"Construction oversight",
											"Regulatory compliance",
											"Sustainable design consultation",
										].map((item, i) => (
											<motion.li
												key={i}
												className="flex items-center gap-2 group"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.3, delay: i * 0.1 }}
												whileHover={{ x: 5 }}
											>
												<div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 group-hover:scale-150 transition-all duration-300" />
												<span className="group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
													{item}
												</span>
											</motion.li>
										))}
									</ul>
								</div>
							</TabsContent>
						</Tabs>
						<motion.div
							className="grid gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
								Education & Certifications
							</h3>
							<div className="grid gap-4">
								{[
									{
										title: "Master of Science in Civil Engineering",
										institution: "Stanford University, 2008",
									},
									{
										title: "Bachelor of Science in Civil Engineering",
										institution: "University of California, Berkeley, 2006",
									},
									{
										title: "Professional Engineer (PE) License",
										institution:
											"California Board for Professional Engineers, 2010",
									},
									{
										title: "LEED Accredited Professional",
										institution: "U.S. Green Building Council, 2012",
									},
									{
										title: "Project Management Professional (PMP)",
										institution: "Project Management Institute, 2014",
									},
								].map((edu, i) => (
									<motion.div
										key={i}
										className="grid gap-1 group hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 p-2 rounded-lg transition-colors duration-300"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: i * 0.1 }}
										whileHover={{ x: 5 }}
									>
										<h4 className="font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
											{edu.title}
										</h4>
										<p className="text-sm text-muted-foreground">
											{edu.institution}
										</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				className="w-full py-12 md:py-24 lg:py-32 relative z-10 bg-gradient-to-b from-blue-50/80 to-purple-50/50 dark:from-blue-900/30 dark:to-purple-900/20 backdrop-blur-sm"
				id="contact"
			>
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 px-3 py-1 text-sm">
								Contact
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
								Get In Touch
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Ready to discuss your project? Reach out to schedule a
								consultation.
							</p>
						</div>
					</motion.div>
					<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
						<motion.div
							className="flex flex-col gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="flex items-center gap-2 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
								<MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-125 transition-transform duration-300" />
								<p>123 Engineering Way, San Francisco, CA 94105</p>
							</div>
							<div className="flex items-center gap-2 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
								<Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-125 transition-transform duration-300" />
								<p>(555) 123-4567</p>
							</div>
							<div className="flex items-center gap-2 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
								<Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-125 transition-transform duration-300" />
								<p>john.anderson@example.com</p>
							</div>
							<div className="mt-6 relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>
								<img
									alt="Office location map"
									className="relative rounded-lg border object-cover transition-all duration-500 group-hover:scale-[1.02]"
									height="300"
									src="/placeholder.svg?height=300&width=500"
									width="500"
								/>
							</div>
						</motion.div>
						<motion.div
							className="grid gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<label
										htmlFor="first-name"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										First name
									</label>
									<input
										id="first-name"
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
										placeholder="Enter your first name"
									/>
								</div>
								<div className="grid gap-2">
									<label
										htmlFor="last-name"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Last name
									</label>
									<input
										id="last-name"
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
										placeholder="Enter your last name"
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<label
									htmlFor="email"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
									placeholder="Enter your email"
								/>
							</div>
							<div className="grid gap-2">
								<label
									htmlFor="project-type"
									className="text-sm font-medium leading-none"
								>
									Project Type
								</label>
								<select
									id="project-type"
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 focus:border-blue-500"
								>
									<option value="">Select project type</option>
									<option value="structural">Structural Engineering</option>
									<option value="infrastructure">
										Infrastructure Development
									</option>
									<option value="consulting">Engineering Consultation</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div className="grid gap-2">
								<label
									htmlFor="message"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Message
								</label>
								<textarea
									id="message"
									className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
									placeholder="Enter your project details"
								/>
							</div>
							<Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
								Send Message
							</Button>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="w-full py-6 bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-950 dark:to-blue-950/50 relative z-10">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
						<div className="flex items-center gap-2 group">
							<Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:scale-125 transition-transform duration-300" />
							<span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
								John Anderson, P.E.
							</span>
						</div>
						<p className="text-sm text-muted-foreground">
							© {new Date().getFullYear()} John Anderson. All rights reserved.
							Professional Civil Engineering Services.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
