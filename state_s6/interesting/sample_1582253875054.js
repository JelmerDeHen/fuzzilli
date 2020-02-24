function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "a", "e", "b"])
const v9 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__", "b", "e"])
let v10 = v4;
const v12 = Object();
// v12 = .object()
let v13 = Object;
let v16 = 0;
do {
    const v17 = 0 << v7;
    // v17 = .integer
    const v18 = v16 + 1;
    // v18 = .primitive
    v16 = v18;
} while (v16 < 0);
const v20 = {get:v13,set:Object};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v22 = Object.defineProperty(v6,129,v20);
// v22 = .undefined
const v23 = Object.isFrozen(v20);
// v23 = .boolean
const v24 = v4.length;
// v24 = .integer
const v25 = Object(Object);
// v25 = .object()
}
%NeverOptimizeFunction(main);
main();
