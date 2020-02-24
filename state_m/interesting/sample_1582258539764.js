function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = Number[-536870912];
// v8 = .unknown
const v9 = [13.37,"boolean","boolean",13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = {a:2676202182,e:1337,length:v4};
// v10 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "length"])
const v11 = {e:2676202182,valueOf:v6,b:2676202182,a:Float32Array};
// v11 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "a", "e", "b"])
let v12 = v11;
for (let v17 = 0; v17 < 2; v17++) {
    function v19(v20,v21) {
        const v22 = v20 in v19;
        // v22 = .boolean
        for (const v24 in "boolean") {
            let v26 = 0;
            let v29 = 0;
            let v31 = 0;
            const v32 = v31 + 1;
            // v32 = .primitive
            v31 = v32;
            for (const v34 of "pvU0UUjoya") {
            }
            const v35 = v29 + 1;
            // v35 = .primitive
            v29 = v35;
        }
        let v36 = v22;
        const v37 = v36.__proto__;
        // v37 = .unknown
        return v22;
    }
    const v40 = [1337];
    // v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v41 = v40;
    const v42 = v19(v41);
    // v42 = .unknown
    const v43 = v19(1024,4.0);
    // v43 = .unknown
    let v45 = "undefined";
}
}
%NeverOptimizeFunction(main);
main();
