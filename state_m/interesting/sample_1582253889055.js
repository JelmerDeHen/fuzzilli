function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [-536870912];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "valueOf", "a", "length", "b"])
const v9 = {b:-536870912,e:-536870912,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "toString", "d"])
let v10 = v4;
for (const v25 in "object") {
    const v26 = v25 - 1;
    // v26 = .primitive
    const v28 = [1337,1337,1337,1337];
    // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v29 = v28.toString();
    // v29 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
const v32 = {set:gc,get:gc};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v34 = Object.defineProperty(v6,5,v32);
// v34 = .undefined
let v35 = v10;
try {
    v8[v4] = -536870912;
    v35 = v35;
} catch(v36) {
    const v37 = v36();
    // v37 = .unknown
    v35 = v37;
}
}
%NeverOptimizeFunction(main);
main();
