import React, { ReactNode } from "react"
import styles from "./commentList.module.css"
import { Comment } from "@/pages"
import { EmotionNormal, User } from "@/assets/svg"

type PropsType = {
	comment: Comment
}

export const CommentCard: React.FC<PropsType> = ({ comment }) => {
	const isUserComment: boolean = comment.author === "User"
	const cardStyles: string = isUserComment
		? `${styles.commentCard} ${styles.backgroundLight}`
		: styles.commentCard
	const avatarWrapperStyles: string = isUserComment
		? styles.avatarWrapper
		: `${styles.avatarWrapper} ${styles.backgroundTeal}`
	const icon: ReactNode = isUserComment ? (
		<User height={20} width={20} />
	) : (
		<EmotionNormal height={20} width={20} />
	)
	return (
		<li className={cardStyles}>
			<div className={styles.commentInner}>
				<div className={avatarWrapperStyles}>{icon}</div>
				<p>{comment.comment}</p>
			</div>
		</li>
	)
}
