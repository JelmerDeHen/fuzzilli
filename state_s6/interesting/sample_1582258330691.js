function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,1337,v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v4,constructor:"eTm8XK*Max"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "d", "__proto__", "a", "e", "constructor"])
const v7 = {__proto__:v4,toString:"eTm8XK*Max",e:v6,b:v5,a:v5,constructor:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["e", "a", "constructor", "b", "__proto__", "toString"])
let v18 = 0;
let v21 = 0;
let v24 = 0;
try {
    v2.length = v7;
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();
