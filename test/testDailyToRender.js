import { expect } from 'chai'

import dailyToRender from '../src/converters/dailyToRender'

import storageToRender from '../src/converters/storageToRender'
import storage from '../samples/NYT4x4.storage'
import text from '../samples/NYT4x4.txt'

const rendering = storageToRender(storage);

describe('dailyToRender', () => { 
	it('converts sample text to sample render', () => {
		expect(dailyToRender(text)).to.deep.equal(rendering)			
	})
})
