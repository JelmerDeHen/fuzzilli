function main() {
let v10 = 0;
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v17 = v16;
const v18 = v10 + 1;
// v18 = .primitive
v10 = v18;
for (const v35 in "object") {
    const v72 = [];
    // v72 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v73 = {valueOf:v72,length:13.37,d:127,e:127};
    // v73 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "e", "d", "valueOf"])
    let v74 = v73;
    v74 = v74;
    v17.b = 3;
}
const v181 = [3156875969,3156875969,1337,DataView];
// v181 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v182 = {e:DataView,constructor:1337,valueOf:1337,d:v181};
// v182 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "valueOf", "constructor", "d"])
const v205 = eval(v182);
// v205 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
}
%NeverOptimizeFunction(main);
main();
