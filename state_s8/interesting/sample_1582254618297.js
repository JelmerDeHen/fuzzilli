function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [3156875969,3156875969,1337,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:v7,c:v7,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "d", "constructor", "e", "c"])
const v9 = {e:DataView,constructor:1337,valueOf:1337,d:v7};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "constructor", "e"])
let v10 = v6;
const v12 = 3156875969 * DataView;
// v12 = .number
for (const v13 in v10) {
    for (let v17 = 0; v17 < 8; v17++) {
        delete v17[v17];
    }
}
let v101 = 0;
const v102 = v101 + 1;
// v102 = .primitive
v101 = v102;
}
%NeverOptimizeFunction(main);
main();
