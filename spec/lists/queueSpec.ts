import { Queue } from '../../src/lists/queue';

describe('Queue', function () {
    describe('Enqueue', function () {
        let que;

        beforeEach(function () {
            que = new Queue.Structure();
        });

        it('enqueue', function () {
            que.enqueue('first');
            que.enqueue('second');
            que.enqueue('third');

            let iterator = que.getIterator();
            expect(iterator.next()).toBe('first');
            expect(iterator.next()).toBe('second');
            expect(iterator.next()).toBe('third');
        });
    });

    describe('Dequeue', function () {
        let que;

        beforeEach(function () {
            que = new Queue.Structure();
            que.enqueue('first');
            que.enqueue('second');
            que.enqueue('third');
        });

        it('dequeue', function () {
            expect(que.dequeue()).toBe('first');
            expect(que.dequeue()).toBe('second');
            expect(que.dequeue()).toBe('third');
        });
    });

    describe('Other functions', function () {
        let que;

        beforeEach(function () {
            que = new Queue.Structure();
        });

        it('clear queue', function () {
            que.enqueue('last');
            expect(que.list.firstItem.data).toBe('last');

            que.clear();
            expect(que.list.firstItem).toEqual(undefined);
        });

        it('is queue empty', function () {
            expect(que.isEmpty()).toBeTruthy();

            que.enqueue('last');
            expect(que.isEmpty()).toBeFalsy();
        });
    });
});
