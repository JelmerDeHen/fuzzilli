function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = (1337).__proto__;
// v3 = .unknown
let v4 = v1;
let v5 = v4;
const v8 = new Proxy(v5,Object);
// v8 = .unknown
v3.__proto__ = v8;
const v9 = (1337).push();
// v9 = .unknown
}
%NeverOptimizeFunction(main);
main();
