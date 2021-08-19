import React from 'react';
import { FixedSizeList as List } from 'react-window';

function Row({ index, style }) {
	for (let index = 0; index < 1_000_000; index++) {}
	return <div style={style}>Row {index}</div>;
}

function LongList({ data }) {
	return (
		<div className='list'>
			<List height={150} itemCount={1000} itemSize={35} width={300}>
				{Row}
			</List>
		</div>
	);
}

export default LongList;
