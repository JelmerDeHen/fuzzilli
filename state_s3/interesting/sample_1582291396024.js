function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,eval,"object",v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {c:"object",length:eval,d:v4,a:v7,toString:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "d", "c", "a"], withMethods: ["length"])
const v9 = {a:v7,d:"object",b:eval};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "a"], withMethods: ["b"])
let v10 = 1064559794;
delete v9[v7];
const v11 = "object".charCodeAt(1064559794);
// v11 = .integer
v10 = 1064559794;
const v12 = eval + 1;
// v12 = .primitive
try {
    const v13 = "object".repeat(v10);
    // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    const v14 = {preventExtensions:eval,get:eval};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "preventExtensions"])
    const v16 = new Proxy("object",v14);
    // v16 = .unknown
    function v18(v19,v20,v21,v22) {
        const v23 = v18[eval];
        // v23 = .unknown
        return v20;
    }
    const v24 = 7 - v4;
    // v24 = .number
    const v25 = (7).__proto__;
    // v25 = .unknown
    const v28 = new Int16Array(44166);
    // v28 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    const v30 = {};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v32 = {get:v25,set:Array};
    // v32 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["set"])
    const v34 = Object.defineProperty(v30,8,v32);
    // v34 = .undefined
} catch(v35) {
}
}
%NeverOptimizeFunction(main);
main();
