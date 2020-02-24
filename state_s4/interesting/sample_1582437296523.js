function main() {
const v3 = new Uint8Array(1337);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
const v4 = "dnPLKt+CAH".__proto__;
// v4 = .object()
const v7 = [1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v11 = {e:v8,d:"d"};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v12(v13,v14) {
    let v18 = -128;
    while (v18 < 5) {
        const v19 = v11 <= 0;
        // v19 = .boolean
        const v20 = v18 + 1;
        // v20 = .primitive
        const v21 = v19 + v18;
        // v21 = .primitive
        const v22 = v18 + v21;
        // v22 = .primitive
        v18 = v20;
        let v23 = 1337;
        delete v22[v23];
        v3[64] = v21;
    }
}
const v25 = [9007199254740993];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v12(v26);
// v27 = .unknown
const v28 = v12(1337,1337);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
