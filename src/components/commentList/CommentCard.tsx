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
	isAnimated = false,
}) => {
	const { comment, author } = commentData
	const [displayComment, setDisplayComment] = useState<string>("")
	const [wordCounter, setWordCounter] = useState<number>(0)
	const [isActivelyAnimating, setIsActivelyAnimating] = useState<boolean>(false)
	const showCursor: boolean = isActivelyAnimating && isAnimated

	useEffect(() => {
		if (!isAnimated) {
			setDisplayComment(comment)
		} else {
			const commentStrings: string[] = comment.split(" ")
			const timer = setTimeout(() => {
				if (wordCounter < commentStrings.length) {
					setIsActivelyAnimating(true)
					const firstWord: string = commentStrings[wordCounter]
					const secondWord: string | undefined =
						commentStrings[wordCounter + 1] ?? ""

					setDisplayComment(`${displayComment} ${firstWord} ${secondWord}`)
					setWordCounter(wordCounter + 2)
				} else {
					setIsActivelyAnimating(false)
				}
			}, 300)
			return () => clearTimeout(timer)
		}
	})

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
				<p>
					{displayComment} {showCursor && <span className={styles.cursor} />}
				</p>
			</div>
		</li>
	)
}
