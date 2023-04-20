import React from "react"
import styles from "./commentList.module.css"
import { Comment } from "@/pages"
import { EmotionNormal, User } from "@/assets/svg"

type PropsType = {
	comment: Comment
}

export const CommentCard: React.FC<PropsType> = ({ comment }) => {
	const cardStyles: string =
		comment.author === "User"
			? `${styles.commentCard} ${styles.backgroundLight}`
			: styles.commentCard
	const icon =
		comment.author === "User" ? (
			<User height={20} width={20} />
		) : (
			<EmotionNormal height={20} width={20} />
		)
	return (
		<li className={cardStyles}>
			<div className={styles.commentInner}>
				<div className={styles.avatarWrapper}>{icon}</div>
				<p>{comment.comment}</p>
			</div>
		</li>
	)
}
