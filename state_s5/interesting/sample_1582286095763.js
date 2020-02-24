function main() {
function v2(v3,v4) {
    'use strict'
    (1).valueOf = v2;
}
try {
    const v9 = v2(isNaN,DataView);
    // v9 = .unknown
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
