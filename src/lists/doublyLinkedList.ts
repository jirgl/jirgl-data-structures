import { IIterable, IIterator } from '../iterator';

export module DoublyLinkedList {
    export class Item<TKey, TData> {
        key: TKey;
        data: TData;
        next: Item<TKey, TData>;
        previous: Item<TKey, TData>;

        constructor(key: TKey, data: TData) {
            this.key = key;
            this.data = data;
        }
    }

    export class Structure<TKey, TData> implements IIterable<TData> {
        protected currentItem: Item<TKey, TData>;
        protected firstItem: Item<TKey, TData>;
        protected lastItem: Item<TKey, TData>;

        clear(): void {
            this.currentItem = this.firstItem = this.lastItem = undefined;
        }

        isEmpty(): boolean {
            return this.firstItem === undefined;
        }

        addFirstItem(key: TKey, data: TData): void {
            const item = new Item<TKey, TData>(key, data);

            if (this.firstItem) {
                item.next = this.firstItem;
                this.firstItem.previous = item;
                this.firstItem = item;
                this.currentItem = this.firstItem;
            } else {
                this.firstItem = this.lastItem = this.currentItem = item;
            }
        }

        addLastItem(key: TKey, data: TData): void {
            const item = new Item<TKey, TData>(key, data);

            if (this.lastItem) {
                item.previous = this.lastItem;
                this.lastItem.next = item;
                this.lastItem = item;
                this.currentItem = this.lastItem;
            } else {
                this.firstItem = this.lastItem = this.currentItem = item;
            }
        }

        addNextItem(key: TKey, data: TData): void {
            const item = new Item<TKey, TData>(key, data);

            if (!this.currentItem) {
                this.firstItem = this.lastItem = this.currentItem = item;
            } else if (this.currentItem === this.lastItem) {
                this.addLastItem(key, data);
            } else {
                item.next = this.currentItem.next;
                item.previous = this.currentItem;
                this.currentItem.next.previous = item;
                this.currentItem.next = item;
                this.currentItem = item;
            }
        }

        addPreviousItem(key: TKey, data: TData): void {
            const item = new Item<TKey, TData>(key, data);

            if (!this.currentItem) {
                this.firstItem = this.lastItem = this.currentItem = item;
            } else if (this.currentItem === this.firstItem) {
                this.addFirstItem(key, data);
            } else {
                item.next = this.currentItem;
                item.previous = this.currentItem.previous;
                this.currentItem.previous.next = item;
                this.currentItem.previous = item;
                this.currentItem = item;
            }
        }

        getCurrentItem(): TData {
            return this.currentItem.data;
        }

        getFirstItem(): TData {
            return this.firstItem.data;
        }

        getLastItem(): TData {
            return this.lastItem.data;
        }

        getNextItem(): TData {
            return this.currentItem.next.data;
        }

        getPreviousItem(): TData {
            return this.currentItem.previous.data;
        }

        removeKey(key: TKey): TData {
            if (!this.firstItem)
                return undefined;

            let previousItem: Item<TKey, TData> = undefined;
            let currentItem = this.firstItem;
            while (currentItem) {
                if (currentItem.key === key) {
                    if (previousItem) {
                        previousItem.next = currentItem.next;
                        currentItem.next.previous = previousItem;
                        currentItem.previous = currentItem.previous = undefined;
                    } else {
                        //current item is first item
                        if (this.currentItem === this.firstItem) {
                            this.currentItem = this.firstItem = currentItem.next;
                        } else {
                            this.firstItem = currentItem.next;
                        }
                    }

                    return currentItem.data;
                }

                previousItem = currentItem;
                currentItem = currentItem.next;
            }

            return undefined;
        }

        removeCurrentItem(): TData {
            if (!this.currentItem)
                return undefined;

            if (this.currentItem === this.firstItem) {
                return this.removeFirstItem();
            } else if (this.currentItem === this.lastItem) {
                return this.removeLastItem();
            } else {
                const itemData = this.currentItem.data;
                this.currentItem.previous.next = this.currentItem.next;
                this.currentItem.next.previous = this.currentItem.previous;
                this.currentItem.previous = undefined;
                this.currentItem.next = undefined;
                this.currentItem = this.firstItem;

                return itemData;
            }
        }

        removeFirstItem(): TData {
            if (!this.firstItem)
                return undefined;

            const itemData = this.firstItem.data;
            if (this.firstItem === this.lastItem) {
                this.firstItem = this.lastItem = this.currentItem = undefined;
            } else {
                const newFirstItem = this.firstItem.next;
                this.firstItem.next.previous = undefined;
                this.firstItem.next = undefined;

                if (this.firstItem === this.currentItem) {
                    this.currentItem = newFirstItem;
                }

                this.firstItem = newFirstItem;
            }

            return itemData;
        }

        removeLastItem(): TData {
            if (!this.lastItem)
                return undefined;

            const itemData = this.lastItem.data;
            if (this.lastItem === this.firstItem) {
                this.firstItem = this.lastItem = this.currentItem = undefined;
            } else {
                const newLastItem = this.lastItem.previous;
                this.lastItem.previous.next = undefined;
                this.lastItem.previous = undefined;

                if (this.lastItem === this.currentItem) {
                    this.currentItem = this.firstItem;
                }

                this.lastItem = newLastItem;
            }

            return itemData;
        }

        removeNextItem(): TData {
            if (!this.currentItem || !this.currentItem.next) {
                return undefined;
            } else if (this.currentItem.next === this.lastItem) {
                return this.removeLastItem();
            } else {
                const itemData = this.currentItem.next.data;
                const newNextItem = this.currentItem.next.next;
                this.currentItem.next.next.previous = this.currentItem;
                this.currentItem.next.next = undefined;
                this.currentItem.next.previous = undefined;
                this.currentItem.next = newNextItem;

                return itemData;
            }
        }

        removePreviousItem(): TData {
            if (!this.currentItem || !this.currentItem.previous) {
                return undefined;
            } else if (this.currentItem.previous === this.firstItem) {
                return this.removeFirstItem();
            } else {
                const itemData = this.currentItem.previous.data;
                const newPreviousItem = this.currentItem.previous.previous;
                this.currentItem.previous.previous.next = this.currentItem;
                this.currentItem.previous.previous = undefined;
                this.currentItem.previous.next = undefined;
                this.currentItem.previous = newPreviousItem;

                return itemData;
            }
        }

        getIterator(): IIterator<TData> {
            return new Iterator<TKey, TData>(this.firstItem);
        }
    }

    export class Iterator<TKey, TData> implements IIterator<TData> {
        protected currentItem: Item<TKey, TData>;
        protected firstItem: Item<TKey, TData>;

        constructor(firstItem: Item<TKey, TData>) {
            this.firstItem = this.currentItem = firstItem;
        }

        hasNext(): boolean {
            return this.currentItem !== undefined;
        }

        next(): TData {
            const current = this.currentItem;
            this.currentItem = this.currentItem.next;
            return current.data;
        }

        reset(): void {
            this.currentItem = this.firstItem;
        }
    }
}
