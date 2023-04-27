import { useEffect } from "react"

export const useSubmitFormOnPressEnter = (submitAction: Function) => {
	useEffect(() => {
		const keyDownHandler: (event: KeyboardEvent) => void = (
			event: KeyboardEvent
		) => {
			if (event.code === "Enter" || event.code === "NumpadEnter") {
				submitAction(event)
			}
		}

		document.addEventListener("keydown", keyDownHandler)

		return () => {
			document.removeEventListener("keydown", keyDownHandler)
		}
	})
}
