function main() {
function v2(v3,v4) {
    let v8 = "string";
    const v10 = [13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v13 = [13.37,13.37,13.37,13.37,13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v14 = new Set(v13);
    // v14 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "add", "forEach", "has", "entries", "values", "delete"])
    const v15 = v14.entries();
    // v15 = .object()
    const v17 = [1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v19 = {__proto__:v15,a:v8,toString:v17,b:0,c:v10,constructor:1024};
    // v19 = .object(ofGroup: Object, withProperties: ["b", "constructor", "toString", "c", "__proto__", "a"])
    let v21 = 0;
    const v22 = v21 + 1;
    // v22 = .primitive
    v21 = v22;
    let v25 = 0;
    const v26 = v25 + 1;
    // v26 = .primitive
    v25 = v26;
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v30 = v29;
const v31 = v2(v30);
// v31 = .unknown
const v32 = v2(1024,4.0);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
