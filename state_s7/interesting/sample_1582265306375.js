function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "valueOf"])
const v5 = v3.__proto__;
// v5 = .object()
v5.length = v5;
const v7 = {get:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v5,"length",v7);
// v9 = .undefined
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v12 = v11;
let v14 = undefined;
for (const v16 in "boolean") {
    let v19 = 0;
    const v21 = [1337,1337,1337,1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v22 = v21.toString();
    // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v23 = v19 + 1;
    // v23 = .primitive
    v19 = v23;
}
}
%NeverOptimizeFunction(main);
main();
