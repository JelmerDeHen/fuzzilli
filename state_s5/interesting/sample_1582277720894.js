function main() {
function v3(v4,v5,v6,v7,v8) {
    'use strict'
    for (const v10 in "boolean") {
        const v12 = {constructor:eval,valueOf:v10,...eval};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["constructor"])
        let v16 = -4096;
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
    }
}
const v18 = v3();
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
