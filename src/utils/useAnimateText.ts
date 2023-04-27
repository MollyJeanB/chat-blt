import { useEffect, useState } from "react"

export const useAnimateText = (text: string, interval: number = 300) => {
	const [animatedComment, setAnimatedComment] = useState<string>("")
	const [wordCounter, setWordCounter] = useState<number>(0)
	const [isActivelyAnimating, setIsActivelyAnimating] = useState<boolean>(false)
	useEffect(() => {
		const commentStrings: string[] = text.split(" ")
		const timer = setTimeout(() => {
			if (wordCounter < commentStrings.length) {
				setIsActivelyAnimating(true)
				const firstWord: string = commentStrings[wordCounter]
				const secondWord: string | undefined =
					commentStrings[wordCounter + 1] ?? ""
				//render text two words at a time
				setAnimatedComment(`${animatedComment} ${firstWord} ${secondWord}`)
				setWordCounter(wordCounter + 2)
			} else {
				setIsActivelyAnimating(false)
			}
		}, interval)
		return () => clearTimeout(timer)
	})

	return { animatedComment, isActivelyAnimating }
}
