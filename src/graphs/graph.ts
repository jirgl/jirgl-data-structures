export module Graph {
    export type Vertex = {
        id: string;
        position: [number, number];
        evaluation?: number;
    }

    export type Edge = {
        v1: Vertex;
        v2: Vertex;
        evaluation: number;
    }

    export class Structure {
        private adjacencyList: { [vertexId: string]: Edge[] };
        private vertices: { [vertexId: string]: Vertex };

        constructor() {
            this.adjacencyList = {};
            this.vertices = {};
        }

        addEdge(edge: Edge): void {
            this.vertices[edge.v1.id] = edge.v1;
            this.vertices[edge.v2.id] = edge.v2;
            this.adjacencyList[edge.v1.id] = [...this.adjacencyList[edge.v1.id] || [], edge];
            this.adjacencyList[edge.v2.id] = [...this.adjacencyList[edge.v2.id] || [], edge];
        }

        getAdjacentEdges(vertex: Vertex): Edge[] {
            return this.adjacencyList[vertex.id];
        }

        getVertices(): Vertex[] {
            const vertices = [];
            for (var key in this.vertices) vertices.push(this.vertices[key]);
            return vertices;
        }
    }
}
