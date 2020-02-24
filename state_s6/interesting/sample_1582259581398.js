function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
    try {
        "object"[3] = v4;
    } catch(v6) {
    }
}
const v10 = v0(Reflect,Reflect,1337,9007199254740993);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
