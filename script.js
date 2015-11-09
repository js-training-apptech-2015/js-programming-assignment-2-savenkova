function solution1( A ) {
    var sortedA = A.sort(function compareNumeric(a, b) {
        return a - b;
    }),
        min = 1;
    for (var i = 0; i < sortedA.length; i++ ) {
        if (sortedA[i] > 0) {
            if (sortedA[i] > min) {
                return min;
            } else {
                min++;
            }
        }
    }
    return min;
};
/*
function solution2(S) {

};

function solution3(A, F) {

};*/