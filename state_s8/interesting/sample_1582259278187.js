function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {e:Int16Array,c:1337,valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "c"])
const v6 = Symbol.toStringTag;
// v6 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v7 = v3[v6];
// v7 = .unknown
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v15 = 0;
        const v20 = new Uint16Array("boolean");
        // v20 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
        v20[-1584886452] = v4;
        for (let v24 = 0; v24 < 100; v24++) {
        }
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v27 = v26;
const v28 = v8(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
