import 'mocha';
import { expect } from 'chai';
import { BinaryTree } from '../../src/trees/binaryTree';

describe('Binary tree', function () {
    describe('Add methods', function () {
        let binaryTree: any;

        beforeEach(function () {
            binaryTree = new BinaryTree.Structure();
        });

        it('add root node', function () {
            binaryTree.addRoot('root');

            let iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.BreadthFirst);
            expect(iterator.next()).equal('root');
            expect(binaryTree.currentNode).equal(binaryTree.rootNode);

            iterator.reset();
            binaryTree.addRoot('root2');
            expect(iterator.next()).equal('root');
        });

        it('add left child node', function () {
            binaryTree.addRoot('root');
            binaryTree.addLeftChild('leftChild');
            expect(binaryTree.currentNode).equal(binaryTree.rootNode);
            expect(binaryTree.currentNode.leftChild.parent).equal(binaryTree.rootNode);

            let iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.BreadthFirst);
            expect(iterator.next()).equal('root');
            expect(iterator.next()).equal('leftChild');

            iterator.reset();
            binaryTree.addLeftChild('leftChild2');
            expect(iterator.next()).equal('root');
            expect(iterator.next()).equal('leftChild');
        });

        it('add right child node', function () {
            binaryTree.addRoot('root');
            binaryTree.addRightChild('rightChild');
            expect(binaryTree.currentNode).equal(binaryTree.rootNode);
            expect(binaryTree.currentNode.rightChild.parent).equal(binaryTree.rootNode);

            let iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.BreadthFirst);
            expect(iterator.next()).equal('root');
            expect(iterator.next()).equal('rightChild');

            iterator.reset();
            binaryTree.addRightChild('rightChild2');
            expect(iterator.next()).equal('root');
            expect(iterator.next()).equal('rightChild');
        });
    });

    describe('Remove methods', function () {
        let binaryTree: any;

        beforeEach(function () {
            binaryTree = new BinaryTree.Structure();
            binaryTree.addRoot('root');
        });

        it('remove root node', function () {
            binaryTree.addLeftChild('leftChild');
            let removedItem = binaryTree.removeRoot();
            expect(removedItem).equal(undefined);

            binaryTree.removeLeftChild();
            removedItem = binaryTree.removeRoot();
            expect(removedItem).equal('root');
        });

        it('remove left child node', function () {
            binaryTree.addLeftChild('leftChild');
            binaryTree.getLeftChild();
            binaryTree.addLeftChild('leftChild2');
            binaryTree.getParent();

            let removedItem = binaryTree.removeRightChild();
            expect(removedItem).equal(undefined);

            binaryTree.getLeftChild();
            binaryTree.removeLeftChild();
            binaryTree.getParent();
            removedItem = binaryTree.removeLeftChild();
            expect(removedItem).equal('leftChild');
        });

        it('remove right child node', function () {
            binaryTree.addRightChild('rightChild');
            binaryTree.getRightChild();
            binaryTree.addRightChild('rightChild2');
            binaryTree.getParent();

            let removedItem = binaryTree.removeRightChild();
            expect(removedItem).equal(undefined);

            binaryTree.getRightChild();
            binaryTree.removeRightChild();
            binaryTree.getParent();
            removedItem = binaryTree.removeRightChild();
            expect(removedItem).equal('rightChild');
        });
    });

    describe('Other functions', function () {
        let binaryTree: any;

        beforeEach(function () {
            binaryTree = new BinaryTree.Structure();
        });

        it('clear binary tree', function () {
            binaryTree.addRoot('root');
            expect(binaryTree.rootNode.data).equal('root');

            binaryTree.clear();
            expect(binaryTree.rootNode).equal(undefined);
        });

        it('is binary tree empty', function () {
            expect(binaryTree.isEmpty()).equal(true);

            binaryTree.addRoot('root');
            expect(binaryTree.isEmpty()).equal(false);
        });
    });

    describe('Iterator', function () {
        let binaryTree: any;

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
            expect(iterator.next()).equal('root');
            expect(iterator.next()).equal('leftChild');
            expect(iterator.next()).equal('rightChild');
            expect(iterator.next()).equal('1');
            expect(iterator.next()).equal('2');
            expect(iterator.next()).equal('3');
            expect(iterator.next()).equal('4');

            iterator = binaryTree.getIterator(BinaryTree.TreeTraversal.DepthFirst);
            expect(iterator.next()).equal('root');
            expect(iterator.next()).equal('leftChild');
            expect(iterator.next()).equal('1');
            expect(iterator.next()).equal('2');
            expect(iterator.next()).equal('rightChild');
            expect(iterator.next()).equal('3');
            expect(iterator.next()).equal('4');

            iterator.reset();
            expect(iterator.next()).equal('root');
        });
    });
});
