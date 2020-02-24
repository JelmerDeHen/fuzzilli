function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {constructor:v1,c:13.37,d:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "constructor", "c"])
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,v4];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {b:v6,a:v6,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__"])
function v8(v9,v10) {
    const v13 = [1337,1337,1337,1337];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v14(v15,v16) {
    }
    let v22 = v7;
    let v24 = 0;
    let v27 = 0;
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
    const v30 = v24 + 1;
    // v30 = .primitive
    const v32 = {set:Number,get:v14};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v34 = Object.defineProperty(v2,"d",v32);
    // v34 = .undefined
    v24 = v30;
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v37 = v36;
const v38 = v8(v37);
// v38 = .unknown
const v40 = v8(1);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
