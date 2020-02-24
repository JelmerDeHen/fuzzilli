function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [3156875969,3156875969,1337,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:v7,c:v7,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "a", "c", "__proto__", "d", "e"])
const v9 = {e:DataView,constructor:1337,valueOf:1337,d:v7};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "d", "__proto__", "constructor"])
let v10 = v6;
const v15 = [13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v18 = v17;
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
with (v15) {
    d = 13.37;
    const v29 = v18[1261695261];
    // v29 = .unknown
}
v18[-1346405887] = 3156875969;
const v30 = v26 || DataView;
// v30 = .boolean
const v31 = Object(v6);
// v31 = .object()
v18[0] = v17;
const v32 = Object(v6,v17);
// v32 = .object()
}
%NeverOptimizeFunction(main);
main();
