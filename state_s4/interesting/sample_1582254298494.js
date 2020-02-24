function main() {
function v2(v3,v4,v5) {
    function v6(v7,v8,v9) {
        'use strict'
        const v10 = v8(v2,v7);
        // v10 = .unknown
    }
}
}
%NeverOptimizeFunction(main);
main();
