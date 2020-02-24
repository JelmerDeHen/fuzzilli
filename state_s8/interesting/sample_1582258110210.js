function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v3,constructor:"eTm8XK*Max"};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "e", "constructor", "a", "d"])
const v6 = {__proto__:v3,toString:"eTm8XK*Max",e:v5,b:v4,a:v4,constructor:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "a", "b", "constructor", "toString"])
v6[2520173693] = "eTm8XK*Max";
let v7 = v3;
let v9 = undefined;
for (const v10 in v6) {
    const v16 = [13.37,13.37];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v17 = [13.37,v16];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v18 = Object("symbol",v17);
    // v18 = .object()
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
}
}
%NeverOptimizeFunction(main);
main();
