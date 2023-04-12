import Head from "next/head"
import styles from "@/styles/page.module.css"
import { GitHubLink, Header } from "@/components"

export default function Home() {
	return (
		<>
			<Head>
				<title>ChatBLT</title>
				<meta
					name="description"
					content="An amazing new AI advancement that accurately simulates a conversation with a person who is not listening to you."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<section className={styles.appInfo}>
					<Header title={"ChatBLT"} subTitle={"(Bad Listener Tom)"} />
				</section>
				<footer className={styles.footer}>
					<GitHubLink link={"https://github.com/MollyJeanB/chat-blt"} />
				</footer>
			</main>
		</>
	)
}
