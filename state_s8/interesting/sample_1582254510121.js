function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [3156875969,3156875969,1337,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:v7,c:v7,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["d", "constructor", "a", "e", "__proto__", "c"])
const v9 = {e:DataView,constructor:1337,valueOf:1337,d:v7};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "constructor", "__proto__", "d"])
let v10 = v6;
const v12 = v7 + 1;
// v12 = .primitive
let v15 = 0;
while (v15 < 4) {
    const v16 = v9.valueOf;
    // v16 = .unknown
    const v17 = v15 + 1;
    // v17 = .primitive
    v15 = v17;
}
const v18 = v4.join("boolean");
// v18 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v19 = {d:1337,constructor:v10,e:v10};
// v19 = .object(ofGroup: Object, withProperties: ["d", "constructor", "__proto__", "e"])
delete v8.e;
for (const v20 of "boolean") {
}
delete (1337)[4];
}
%NeverOptimizeFunction(main);
main();
