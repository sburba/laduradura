import $ from 'jquery'
import moment from 'moment'
import levels from './difficulty'

const dailyPuzzleUrl = difficulty => {
	let month = moment().format('MMMM'), 
		monthDay = moment().format('MMMM[00]DD'); 

	return `/puzzles/NYTimes/${month}/${difficulty.prefix}${monthDay}.txt`
}

export default function loadPuzzle(id) {
	const difficulty = levels[id]; 

	return new Promise( (resolve, reject) => {
		$.ajax({
			url: dailyPuzzleUrl(difficulty),
			dataType: 'text',
			success: ( data, status ) => console.log(data)
		})
	})
}
