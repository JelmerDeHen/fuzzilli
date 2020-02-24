function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "e"])
const v5 = v3.__proto__;
// v5 = .object()
v5.length = v5;
const v7 = {get:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v5,"length",v7);
// v9 = .undefined
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v12 = v11;
let v14 = undefined;
for (const v16 in "boolean") {
    let v19 = 0;
    const v21 = [1337,1337,1337,1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v22 = v21.toString();
    // v22 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    const v23 = v19 + 1;
    // v23 = .primitive
    v19 = v23;
}
}
%NeverOptimizeFunction(main);
main();
