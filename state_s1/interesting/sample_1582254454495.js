function main() {
const v4 = [-1000000.0,-1000000.0,-1000000.0,-1000000.0,-1000000.0];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,v4,-1000000.0,1024];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = {length:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v8 = {constructor:-1000000.0,length:-1000000.0,__proto__:v7,toString:Number,a:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__", "length"], withMethods: ["toString"])
let v9 = v8;
const v11 = !v6;
// v11 = .boolean
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v16 = v9.toString(v11,1337,1024);
// v16 = .unknown
const v18 = [13.37,13.37,13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v18[1024] = 2;
}
%NeverOptimizeFunction(main);
main();
