function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            const v16 = v12 + 1;
            // v16 = .primitive
            const v20 = [13.37];
            // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v21 = {ownKeys:Array,construct:Array,set:Array,isExtensible:Array,has:Array,getOwnPropertyDescriptor:Array,call:Array};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "has", "call", "ownKeys", "getOwnPropertyDescriptor", "isExtensible", "set"])
            const v23 = new Proxy(v20,v21);
            // v23 = .unknown
            v23[0] = "pvU0UUjoya";
            v12 = v16;
        } while (v12 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v26 = v25;
const v27 = v5(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
