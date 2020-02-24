function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "toString", "valueOf"])
const v5 = v3.__proto__;
// v5 = .object()
v5.length = v5;
const v7 = {get:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v5,"length",v7);
// v9 = .undefined
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v12 = v11;
let v14 = undefined;
for (const v16 in "boolean") {
    let v19 = 0;
    const v21 = [1337,1337,1337,1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v22 = v21.toString();
    // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    const v23 = v19 + 1;
    // v23 = .primitive
    v19 = v23;
}
}
%NeverOptimizeFunction(main);
main();
