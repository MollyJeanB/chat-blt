import React from "react"
import styles from "./commentList.module.css"
import { Comment } from "@/pages"
import { CommentCard } from "./CommentCard"

type PropsType = {
	commentList: Comment[]
}

export const CommentList: React.FC<PropsType> = ({ commentList }) => {
	return (
		<div>
			<ul className={styles.commentList}>
				{commentList.map((commentData, index) => {
					const isAnimated: boolean = index === commentList.length - 1
					return (
						<CommentCard
							key={`${index}-${commentData.comment}`}
							commentData={commentData}
							isAnimated={isAnimated}
						/>
					)
				})}
			</ul>
		</div>
	)
}
