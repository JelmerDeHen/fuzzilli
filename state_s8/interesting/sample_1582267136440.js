function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v6,13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {toString:13.37,length:"MIN_VALUE",b:v6,__proto__:520721527,e:13.37,valueOf:520721527,c:1337};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "toString", "c", "length", "b"])
const v9 = {c:v4,e:v8,length:13.37,constructor:arguments};
// v9 = .object(ofGroup: Object, withProperties: ["length", "e", "c", "__proto__", "constructor"])
let v10 = 13.37;
for (let v17 = 0; v17 < 3; v17++) {
    let v20 = 0;
    let v23 = v8;
    const v27 = {valueOf:JSON,length:"search"};
    // v27 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
    JSON[v27] = 13.37;
    const v31 = JSON.stringify(JSON,JSON,2153514987);
    // v31 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    const v32 = JSON.parse(v31,Object);
    // v32 = .unknown
    JSON.b = "search";
}
}
%NeverOptimizeFunction(main);
main();
