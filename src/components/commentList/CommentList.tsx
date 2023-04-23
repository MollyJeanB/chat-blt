import React from "react"
import styles from "./commentList.module.css"
import { Comment } from "@/pages"
import { CommentCard } from "./CommentCard"

type PropsType = {
	comments: Comment[]
}

export const CommentList: React.FC<PropsType> = ({ comments }) => {
	return (
		<div>
			<ul className={styles.commentList}>
				{comments.map((comment, index) => {
					return (
						<CommentCard
							key={`${index}-${comment.comment}`}
							comment={comment}
						/>
					)
				})}
			</ul>
		</div>
	)
}
