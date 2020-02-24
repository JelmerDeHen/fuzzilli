function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [-3623254464,3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = {valueOf:v4,d:Infinity,toString:3,b:3,length:"number",constructor:v6};
// v7 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b", "d", "constructor", "toString"])
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
