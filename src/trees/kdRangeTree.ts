import { Queue } from '../lists/queue';

export module KdRangeTree {
    export interface IRangeObject<T> {
        data: T | undefined;
        ranges: number[];
    }

    export class Tree<T> {//TODO remove "export"
        rawData: RangeNode<T>[];
    }

    export class RangeNode<T> {//TODO remove "export"
        rangeData: IRangeObject<T> | undefined;
        median: number | undefined;
        subtree: Tree<T> | undefined;
    }

    export class Structure<T> {
        private dimensions: number;
        tree: Tree<T> | undefined;//TODO add "private"

        clear() {
            this.tree = undefined;
        }

        build(array: IRangeObject<T>[],
            comparisons: ((t1: IRangeObject<T>, t2: IRangeObject<T>) => number)[]) {

            this.clear();
            this.dimensions = comparisons.length;
            this.tree = this.buildDimension(array, 0, comparisons);
        }

        private buildDimension(array: IRangeObject<T>[], currentDimension: number,
            comparisons: ((t1: IRangeObject<T>, t2: IRangeObject<T>) => number)[]): Tree<T> | undefined {

            if (comparisons.length === 0)
                return undefined;

            const sortedArray = array.sort(comparisons[0]);
            const normalizedArray = this.normalizeArrayLength(sortedArray);
            const data: RangeNode<T>[] = [];
            comparisons = comparisons.splice(1, comparisons.length - 1);
            currentDimension++;

            const que = new Queue.Structure<IRangeObject<T>[]>();
            que.enqueue(normalizedArray);

            while (!que.isEmpty()) {
                const subtree = que.dequeue();
                if (!subtree) return undefined;
                if (subtree.length > 1) {
                    const splittedArray = this.splitArray(subtree.slice());
                    que.enqueue(splittedArray[0]);
                    que.enqueue(splittedArray[1]);

                    const item1 = splittedArray[0][splittedArray[0].length - 1];
                    const item2 = splittedArray[1][0];

                    data.push(this.createRangeNode(undefined,
                        (item1.ranges[currentDimension - 1] + item2.ranges[currentDimension - 1]) / 2,
                        this.buildDimension(subtree, currentDimension, comparisons)));
                }
                else {
                    data.push(this.createRangeNode(subtree[0], undefined, undefined));
                }
            }

            const tree = new Tree<T>();
            tree.rawData = data;

            return tree;
        }

        private createRangeNode(
            data: IRangeObject<T> | undefined,
            median: number | undefined,
            subtree: Tree<T> | undefined): RangeNode<T> {
            const node = new RangeNode<T>();
            node.rangeData = data;
            node.median = median;
            node.subtree = subtree;

            return node;
        }

        private normalizeArrayLength(array: IRangeObject<T>[]): IRangeObject<T>[] {
            const returnArray = array.slice();
            const item = this.cloneRangeObject(returnArray[returnArray.length - 1]);
            item.data = undefined;

            for (let i = array.length; i < Math.pow(2, this.getClosestPower(array.length)); i++)
                returnArray.push(item);

            return returnArray;
        }

        private cloneRangeObject(obj: IRangeObject<T>): IRangeObject<T> {
            if (null == obj || 'object' != typeof obj) {
                return obj;
            }

            const copy = obj.constructor();
            for (const attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = obj as any as { [key: string]: string };
                }
            }

            return copy;
        }

        private getClosestPower(length: number): number {
            let power = 1;
            while (length > Math.pow(2, power))
                power++;

            return power;
        }

        private splitArray(array: IRangeObject<T>[]): IRangeObject<T>[][] {
            const sliceIndex = array.length % 2 === 0
                ? array.length / 2
                : array.length / 2 + 1;

            return [
                array.slice(0, sliceIndex),
                array.splice(sliceIndex, array.length - sliceIndex)
            ];
        }

        findInRange(rangesFrom: number[], rangesTo: number[]): T[] {
            if (rangesFrom.length !== this.dimensions || rangesTo.length !== this.dimensions)
                return [];

            return this.findInDimension(rangesFrom, rangesTo, 0, this.tree);
        }

        private findInDimension(rangesFrom: number[], rangesTo: number[],
            currentRange: number, tree: Tree<T> | undefined): T[] {
            if (!tree) return [];

            let index = 1;
            while (true) {
                const rangeFrom = rangesFrom[currentRange];
                const rangeTo = rangesTo[currentRange];

                const rawData = tree.rawData[index - 1];
                if (!rawData.rangeData && rawData.median) {
                    if (rangeTo < rawData.median) {
                        index *= 2;
                    } else if (rangeFrom > rawData.median) {
                        index *= 2;
                        index++;
                    } else if (rangeFrom <= rawData.median && rangeTo >= rawData.median) {
                        if (rawData.subtree !== undefined) {
                            return this.findInDimension(rangesFrom, rangesTo, ++currentRange, rawData.subtree);
                        } else {
                            return this.findInTree(rangesFrom, rangesTo, index, tree);
                        }
                    }
                } else if (rawData.rangeData) {
                    return (rawData.rangeData.data && this.isInRange(rawData.rangeData, rangesFrom, rangesTo))
                        ? [rawData.rangeData.data]
                        : [];
                }
            }
        }

        private findInTree(rangesFrom: number[], rangesTo: number[],
            currentIndex: number, tree: Tree<T>): T[] {

            let depth = 0;
            while (true) {
                if (tree.rawData[currentIndex - 1].rangeData === undefined) {
                    depth++;
                    currentIndex *= 2;
                } else {
                    const count = Math.pow(2, depth);
                    const result: T[] = [];
                    for (let i = currentIndex - 1; i < currentIndex - 1 + count; i++) {
                        const rawData = tree.rawData[i];
                        if (rawData.rangeData && rawData.rangeData.data &&
                            this.isInRange(rawData.rangeData, rangesFrom, rangesTo)) {
                            result.push(rawData.rangeData.data);
                        }
                    }

                    return result;
                }
            }
        }

        private isInRange(data: IRangeObject<T>, rangesFrom: number[], rangesTo: number[]): boolean {
            if (!data.ranges || data.ranges.length !== rangesFrom.length ||
                data.ranges.length !== rangesTo.length) {
                return false;
            }

            for (let i = 0; i < data.ranges.length; i++) {
                if (data.ranges[i] < rangesFrom[i] || data.ranges[i] > rangesTo[i])
                    return false;
            }

            return true;
        }
    }
}
