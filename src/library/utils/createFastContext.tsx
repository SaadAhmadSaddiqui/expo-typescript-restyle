import React, { createContext, useCallback, useRef, useState, useEffect } from "react";

const createFastContext = <TStore,>(initialState: TStore, name?: string) => {
	const useStoreData = (): {
		get: () => TStore;
		set: (val: TStore extends object ? Partial<TStore> : TStore) => void;
		subscribe: (callback: (val: TStore) => void) => () => void;
	} => {
		const state = useRef(initialState);
		const subscribers = useRef(new Set<(val: TStore) => void>());

		const get = useCallback(() => state.current, []);

		const set = useCallback((val: TStore extends object ? Partial<TStore> : TStore) => {
			if (typeof val === "object") {
				state.current = { ...state.current, ...val };
			} else {
				state.current = val as TStore;
			}
			subscribers.current.forEach((callback) => callback(val as TStore));
		}, []);

		const subscribe = useCallback((callback: (val: TStore) => void) => {
			subscribers.current.add(callback);
			return () => subscribers.current.delete(callback);
		}, []);

		return {
			get,
			set,
			subscribe,
		};
	};

	type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

	const StoreContext = createContext<UseStoreDataReturnType>(null as any);

	const StoreProvider = ({ children }: { children: React.ReactNode }) => (
		<StoreContext.Provider value={useStoreData()}>{children}</StoreContext.Provider>
	);

	const useStore = <TSelect extends TStore>(
		selector?: (val: TStore) => TSelect,
	): [TSelect | TStore, (val: TStore extends object ? Partial<TStore> : TStore) => void] => {
		const store = React.useContext(StoreContext);
		if (!store) {
			throw new Error(`use${name || ""}Store must be used within a ${name || ""}Provider`);
		}

		const _selector = selector || ((val) => val);

		const [state, setState] = useState(_selector ? _selector(store.get()) : store.get());

		useEffect(() => store.subscribe(() => setState(_selector(store.get()))), []);

		return [state, store.set];
	};

	return {
		StoreProvider,
		useStore,
	};
};

export default createFastContext;
