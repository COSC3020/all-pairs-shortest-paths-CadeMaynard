function allPairsShortestPaths(graph) {
    dist = new Array(graph.length)
    // This big chunk of comment is very closely accurate to the pseudo code but
    // the nested "for" that follows it accomplishes the same thing more efficiently
    /* for(let i = 0; i < graph.length; i++){
        dist[i] = new Array(graph.length)
        for(let j = 0; j < graph.length; j++){
            if(i === j){
                dist[i][j] = 0;
            } else{
                dist[i][j] = Infinity;
            }
        }
    }

    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j < graph.length; j++){
            if(graph[i][j] > 0){
                dist[i][j] = graph[i][j];
            }
        }
    } */

    for(let i = 0; i < graph.length; i++){
        dist[i] = new Array(graph.length)
        for(let j = 0; j < graph.length; j++){
            if(i === j){
                dist[i][j] = 0;
            } else{
                dist[i][j] = Infinity;
            }
            if(graph[i][j] > 0)
                dist[i][j] = graph[i][j];
        }
    }

    for(let k = 0; k < graph.length; k++){
        for(let i = 0; i < graph.length; i++){
            for(let j = 0; j < graph.length; j++){
                if(dist[i][j] > dist[i][k] + dist[k][j])
                    dist[i][j] = dist[i][k] + dist[k][j]
            }
        }
    }

    return dist;
}
