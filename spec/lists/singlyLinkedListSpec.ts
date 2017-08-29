import 'mocha';
import { expect } from 'chai';
import { SinglyLinkedList } from '../../src/lists/singlyLinkedList';

describe('Linked list', function () {
    describe('Add methods', function () {
        let singlyLinkedList: any;

        beforeEach(function () {
            singlyLinkedList = new SinglyLinkedList.Structure();
        });

        it('add first item', function () {
            singlyLinkedList.addFirstItem('first', 'dataOfFirst');
            expect(singlyLinkedList.currentItem.key).equal('first');
            expect(singlyLinkedList.currentItem.data).equal('dataOfFirst');
            expect(singlyLinkedList.currentItem.next).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.firstItem);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.lastItem);

            singlyLinkedList.addFirstItem('new first', 'dataOfNewFirst');
            expect(singlyLinkedList.currentItem.key).equal('new first');
            expect(singlyLinkedList.currentItem.data).equal('dataOfNewFirst');
            expect(singlyLinkedList.currentItem.next.key).equal('first');
            expect(singlyLinkedList.currentItem.next.data).equal('dataOfFirst');
            expect(singlyLinkedList.currentItem.next.next).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.firstItem);
            expect(singlyLinkedList.currentItem.next).equal(singlyLinkedList.lastItem);
        });

        it('add last item', function () {
            singlyLinkedList.addLastItem('last', 'dataOfLast');
            expect(singlyLinkedList.currentItem.key).equal('last');
            expect(singlyLinkedList.currentItem.data).equal('dataOfLast');
            expect(singlyLinkedList.currentItem.next).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.firstItem);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.lastItem);

            singlyLinkedList.addLastItem('new last', 'dataOfNewLast');
            expect(singlyLinkedList.currentItem.key).equal('new last');
            expect(singlyLinkedList.currentItem.data).equal('dataOfNewLast');
            expect(singlyLinkedList.currentItem.next).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.lastItem);
        });

        it('add next item', function () {
            singlyLinkedList.addNextItem('next', 'dataOfNext');
            expect(singlyLinkedList.currentItem.key).equal('next');
            expect(singlyLinkedList.currentItem.data).equal('dataOfNext');
            expect(singlyLinkedList.currentItem.next).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.firstItem);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.lastItem);

            singlyLinkedList.addNextItem('new next', 'dataOfNewNext');
            expect(singlyLinkedList.currentItem.key).equal('new next');
            expect(singlyLinkedList.currentItem.data).equal('dataOfNewNext');
            expect(singlyLinkedList.currentItem.next).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.lastItem);

            singlyLinkedList.addFirstItem('first', 'dataOfFirst');
            singlyLinkedList.addNextItem('next after first', 'dataOfNextAfterFirst');
            expect(singlyLinkedList.currentItem.key).equal('next after first');
            expect(singlyLinkedList.currentItem.data).equal('dataOfNextAfterFirst');
            expect(singlyLinkedList.currentItem.next.key).equal('next');
            expect(singlyLinkedList.currentItem.next.data).equal('dataOfNext');
        });

        it('add previous item', function () {
            singlyLinkedList.addPreviousItem('previous', 'dataOfPrevious');
            expect(singlyLinkedList.currentItem.key).equal('previous');
            expect(singlyLinkedList.currentItem.data).equal('dataOfPrevious');
            expect(singlyLinkedList.currentItem.next).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.firstItem);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.lastItem);

            singlyLinkedList.addPreviousItem('new previous', 'dataOfNewPrevious');
            expect(singlyLinkedList.currentItem.key).equal('new previous');
            expect(singlyLinkedList.currentItem.data).equal('dataOfNewPrevious');
            expect(singlyLinkedList.currentItem.next.key).equal('previous');
            expect(singlyLinkedList.currentItem.next.next).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(singlyLinkedList.firstItem);
            expect(singlyLinkedList.currentItem.next).equal(singlyLinkedList.lastItem);

            singlyLinkedList.addLastItem('last', 'dataOfLast');
            singlyLinkedList.addPreviousItem('previous before last', 'dataOfPreviousBeforeLast');
            expect(singlyLinkedList.currentItem.key).equal('previous before last');
            expect(singlyLinkedList.currentItem.data).equal('dataOfPreviousBeforeLast');
            expect(singlyLinkedList.currentItem.next).equal(singlyLinkedList.lastItem);
        });
    });

    describe('Find method', function () {
        let singlyLinkedList: any;

        beforeEach(function () {
            singlyLinkedList = new SinglyLinkedList.Structure();
        });

        it('find unique item', function () {
            singlyLinkedList.addNextItem('1', 'data1');
            singlyLinkedList.addNextItem('2', 'data2');
            singlyLinkedList.addNextItem('3', 'data3');

            expect(singlyLinkedList.find('1')).equal('data1');
            expect(singlyLinkedList.find('2')).equal('data2');
            expect(singlyLinkedList.find('3')).equal('data3');
        });

        it('find first item', function () {
            singlyLinkedList.addNextItem('1', 'data1');
            singlyLinkedList.addNextItem('1', 'data2');

            expect(singlyLinkedList.find('1')).equal('data1');
        });

        it('find no item', function () {
            singlyLinkedList.addNextItem('1', 'data1');
            singlyLinkedList.addNextItem('2', 'data2');

            expect(singlyLinkedList.find('3')).equal(undefined);
        });

        it('find no item', function () {
            expect(singlyLinkedList.find('1')).equal(undefined);
        });
    });

    describe('Get methods', function () {
        let singlyLinkedList: any;

        beforeEach(function () {
            singlyLinkedList = new SinglyLinkedList.Structure();
            singlyLinkedList.addLastItem('one', 'dataOfOne');
            singlyLinkedList.addLastItem('two', 'dataOfTwo');
            singlyLinkedList.addLastItem('three', 'dataOfThree');
        });

        it('get current item', function () {
            expect(singlyLinkedList.getCurrentItem()).equal('dataOfThree');
        });

        it('get first item', function () {
            expect(singlyLinkedList.getFirstItem()).equal('dataOfOne');
        });

        it('get last item', function () {
            expect(singlyLinkedList.getLastItem()).equal('dataOfThree');
        });

        it('get next item', function () {
            expect(singlyLinkedList.getNextItem()).equal(undefined);

            singlyLinkedList.addFirstItem('zero', 'dataOfZero');
            expect(singlyLinkedList.getNextItem()).equal('dataOfOne');
        });

        it('get previous item', function () {
            expect(singlyLinkedList.getPreviousItem()).equal('dataOfTwo');

            singlyLinkedList.addFirstItem('zero', 'dataOfZero');
            expect(singlyLinkedList.getPreviousItem()).equal(undefined);
        });
    });

    describe('Remove methods', function () {
        let singlyLinkedList: any;

        beforeEach(function () {
            singlyLinkedList = new SinglyLinkedList.Structure();
            singlyLinkedList.addLastItem('one', 'dataOfOne');
            singlyLinkedList.addLastItem('two', 'dataOfTwo');
            singlyLinkedList.addLastItem('three', 'dataOfThree');
        });

        it('remove first item', function () {
            let removedItem = singlyLinkedList.removeFirstItem();
            expect(removedItem).equal('dataOfOne');
            expect(singlyLinkedList.firstItem.key).equal('two');
            expect(singlyLinkedList.firstItem.data).equal('dataOfTwo');
            expect(singlyLinkedList.firstItem.next).equal(singlyLinkedList.lastItem);

            removedItem = singlyLinkedList.removeFirstItem();
            expect(removedItem).equal('dataOfTwo');
            expect(singlyLinkedList.firstItem.key).equal('three');
            expect(singlyLinkedList.firstItem.data).equal('dataOfThree');
            expect(singlyLinkedList.firstItem.next).equal(undefined);

            removedItem = singlyLinkedList.removeFirstItem();
            expect(removedItem).equal('dataOfThree');
            expect(singlyLinkedList.firstItem).equal(undefined);
            expect(singlyLinkedList.lastItem).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(undefined);
        });

        it('remove last item', function () {
            let removedItem = singlyLinkedList.removeLastItem();
            expect(removedItem).equal('dataOfThree');
            expect(singlyLinkedList.lastItem.key).equal('two');
            expect(singlyLinkedList.lastItem.data).equal('dataOfTwo');
            expect(singlyLinkedList.lastItem.next).equal(undefined);

            removedItem = singlyLinkedList.removeLastItem();
            expect(removedItem).equal('dataOfTwo');
            expect(singlyLinkedList.lastItem.key).equal('one');
            expect(singlyLinkedList.lastItem.data).equal('dataOfOne');
            expect(singlyLinkedList.lastItem.next).equal(undefined);

            removedItem = singlyLinkedList.removeLastItem();
            expect(removedItem).equal('dataOfOne');
            expect(singlyLinkedList.firstItem).equal(undefined);
            expect(singlyLinkedList.lastItem).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(undefined);
        });

        it('remove current item', function () {
            let removedItem = singlyLinkedList.removeCurrentItem();
            expect(removedItem).equal('dataOfThree');
            expect(singlyLinkedList.currentItem.key).equal('one');
            expect(singlyLinkedList.currentItem.data).equal('dataOfOne');
            expect(singlyLinkedList.currentItem.next).equal(singlyLinkedList.lastItem);

            removedItem = singlyLinkedList.removeCurrentItem();
            expect(removedItem).equal('dataOfOne');
            expect(singlyLinkedList.currentItem.key).equal('two');
            expect(singlyLinkedList.currentItem.data).equal('dataOfTwo');
            expect(singlyLinkedList.currentItem.next).equal(undefined);

            removedItem = singlyLinkedList.removeCurrentItem();
            expect(removedItem).equal('dataOfTwo');
            expect(singlyLinkedList.firstItem).equal(undefined);
            expect(singlyLinkedList.lastItem).equal(undefined);
            expect(singlyLinkedList.currentItem).equal(undefined);
        });

        it('remove next item', function () {
            singlyLinkedList.addFirstItem('move current item to first');

            expect(singlyLinkedList.removeNextItem()).equal('dataOfOne');
            expect(singlyLinkedList.removeNextItem()).equal('dataOfTwo');
            expect(singlyLinkedList.removeNextItem()).equal('dataOfThree');
            expect(singlyLinkedList.removeNextItem()).equal(undefined);
        });

        it('remove previous item', function () {
            singlyLinkedList.addLastItem('move current item to last', 'data');

            expect(singlyLinkedList.removePreviousItem()).equal('dataOfThree');
            expect(singlyLinkedList.removePreviousItem()).equal('dataOfTwo');
            expect(singlyLinkedList.removePreviousItem()).equal('dataOfOne');
            expect(singlyLinkedList.removePreviousItem()).equal(undefined);
        });

        it('remove by key', function () {
            singlyLinkedList.addFirstItem('one', 'dataOfOne2');

            expect(singlyLinkedList.removeKey('one')).equal('dataOfOne2');
            expect(singlyLinkedList.removeKey('one')).equal('dataOfOne');
            expect(singlyLinkedList.removeKey('one')).equal(undefined);
        });
    });

    describe('Other functions', function () {
        let singlyLinkedList: any;

        beforeEach(function () {
            singlyLinkedList = new SinglyLinkedList.Structure();
        });

        it('clear linked list', function () {
            singlyLinkedList.addLastItem('last', 'dataOfLast');
            expect(singlyLinkedList.firstItem.key).equal('last');
            expect(singlyLinkedList.firstItem.data).equal('dataOfLast');

            singlyLinkedList.clear();
            expect(singlyLinkedList.firstItem).equal(undefined);
        });

        it('is linked list empty', function () {
            expect(singlyLinkedList.isEmpty()).equal(true);

            singlyLinkedList.addLastItem('last', 'dataOfLast');
            expect(singlyLinkedList.isEmpty()).equal(false);
        });
    });

    describe('Iterator', function () {
        let singlyLinkedList: any;

        beforeEach(function () {
            singlyLinkedList = new SinglyLinkedList.Structure();
        });

        it('iterate by iterator', function () {
            singlyLinkedList.addFirstItem('1', 'data1');
            singlyLinkedList.addNextItem('2', 'data2');
            singlyLinkedList.addNextItem('3', 'data3');

            let iterator = singlyLinkedList.getIterator();
            expect(iterator.next()).equal('data1');
            expect(iterator.next()).equal('data2');
            expect(iterator.next()).equal('data3');

            iterator.reset();
            expect(iterator.next()).equal('data1');
        });
    });
});
