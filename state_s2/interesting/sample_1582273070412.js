function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = [13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v10 = [1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = {length:-1,toString:-1,e:-1,__proto__:v11,b:1337};
// v12 = .object(ofGroup: Object, withProperties: ["e", "length", "b", "__proto__", "toString"])
const v13 = {c:v11,constructor:WeakMap,e:v12,b:-1};
// v13 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "e", "constructor", "b"])
v9.__proto__ = v11;
const v14 = v10 + 1;
// v14 = .primitive
for (const v18 in "object") {
    let v19 = v18;
}
let v20 = 0;
do {
    const v21 = v2 / v6;
    // v21 = .number
    const v22 = v20 + 1;
    // v22 = .primitive
    v20 = v22;
} while (v20 < 4);
v2.__proto__ = v12;
let v23 = v13;
function v24(v25,v26) {
    v24.prototype = 1337;
    return v10;
}
const v28 = v24();
// v28 = .unknown
const v30 = {e:0,c:0,__proto__:v24};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "e"], withMethods: ["__proto__"])
const v31 = !"prototype";
// v31 = .boolean
const v32 = v24(v24,-1);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
