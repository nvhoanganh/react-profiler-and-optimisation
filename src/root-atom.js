import { atom } from 'recoil';

export const rootDataState = atom({
	key: 'rootData',
  default: {
    data: 'hello world'
  },
});
