function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
for (let v12 = 0; v12 < 10; v12++) {
    const v21 = [13.37,13.37];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    for (const v22 in "object") {
        const v23 = !v21;
        // v23 = .boolean
        const v24 = Object(v23,v22,4294967297);
        // v24 = .object()
        let v27 = 0;
        const v31 = v24.__proto__;
        // v31 = .unknown
    }
}
let v34 = 0;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
let v41 = 0;
const v46 = Symbol.unscopables;
// v46 = .unknown
const v47 = v34 + 1;
// v47 = .primitive
v34 = v47;
let v51 = 0;
}
%NeverOptimizeFunction(main);
main();