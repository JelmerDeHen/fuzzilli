function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4,String,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:1337,c:3971043784,b:13.37,a:"number"};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__", "b", "a"])
const v9 = {c:String};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c"])
let v10 = v4;
const v15 = new String();
// v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = "pvU0UUjoya";
const v18 = "pvU0UUjoya".__proto__;
// v18 = .object()
v18.toString = Array;
for (let v24 = 0; v24 < 10; v24++) {
    with (v7) {
        b = v18;
        let v26 = 3491917923;
        const v27 = v26 + 1;
        // v27 = .primitive
        v26 = v27;
        v10 = 0;
    }
}
const v29 = !String;
// v29 = .boolean
}
%NeverOptimizeFunction(main);
main();
