export interface IIterable<T> {
    getIterator(): IIterator<T>;
}

export interface IIterator<T> {
    hasNext(): boolean;
    next(): T;
    reset(): void;
}
