import 'mocha';
import { expect } from 'chai';
import { DoublyLinkedList } from '../../src/lists/doublyLinkedList';

describe('Doubly Linked list', function () {
    describe('Add methods', function () {
        let doublyLinkedList: any;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList.Structure();
        });

        it('add first item', function () {
            doublyLinkedList.addFirstItem('first', 'dataOfFirst');
            expect(doublyLinkedList.currentItem.key).equal('first');
            expect(doublyLinkedList.currentItem.data).equal('dataOfFirst');
            expect(doublyLinkedList.currentItem.previous).equal(undefined);
            expect(doublyLinkedList.currentItem.next).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.lastItem);

            doublyLinkedList.addFirstItem('new first', 'dataOfNewFirst');
            expect(doublyLinkedList.currentItem.key).equal('new first');
            expect(doublyLinkedList.currentItem.data).equal('dataOfNewFirst');
            expect(doublyLinkedList.currentItem.next.key).equal('first');
            expect(doublyLinkedList.currentItem.previous).equal(undefined);
            expect(doublyLinkedList.currentItem.next.next).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.next).equal(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.next.previous).equal(doublyLinkedList.firstItem);
        });

        it('add last item', function () {
            doublyLinkedList.addLastItem('last', 'dataOfLast');
            expect(doublyLinkedList.currentItem.key).equal('last');
            expect(doublyLinkedList.currentItem.data).equal('dataOfLast');
            expect(doublyLinkedList.currentItem.previous).equal(undefined);
            expect(doublyLinkedList.currentItem.next).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.lastItem);

            doublyLinkedList.addLastItem('new last', 'dataOfNewLast');
            expect(doublyLinkedList.currentItem.key).equal('new last');
            expect(doublyLinkedList.currentItem.data).equal('dataOfNewLast');
            expect(doublyLinkedList.currentItem.previous.key).equal('last');
            expect(doublyLinkedList.currentItem.next).equal(undefined);
            expect(doublyLinkedList.currentItem.previous.previous).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.previous).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.previous.next).equal(doublyLinkedList.lastItem);
        });

        it('add next item', function () {
            doublyLinkedList.addNextItem('next', 'dataOfNext');
            expect(doublyLinkedList.currentItem.key).equal('next');
            expect(doublyLinkedList.currentItem.data).equal('dataOfNext');
            expect(doublyLinkedList.currentItem.previous).equal(undefined);
            expect(doublyLinkedList.currentItem.next).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.lastItem);

            doublyLinkedList.addNextItem('new next', 'dataOfNewNext');
            expect(doublyLinkedList.currentItem.key).equal('new next');
            expect(doublyLinkedList.currentItem.data).equal('dataOfNewNext');
            expect(doublyLinkedList.currentItem.previous.key).equal('next');
            expect(doublyLinkedList.currentItem.next).equal(undefined);
            expect(doublyLinkedList.currentItem.previous.previous).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.previous).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.previous.next).equal(doublyLinkedList.lastItem);

            doublyLinkedList.addFirstItem('first', 'dataOfFirst');
            doublyLinkedList.addNextItem('next after first', 'dataOfNextAfterFirst');
            expect(doublyLinkedList.currentItem.key).equal('next after first');
            expect(doublyLinkedList.currentItem.data).equal('dataOfNextAfterFirst');
            expect(doublyLinkedList.currentItem.previous).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.previous.next).equal(doublyLinkedList.currentItem);
            expect(doublyLinkedList.currentItem.next.key).equal('next');
            expect(doublyLinkedList.currentItem.next.previous).equal(doublyLinkedList.currentItem);
        });

        it('add previous item', function () {
            doublyLinkedList.addPreviousItem('previous', 'dataOfPrevious');
            expect(doublyLinkedList.currentItem.key).equal('previous');
            expect(doublyLinkedList.currentItem.data).equal('dataOfPrevious');
            expect(doublyLinkedList.currentItem.previous).equal(undefined);
            expect(doublyLinkedList.currentItem.next).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.lastItem);

            doublyLinkedList.addPreviousItem('new previous', 'dataOfNewPrevious');
            expect(doublyLinkedList.currentItem.key).equal('new previous');
            expect(doublyLinkedList.currentItem.data).equal('dataOfNewPrevious');
            expect(doublyLinkedList.currentItem.next.key).equal('previous');
            expect(doublyLinkedList.currentItem.previous).equal(undefined);
            expect(doublyLinkedList.currentItem.next.next).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.currentItem.next).equal(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.next.previous).equal(doublyLinkedList.firstItem);

            doublyLinkedList.addLastItem('last', 'dataOfLast');
            doublyLinkedList.addPreviousItem('previous before last', 'dataOfPreviousBeforeLast');
            expect(doublyLinkedList.currentItem.key).equal('previous before last');
            expect(doublyLinkedList.currentItem.data).equal('dataOfPreviousBeforeLast');
            expect(doublyLinkedList.currentItem.next).equal(doublyLinkedList.lastItem);
            expect(doublyLinkedList.currentItem.next.previous).equal(doublyLinkedList.currentItem);
            expect(doublyLinkedList.currentItem.previous.key).equal('previous');
            expect(doublyLinkedList.currentItem.previous.next).equal(doublyLinkedList.currentItem);
        });
    });

    describe('Remove methods', function () {
        let doublyLinkedList: any;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList.Structure();
            doublyLinkedList.addLastItem('one', 'dataOfOne');
            doublyLinkedList.addLastItem('two', 'dataOfTwo');
            doublyLinkedList.addLastItem('three', 'dataOfThree');
        });

        it('remove by key', function () {
            doublyLinkedList.addFirstItem('one', 'dataOfOne2');

            expect(doublyLinkedList.removeKey('one')).equal('dataOfOne2');
            expect(doublyLinkedList.removeKey('one')).equal('dataOfOne');
            expect(doublyLinkedList.removeKey('one')).equal(undefined);
        });

        it('remove first item', function () {
            expect(doublyLinkedList.removeFirstItem()).equal('dataOfOne');
            expect(doublyLinkedList.firstItem.key).equal('two');
            expect(doublyLinkedList.firstItem.previous).equal(undefined);
            expect(doublyLinkedList.firstItem.next).equal(doublyLinkedList.lastItem);

            expect(doublyLinkedList.removeFirstItem()).equal('dataOfTwo');
            expect(doublyLinkedList.firstItem.key).equal('three');
            expect(doublyLinkedList.firstItem.previous).equal(undefined);
            expect(doublyLinkedList.firstItem.next).equal(undefined);

            expect(doublyLinkedList.removeFirstItem()).equal('dataOfThree');
            expect(doublyLinkedList.firstItem).equal(undefined);
            expect(doublyLinkedList.lastItem).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(undefined);
        });

        it('remove last item', function () {
            expect(doublyLinkedList.removeLastItem()).equal('dataOfThree');
            expect(doublyLinkedList.lastItem.key).equal('two');
            expect(doublyLinkedList.lastItem.previous).equal(doublyLinkedList.firstItem);
            expect(doublyLinkedList.lastItem.next).equal(undefined);

            expect(doublyLinkedList.removeLastItem()).equal('dataOfTwo');
            expect(doublyLinkedList.lastItem.key).equal('one');
            expect(doublyLinkedList.lastItem.previous).equal(undefined);
            expect(doublyLinkedList.lastItem.next).equal(undefined);

            expect(doublyLinkedList.removeLastItem()).equal('dataOfOne');
            expect(doublyLinkedList.firstItem).equal(undefined);
            expect(doublyLinkedList.lastItem).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(undefined);
        });

        it('remove current item', function () {
            expect(doublyLinkedList.removeCurrentItem()).equal('dataOfThree');
            expect(doublyLinkedList.currentItem.key).equal('one');
            expect(doublyLinkedList.currentItem.previous).equal(undefined);
            expect(doublyLinkedList.currentItem.next).equal(doublyLinkedList.lastItem);

            expect(doublyLinkedList.removeCurrentItem()).equal('dataOfOne');
            expect(doublyLinkedList.currentItem.key).equal('two');
            expect(doublyLinkedList.currentItem.previous).equal(undefined);
            expect(doublyLinkedList.currentItem.next).equal(undefined);

            expect(doublyLinkedList.removeCurrentItem()).equal('dataOfTwo');
            expect(doublyLinkedList.firstItem).equal(undefined);
            expect(doublyLinkedList.lastItem).equal(undefined);
            expect(doublyLinkedList.currentItem).equal(undefined);
        });

        it('remove next item', function () {
            doublyLinkedList.addFirstItem('move current item to first', 'data');

            expect(doublyLinkedList.removeNextItem()).equal('dataOfOne');
            expect(doublyLinkedList.removeNextItem()).equal('dataOfTwo');
            expect(doublyLinkedList.removeNextItem()).equal('dataOfThree');
        });

        it('remove previous item', function () {
            doublyLinkedList.addLastItem('move current item to last', 'data');

            expect(doublyLinkedList.removePreviousItem()).equal('dataOfThree');
            expect(doublyLinkedList.removePreviousItem()).equal('dataOfTwo');
            expect(doublyLinkedList.removePreviousItem()).equal('dataOfOne');
        });
    });

    describe('Other functions', function () {
        let doublyLinkedList: any;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList.Structure();
        });

        it('clear doubly linked list', function () {
            doublyLinkedList.addLastItem('last', 'dataOfLast');
            expect(doublyLinkedList.firstItem.key).equal('last');
            expect(doublyLinkedList.firstItem.data).equal('dataOfLast');

            doublyLinkedList.clear();
            expect(doublyLinkedList.firstItem).equal(undefined);
        });

        it('is doubly linked list empty', function () {
            expect(doublyLinkedList.isEmpty()).equal(true);

            doublyLinkedList.addLastItem('last', 'dataOfLast');
            expect(doublyLinkedList.isEmpty()).equal(false);
        });
    });

    describe('Iterator', function () {
        let doublyLinkedList: any;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList.Structure();
        });

        it('iterate by iterator', function () {
            doublyLinkedList.addFirstItem('1', 'data1');
            doublyLinkedList.addNextItem('2', 'data2');
            doublyLinkedList.addNextItem('3', 'data3');

            let iterator = doublyLinkedList.getIterator();
            expect(iterator.next()).equal('data1');
            expect(iterator.next()).equal('data2');
            expect(iterator.next()).equal('data3');

            iterator.reset();
            expect(iterator.next()).equal('data1');
        });
    });
});
