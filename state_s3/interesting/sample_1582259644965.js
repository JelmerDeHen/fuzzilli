function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v10 = v8 + 1;
// v10 = .primitive
v8 = v10;
const v13 = eval("undefined");
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
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
            // v30 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
            const v31 = {constructor:13.37,length:13.37,__proto__:v30,toString:Number,a:"N0Xx92zvHQ"};
            // v31 = .object(ofGroup: Object, withProperties: ["constructor", "a", "length", "__proto__"], withMethods: ["toString"])
            const v32 = v25 + 1;
            // v32 = .primitive
            v25 = v32;
        } while (v25 < 8);
    }
}
const v34 = [54067971];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v35 = v34;
const v36 = v18(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
