function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [v3,v3,v3];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v3,__proto__:v5};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "valueOf"])
const v7 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v6,b:13.37,c:JSON,e:JSON};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "b", "a", "valueOf", "e", "constructor", "toString"])
let v10 = 0;
delete v7.e;
}
%NeverOptimizeFunction(main);
main();
