import { Chance } from "chance"
import { getAiResponse } from "./aiResponse"

describe("AI response utility", () => {
	const chance = new Chance()
	const mockPhrases: string[] = Array.from(Array(2)).map(() =>
		chance.sentence()
	)

	it("should return a string that does not match the previous string", () => {
		expect(getAiResponse(mockPhrases[0], mockPhrases)).not.toEqual(
			mockPhrases[0]
		)
	})

	it("should return a string if the previous string is undefined", () => {
		expect(getAiResponse(undefined, mockPhrases)).toBeTruthy()
	})

	it("should return a string from the default array of strings", () => {
		expect(getAiResponse(undefined)).toBeTruthy()
	})

	it("should return the only string from an array with a length of one", () => {
		const singlePhrase: string[] = [chance.sentence()]
		expect(getAiResponse(undefined, singlePhrase)).toEqual(singlePhrase[0])
	})
})
