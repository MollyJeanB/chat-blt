import React from "react"
import styles from "./commentList.module.css"
import { Comment } from "@/pages"

type PropsType = {
	comment: Comment
}

export const CommentCard: React.FC<PropsType> = ({ comment }) => {
	const cardStyles: string =
		comment.author === "User"
			? `${styles.commentCard} ${styles.backgroundLight}`
			: styles.commentCard
	return (
		<li className={cardStyles}>
			<div className={styles.commentInner}>
				<div className={styles.avatarWrapper} />
				<p>{comment.comment}</p>
			</div>
		</li>
	)
}
