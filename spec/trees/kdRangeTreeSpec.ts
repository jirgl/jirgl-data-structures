import { Structure as KdRangeTree } from '../../src/trees/kdRangeTree';

describe('Range tree', function () {
    let rangeTree;

    let z = { data: 'Z', ranges: [5, 5] };
    let y = { data: 'Y', ranges: [33, 63] };
    let m = { data: 'M', ranges: [47, 35] };
    let w = { data: 'W', ranges: [22, 60] };
    let c = { data: 'C', ranges: [15, 45] };
    let r = { data: 'R', ranges: [28, 50] };
    let k = { data: 'K', ranges: [42, 65] };
    let f = { data: 'F', ranges: [38, 52] };

    beforeEach(function () {
        rangeTree = new KdRangeTree();
    });

    function checkSubtree(outputSubtree, expectedSubtree) {
        expect(outputSubtree.length).toBe(expectedSubtree.length);
        for (let i = 0; i < outputSubtree.length; i++) {
            expect(outputSubtree[i].median).toBe(expectedSubtree[i].median);
            expect(outputSubtree[i].subtree).toBe(expectedSubtree[i].rawData);
            expect(outputSubtree[i].rangeData).toEqual(expectedSubtree[i].rangeData);
        }
    }

    describe('Optimal tree', function () {
        let initData = [z, y, w, m, r, f, k, c];

        let subtree1 = [
            {
                median: 51,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 40,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 61.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 20,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 47.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 56,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 64,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: z,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: m,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: c,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: r,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: f,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: w,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: y,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: k,
                subtree: undefined
            }
        ];

        let subtree2 = [
            {
                median: 47.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 25,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 55,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: z,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: c,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: r,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: w,
                subtree: undefined
            }
        ];

        let subtree3 = [
            {
                median: 57.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 43.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 64,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: m,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: f,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: y,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: k,
                subtree: undefined
            }
        ];

        let subtree4 = [
            {
                median: 25,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: z,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: c,
                subtree: undefined
            }
        ];

        let subtree5 = [
            {
                median: 55,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: r,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: w,
                subtree: undefined
            }
        ];

        let subtree6 = [
            {
                median: 57.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: f,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: y,
                subtree: undefined
            }
        ];

        let subtree7 = [
            {
                median: 50,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: m,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: k,
                subtree: undefined
            }
        ];

        it('build', function () {
            rangeTree.build(initData, [
                function (a, b) { return a.ranges[0] - b.ranges[0]; },
                function (a, b) { return a.ranges[1] - b.ranges[1]; }
            ]);

            expect(rangeTree.tree.rawData[0].median).toBe(30.5);
            expect(rangeTree.tree.rawData[0].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[0].subtree.rawData, subtree1);
            expect(rangeTree.tree.rawData[1].median).toBe(18.5);
            expect(rangeTree.tree.rawData[1].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[1].subtree.rawData, subtree2);
            expect(rangeTree.tree.rawData[2].median).toBe(40);
            expect(rangeTree.tree.rawData[2].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[2].subtree.rawData, subtree3);
            expect(rangeTree.tree.rawData[3].median).toBe(10);
            expect(rangeTree.tree.rawData[3].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[3].subtree.rawData, subtree4);
            expect(rangeTree.tree.rawData[4].median).toBe(25);
            expect(rangeTree.tree.rawData[4].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[4].subtree.rawData, subtree5);
            expect(rangeTree.tree.rawData[5].median).toBe(35.5);
            expect(rangeTree.tree.rawData[5].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[5].subtree.rawData, subtree6);
            expect(rangeTree.tree.rawData[6].median).toBe(44.5);
            expect(rangeTree.tree.rawData[6].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[6].subtree.rawData, subtree7);
            expect(rangeTree.tree.rawData[7].median).toBe(undefined);
            expect(rangeTree.tree.rawData[7].rangeData).toBe(z);
            expect(rangeTree.tree.rawData[7].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[8].median).toBe(undefined);
            expect(rangeTree.tree.rawData[8].rangeData).toBe(c);
            expect(rangeTree.tree.rawData[8].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[9].median).toBe(undefined);
            expect(rangeTree.tree.rawData[9].rangeData).toBe(w);
            expect(rangeTree.tree.rawData[9].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[10].median).toBe(undefined);
            expect(rangeTree.tree.rawData[10].rangeData).toBe(r);
            expect(rangeTree.tree.rawData[10].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[11].median).toBe(undefined);
            expect(rangeTree.tree.rawData[11].rangeData).toBe(y);
            expect(rangeTree.tree.rawData[11].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[12].median).toBe(undefined);
            expect(rangeTree.tree.rawData[12].rangeData).toBe(f);
            expect(rangeTree.tree.rawData[12].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[13].median).toBe(undefined);
            expect(rangeTree.tree.rawData[13].rangeData).toBe(k);
            expect(rangeTree.tree.rawData[13].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[14].median).toBe(undefined);
            expect(rangeTree.tree.rawData[14].rangeData).toBe(m);
            expect(rangeTree.tree.rawData[14].subtree).toBe(undefined);
        });

        describe('Find', function () {
            beforeEach(function () {
                rangeTree.build(initData, [
                    function (a, b) { return a.ranges[0] - b.ranges[0]; },
                    function (a, b) { return a.ranges[1] - b.ranges[1]; }
                ]);
            });

            it('find data - I', function () {
                let result = rangeTree.findInRange([5, 30], [15, 70]);
                expect(result.length).toBe(1);
                expect(result[0]).toBe(c.data);
            });

            it('find data - II', function () {
                let result = rangeTree.findInRange([0, 0], [4, 20]);
                expect(result.length).toBe(0);
            });

            it('find data - III', function () {
                let result = rangeTree.findInRange([5, 5], [5, 5]);
                expect(result.length).toBe(1);
                expect(result[0]).toBe(z.data);
            });

            it('find data - IV', function () {
                let result = rangeTree.findInRange([5, 5], [100, 100]);
                expect(result.length).toBe(8);
                expect(result[0]).toBe(z.data);
                expect(result[1]).toBe(m.data);
                expect(result[2]).toBe(c.data);
                expect(result[3]).toBe(r.data);
                expect(result[4]).toBe(f.data);
                expect(result[5]).toBe(w.data);
                expect(result[6]).toBe(y.data);
                expect(result[7]).toBe(k.data);
            });

            it('find data - V', function () {
                let result = rangeTree.findInRange([33, 52], [47, 63]);
                expect(result.length).toBe(2);
                expect(result[0]).toBe(f.data);
                expect(result[1]).toBe(y.data);
            });

            it('find data - VI', function () {
                let result = rangeTree.findInRange([27, 50], [34, 63]);
                expect(result.length).toBe(2);
                expect(result[0]).toBe(r.data);
                expect(result[1]).toBe(y.data);
            });

            it('find data - VII', function () {
                let result = rangeTree.findInRange([33, 35], [47, 65]);
                expect(result.length).toBe(4);
                expect(result[0]).toBe(m.data);
                expect(result[1]).toBe(f.data);
                expect(result[2]).toBe(y.data);
                expect(result[3]).toBe(k.data);
            });

            it('find data - VIII', function () {
                let result = rangeTree.findInRange([29, 50], [30, 63]);
                expect(result.length).toBe(0);
            });
        });
    });

    describe('Incomplete tree', function () {
        let initData = [z, y, w];

        let subtree1 = [
            {
                median: 61.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 32.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: 63,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: z,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: w,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: y,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: { data: undefined, ranges: [33, 63] },
                subtree: undefined
            }
        ];

        let subtree2 = [
            {
                median: 32.5,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: z,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: w,
                subtree: undefined
            }
        ];

        let subtree3 = [
            {
                median: 63,
                rangeData: undefined,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: y,
                subtree: undefined
            },
            {
                median: undefined,
                rangeData: { data: undefined, ranges: [33, 63] },
                subtree: undefined
            }
        ];

        it('build', function () {
            rangeTree.build(initData, [
                function (a, b) { return a.ranges[0] - b.ranges[0]; },
                function (a, b) { return a.ranges[1] - b.ranges[1]; }
            ]);

            expect(rangeTree.tree.rawData[0].median).toBe(27.5);
            expect(rangeTree.tree.rawData[0].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[0].subtree.rawData, subtree1);
            expect(rangeTree.tree.rawData[1].median).toBe(13.5);
            expect(rangeTree.tree.rawData[1].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[1].subtree.rawData, subtree2);
            expect(rangeTree.tree.rawData[2].median).toBe(33);
            expect(rangeTree.tree.rawData[2].rangeData).toBe(undefined);
            checkSubtree(rangeTree.tree.rawData[2].subtree.rawData, subtree3);
            expect(rangeTree.tree.rawData[3].median).toBe(undefined);
            expect(rangeTree.tree.rawData[3].rangeData).toBe(z);
            expect(rangeTree.tree.rawData[3].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[4].median).toBe(undefined);
            expect(rangeTree.tree.rawData[4].rangeData).toBe(w);
            expect(rangeTree.tree.rawData[4].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[5].median).toBe(undefined);
            expect(rangeTree.tree.rawData[5].rangeData).toBe(y);
            expect(rangeTree.tree.rawData[5].subtree).toBe(undefined);
            expect(rangeTree.tree.rawData[6].median).toBe(undefined);
            expect(rangeTree.tree.rawData[6].rangeData).toEqual({ data: undefined, ranges: [33, 63] });
        });

        describe('Find', function () {
            beforeEach(function () {
                rangeTree.build(initData, [
                    function (a, b) { return a.ranges[0] - b.ranges[0]; },
                    function (a, b) { return a.ranges[1] - b.ranges[1]; }
                ]);
            });

            it('find data - I', function () {
                let result = rangeTree.findInRange([33, 63], [33, 63]);
                expect(result.length).toBe(1);
            });
        });
    });
});
