import React from "react"
import Image from "next/image"
import { flashlight, sun, alert } from "@/assets/svg"
import styles from "./infoCards.module.css"
import { CardColumn, Card } from "../"

export const InfoCards: React.FC = () => {
	return (
		<div className={styles.infoCardsWrapper}>
			<CardColumn
				heading="Capabilities"
				icon={<Image src={flashlight} alt="" style={{ color: "inherit" }} />}
			>
				<Card>
					{
						"Accurately simulates dialog with someone who is not listening to you."
					}
				</Card>
				<Card>{"Mostly just waiting for his turn to speak."}</Card>
				<Card>{"Won't remember what you said in this chat, or ever."}</Card>
			</CardColumn>
			<CardColumn heading="Examples" icon={<Image src={sun} alt="" />}>
				<Card>{`"Explain quantum computing in convoluted terms."`}</Card>
				<Card>{`"What is the most underrated cryptocurrency?"`}</Card>
				<Card>{`"What's the best way to get to the freeway from here?"`}</Card>
			</CardColumn>
			<CardColumn heading="Limitations" icon={<Image src={alert} alt="" />}>
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
