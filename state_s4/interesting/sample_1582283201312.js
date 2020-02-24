function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = {valueOf:eval};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["valueOf"])
const v16 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v16[128] = 13.37;
const v17 = new Uint8Array(v16);
// v17 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
let v20 = 0;
let v23 = 0;
for (const v24 in v17) {
    const v25 = typeof 512;
    // v25 = .string
    const v27 = v25 === "number";
    // v27 = .boolean
    for (let v31 = 0; v31 < 100; v31++) {
        const v32 = eval(v24);
        // v32 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    }
}
const v33 = v23 + 1;
// v33 = .primitive
v23 = v33;
let v37 = 0;
let v46 = 0;
let v49 = 0;
let v52 = 0;
const v57 = Symbol.isConcatSpreadable;
// v57 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v58 = v57.description;
// v58 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v62 = eval(v58);
// v62 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v63 = [1337];
// v63 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v64 = [-65537,"UjTLIXIEZO",eval];
// v64 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v65 = {__proto__:-65537,e:v63,b:eval,valueOf:v4,d:1337,constructor:13.37,a:13.37};
// v65 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "e", "d", "constructor", "valueOf"], withMethods: ["b"])
const v66 = {c:1337,__proto__:v63,e:v65,a:v64,valueOf:v63};
// v66 = .object(ofGroup: Object, withProperties: ["c", "a", "valueOf", "e", "__proto__"])
let v67 = v63;
const v68 = {};
// v68 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v70 = new Int32Array(v68);
// v70 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v71 = v70.reverse();
// v71 = .undefined
}
%NeverOptimizeFunction(main);
main();
