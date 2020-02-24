function main() {
let v2 = 0;
let v5 = Number;
let v8 = v5;
const v11 = new Int16Array(19873);
// v11 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
const v12 = v11.fill(Float64Array,v8,-1);
// v12 = .undefined
const v13 = v2 + 1;
// v13 = .primitive
v2 = v13;
}
%NeverOptimizeFunction(main);
main();
