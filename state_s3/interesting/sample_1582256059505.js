function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {length:v3,toString:Uint8Array,e:Uint8Array,__proto__:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "length"])
let v8 = 0;
do {
    const v9 = v8 + 1;
    // v9 = .primitive
    function v10(v11,v12) {
        for (let v16 = v4; v16 < 10; v16++) {
        }
        for (const v17 in "boolean") {
        }
    }
    let v18 = v5;
    const v19 = v10(v18);
    // v19 = .unknown
    v8 = v9;
} while (v8 < 7);
}
%NeverOptimizeFunction(main);
main();
