function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = [13.37,13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v10 = [1337,v8,13.37,-4096];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = {length:"N0Xx92zvHQ"};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v12 = {constructor:13.37,length:13.37,__proto__:v11,toString:Number,a:"N0Xx92zvHQ"};
// v12 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "length"], withMethods: ["toString"])
for (const v14 in v12) {
    function v18(v19,v20) {
        let v24 = 0;
        let v26 = v19;
    }
    const v30 = [1337,Promise];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v31 = v30;
    const v33 = {set:Promise,get:Promise};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "set", "get"])
    const v35 = Object.defineProperty(v31,-256,v33);
    // v35 = .undefined
    delete v31[0];
    const v36 = gc();
    // v36 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
