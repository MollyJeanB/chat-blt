import React, { ReactNode } from "react"
import styles from "./cardColumn.module.css"

type PropsType = {
	children: ReactNode
	heading?: string
}

export const CardColumn: React.FC<PropsType> = ({ children, heading }) => {
	return (
		<div className={styles.columnWrapper}>
			{heading && <h3 className={styles.columnHeading}>{heading}</h3>}
			<ul className={styles.column}>{children}</ul>
		</div>
	)
}
