function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {e:Int16Array,c:1337,valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "e", "__proto__"])
const v6 = Symbol.toStringTag;
// v6 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v7 = v3[v6];
// v7 = .unknown
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v15 = 0;
        const v20 = new Uint16Array("boolean");
        // v20 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
        v20[-1584886452] = v4;
        for (let v24 = 0; v24 < 100; v24++) {
        }
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v27 = v26;
const v28 = v8(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
