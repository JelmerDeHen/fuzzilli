function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,"symbol"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {toString:"symbol",d:v7,c:WeakSet,b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "toString", "__proto__", "c", "b"])
const v9 = {valueOf:WeakSet,e:WeakSet,d:WeakSet,__proto__:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d", "e"])
let v10 = "symbol";
for (let v14 = 0; v14 < 8; v14++) {
    const v18 = typeof Array;
    // v18 = .string
    let v19 = 0;
    do {
        const v24 = (1337).__proto__;
        // v24 = .unknown
        const v26 = v24.toLocaleString(0);
        // v26 = .unknown
        const v27 = v19 + 1;
        // v27 = .primitive
        v19 = v27;
    } while (v19 < 8);
}
}
%NeverOptimizeFunction(main);
main();
