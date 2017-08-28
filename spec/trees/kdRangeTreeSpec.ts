import 'mocha';
import { expect } from 'chai';
import { KdRangeTree } from '../../src/trees/kdRangeTree';

describe('Range tree', function () {
    let rangeTree: any;

    let z = { data: 'Z', ranges: [5, 5] };
    let y = { data: 'Y', ranges: [33, 63] };
    let m = { data: 'M', ranges: [47, 35] };
    let w = { data: 'W', ranges: [22, 60] };
    let c = { data: 'C', ranges: [15, 45] };
    let r = { data: 'R', ranges: [28, 50] };
    let k = { data: 'K', ranges: [42, 65] };
    let f = { data: 'F', ranges: [38, 52] };

    beforeEach(function () {
        rangeTree = new KdRangeTree.Structure();
    });

    function checkSubtree(outputSubtree: any, expectedSubtree: any) {
        expect(outputSubtree.length).equal(expectedSubtree.length);
        for (let i = 0; i < outputSubtree.length; i++) {
            expect(outputSubtree[i].median).equal(expectedSubtree[i].median);
            expect(outputSubtree[i].subtree).equal(expectedSubtree[i].rawData);
            expect(outputSubtree[i].rangeData).equal(expectedSubtree[i].rangeData);
        }
    }

    describe('Optimal tree', function () {
        let initData = [z, y, w, m, r, f, k, c];

        let subtree1: any = [
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

        let subtree2: any = [
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

        let subtree3: any = [
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

        let subtree4: any = [
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

        let subtree5: any = [
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

        let subtree6: any = [
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

        let subtree7: any = [
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
                function (a: any, b: any) { return a.ranges[0] - b.ranges[0]; },
                function (a: any, b: any) { return a.ranges[1] - b.ranges[1]; }
            ]);

            expect(rangeTree.tree.rawData[0].median).equal(30.5);
            expect(rangeTree.tree.rawData[0].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[0].subtree.rawData, subtree1);
            expect(rangeTree.tree.rawData[1].median).equal(18.5);
            expect(rangeTree.tree.rawData[1].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[1].subtree.rawData, subtree2);
            expect(rangeTree.tree.rawData[2].median).equal(40);
            expect(rangeTree.tree.rawData[2].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[2].subtree.rawData, subtree3);
            expect(rangeTree.tree.rawData[3].median).equal(10);
            expect(rangeTree.tree.rawData[3].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[3].subtree.rawData, subtree4);
            expect(rangeTree.tree.rawData[4].median).equal(25);
            expect(rangeTree.tree.rawData[4].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[4].subtree.rawData, subtree5);
            expect(rangeTree.tree.rawData[5].median).equal(35.5);
            expect(rangeTree.tree.rawData[5].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[5].subtree.rawData, subtree6);
            expect(rangeTree.tree.rawData[6].median).equal(44.5);
            expect(rangeTree.tree.rawData[6].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[6].subtree.rawData, subtree7);
            expect(rangeTree.tree.rawData[7].median).equal(undefined);
            expect(rangeTree.tree.rawData[7].rangeData).equal(z);
            expect(rangeTree.tree.rawData[7].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[8].median).equal(undefined);
            expect(rangeTree.tree.rawData[8].rangeData).equal(c);
            expect(rangeTree.tree.rawData[8].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[9].median).equal(undefined);
            expect(rangeTree.tree.rawData[9].rangeData).equal(w);
            expect(rangeTree.tree.rawData[9].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[10].median).equal(undefined);
            expect(rangeTree.tree.rawData[10].rangeData).equal(r);
            expect(rangeTree.tree.rawData[10].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[11].median).equal(undefined);
            expect(rangeTree.tree.rawData[11].rangeData).equal(y);
            expect(rangeTree.tree.rawData[11].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[12].median).equal(undefined);
            expect(rangeTree.tree.rawData[12].rangeData).equal(f);
            expect(rangeTree.tree.rawData[12].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[13].median).equal(undefined);
            expect(rangeTree.tree.rawData[13].rangeData).equal(k);
            expect(rangeTree.tree.rawData[13].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[14].median).equal(undefined);
            expect(rangeTree.tree.rawData[14].rangeData).equal(m);
            expect(rangeTree.tree.rawData[14].subtree).equal(undefined);
        });

        describe('Find', function () {
            beforeEach(function () {
                rangeTree.build(initData, [
                    function (a: any, b: any) { return a.ranges[0] - b.ranges[0]; },
                    function (a: any, b: any) { return a.ranges[1] - b.ranges[1]; }
                ]);
            });

            it('find data - I', function () {
                let result = rangeTree.findInRange([5, 30], [15, 70]);
                expect(result.length).equal(1);
                expect(result[0]).equal(c.data);
            });

            it('find data - II', function () {
                let result = rangeTree.findInRange([0, 0], [4, 20]);
                expect(result.length).equal(0);
            });

            it('find data - III', function () {
                let result = rangeTree.findInRange([5, 5], [5, 5]);
                expect(result.length).equal(1);
                expect(result[0]).equal(z.data);
            });

            it('find data - IV', function () {
                let result = rangeTree.findInRange([5, 5], [100, 100]);
                expect(result.length).equal(8);
                expect(result[0]).equal(z.data);
                expect(result[1]).equal(m.data);
                expect(result[2]).equal(c.data);
                expect(result[3]).equal(r.data);
                expect(result[4]).equal(f.data);
                expect(result[5]).equal(w.data);
                expect(result[6]).equal(y.data);
                expect(result[7]).equal(k.data);
            });

            it('find data - V', function () {
                let result = rangeTree.findInRange([33, 52], [47, 63]);
                expect(result.length).equal(2);
                expect(result[0]).equal(f.data);
                expect(result[1]).equal(y.data);
            });

            it('find data - VI', function () {
                let result = rangeTree.findInRange([27, 50], [34, 63]);
                expect(result.length).equal(2);
                expect(result[0]).equal(r.data);
                expect(result[1]).equal(y.data);
            });

            it('find data - VII', function () {
                let result = rangeTree.findInRange([33, 35], [47, 65]);
                expect(result.length).equal(4);
                expect(result[0]).equal(m.data);
                expect(result[1]).equal(f.data);
                expect(result[2]).equal(y.data);
                expect(result[3]).equal(k.data);
            });

            it('find data - VIII', function () {
                let result = rangeTree.findInRange([29, 50], [30, 63]);
                expect(result.length).equal(0);
            });
        });
    });

    /*describe('Incomplete tree', function () {
        let initData = [z, y, w];

        let subtree1: any = [
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

        let subtree2: any = [
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

        let subtree3: any = [
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
                function (a: any, b: any) { return a.ranges[0] - b.ranges[0]; },
                function (a: any, b: any) { return a.ranges[1] - b.ranges[1]; }
            ]);

            expect(rangeTree.tree.rawData[0].median).equal(27.5);
            expect(rangeTree.tree.rawData[0].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[0].subtree.rawData, subtree1);
            expect(rangeTree.tree.rawData[1].median).equal(13.5);
            expect(rangeTree.tree.rawData[1].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[1].subtree.rawData, subtree2);
            expect(rangeTree.tree.rawData[2].median).equal(33);
            expect(rangeTree.tree.rawData[2].rangeData).equal(undefined);
            checkSubtree(rangeTree.tree.rawData[2].subtree.rawData, subtree3);
            expect(rangeTree.tree.rawData[3].median).equal(undefined);
            expect(rangeTree.tree.rawData[3].rangeData).equal(z);
            expect(rangeTree.tree.rawData[3].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[4].median).equal(undefined);
            expect(rangeTree.tree.rawData[4].rangeData).equal(w);
            expect(rangeTree.tree.rawData[4].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[5].median).equal(undefined);
            expect(rangeTree.tree.rawData[5].rangeData).equal(y);
            expect(rangeTree.tree.rawData[5].subtree).equal(undefined);
            expect(rangeTree.tree.rawData[6].median).equal(undefined);
            expect(rangeTree.tree.rawData[6].rangeData).equal({ data: undefined, ranges: [33, 63] });
        });

        describe('Find', function () {
            beforeEach(function () {
                rangeTree.build(initData, [
                    function (a: any, b: any) { return a.ranges[0] - b.ranges[0]; },
                    function (a: any, b: any) { return a.ranges[1] - b.ranges[1]; }
                ]);
            });

            it('find data - I', function () {
                let result = rangeTree.findInRange([33, 63], [33, 63]);
                expect(result.length).equal(1);
            });
        });
    });*/
});
