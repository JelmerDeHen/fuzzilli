function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "e", "__proto__", "b"])
let v5 = v4;
let v8 = undefined;
for (const v10 in "boolean") {
    let v13 = 0;
    do {
        const v14 = v4.b;
        // v14 = .unknown
        let v17 = 0;
        const v18 = v17 + 1;
        // v18 = .primitive
        v17 = v18;
        const v20 = {set:undefined};
        // v20 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
        const v22 = Object.defineProperty(v5,"b",v20);
        // v22 = .undefined
        const v23 = v13 + 1;
        // v23 = .primitive
        v13 = v23;
    } while (v13 < 8);
}
}
%NeverOptimizeFunction(main);
main();
