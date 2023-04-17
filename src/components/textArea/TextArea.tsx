import React, {
	useState,
	useEffect,
	KeyboardEvent,
	KeyboardEventHandler,
	ChangeEvent,
	useMemo,
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

	console.log("in component body", inputText)

	const onSubmit = () => {
		console.log("onsubmit", inputText)
		onSubmitForm(inputText)
		setInputText("")
	}

	//currently def doesn't work like the button press
	useEffect(() => {
		const keyDownHandler: KeyboardEventHandler | any = (
			event: KeyboardEvent
		) => {
			if (event.code === "Enter" || event.code === "NumpadEnter") {
				event.preventDefault()
				event.stopPropagation()
				console.log("hit submit key", inputText)
				onSubmit()
			}
		}
		document.addEventListener("keydown", keyDownHandler)
		return () => {
			document.removeEventListener("keydown", keyDownHandler)
		}
	}, [])

	return (
		//this should be a form but it totally jacks up the submit behavior
		<div>
			<textarea
				className={styles.textArea}
				placeholder="Send a message..."
				onChange={onChange}
				value={inputText}
			></textarea>
			<button onClick={onSubmit}>{"submit question"}</button>
		</div>
	)
}
