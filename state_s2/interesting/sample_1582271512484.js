function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,v6,v6,3848251203];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {toString:Infinity,c:Infinity,e:v6,a:13.37,__proto__:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c", "e", "toString"])
const v9 = {constructor:"name",valueOf:v8};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "__proto__"])
let v10 = v7;
const v15 = gc + v6;
// v15 = .primitive
v6.__proto__ = v10;
const v20 = [1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (const v23 of "object") {
    continue;
}
const v24 = 3848251203 & 13.37;
// v24 = .integer
v9.valueOf = 3848251203;
v10 = v6;
const v26 = v4.forEach(gc,v6);
// v26 = .undefined
for (let v30 = 0; v30 < 5; v30++) {
    delete v4.__proto__;
}
}
%NeverOptimizeFunction(main);
main();
