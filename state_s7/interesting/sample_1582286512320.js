function main() {
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = {__proto__:"hasInstance",d:v11};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v16 = {call:v12};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v18 = new Proxy(Array,v16);
// v18 = .unknown
for (const v19 in v18) {
    const v22 = [13.37,13.37];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v24 = [1337];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v25 = ["size","size",1337];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v26 = {b:v22,a:v25,valueOf:"size",e:v24,constructor:v25};
    // v26 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "b", "valueOf", "e"])
    function v27(v28,v29) {
        return v26;
    }
    let v68 = 0;
    v68 = v68;
    break;
}
}
%NeverOptimizeFunction(main);
main();
