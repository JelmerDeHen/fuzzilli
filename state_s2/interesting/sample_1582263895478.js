function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = ["hasInstance",Set,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {c:"hasInstance",d:v5,length:v5,constructor:1337,a:v3,toString:v3};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "c", "a", "toString", "d", "__proto__", "length"])
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v9 = v8;
let v11 = undefined;
const v18 = [3156875969,3156875969,1337,DataView];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v19 = {constructor:v18,c:v18,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v19 = .object(ofGroup: Object, withProperties: ["c", "a", "constructor", "e", "__proto__", "d"])
const v20 = v19.__proto__;
// v20 = .object()
const v22 = {set:parseInt};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v24 = Object.defineProperty(v20,"__proto__",v22);
// v24 = .undefined
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v32 = new Int16Array(19873);
// v32 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v35 = v34;
let v37 = undefined;
const v41 = [3156875969,3156875969,1337,DataView];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v42 = {e:DataView,constructor:1337,valueOf:1337,d:v41};
// v42 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "valueOf", "constructor"])
let v45 = 0;
try {
    let v47 = 7;
    const v48 = v47 + 1;
    // v48 = .primitive
    v47 = v48;
    v42.__proto__ = v6;
    let v50 = 1337;
} catch(v51) {
}
const v55 = v45 + 1;
// v55 = .primitive
v45 = v55;
}
%NeverOptimizeFunction(main);
main();
