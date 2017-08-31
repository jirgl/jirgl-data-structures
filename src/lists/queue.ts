import { IIterable, IIterator } from '../iterator';
import { DoublyLinkedList } from './doublyLinkedList';

export module Queue {
    export class Structure<T> implements IIterable<T> {
        protected list: DoublyLinkedList.Structure<T, T>;

        constructor() {
            this.list = new DoublyLinkedList.Structure<T, T>();
        }

        clear(): void {
            this.list.clear();
        }

        isEmpty(): boolean {
            return this.list.isEmpty();
        }

        enqueue(t: T): void {
            this.list.addLastItem(t, t);
        }

        dequeue(): T | undefined {
            return this.list.removeFirstItem();
        }

        getIterator(): IIterator<T> {
            return this.list.getIterator();
        }
    }
}
