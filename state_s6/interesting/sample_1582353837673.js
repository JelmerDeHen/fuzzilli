function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5) {
    let v8 = this;
    let v9 = v8;
    let v10 = this;
    let v11 = v10;
    v11[5] = this;
    const v14 = new Proxy(v11,Object);
    // v14 = .unknown
    const v15 = Object.freeze(v14);
    // v15 = .undefined
    try {
        const v16 = v9.pop();
        // v16 = .unknown
    } catch(v17) {
    }
}
const v18 = v1.some(v3,v2);
// v18 = .boolean
}
%NeverOptimizeFunction(main);
main();
