function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {c:v7,b:"valueOf",a:v7,e:"valueOf",toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["a", "e", "b", "__proto__", "c", "toString"])
const v9 = {c:v8,e:v8,b:1337,__proto__:v6,d:Set};
// v9 = .object(ofGroup: Object, withProperties: ["c", "e", "d", "__proto__", "b"])
let v10 = -1;
const v14 = [13.37,13.37,13.37,13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v16 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v16 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "toString", "e"])
let v17 = v14;
try {
    for (const v19 of v17) {
        const v20 = 4294967297 & v16;
        // v20 = .integer
    }
} catch(v21) {
}
const v22 = gc();
// v22 = .undefined
const v23 = gc();
// v23 = .undefined
const v24 = Uint16Array & v4;
// v24 = .integer
let v27 = 0;
while (v27 < 8) {
    v6.length = 128;
    const v29 = v27 + 1;
    // v29 = .primitive
    v27 = v29;
}
const v30 = gc();
// v30 = .undefined
}
%NeverOptimizeFunction(main);
main();
