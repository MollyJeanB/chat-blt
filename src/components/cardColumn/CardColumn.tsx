import React, { ReactNode } from "react"
import styles from "./cardColumn.module.css"

type PropsType = {
	children: ReactNode
	heading?: string
	icon?: ReactNode
}

export const CardColumn: React.FC<PropsType> = ({
	children,
	heading,
	icon,
}) => {
	return (
		<div className={styles.columnWrapper}>
			<div className={styles.columnHeaderWrapper}>
				{icon && <div className={styles.icon}>{icon}</div>}
				{heading && <h3 className={styles.columnHeading}>{heading}</h3>}
			</div>
			<ul className={styles.column}>{children}</ul>
		</div>
	)
}
