import React, { ReactNode } from "react"
import styles from "./cardColumn.module.css"

type PropsType = {
	children: ReactNode | string
}

export const Card: React.FC<PropsType> = ({ children }) => {
	return <li className={styles.card}>{children}</li>
}
