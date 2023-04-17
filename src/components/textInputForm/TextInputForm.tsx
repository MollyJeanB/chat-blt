import React, {
	useState,
	useEffect,
	KeyboardEvent,
	KeyboardEventHandler,
	ChangeEvent,
} from "react"
import styles from "./textInputForm.module.css"

type PropsType = {
	onSubmitForm: Function
}

export const TextInputForm: React.FC<PropsType> = ({ onSubmitForm }) => {
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
		<div className={styles.formWrapper}>
			<form className={styles.form}>
				<div className={styles.inputWrapper}>
					<textarea
						className={styles.textArea}
						placeholder="Send a message..."
						onChange={onChange}
						value={inputText}
					></textarea>
					<button
						className={styles.button}
						onClick={(event) => onSubmit(event)}
					>
						{"Submit"}
					</button>
				</div>
				<p className={styles.warningText}>
					{
						"Free research preview. ChatBLT may produce boorish and inaccurate information about people, places, NFTs, and BLTs."
					}
				</p>
			</form>
		</div>
	)
}
