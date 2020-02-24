function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,"symbol"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {toString:"symbol",d:v7,c:v6,b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["b", "toString", "d", "__proto__", "c"])
const v9 = {valueOf:WeakSet,e:WeakSet,d:WeakSet,__proto__:1337};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "valueOf"])
let v10 = "symbol";
for (let v14 = 0; v14 < 8; v14++) {
    let v17 = 0;
    do {
        const v22 = (1337).__proto__;
        // v22 = .unknown
        const v24 = v22.toLocaleString(0);
        // v24 = .unknown
        const v25 = v17 + 1;
        // v25 = .primitive
        v17 = v25;
    } while (v17 < 8);
}
let v28 = 0;
while (v28 < 10) {
    const v29 = v8.c;
    // v29 = .unknown
    const v30 = v28 + 1;
    // v30 = .primitive
    v28 = v30;
}
const v32 = Symbol.match;
// v32 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v32] = v8;
const v33 = Symbol(v10);
// v33 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v34 = Symbol("symbol");
// v34 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
