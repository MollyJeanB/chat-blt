import React, {
	useState,
	useEffect,
	useRef,
	KeyboardEvent,
	KeyboardEventHandler,
	ChangeEvent,
} from "react"
import styles from "./textInputForm.module.css"
import { SendPlane } from "@/assets/svg"
import { useAutoResizeTextArea } from "@/utils/useAutoResizeTextArea"
import { useSubmitFormOnPressEnter } from "@/utils/useSubmitFormOnPressEnter"

type PropsType = {
	onSubmitForm: Function
}

export const TextInputForm: React.FC<PropsType> = ({ onSubmitForm }) => {
	const [inputText, setInputText] = useState<string>("")
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	useAutoResizeTextArea(textAreaRef.current, inputText)

	const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(event.target.value)
	}

	//@ts-ignore
	const onSubmit = (event) => {
		event.preventDefault()
		onSubmitForm(inputText)
		setInputText("")
	}

	useSubmitFormOnPressEnter(onSubmit)

	return (
		<div className={styles.formWrapper}>
			<form className={styles.form}>
				<div className={styles.inputWrapper}>
					<label className={styles.visuallyHidden} htmlFor={"question"}>
						{"Enter your question:"}
					</label>
					<textarea
						className={styles.textArea}
						placeholder="Send a message..."
						onChange={onChange}
						value={inputText}
						id={"question"}
						ref={textAreaRef}
					></textarea>
					<button
						className={styles.button}
						onClick={(event) => onSubmit(event)}
					>
						<SendPlane height={16} width={16} />
						<span className={styles.visuallyHidden}>{"Submit"}</span>
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
