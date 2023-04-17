import React, {
	useState,
	useEffect,
	KeyboardEvent,
	KeyboardEventHandler,
	ChangeEvent,
} from "react"
import styles from "./textArea.module.css"
import { Chance } from "chance"

type PropsType = {
	onSubmitForm: Function
}

export const TextArea: React.FC<PropsType> = ({ onSubmitForm }) => {
	const [inputText, setInputText] = useState<string>("")

	const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(event.target.value)
	}

	//@ts-ignore
	const onSubmit = (event) => {
		event.preventDefault()
		onSubmitForm(inputText)
		setInputText("")
	}

	useEffect(() => {
		const keyDownHandler: KeyboardEventHandler = (event: KeyboardEvent) => {
			if (event.code === "Enter" || event.code === "NumpadEnter") {
				onSubmit(event)
			}
		}
		//@ts-ignore
		document.addEventListener("keydown", keyDownHandler)
		return () => {
			//@ts-ignore
			document.removeEventListener("keydown", keyDownHandler)
		}
	})

	return (
		<form>
			<textarea
				className={styles.textArea}
				placeholder="Send a message..."
				onChange={onChange}
				value={inputText}
			></textarea>
			<button onClick={(event) => onSubmit(event)}>{"submit question"}</button>
		</form>
	)
}
