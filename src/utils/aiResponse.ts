import { getRandomWordFromArray } from "./string"

const phraseBank: string[] = [
	`Actually, it's pronounced ciabatta`,
	`Technically it's not mansplaining if I'm actually more knowledgeable about sandwiches than you are`,
	`Actually, it's pronounced aioli`,
	`Sourdough isn't some new trend. It's actually the oldest kind of leavened bread`,
	`Don't event talk to me about turkey bacon`,
	`Don't event talk to me about Canadian bacon`,
	`Actually, it's pronounced seitan, and it doesn't count as bacon in my book`,
	`I would say thick cut is usually the best, but sometimes I do like the crisp stuff`,
	`The sandwich is named after the 4th Earl of Sandwich, John Montagu. But humans have been consuming sandwich-like foods for much longer. Hillel the Elder, an ancient jewish sage, is said to have wrapped lamb and bitter herbs in matzoh in the first century BCE.`,
	`According to the British Sandwich Association, a hamburger is not a sandwich.`,
	`Please, a hot dog is not a sandwich. It's a hot dog.`,
	`Some say that the Earl of Sandwich first consumed the dish while gambling. Not wanting to leave his cribbage game, he ordered his servants to bring him a piece of salt beef between two slices of bread. But one of his biographers theorizes that the first sandwich was actually consumed at his desk.`,
	`Lettuce has been growing wild in the mediterranean for at least 4500 years. It was first cultivated by the ancient Egyptians, who turned it from a weed into a food crop.`,
	`Eww, store-bought mayonnaise? I only eat homemade mayo made the traditional French way.`,
	`In 2006, a court in Boston, Massachusetts ruled that a sandwich must contain at least two slices of bread. So a taco is definitely not a sandwich.`,
	`Not to brag but my sourdough starter is over 60 years old`,
	`I would rather die than eat wilted iceberg lettuce`,
	`I'm sorry but you can't put mustard on a BLT`,
	`Avocado is fine but it you put it in a BLT, it isn't a BLT anymore`,
	`Actually, according to Anthony Bourdain, the best way to cook bacon is in the oven`,
	`Anthony Bourdain said to never fry bacon naked.`,
	`Yes tomatoes are fruits, but they are actually considered "culinary vegetables" due to their lower sugar content.`,
	`In 1893, the U.S. supreme court declared that from a tax standpoint, the tomato is a vegetable because it is most often eaten as part of the main meal.`,
	`Hydroponic tomatoes are usually more bitter`,
	`Don't you dare put pickles on that`,
	`Actually, tomatoes are native to the Americas`,
	`If you buy store-bought tomatoes you might as well just eat styrofoam`,
	`I only eat heirloom tomatoes`,
	`Romaine lettuce was associated with Min, the ancient Egyptian god of fertility because it's shaped like a phallus. So it's basically the most masculine type of leafy green.`,
	`Bacon! Lettuce! Tomato!`,
	`In Ireland, a court ruled that Subway sandwich bread is not legally bread because it contains too much sugar.`,
	`I have a lot of BLT NFTs. You should have bough in on the ground floor.`,
]

export const getAiResponse = (
	previousPhrase: string | undefined,
	phrases: string[] = phraseBank
): string => {
	if (phrases.length < 2) {
		return phrases[0]
	}
	let responsePhrase = getRandomWordFromArray(phrases)
	//regenerate phrase if it matches the previous one
	while (responsePhrase === previousPhrase) {
		responsePhrase = getRandomWordFromArray(phrases)
	}
	return responsePhrase
}
