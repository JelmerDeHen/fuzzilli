function main() {
let v1 = 13.37;
const v3 = [13.37,v1,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v7 = 0;
const v13 = {__proto__:536870912};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v24 = 0;
let v28 = undefined;
const v30 = {__proto__:536870912};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"])
with (v30) {
    let v32 = __proto__;
    let v33 = v32;
    const v36 = new Proxy(v33,Object);
    // v36 = .unknown
    for (const v37 in v36) {
    }
}
}
%NeverOptimizeFunction(main);
main();
