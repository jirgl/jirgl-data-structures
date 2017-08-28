import 'mocha';
import { expect } from 'chai';
import { Stack } from '../../src/lists/stack';

describe('Stack', function () {
    describe('Push', function () {
        let stack: any;

        beforeEach(function () {
            stack = new Stack.Structure();
        });

        it('push', function () {
            stack.push('first');
            stack.push('second');
            stack.push('third');

            let iterator = stack.getIterator();
            expect(iterator.next()).equal('third');
            expect(iterator.next()).equal('second');
            expect(iterator.next()).equal('first');
        });
    });

    describe('Pop', function () {
        let stack: any;

        beforeEach(function () {
            stack = new Stack.Structure();
            stack.push('first');
            stack.push('second');
            stack.push('third');
        });

        it('pop', function () {
            expect(stack.pop()).equal('third');
            expect(stack.pop()).equal('second');
            expect(stack.pop()).equal('first');
        });
    });

    describe('Other functions', function () {
        let stack: any;

        beforeEach(function () {
            stack = new Stack.Structure();
        });

        it('clear stack', function () {
            stack.push('last');
            expect(stack.list.firstItem.data).equal('last');

            stack.clear();
            expect(stack.list.firstItem).equal(undefined);
        });

        it('is stack empty', function () {
            expect(stack.isEmpty()).equal(true);

            stack.push('last');
            expect(stack.isEmpty()).equal(false);
        });
    });
});
