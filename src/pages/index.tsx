import { useState } from "react"
import { Chance } from "chance"
import Head from "next/head"
import styles from "@/styles/page.module.css"
import {
	CommentList,
	GitHubLink,
	Header,
	InfoCards,
	TextInputForm,
} from "@/components"

export type Comment = {
	comment: string
	author: "User" | "Tom"
}

export default function Home() {
	const chance = new Chance()
	const [comments, setComments] = useState<Comment[]>([])
	const postResponse = (userComment: Comment) => {
		const tomResponse: Comment = {
			comment: chance.sentence(),
			author: "Tom",
		}
		setTimeout(() => setComments([...comments, userComment, tomResponse]), 1000)
	}
	const onSubmitForm = (question: string) => {
		const userComment: Comment = { comment: question, author: "User" }
		setComments([...comments, userComment])
		postResponse(userComment)
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
				<section>{!comments.length && <InfoCards />}</section>
				<section className={styles.commentListSection}>
					<CommentList comments={comments} />
				</section>
				<footer className={styles.footer}>
					<TextInputForm onSubmitForm={onSubmitForm} />
				</footer>
			</main>
		</>
	)
}
