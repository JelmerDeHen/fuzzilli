function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,eval,"object",v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {c:"object",length:eval,d:v4,a:v7,toString:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "toString", "a", "d"], withMethods: ["length"])
const v9 = {a:v7,d:"object",b:eval};
// v9 = .object(ofGroup: Object, withProperties: ["d", "a", "__proto__"], withMethods: ["b"])
let v10 = 1064559794;
delete v9[v7];
const v11 = "object".charCodeAt(1064559794);
// v11 = .integer
v10 = 1064559794;
const v12 = eval + 1;
// v12 = .primitive
try {
    const v13 = "object".repeat(v10);
    // v13 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    const v14 = {preventExtensions:eval,get:eval};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "get"])
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
    // v28 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
    const v30 = {};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v32 = {get:v25,set:Array};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["set"])
    const v34 = Object.defineProperty(v30,8,v32);
    // v34 = .undefined
} catch(v35) {
}
}
%NeverOptimizeFunction(main);
main();
