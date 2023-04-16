import Head from "next/head"
import styles from "@/styles/page.module.css"
import { GitHubLink, Header, InfoCards } from "@/components"

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
				<header className={styles.header}>
					<GitHubLink link={"https://github.com/MollyJeanB/chat-blt"} />
				</header>
				<section className={styles.appInfo}>
					<Header title={"ChatBLT"} subTitle={"(Bad Listener Tom)"} />
				</section>
				<section>
					<InfoCards />
				</section>
				<footer className={styles.footer}>{"footer to go here"}</footer>
			</main>
		</>
	)
}
