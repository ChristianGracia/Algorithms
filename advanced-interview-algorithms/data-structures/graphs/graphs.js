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
const graph = [[0, 2], [2,3], [2, 1], [1, 3]]

// adjacent list - array, obj, or linked list
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]]

// adjacent matrix
const graph = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
]