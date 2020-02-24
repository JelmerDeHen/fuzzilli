function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "b", "e", "d"])
let v5 = v2;
const v8 = {b:-3205971709,e:-3205971709,toString:Uint16Array,d:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["d", "b", "toString", "__proto__", "e"])
let v15 = 0;
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
v4[1] = v5;
}
%NeverOptimizeFunction(main);
main();
