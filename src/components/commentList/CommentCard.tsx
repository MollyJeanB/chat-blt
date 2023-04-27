import React, { ReactNode } from "react"
import { CommentAuthorTypeMap, CommentType } from "@/pages"
import { EmotionNormal, User } from "@/assets/svg"
import { useAnimateText } from "@/utils/useAnimateText"
import styles from "./commentList.module.css"

type PropsType = {
	commentData: CommentType
	isAnimated?: boolean
}

export const CommentCard: React.FC<PropsType> = ({
	commentData,
	isAnimated = false,
}) => {
	const { comment, author } = commentData
	const { animatedComment, isActivelyAnimating } = useAnimateText(comment)
	const displayComment: string = isAnimated ? animatedComment : comment
	const showCursor: boolean = isActivelyAnimating && isAnimated

	const isUserComment: boolean = author === CommentAuthorTypeMap.USER
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
				<p>
					{displayComment} {showCursor && <span className={styles.cursor} />}
				</p>
			</div>
		</li>
	)
}
