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

function solution2(S) {
     var stack = [];
     for (var i = 0; i < S.length; i++) {
        if (S[i] == '{' || S[i] == '[' || S[i] == '(') {
            stack.push(S[i]);
        } else {
            if (stack.length == 0) {
                return false;
            }
            var symbol = stack.pop();
            if (S[i] == ')' && symbol != '(' || S[i] == ']' && symbol != '[' || S[i] == '}' && symbol != '{') {
                return false;
            }
        }
     }
     return stack.length == 0;
};

function solution3(A, F) {
    var re = /(\((.*)\)|(\w+))\s*=>\s*(.*)/;
    var match = re.exec(F);
    var func = new Function(match[2] || match[3], "return " + match[4]);
    return A.map(func);
};