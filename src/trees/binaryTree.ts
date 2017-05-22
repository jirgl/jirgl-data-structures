import { IIterable, IIterator } from '../iterator';
import { Stack } from '../lists/stack';
import { Queue } from '../lists/queue';

export module BinaryTree {
    export class Node<T> {
        data: T;
        parent: Node<T>;
        leftChild: Node<T>;
        rightChild: Node<T>;

        constructor(data: T) {
            this.data = data;
        }
    }

    export enum TreeTraversal {
        DepthFirst,
        BreadthFirst
    }

    export class Structure<T> {
        protected rootNode: Node<T>;
        protected currentNode: Node<T>;

        clear(): void {
            this.rootNode = this.currentNode = undefined;
        }

        isEmpty(): boolean {
            return !this.rootNode;
        }

        addRoot(t: T): void {
            if (!this.rootNode) {
                this.rootNode = this.currentNode = new Node<T>(t);
            }
        }

        addLeftChild(t: T): void {
            if (this.currentNode && !this.currentNode.leftChild) {
                let node = new Node<T>(t);
                this.currentNode.leftChild = node;
                node.parent = this.currentNode;
            }
        }

        addRightChild(t: T): void {
            if (this.currentNode && !this.currentNode.rightChild) {
                let node = new Node<T>(t);
                this.currentNode.rightChild = node;
                node.parent = this.currentNode;
            }
        }

        getCurrent(): T {
            if (!this.currentNode) return undefined;
            return this.currentNode.data;
        }

        getRoot(): T {
            if (!this.rootNode) return undefined;

            this.currentNode = this.rootNode;
            return this.rootNode.data;
        }

        getParent(): T {
            if (this.currentNode === this.rootNode) return undefined;

            this.currentNode = this.currentNode.parent;
            return this.currentNode.data;
        }

        getLeftChild(): T {
            if (!this.currentNode || !this.currentNode.leftChild) return undefined;

            this.currentNode = this.currentNode.leftChild;
            return this.currentNode.data;
        }

        getRightChild(): T {
            if (!this.currentNode || !this.currentNode.rightChild) return undefined;

            this.currentNode = this.currentNode.rightChild;
            return this.currentNode.data;
        }

        removeRoot(): T {
            if (!this.rootNode) {
                return undefined;
            } else if (!this.rootNode.leftChild && !this.rootNode.rightChild) {
                let data = this.currentNode.data;
                this.rootNode = this.currentNode = undefined;
                return data;
            }

            return undefined;
        }

        removeLeftChild(): T {
            if (!this.currentNode.leftChild) {
                return undefined;
            } else if (!this.currentNode.leftChild.leftChild && !this.currentNode.leftChild.rightChild) {
                let data = this.currentNode.leftChild.data;
                this.currentNode.leftChild.parent = this.currentNode.leftChild = undefined;
                return data;
            }

            return undefined;
        }

        removeRightChild(): T {
            if (!this.currentNode.rightChild) {
                return undefined;
            } else if (!this.currentNode.rightChild.leftChild && !this.currentNode.rightChild.rightChild) {
                let data = this.currentNode.rightChild.data;
                this.currentNode.rightChild.parent = this.currentNode.rightChild = undefined;
                return data;
            }

            return undefined;
        }

        getIterator(traversal: TreeTraversal): IIterator<T> {
            return new Iterator<T>(this.rootNode, traversal);
        }
    }

    export class Iterator<T> implements IIterator<T> {
        private rootNode: Node<T>;
        private traversal: TreeTraversal;
        private que: Queue.Structure<Node<T>>;
        private stack: Stack.Structure<Node<T>>;

        constructor(rootNode: Node<T>, traversal: TreeTraversal) {
            this.rootNode = rootNode;
            this.traversal = traversal;

            if (traversal === TreeTraversal.BreadthFirst) {
                this.que = new Queue.Structure<Node<T>>();
                this.que.enqueue(rootNode);
            } else if (traversal === TreeTraversal.DepthFirst) {
                this.stack = new Stack.Structure<Node<T>>();
                this.stack.push(rootNode);
            }
        }

        hasNext(): boolean {
            if (this.traversal === TreeTraversal.BreadthFirst) {
                return !this.que.isEmpty();
            } else if (this.traversal === TreeTraversal.DepthFirst) {
                return !this.stack.isEmpty();
            }

            return false;
        }

        next(): T {
            let node: Node<T>;
            if (this.traversal === TreeTraversal.BreadthFirst) {
                node = this.que.dequeue();
                if (node.leftChild) this.que.enqueue(node.leftChild);
                if (node.rightChild) this.que.enqueue(node.rightChild);

                return node.data;
            } else if (this.traversal === TreeTraversal.DepthFirst) {
                node = this.stack.pop();
                if (node.rightChild) this.stack.push(node.rightChild);
                if (node.leftChild) this.stack.push(node.leftChild);

                return node.data;
            }

            return undefined;
        }

        reset(): void {
            if (this.traversal === TreeTraversal.BreadthFirst) {
                this.que.clear();
                this.que.enqueue(this.rootNode);
            } else if (this.traversal === TreeTraversal.DepthFirst) {
                this.stack.clear();
                this.stack.push(this.rootNode);
            }
        }
    }
}
