function main() {
const v5 = [3156875969,3156875969,1337,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {constructor:v5,c:v5,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v6 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__", "e", "a", "constructor"])
const v10 = [3156875969,3156875969,1337,DataView];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
let v18 = 0;
while (v18 < 3) {
    v6.__proto__ = v10;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
}
}
%NeverOptimizeFunction(main);
main();
