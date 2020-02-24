function main() {
function v0(v1,v2) {
    let v6 = 0;
    function v7(v8,v9,v10,v11,v12) {
    }
    const v13 = v6 + 1;
    // v13 = .primitive
    v6 = v13;
    const v15 = [13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v18 = -1024;
    while (v18 < 5) {
        const v20 = {set:v7,get:gc};
        // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v22 = Object.defineProperty(v15,"__proto__",v20);
        // v22 = .undefined
        const v23 = v18 + 1;
        // v23 = .primitive
        v18 = v23;
    }
    const v24 = v15.__proto__;
    // v24 = .object()
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v27 = v26;
const v28 = v0(v27);
// v28 = .unknown
const v29 = v0(v28,1337);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
