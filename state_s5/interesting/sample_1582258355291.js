function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337,1337,v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v4,constructor:"eTm8XK*Max"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "e", "d", "length"])
const v7 = {__proto__:v4,toString:"eTm8XK*Max",e:v6,b:v5,a:v5,constructor:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "e", "__proto__", "constructor", "a", "b"])
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
