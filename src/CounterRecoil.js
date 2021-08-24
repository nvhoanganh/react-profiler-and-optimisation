import React from 'react';
import { useRecoilState } from 'recoil';
import { rootDataState } from './root-atom';

function Counter() {
	const [rootState] = useRecoilState(rootDataState);

	return (
		<div>
			<div>rootState: {rootState.data}</div>
		</div>
	);
}

export default Counter;
