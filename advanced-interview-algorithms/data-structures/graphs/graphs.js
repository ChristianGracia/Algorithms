// directed and undirected
// undirected is like high way where you can go back and forth
// directed is like a one way street where you and only go one way

// weighted and unweighted
// information can be held on edges. for calculating optimal paths

// cyclic or acyclic
// cyclic when nodes are connected and you can go from one to the other to the other back to the first
// acyclic where you can't

// graphs

// edge list
const graph1 = [[0, 2], [2,3], [2, 1], [1, 3]]

// adjacent list - array, obj, or linked list
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]

// adjacent matrix
const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
]


class Graph { 
    constructor() { 
      this.numberOfNodes = 0;
      this.adjacentList = {
      }; 
    } 
    addVertex(node)  {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    } 
    addEdge(node1, node2) { 
      //undirected Graph
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    } 
    showConnections() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "-->" + connections); 
      } 
  } 
  } 
  
  const graph = new Graph();
  graph.addVertex('0');
  graph.addVertex('1');
  graph.addVertex('2');
  graph.addVertex('3');
  graph.addVertex('4');
  graph.addVertex('5');
  graph.addVertex('6');
  graph.addEdge('3', '1'); 
  graph.addEdge('3', '4'); 
  graph.addEdge('4', '2'); 
  graph.addEdge('4', '5'); 
  graph.addEdge('1', '2'); 
  graph.addEdge('1', '0'); 
  graph.addEdge('0', '2'); 
  graph.addEdge('6', '5');
  
  graph.showConnections(); 
  //Answer:
  // 0-->1 2 
  // 1-->3 2 0 
  // 2-->4 1 0 
  // 3-->1 4 
  // 4-->3 2 5 
  // 5-->4 6 
  // 6-->5