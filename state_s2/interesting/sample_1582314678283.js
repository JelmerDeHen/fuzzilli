function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [-3623254464,3];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {valueOf:v4,d:Infinity,toString:3,b:3,length:"number",constructor:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "toString", "b", "valueOf", "d"])
let v8 = v7;
try {
    function v10(v11,v12,v13,v14) {
    }
    const v15 = Reflect.getOwnPropertyDescriptor(v8,v8,v10);
    // v15 = .unknown
} catch(v16) {
}
}
%NeverOptimizeFunction(main);
main();
