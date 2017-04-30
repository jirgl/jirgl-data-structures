import { BinaryTree } from '../../src/trees/binaryTree';

describe('Binary tree', function () {
    describe('Add methods', function () {
        let binaryTree;

        beforeEach(function () {
            binaryTree = new BinaryTree.Structure();
        });

        it('add root node', function () {
            binaryTree.addRoot('root');

            let iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.BreadthFirst);
            expect(iterator.next()).toBe('root');
            expect(binaryTree.currentNode).toBe(binaryTree.rootNode);

            iterator.reset();
            binaryTree.addRoot('root2');
            expect(iterator.next()).toBe('root');
        });

        it('add left child node', function () {
            binaryTree.addRoot('root');
            binaryTree.addLeftChild('leftChild');
            expect(binaryTree.currentNode).toBe(binaryTree.rootNode);
            expect(binaryTree.currentNode.leftChild.parent).toBe(binaryTree.rootNode);

            let iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.BreadthFirst);
            expect(iterator.next()).toBe('root');
            expect(iterator.next()).toBe('leftChild');

            iterator.reset();
            binaryTree.addLeftChild('leftChild2');
            expect(iterator.next()).toBe('root');
            expect(iterator.next()).toBe('leftChild');
        });

        it('add right child node', function () {
            binaryTree.addRoot('root');
            binaryTree.addRightChild('rightChild');
            expect(binaryTree.currentNode).toBe(binaryTree.rootNode);
            expect(binaryTree.currentNode.rightChild.parent).toBe(binaryTree.rootNode);

            let iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.BreadthFirst);
            expect(iterator.next()).toBe('root');
            expect(iterator.next()).toBe('rightChild');

            iterator.reset();
            binaryTree.addRightChild('rightChild2');
            expect(iterator.next()).toBe('root');
            expect(iterator.next()).toBe('rightChild');
        });
    });

    describe('Remove methods', function () {
        let binaryTree;

        beforeEach(function () {
            binaryTree = new BinaryTree.Structure();
            binaryTree.addRoot('root');
        });

        it('remove root node', function () {
            binaryTree.addLeftChild('leftChild');
            let removedItem = binaryTree.removeRoot();
            expect(removedItem).toEqual(undefined);

            binaryTree.removeLeftChild();
            removedItem = binaryTree.removeRoot();
            expect(removedItem).toEqual('root');
        });

        it('remove left child node', function () {
            binaryTree.addLeftChild('leftChild');
            binaryTree.getLeftChild();
            binaryTree.addLeftChild('leftChild2');
            binaryTree.getParent();

            let removedItem = binaryTree.removeRightChild();
            expect(removedItem).toEqual(undefined);

            binaryTree.getLeftChild();
            binaryTree.removeLeftChild();
            binaryTree.getParent();
            removedItem = binaryTree.removeLeftChild();
            expect(removedItem).toEqual('leftChild');
        });

        it('remove right child node', function () {
            binaryTree.addRightChild('rightChild');
            binaryTree.getRightChild();
            binaryTree.addRightChild('rightChild2');
            binaryTree.getParent();

            let removedItem = binaryTree.removeRightChild();
            expect(removedItem).toEqual(undefined);

            binaryTree.getRightChild();
            binaryTree.removeRightChild();
            binaryTree.getParent();
            removedItem = binaryTree.removeRightChild();
            expect(removedItem).toEqual('rightChild');
        });
    });

    describe('Other functions', function () {
        let binaryTree;

        beforeEach(function () {
            binaryTree = new BinaryTree.Structure();
        });

        it('clear binary tree', function () {
            binaryTree.addRoot('root');
            expect(binaryTree.rootNode.data).toBe('root');

            binaryTree.clear();
            expect(binaryTree.rootNode).toEqual(undefined);
        });

        it('is binary tree empty', function () {
            expect(binaryTree.isEmpty()).toBeTruthy();

            binaryTree.addRoot('root');
            expect(binaryTree.isEmpty()).toBeFalsy();
        });
    });

    describe('Iterator', function () {
        let binaryTree;

        beforeEach(function () {
            binaryTree = new BinaryTree.Structure();
        });

        it('iterate by iterator', function () {
            binaryTree.addRoot('root');
            binaryTree.addLeftChild('leftChild');
            binaryTree.addRightChild('rightChild');
            binaryTree.getLeftChild();
            binaryTree.addLeftChild('1');
            binaryTree.addRightChild('2');
            binaryTree.getParent();
            binaryTree.getRightChild();
            binaryTree.addLeftChild('3');
            binaryTree.addRightChild('4');

            let iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.BreadthFirst);
            expect(iterator.next()).toBe('root');
            expect(iterator.next()).toBe('leftChild');
            expect(iterator.next()).toBe('rightChild');
            expect(iterator.next()).toBe('1');
            expect(iterator.next()).toBe('2');
            expect(iterator.next()).toBe('3');
            expect(iterator.next()).toBe('4');

            iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.DepthFirst);
            expect(iterator.next()).toBe('root');
            expect(iterator.next()).toBe('leftChild');
            expect(iterator.next()).toBe('1');
            expect(iterator.next()).toBe('2');
            expect(iterator.next()).toBe('rightChild');
            expect(iterator.next()).toBe('3');
            expect(iterator.next()).toBe('4');

            iterator.reset();
            expect(iterator.next()).toBe('root');
        });
    });
});
