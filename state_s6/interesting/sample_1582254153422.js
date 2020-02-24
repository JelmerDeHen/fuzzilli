function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"d4+KVJ9GbU",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__", "valueOf", "e", "length"])
const v8 = "object".constructor;
// v8 = .function()
for (let v12 = 0; v12 < 9; v12++) {
    const v14 = {set:v8,get:v8};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v16 = Object.defineProperty(v6,1337,v14);
    // v16 = .undefined
}
const v19 = 1337 == 13.37;
// v19 = .boolean
}
%NeverOptimizeFunction(main);
main();
