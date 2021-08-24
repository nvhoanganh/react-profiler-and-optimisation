import React from 'react';
import Counter, { ChildElement } from './Counter';
import { mount, render, shallow } from 'enzyme';

describe('Our test suite', () => {
	// render to statuc html, returns instance of Cheerio, no access to events/lifecycle hook of react, just the html of the components
	// https://github.com/cheeriojs/cheerio
	it('using render()', () => {
		const wrapper = render(<Counter data='hello' />);
		// console.log('render()', wrapper.html());
		expect(wrapper.find('div:contains("count: 0")').length).toBe(1);
		// you can't do this:
		// expect(wrapper.contains(<div>count: 0</div>)).toBeTruthy();
	});

	// mount, work with full DOM rendering includes all the child elements (if each compoennt intereacts with each other
	it('using mount()', () => {
		const wrapper = mount(<Counter data='hello' />);
		// console.log('mount()', wrapper.html());

		expect(wrapper.find(ChildElement)).toBeTruthy();
		expect(wrapper.contains(<div>count: 0</div>)).toBeTruthy();
		// you can do this with mount() as it renders all the child component
		expect(wrapper.contains(<h1>This is child</h1>)).toBeTruthy();
	});

	// only render this element, not all the child elements of this component. (unit test, not integration test)
	// you can access Components internals with this method
	it('using shallow()', () => {
		const wrapper = shallow(<Counter data='hello' />);

		// console.log('shallow()', wrapper.html());

		expect(wrapper.find(ChildElement)).toBeTruthy();
		expect(wrapper.find(ChildElement).prop('data')).toBe('hello');

		expect(wrapper.contains(<div>count: 0</div>)).toBeTruthy();
		expect(wrapper.contains(<h1>This is child</h1>)).not.toBeTruthy();
	});
});
