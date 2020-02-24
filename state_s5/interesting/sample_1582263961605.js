function main() {
let v1 = "arguments";
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v18 = {a:1337,toString:13.37,c:v4,__proto__:v6,valueOf:"a",constructor:v4};
// v18 = .object(ofGroup: Object, withProperties: ["c", "a", "valueOf", "constructor", "__proto__", "toString"])
const v19 = v18.splice();
// v19 = .unknown
const v22 = [];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v23 = {__proto__:"eeeRbEqfAO",constructor:2147483648,length:v22};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
v22.constructor = v1;
function v25(v26,v27) {
    const v28 = v22.forEach(v25,v23);
    // v28 = .undefined
    for (let v32 = 0; v32 < 100; v32++) {
    }
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v35 = v34;
const v36 = v25(v35);
// v36 = .unknown
const v37 = v25(v25,4.0);
// v37 = .unknown
const v38 = v25(v37,v35);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
