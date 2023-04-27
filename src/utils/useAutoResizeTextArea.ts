import { useEffect } from "react"

// Updates the height of a <textarea> when the value changes.
export const useAutoResizeTextArea = (
	textAreaRef: HTMLTextAreaElement | null,
	value: string
) => {
	useEffect(() => {
		if (textAreaRef) {
			// reset the height in initially to get the correct scrollHeight for the textarea
			textAreaRef.style.height = "0px"
			const scrollHeight = textAreaRef.scrollHeight

			textAreaRef.style.height = scrollHeight + "px"
		}
	}, [textAreaRef, value])
}
