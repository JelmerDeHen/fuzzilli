function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {e:Int16Array,c:1337,valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c", "e"])
const v6 = Symbol.toStringTag;
// v6 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v7 = v3[v6];
// v7 = .unknown
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v15 = 0;
        const v20 = new Uint16Array("boolean");
        // v20 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
        v20[-1584886452] = v4;
        for (let v24 = 0; v24 < 100; v24++) {
        }
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v27 = v26;
const v28 = v8(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
