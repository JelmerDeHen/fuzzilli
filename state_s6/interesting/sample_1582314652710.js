function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [-3623254464,3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {valueOf:v4,d:Infinity,toString:3,b:3,length:"number",constructor:v6};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b", "length", "d", "toString", "valueOf"])
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
