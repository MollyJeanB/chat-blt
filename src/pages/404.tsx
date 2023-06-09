import Head from "next/head"
import React from "react"
import styles from "@/styles/page.module.css"

export default function ErrorPage() {
	return (
		<>
			<Head>
				<title>404</title>
				<meta name="description" content="Page not found." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.appInfo}>
					<p>{"Rats! This page cannot be found. 🐀"}</p>
				</div>
			</main>
		</>
	)
}
