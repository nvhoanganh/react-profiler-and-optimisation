import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
import CounterRecoil from './CounterRecoil';
import { rootDataState } from "./root-atom";

test('component with recoil state should render with default value', async () => {
	render(
		<RecoilRoot>
			<CounterRecoil></CounterRecoil>
		</RecoilRoot>
	);
	expect(screen.getByText('rootState: hello world')).toBeVisible();
});

test('component with recoil state should render with new default value', async () => {
	render(
		<RecoilRoot
			initializeState={(s) => {
				s.set(rootDataState, { data: 'new world'});
			}}
		>
			<CounterRecoil></CounterRecoil>
		</RecoilRoot>
	);
	expect(screen.getByText('rootState: new world')).toBeVisible();
});
