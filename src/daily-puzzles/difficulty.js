export const EASY_4x4 = {
	id: 'EASY_4x4',
	name: 'easy 4x4',
	extent: 4,
	category: 'EASY',
	prefix: 'NYTimes4x4Easy'
}

export const EASY_6x6 = {
	id: 'EASY_6x6',
	name: 'easy 6x6',
	extent: 6,
	category: 'EASY',
	prefix: 'NYTimes6x6Easy'
}

export const MEDIUM_4x4 = {
	id: 'MEDIUM_4x4',
	name: 'medium 4x4',
	extent: 4,
	category: 'MEDIUM',
	prefix: 'NYTimes4x4Medium'
}

export const MEDIUM_6x6 = {
	id: 'MEDIUM_6x6',
	name: 'medium 6x6',
	extent: 6,
	category: 'MEDIUM',
	prefix: 'NYTimes6x6Medium'
}
	
export const HARD_6x6 = {
	id: 'HARD_6x6',
	name: 'hard 6x6',
	extent: 6,
	category: 'HARD',
	prefix: 'NYTimes6x6Hard'
}

export const HARD_8x8 = {
	id: 'HARD_8x8',
	name: 'hard 8x8',
	extent: 8,
	category: 'HARD',
	prefix: 'NYTimes8x8Hard'
}

export default [ EASY_4x4, EASY_6x6, MEDIUM_4x4, MEDIUM_6x6, HARD_6x6, HARD_8x8 ].reduce( (prev, curr) => {
	prev[curr.id] = curr;
	return prev;
}, {} )
