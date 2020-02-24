function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [-3623254464,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {valueOf:v4,d:Infinity,toString:1337,b:1337,length:"number",constructor:v6};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "d", "toString", "length", "__proto__", "b"])
let v8 = v7;
try {
    function v10(v11,v12,v13,v14) {
    }
    const v15 = Reflect.set(v8,v8,v10);
    // v15 = .boolean
} catch(v16) {
}
}
%NeverOptimizeFunction(main);
main();
