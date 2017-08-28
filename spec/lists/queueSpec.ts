import 'mocha';
import { expect } from 'chai';
import { Queue } from '../../src/lists/queue';

describe('Queue', function () {
    describe('Enqueue', function () {
        let que: any;

        beforeEach(function () {
            que = new Queue.Structure();
        });

        it('enqueue', function () {
            que.enqueue('first');
            que.enqueue('second');
            que.enqueue('third');

            let iterator = que.getIterator();
            expect(iterator.next()).equal('first');
            expect(iterator.next()).equal('second');
            expect(iterator.next()).equal('third');
        });
    });

    describe('Dequeue', function () {
        let que: any;

        beforeEach(function () {
            que = new Queue.Structure();
            que.enqueue('first');
            que.enqueue('second');
            que.enqueue('third');
        });

        it('dequeue', function () {
            expect(que.dequeue()).equal('first');
            expect(que.dequeue()).equal('second');
            expect(que.dequeue()).equal('third');
        });
    });

    describe('Other functions', function () {
        let que: any;

        beforeEach(function () {
            que = new Queue.Structure();
        });

        it('clear queue', function () {
            que.enqueue('last');
            expect(que.list.firstItem.data).equal('last');

            que.clear();
            expect(que.list.firstItem).equal(undefined);
        });

        it('is queue empty', function () {
            expect(que.isEmpty()).equal(true);

            que.enqueue('last');
            expect(que.isEmpty()).equal(false);
        });
    });
});
