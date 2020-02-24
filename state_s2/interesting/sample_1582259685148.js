function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v10 = v8 + 1;
// v10 = .primitive
v8 = v10;
const v13 = eval("undefined");
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v17 = Object();
// v17 = .object()
function v18(v19,v20) {
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            const v28 = Number.isFinite(Number);
            // v28 = .boolean
            Number[v28] = Number;
            const v30 = {length:"N0Xx92zvHQ"};
            // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v31 = {constructor:13.37,length:13.37,__proto__:v30,toString:Number,a:"N0Xx92zvHQ"};
            // v31 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "constructor"], withMethods: ["toString"])
            const v32 = v25 + 1;
            // v32 = .primitive
            v25 = v32;
        } while (v25 < 8);
    }
}
const v34 = [54067971];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v35 = v34;
const v36 = v18(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
