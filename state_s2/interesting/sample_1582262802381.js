function main() {
let v2 = 0;
let v5 = Number;
let v8 = v5;
const v11 = new Int16Array(19873);
// v11 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
const v12 = v11.fill(Float64Array,v8,-1);
// v12 = .undefined
const v13 = v2 + 1;
// v13 = .primitive
v2 = v13;
}
%NeverOptimizeFunction(main);
main();
