import React from "react"
import styles from "./commentList.module.css"
import { CommentType } from "@/pages"
import { CommentCard } from "./CommentCard"

type PropsType = {
	commentList: CommentType[]
}

export const CommentList: React.FC<PropsType> = ({ commentList }) => {
	return (
		<div className={styles.scrollContainer}>
			<ul className={styles.commentList}>
				{commentList.map((commentData, index) => {
					const isLastComment: boolean = index === commentList.length - 1
					return (
						<CommentCard
							key={`${index}-${commentData.comment}`}
							commentData={commentData}
							isAnimated={isLastComment}
						/>
					)
				})}
			</ul>
			<div className={styles.scrollAnchor} />
		</div>
	)
}
