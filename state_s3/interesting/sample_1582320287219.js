function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v4,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {__proto__:13.37,constructor:v6,e:13.37,length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "e"])
const v9 = {e:Infinity,d:v4,length:v6};
// v9 = .object(ofGroup: Object, withProperties: ["length", "e", "d", "__proto__"])
let v10 = v7;
with ("MIN_VALUE") {
    const v19 = matchAll();
    // v19 = .unknown
    v19[matchAll] = 0;
}
const v21 = [13.37,13.37,13.37,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v22(v23,v24) {
    const v27 = v22.toLocaleString();
    // v27 = .unknown
    const v28 = eval(v27);
    // v28 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    const v31 = gc(...arguments);
    // v31 = .undefined
    let v33 = 0;
    while (v33 < 1337) {
        const v34 = v33 + 1;
        // v34 = .primitive
        v33 = v34;
    }
    return v27;
}
const v35 = v21.sort(v22);
// v35 = .undefined
}
%NeverOptimizeFunction(main);
main();
