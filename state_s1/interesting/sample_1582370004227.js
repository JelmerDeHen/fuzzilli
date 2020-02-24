function main() {
let v1 = 13.37;
const v3 = [13.37,v1,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
