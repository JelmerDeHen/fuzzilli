function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [-3623254464,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {valueOf:v4,d:Infinity,toString:1337,b:1337,length:"number",constructor:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf", "d", "length", "toString", "b"])
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
