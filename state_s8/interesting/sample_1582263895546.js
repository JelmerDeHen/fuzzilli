function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = ["hasInstance",Set,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {c:"hasInstance",d:v5,length:v5,constructor:1337,a:v3,toString:v3};
// v6 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "toString", "c", "d", "length"])
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v9 = v8;
let v11 = undefined;
const v18 = [3156875969,3156875969,1337,DataView];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v19 = {constructor:v18,c:v18,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v19 = .object(ofGroup: Object, withProperties: ["e", "c", "d", "a", "__proto__", "constructor"])
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
// v32 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v35 = v34;
let v37 = undefined;
const v41 = [3156875969,3156875969,1337,DataView];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v42 = {e:DataView,constructor:1337,valueOf:1337,d:v41};
// v42 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "constructor", "d"])
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
