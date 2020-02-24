function main() {
const v3 = new Float32Array(35214);
// v3 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
const v8 = {set:Object,setPrototypeOf:Object};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "set"])
const v10 = new Proxy(v3,v8);
// v10 = .unknown
v10.d = Proxy;
}
%NeverOptimizeFunction(main);
main();
