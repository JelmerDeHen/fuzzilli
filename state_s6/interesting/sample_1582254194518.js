function main() {
const v9 = [13.37,13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = {b:v11,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "a", "__proto__", "b", "length"])
const v13 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v13 = .object(ofGroup: Object, withProperties: ["toString", "e", "b", "d", "__proto__"])
let v14 = v9;
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
const v23 = v9.concat(v11,0,v12,6,v14);
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
try {
    for (const v24 of v14) {
        const v25 = 4294967297 & v13;
        // v25 = .integer
    }
} catch(v26) {
}
const v31 = new Uint16Array(1337);
// v31 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
v23.length = 2390849210;
"iterator"[v31] = 13.37;
const v33 = gc();
// v33 = .undefined
}
%NeverOptimizeFunction(main);
main();
