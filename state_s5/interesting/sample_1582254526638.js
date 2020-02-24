function main() {
const v3 = Reflect[-4294967296];
// v3 = .unknown
function v4(v5,v6,v7,v8) {
    'use strict'
    const v9 = {preventExtensions:v6,get:v7,isExtensible:v6,construct:v8,apply:v5};
    // v9 = .object(ofGroup: Object, withProperties: ["construct", "get", "apply", "isExtensible", "__proto__", "preventExtensions"])
    const v11 = Proxy(v8,v9);
    // v11 = .unknown
    return Reflect;
}
const v12 = {b:"undefined",toString:v4,...1607264097,...1607264097};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "b"], withMethods: ["toString"])
try {
    let v15 = 268435456;
    do {
    } while (v15 < 2);
    for (let v19 = 0; v19 < 10; v19++) {
    }
} catch(v20) {
}
}
%NeverOptimizeFunction(main);
main();
