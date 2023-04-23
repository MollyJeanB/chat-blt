import React from "react"
import { Flashlight, Sun, Alert } from "@/assets/svg"
import styles from "./infoCards.module.css"
import { CardColumn, Card } from "../"

export const InfoCards: React.FC = () => {
	return (
		<div className={styles.infoCardsWrapper}>
			<CardColumn
				heading="Capabilities"
				icon={<Flashlight width={24} height={24} />}
			>
				<Card>
					{
						"Accurately simulates dialog with someone who is not listening to you."
					}
				</Card>
				<Card>{"Just waiting for his turn to speak (about sandwiches)."}</Card>
				<Card>{"Won't remember what you said in this chat, or ever."}</Card>
			</CardColumn>
			<CardColumn heading="Examples" icon={<Sun width={24} height={24} />}>
				<Card>{`"Explain the history of leavened bread."`}</Card>
				<Card>{`"What is the most underrated lettuce variety?"`}</Card>
				<Card>{`"Tell me more about heirloom tomatoes."`}</Card>
			</CardColumn>
			<CardColumn heading="Limitations" icon={<Alert width={24} height={24} />}>
				<Card>{"A sandwich would be a better conversation partner."}</Card>
				<Card>{"Thinks he is smarter and more interesting than you."}</Card>
				<Card>
					{
						"Limited knowledge of world events other than stuff he heard on a podcast once."
					}
				</Card>
			</CardColumn>
		</div>
	)
}
