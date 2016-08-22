import { IIterable, IIterator } from '../iterator';
import { Structure as DoublyLinkedList } from './doublyLinkedList';

export class Structure<T> implements IIterable<T> {
    protected list: DoublyLinkedList<T, T>;

    constructor() {
        this.list = new DoublyLinkedList<T, T>();
    }

    clear(): void {
        this.list.clear();
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    push(t: T): void {
        this.list.addFirstItem(undefined, t);
    }

    pop(): T {
        return this.list.removeFirstItem();
    }

    getIterator(): IIterator<T> {
        return this.list.getIterator();
    }
}
