import { useState } from "react"
import { Chance } from "chance"
import Head from "next/head"
import styles from "@/styles/page.module.css"
import { GitHubLink, Header, InfoCards, TextArea } from "@/components"

export default function Home() {
	const chance = new Chance()
	const [comments, setComments] = useState<string[]>(["first one for test"])
	const postResponse = () => {
		console.log("hit response")
		//currently creates some kinda race condition, eventually will be on a delay
		// setComments([...comments, chance.word()])
	}
	const onSubmitForm = (question: string) => {
		console.log("submit form on main page", question)
		setComments([...comments, question, chance.word()])
		postResponse()
	}
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
				<section>{comments.length === 1 && <InfoCards />}</section>
				<section>
					{comments.map((comment) => {
						return <p key={comment}>{comment}</p>
					})}
				</section>
				<footer className={styles.footer}>
					<TextArea onSubmitForm={onSubmitForm} />
				</footer>
			</main>
		</>
	)
}
