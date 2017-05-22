import { Graph } from '../../src/graphs/graph';

describe('Graph', () => {
    let graph: Graph.Structure;
    const v1: Graph.Vertex = { id: 'v1', position: [0, 0] };
    const v2: Graph.Vertex = { id: 'v2', position: [5, 0] };
    const v3: Graph.Vertex = { id: 'v3', position: [5, 5] };
    const v4: Graph.Vertex = { id: 'v4', position: [0, 5] };
    const e1 = { evaluation: 10, v1: v1, v2: v2 };
    const e2 = { evaluation: 10, v1: v2, v2: v3 };
    const e3 = { evaluation: 10, v1: v3, v2: v4 };
    const e4 = { evaluation: 10, v1: v4, v2: v1 };
    const e5 = { evaluation: 10, v1: v4, v2: v2 };

    beforeEach(function () {
        graph = new Graph.Structure();
    });

    it('add edge', () => {
        graph.addEdge(e1);
        graph.addEdge(e2);
        graph.addEdge(e3);
        graph.addEdge(e4);
        graph.addEdge(e5);

        expect(graph.getVertices()).toEqual([v1, v2, v3, v4]);
        expect(graph.getAdjacentEdges(v1)).toEqual([e1, e4]);
        expect(graph.getAdjacentEdges(v2)).toEqual([e1, e2, e5]);
        expect(graph.getAdjacentEdges(v3)).toEqual([e2, e3]);
        expect(graph.getAdjacentEdges(v4)).toEqual([e3, e4, e5]);
    });

});
