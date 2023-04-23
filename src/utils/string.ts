export const getRandomWordFromArray = (wordArray: string[]): string =>
	wordArray[Math.floor(Math.random() * wordArray.length)]
