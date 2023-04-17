import React from "react"
import styles from "./commentList.module.css"
import { Comment } from "@/pages"

type PropsType = {
	comment: Comment
}

export const CommentCard: React.FC<PropsType> = ({ comment }) => {
	return <li className={styles.commentCard}>{comment.comment}</li>
}
