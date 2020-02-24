function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v11 = {length:"N0Xx92zvHQ"};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v12 = {constructor:13.37,length:13.37,__proto__:v11,toString:Number,a:"N0Xx92zvHQ"};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "length"], withMethods: ["toString"])
let v13 = v12;
const v15 = v1.sort(gc);
// v15 = .undefined
const v17 = [1337,1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v13[-1024] = v3;
const v22 = v21[v21];
// v22 = .unknown
const v23 = v17.flat(v22);
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v20 = v21;
const v25 = {get:gc};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v27 = Object.defineProperty(v13,3,v25);
// v27 = .undefined
}
%NeverOptimizeFunction(main);
main();
