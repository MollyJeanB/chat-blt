import { useState } from "react"
import Head from "next/head"
import styles from "@/styles/page.module.css"
import {
	CommentList,
	GitHubLink,
	Header,
	InfoCards,
	TextInputForm,
} from "@/components"
import { getAiResponse } from "@/utils/aiResponse"

export enum CommentAuthorTypeMap {
	USER = "User",
	TOM = "Tom",
}

export type CommentType = {
	comment: string
	author: CommentAuthorTypeMap.USER | CommentAuthorTypeMap.TOM
}

export default function Home() {
	const [comments, setComments] = useState<CommentType[]>([])
	const onSubmitForm = (question: string) => {
		const previousResponse = comments[comments.length - 1]?.comment
		const userComment: CommentType = {
			comment: question,
			author: CommentAuthorTypeMap.USER,
		}
		const tomResponse: CommentType = {
			comment: getAiResponse(previousResponse),
			author: CommentAuthorTypeMap.TOM,
		}
		setComments([...comments, userComment, tomResponse])
	}
	const isInChatMode: boolean = comments.length > 0
	return (
		<>
			<Head>
				<title>ChatBLT</title>
				<meta
					name="description"
					content="An amazing new AI advancement that accurately simulates a conversation with a person who is not listening to you and only wants to talk about sandwiches."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<header className={styles.header}>
					<GitHubLink link={"https://github.com/MollyJeanB/chat-blt"} />
				</header>
				{!isInChatMode && (
					<section className={styles.appInfo}>
						<div>
							<Header
								title={"ChatBLT"}
								subTitle={
									"Bad Listener Tom | Bacon Lettuce Tomato | Blah blah La la Ta Ta"
								}
							/>
							<InfoCards />
						</div>
					</section>
				)}
				{isInChatMode && (
					<section className={styles.commentListSection}>
						<CommentList commentList={comments} />
					</section>
				)}
				<footer className={styles.footer}>
					<TextInputForm onSubmitForm={onSubmitForm} />
				</footer>
			</main>
		</>
	)
}
