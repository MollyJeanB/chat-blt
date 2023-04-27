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
		//@ts-ignore
		document.addEventListener("keydown", keyDownHandler)
		return () => {
			//@ts-ignore
			document.removeEventListener("keydown", keyDownHandler)
		}
	})
}
