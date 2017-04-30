import { Stack } from '../../src/lists/stack';

describe('Stack', function () {
    describe('Push', function () {
        let stack;

        beforeEach(function () {
            stack = new Stack.Structure();
        });

        it('push', function () {
            stack.push('first');
            stack.push('second');
            stack.push('third');

            let iterator = stack.getIterator();
            expect(iterator.next()).toBe('third');
            expect(iterator.next()).toBe('second');
            expect(iterator.next()).toBe('first');
        });
    });

    describe('Pop', function () {
        let stack;

        beforeEach(function () {
            stack = new Stack.Structure();
            stack.push('first');
            stack.push('second');
            stack.push('third');
        });

        it('pop', function () {
            expect(stack.pop()).toBe('third');
            expect(stack.pop()).toBe('second');
            expect(stack.pop()).toBe('first');
        });
    });

    describe('Other functions', function () {
        let stack;

        beforeEach(function () {
            stack = new Stack.Structure();
        });

        it('clear stack', function () {
            stack.push('last');
            expect(stack.list.firstItem.data).toBe('last');

            stack.clear();
            expect(stack.list.firstItem).toEqual(undefined);
        });

        it('is stack empty', function () {
            expect(stack.isEmpty()).toBeTruthy();

            stack.push('last');
            expect(stack.isEmpty()).toBeFalsy();
        });
    });
});
