import { Structure as DoublyLinkedList } from '../../src/lists/doublyLinkedList';

describe('Doubly Linked list', function () {
    describe('Add methods', function () {
        let doublyLinkedList;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList();
        });

        it('add first item', function () {
            doublyLinkedList.addFirstItem('first', 'dataOfFirst');
            expect(doublyLinkedList.currentItem.key).toBe('first');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfFirst');
            expect(doublyLinkedList.currentItem.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem.next).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.lastItem);

            doublyLinkedList.addFirstItem('new first', 'dataOfNewFirst');
            expect(doublyLinkedList.currentItem.key).toBe('new first');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfNewFirst');
            expect(doublyLinkedList.currentItem.next.key).toBe('first');
            expect(doublyLinkedList.currentItem.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem.next.next).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.next).toBe(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.next.previous).toBe(doublyLinkedList.firstItem);
        });

        it('add last item', function () {
            doublyLinkedList.addLastItem('last', 'dataOfLast');
            expect(doublyLinkedList.currentItem.key).toBe('last');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfLast');
            expect(doublyLinkedList.currentItem.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem.next).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.lastItem);

            doublyLinkedList.addLastItem('new last', 'dataOfNewLast');
            expect(doublyLinkedList.currentItem.key).toBe('new last');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfNewLast');
            expect(doublyLinkedList.currentItem.previous.key).toBe('last');
            expect(doublyLinkedList.currentItem.next).toEqual(undefined);
            expect(doublyLinkedList.currentItem.previous.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.previous).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.previous.next).toBe(doublyLinkedList.lastItem);
        });

        it('add next item', function () {
            doublyLinkedList.addNextItem('next', 'dataOfNext');
            expect(doublyLinkedList.currentItem.key).toBe('next');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfNext');
            expect(doublyLinkedList.currentItem.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem.next).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.lastItem);

            doublyLinkedList.addNextItem('new next', 'dataOfNewNext');
            expect(doublyLinkedList.currentItem.key).toBe('new next');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfNewNext');
            expect(doublyLinkedList.currentItem.previous.key).toBe('next');
            expect(doublyLinkedList.currentItem.next).toEqual(undefined);
            expect(doublyLinkedList.currentItem.previous.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.previous).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.previous.next).toBe(doublyLinkedList.lastItem);

            doublyLinkedList.addFirstItem('first', 'dataOfFirst');
            doublyLinkedList.addNextItem('next after first', 'dataOfNextAfterFirst');
            expect(doublyLinkedList.currentItem.key).toBe('next after first');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfNextAfterFirst');
            expect(doublyLinkedList.currentItem.previous).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.previous.next).toBe(doublyLinkedList.currentItem);
            expect(doublyLinkedList.currentItem.next.key).toBe('next');
            expect(doublyLinkedList.currentItem.next.previous).toBe(doublyLinkedList.currentItem);
        });

        it('add previous item', function () {
            doublyLinkedList.addPreviousItem('previous', 'dataOfPrevious');
            expect(doublyLinkedList.currentItem.key).toBe('previous');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfPrevious');
            expect(doublyLinkedList.currentItem.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem.next).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.lastItem);

            doublyLinkedList.addPreviousItem('new previous', 'dataOfNewPrevious');
            expect(doublyLinkedList.currentItem.key).toBe('new previous');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfNewPrevious');
            expect(doublyLinkedList.currentItem.next.key).toBe('previous');
            expect(doublyLinkedList.currentItem.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem.next.next).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.next).toBe(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.next.previous).toBe(doublyLinkedList.firstItem);

            doublyLinkedList.addLastItem('last', 'dataOfLast');
            doublyLinkedList.addPreviousItem('previous before last', 'dataOfPreviousBeforeLast');
            expect(doublyLinkedList.currentItem.key).toBe('previous before last');
            expect(doublyLinkedList.currentItem.data).toBe('dataOfPreviousBeforeLast');
            expect(doublyLinkedList.currentItem.next).toBe(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.next.previous).toBe(doublyLinkedList.currentItem);
            expect(doublyLinkedList.currentItem.previous.key).toBe('previous');
            expect(doublyLinkedList.currentItem.previous.next).toBe(doublyLinkedList.currentItem);
        });
    });

    describe('Remove methods', function () {
        let doublyLinkedList;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.addLastItem('one', 'dataOfOne');
            doublyLinkedList.addLastItem('two', 'dataOfTwo');
            doublyLinkedList.addLastItem('three', 'dataOfThree');
        });

        it('remove by key', function () {
            doublyLinkedList.addFirstItem('one', 'dataOfOne2');

            expect(doublyLinkedList.removeKey('one')).toBe('dataOfOne2');
            expect(doublyLinkedList.removeKey('one')).toBe('dataOfOne');
            expect(doublyLinkedList.removeKey('one')).toBe(undefined);
        });

        it('remove first item', function () {
            expect(doublyLinkedList.removeFirstItem()).toBe('dataOfOne');
            expect(doublyLinkedList.firstItem.key).toBe('two');
            expect(doublyLinkedList.firstItem.previous).toEqual(undefined);
            expect(doublyLinkedList.firstItem.next).toBe(doublyLinkedList.lastItem);

            expect(doublyLinkedList.removeFirstItem()).toBe('dataOfTwo');
            expect(doublyLinkedList.firstItem.key).toBe('three');
            expect(doublyLinkedList.firstItem.previous).toEqual(undefined);
            expect(doublyLinkedList.firstItem.next).toEqual(undefined);

            expect(doublyLinkedList.removeFirstItem()).toBe('dataOfThree');
            expect(doublyLinkedList.firstItem).toEqual(undefined);
            expect(doublyLinkedList.lastItem).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toEqual(undefined);
        });

        it('remove last item', function () {
            expect(doublyLinkedList.removeLastItem()).toBe('dataOfThree');
            expect(doublyLinkedList.lastItem.key).toBe('two');
            expect(doublyLinkedList.lastItem.previous).toBe(doublyLinkedList.firstItem);
            expect(doublyLinkedList.lastItem.next).toEqual(undefined);

            expect(doublyLinkedList.removeLastItem()).toBe('dataOfTwo');
            expect(doublyLinkedList.lastItem.key).toBe('one');
            expect(doublyLinkedList.lastItem.previous).toEqual(undefined);
            expect(doublyLinkedList.lastItem.next).toEqual(undefined);

            expect(doublyLinkedList.removeLastItem()).toBe('dataOfOne');
            expect(doublyLinkedList.firstItem).toEqual(undefined);
            expect(doublyLinkedList.lastItem).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toEqual(undefined);
        });

        it('remove current item', function () {
            expect(doublyLinkedList.removeCurrentItem()).toBe('dataOfThree');
            expect(doublyLinkedList.currentItem.key).toBe('one');
            expect(doublyLinkedList.currentItem.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem.next).toBe(doublyLinkedList.lastItem);

            expect(doublyLinkedList.removeCurrentItem()).toBe('dataOfOne');
            expect(doublyLinkedList.currentItem.key).toBe('two');
            expect(doublyLinkedList.currentItem.previous).toEqual(undefined);
            expect(doublyLinkedList.currentItem.next).toEqual(undefined);

            expect(doublyLinkedList.removeCurrentItem()).toBe('dataOfTwo');
            expect(doublyLinkedList.firstItem).toEqual(undefined);
            expect(doublyLinkedList.lastItem).toEqual(undefined);
            expect(doublyLinkedList.currentItem).toEqual(undefined);
        });

        it('remove next item', function () {
            doublyLinkedList.addFirstItem('move current item to first', 'data');

            expect(doublyLinkedList.removeNextItem()).toBe('dataOfOne');
            expect(doublyLinkedList.removeNextItem()).toBe('dataOfTwo');
            expect(doublyLinkedList.removeNextItem()).toBe('dataOfThree');
        });

        it('remove previous item', function () {
            doublyLinkedList.addLastItem('move current item to last', 'data');

            expect(doublyLinkedList.removePreviousItem()).toBe('dataOfThree');
            expect(doublyLinkedList.removePreviousItem()).toBe('dataOfTwo');
            expect(doublyLinkedList.removePreviousItem()).toBe('dataOfOne');
        });
    });

    describe('Other functions', function () {
        let doublyLinkedList;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList();
        });

        it('clear doubly linked list', function () {
            doublyLinkedList.addLastItem('last', 'dataOfLast');
            expect(doublyLinkedList.firstItem.key).toBe('last');
            expect(doublyLinkedList.firstItem.data).toBe('dataOfLast');

            doublyLinkedList.clear();
            expect(doublyLinkedList.firstItem).toEqual(undefined);
        });

        it('is doubly linked list empty', function () {
            expect(doublyLinkedList.isEmpty()).toBeTruthy();

            doublyLinkedList.addLastItem('last', 'dataOfLast');
            expect(doublyLinkedList.isEmpty()).toBeFalsy();
        });
    });

    describe('Iterator', function () {
        let doublyLinkedList;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList();
        });

        it('iterate by iterator', function () {
            doublyLinkedList.addFirstItem('1', 'data1');
            doublyLinkedList.addNextItem('2', 'data2');
            doublyLinkedList.addNextItem('3', 'data3');

            let iterator = doublyLinkedList.getIterator();
            expect(iterator.next()).toBe('data1');
            expect(iterator.next()).toBe('data2');
            expect(iterator.next()).toBe('data3');

            iterator.reset();
            expect(iterator.next()).toBe('data1');
        });
    });
});
