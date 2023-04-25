import React, { ReactNode, useEffect, useState } from "react"
import styles from "./commentList.module.css"
import { Comment } from "@/pages"
import { EmotionNormal, User } from "@/assets/svg"

type PropsType = {
	commentData: Comment
	isAnimated?: boolean
}

export const CommentCard: React.FC<PropsType> = ({
	commentData,
	isAnimated,
}) => {
	const [displayComment, setDisplayComment] = useState<string>("")
	const { comment, author } = commentData

	useEffect(() => {
		if (!isAnimated) {
			setDisplayComment(comment)
		} else {
			const timer = setTimeout(() => {
				setDisplayComment(comment)
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [commentData])

	const isUserComment: boolean = author === "User"
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
				<p>{displayComment}</p>
			</div>
		</li>
	)
}
