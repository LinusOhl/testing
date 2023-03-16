const storage = new Map();

export default () => {
	return {
		getItem: (key: string) => storage.get(key),

		setItem: (key: string, value: string) => storage.set(key, value),

		length: storage.size,

		clear: () => storage.clear(),

		key: () => null,

		removeItem: (key: string) => storage.delete(key),
	};
};
