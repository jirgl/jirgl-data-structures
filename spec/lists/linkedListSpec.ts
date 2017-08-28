import 'mocha';
import { expect } from 'chai';
import { LinkedList } from '../../src/lists/linkedList';

describe('Linked list', function () {
    describe('Add methods', function () {
        let linkedList: any;

        beforeEach(function () {
            linkedList = new LinkedList.Structure();
        });

        it('add first item', function () {
            linkedList.addFirstItem('first', 'dataOfFirst');
            expect(linkedList.currentItem.key).equal('first');
            expect(linkedList.currentItem.data).equal('dataOfFirst');
            expect(linkedList.currentItem.next).equal(undefined);
            expect(linkedList.currentItem).equal(linkedList.firstItem);
            expect(linkedList.currentItem).equal(linkedList.lastItem);

            linkedList.addFirstItem('new first', 'dataOfNewFirst');
            expect(linkedList.currentItem.key).equal('new first');
            expect(linkedList.currentItem.data).equal('dataOfNewFirst');
            expect(linkedList.currentItem.next.key).equal('first');
            expect(linkedList.currentItem.next.data).equal('dataOfFirst');
            expect(linkedList.currentItem.next.next).equal(undefined);
            expect(linkedList.currentItem).equal(linkedList.firstItem);
            expect(linkedList.currentItem.next).equal(linkedList.lastItem);
        });

        it('add last item', function () {
            linkedList.addLastItem('last', 'dataOfLast');
            expect(linkedList.currentItem.key).equal('last');
            expect(linkedList.currentItem.data).equal('dataOfLast');
            expect(linkedList.currentItem.next).equal(undefined);
            expect(linkedList.currentItem).equal(linkedList.firstItem);
            expect(linkedList.currentItem).equal(linkedList.lastItem);

            linkedList.addLastItem('new last', 'dataOfNewLast');
            expect(linkedList.currentItem.key).equal('new last');
            expect(linkedList.currentItem.data).equal('dataOfNewLast');
            expect(linkedList.currentItem.next).equal(undefined);
            expect(linkedList.currentItem).equal(linkedList.lastItem);
        });

        it('add next item', function () {
            linkedList.addNextItem('next', 'dataOfNext');
            expect(linkedList.currentItem.key).equal('next');
            expect(linkedList.currentItem.data).equal('dataOfNext');
            expect(linkedList.currentItem.next).equal(undefined);
            expect(linkedList.currentItem).equal(linkedList.firstItem);
            expect(linkedList.currentItem).equal(linkedList.lastItem);

            linkedList.addNextItem('new next', 'dataOfNewNext');
            expect(linkedList.currentItem.key).equal('new next');
            expect(linkedList.currentItem.data).equal('dataOfNewNext');
            expect(linkedList.currentItem.next).equal(undefined);
            expect(linkedList.currentItem).equal(linkedList.lastItem);

            linkedList.addFirstItem('first', 'dataOfFirst');
            linkedList.addNextItem('next after first', 'dataOfNextAfterFirst');
            expect(linkedList.currentItem.key).equal('next after first');
            expect(linkedList.currentItem.data).equal('dataOfNextAfterFirst');
            expect(linkedList.currentItem.next.key).equal('next');
            expect(linkedList.currentItem.next.data).equal('dataOfNext');
        });

        it('add previous item', function () {
            linkedList.addPreviousItem('previous', 'dataOfPrevious');
            expect(linkedList.currentItem.key).equal('previous');
            expect(linkedList.currentItem.data).equal('dataOfPrevious');
            expect(linkedList.currentItem.next).equal(undefined);
            expect(linkedList.currentItem).equal(linkedList.firstItem);
            expect(linkedList.currentItem).equal(linkedList.lastItem);

            linkedList.addPreviousItem('new previous', 'dataOfNewPrevious');
            expect(linkedList.currentItem.key).equal('new previous');
            expect(linkedList.currentItem.data).equal('dataOfNewPrevious');
            expect(linkedList.currentItem.next.key).equal('previous');
            expect(linkedList.currentItem.next.next).equal(undefined);
            expect(linkedList.currentItem).equal(linkedList.firstItem);
            expect(linkedList.currentItem.next).equal(linkedList.lastItem);

            linkedList.addLastItem('last', 'dataOfLast');
            linkedList.addPreviousItem('previous before last', 'dataOfPreviousBeforeLast');
            expect(linkedList.currentItem.key).equal('previous before last');
            expect(linkedList.currentItem.data).equal('dataOfPreviousBeforeLast');
            expect(linkedList.currentItem.next).equal(linkedList.lastItem);
        });
    });

    describe('Find method', function () {
        let linkedList: any;

        beforeEach(function () {
            linkedList = new LinkedList.Structure();
        });

        it('find unique item', function () {
            linkedList.addNextItem('1', 'data1');
            linkedList.addNextItem('2', 'data2');
            linkedList.addNextItem('3', 'data3');

            expect(linkedList.find('1')).equal('data1');
            expect(linkedList.find('2')).equal('data2');
            expect(linkedList.find('3')).equal('data3');
        });

        it('find first item', function () {
            linkedList.addNextItem('1', 'data1');
            linkedList.addNextItem('1', 'data2');

            expect(linkedList.find('1')).equal('data1');
        });

        it('find no item', function () {
            linkedList.addNextItem('1', 'data1');
            linkedList.addNextItem('2', 'data2');

            expect(linkedList.find('3')).equal(undefined);
        });

        it('find no item', function () {
            expect(linkedList.find('1')).equal(undefined);
        });
    });

    describe('Get methods', function () {
        let linkedList: any;

        beforeEach(function () {
            linkedList = new LinkedList.Structure();
            linkedList.addLastItem('one', 'dataOfOne');
            linkedList.addLastItem('two', 'dataOfTwo');
            linkedList.addLastItem('three', 'dataOfThree');
        });

        it('get current item', function () {
            expect(linkedList.getCurrentItem()).equal('dataOfThree');
        });

        it('get first item', function () {
            expect(linkedList.getFirstItem()).equal('dataOfOne');
        });

        it('get last item', function () {
            expect(linkedList.getLastItem()).equal('dataOfThree');
        });

        it('get next item', function () {
            expect(linkedList.getNextItem()).equal(undefined);

            linkedList.addFirstItem('zero', 'dataOfZero');
            expect(linkedList.getNextItem()).equal('dataOfOne');
        });

        it('get previous item', function () {
            expect(linkedList.getPreviousItem()).equal('dataOfTwo');

            linkedList.addFirstItem('zero', 'dataOfZero');
            expect(linkedList.getPreviousItem()).equal(undefined);
        });
    });

    describe('Remove methods', function () {
        let linkedList: any;

        beforeEach(function () {
            linkedList = new LinkedList.Structure();
            linkedList.addLastItem('one', 'dataOfOne');
            linkedList.addLastItem('two', 'dataOfTwo');
            linkedList.addLastItem('three', 'dataOfThree');
        });

        it('remove first item', function () {
            let removedItem = linkedList.removeFirstItem();
            expect(removedItem).equal('dataOfOne');
            expect(linkedList.firstItem.key).equal('two');
            expect(linkedList.firstItem.data).equal('dataOfTwo');
            expect(linkedList.firstItem.next).equal(linkedList.lastItem);

            removedItem = linkedList.removeFirstItem();
            expect(removedItem).equal('dataOfTwo');
            expect(linkedList.firstItem.key).equal('three');
            expect(linkedList.firstItem.data).equal('dataOfThree');
            expect(linkedList.firstItem.next).equal(undefined);

            removedItem = linkedList.removeFirstItem();
            expect(removedItem).equal('dataOfThree');
            expect(linkedList.firstItem).equal(undefined);
            expect(linkedList.lastItem).equal(undefined);
            expect(linkedList.currentItem).equal(undefined);
        });

        it('remove last item', function () {
            let removedItem = linkedList.removeLastItem();
            expect(removedItem).equal('dataOfThree');
            expect(linkedList.lastItem.key).equal('two');
            expect(linkedList.lastItem.data).equal('dataOfTwo');
            expect(linkedList.lastItem.next).equal(undefined);

            removedItem = linkedList.removeLastItem();
            expect(removedItem).equal('dataOfTwo');
            expect(linkedList.lastItem.key).equal('one');
            expect(linkedList.lastItem.data).equal('dataOfOne');
            expect(linkedList.lastItem.next).equal(undefined);

            removedItem = linkedList.removeLastItem();
            expect(removedItem).equal('dataOfOne');
            expect(linkedList.firstItem).equal(undefined);
            expect(linkedList.lastItem).equal(undefined);
            expect(linkedList.currentItem).equal(undefined);
        });

        it('remove current item', function () {
            let removedItem = linkedList.removeCurrentItem();
            expect(removedItem).equal('dataOfThree');
            expect(linkedList.currentItem.key).equal('one');
            expect(linkedList.currentItem.data).equal('dataOfOne');
            expect(linkedList.currentItem.next).equal(linkedList.lastItem);

            removedItem = linkedList.removeCurrentItem();
            expect(removedItem).equal('dataOfOne');
            expect(linkedList.currentItem.key).equal('two');
            expect(linkedList.currentItem.data).equal('dataOfTwo');
            expect(linkedList.currentItem.next).equal(undefined);

            removedItem = linkedList.removeCurrentItem();
            expect(removedItem).equal('dataOfTwo');
            expect(linkedList.firstItem).equal(undefined);
            expect(linkedList.lastItem).equal(undefined);
            expect(linkedList.currentItem).equal(undefined);
        });

        it('remove next item', function () {
            linkedList.addFirstItem('move current item to first');

            expect(linkedList.removeNextItem()).equal('dataOfOne');
            expect(linkedList.removeNextItem()).equal('dataOfTwo');
            expect(linkedList.removeNextItem()).equal('dataOfThree');
            expect(linkedList.removeNextItem()).equal(undefined);
        });

        it('remove previous item', function () {
            linkedList.addLastItem('move current item to last', 'data');

            expect(linkedList.removePreviousItem()).equal('dataOfThree');
            expect(linkedList.removePreviousItem()).equal('dataOfTwo');
            expect(linkedList.removePreviousItem()).equal('dataOfOne');
            expect(linkedList.removePreviousItem()).equal(undefined);
        });

        it('remove by key', function () {
            linkedList.addFirstItem('one', 'dataOfOne2');

            expect(linkedList.removeKey('one')).equal('dataOfOne2');
            expect(linkedList.removeKey('one')).equal('dataOfOne');
            expect(linkedList.removeKey('one')).equal(undefined);
        });
    });

    describe('Other functions', function () {
        let linkedList: any;

        beforeEach(function () {
            linkedList = new LinkedList.Structure();
        });

        it('clear linked list', function () {
            linkedList.addLastItem('last', 'dataOfLast');
            expect(linkedList.firstItem.key).equal('last');
            expect(linkedList.firstItem.data).equal('dataOfLast');

            linkedList.clear();
            expect(linkedList.firstItem).equal(undefined);
        });

        it('is linked list empty', function () {
            expect(linkedList.isEmpty()).equal(true);

            linkedList.addLastItem('last', 'dataOfLast');
            expect(linkedList.isEmpty()).equal(false);
        });
    });

    describe('Iterator', function () {
        let linkedList: any;

        beforeEach(function () {
            linkedList = new LinkedList.Structure();
        });

        it('iterate by iterator', function () {
            linkedList.addFirstItem('1', 'data1');
            linkedList.addNextItem('2', 'data2');
            linkedList.addNextItem('3', 'data3');

            let iterator = linkedList.getIterator();
            expect(iterator.next()).equal('data1');
            expect(iterator.next()).equal('data2');
            expect(iterator.next()).equal('data3');

            iterator.reset();
            expect(iterator.next()).equal('data1');
        });
    });
});
