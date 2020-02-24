function main() {
const v4 = [5.0,5.0,5.0,5.0,5.0];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v4,ArrayBuffer,1739217099];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {valueOf:5.0,length:1337,constructor:v6,c:1739217099,a:v7};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__", "a", "c", "constructor"])
const v9 = {length:5.0,__proto__:"byteOffset",constructor:1739217099,b:"byteOffset",d:v7,toString:v4};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "b", "length", "constructor", "d"])
let v12 = 0;
do {
    const v13 = v7[1081504473];
    // v13 = .unknown
    const v14 = v12 + 1;
    // v14 = .primitive
    v12 = v14;
} while (v12 < 2);
const v15 = new ArrayBuffer(1739217099);
// v15 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v16 = [ArrayBuffer];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v17 = v9;
try {
    const v22 = String.acos(1000000000000.0,-3789366927);
    // v22 = .unknown
    const v24 = typeof "boolean";
    // v24 = .string
    const v26 = v24 === "boolean";
    // v26 = .boolean
    const v27 = eval(v22);
    // v27 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
} catch(v28) {
}
const v29 = typeof ArrayBuffer;
// v29 = .string
const v31 = v29 === "undefined";
// v31 = .boolean
let v32 = v7;
if (v31) {
    const v33 = v6.__proto__;
    // v33 = .object()
    v32 = v17;
} else {
    const v34 = v17.__proto__;
    // v34 = .object()
    v32 = v34;
}
const v37 = new Float32Array(60505);
// v37 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
function v38(v39,v40,v41,v42,v43) {
    const v44 = {e:v41,d:v6,constructor:"byteOffset"};
    // v44 = .object(ofGroup: Object, withProperties: ["e", "constructor", "d", "__proto__"])
    return v40;
}
const v45 = !v7;
// v45 = .boolean
const v46 = v38("undefined",v4,ArrayBuffer,v8,v29);
// v46 = .unknown
v32.valueOf = v46;
}
%NeverOptimizeFunction(main);
main();
