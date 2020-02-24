function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v8 = 0;
const v10 = v8 + 1;
// v10 = .primitive
v8 = v10;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
function v33(v34,v35,v36,v37,v38) {
    const v39 = v35.__proto__;
    // v39 = .unknown
    return 13.37;
}
const v40 = v33(v4,Number);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
