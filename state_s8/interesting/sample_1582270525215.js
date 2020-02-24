function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = 0;
const v11 = new Set("asyncIterator");
// v11 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "clear", "keys", "add", "forEach", "values", "entries", "has"])
const v12 = ["symbol",...v11,"asyncIterator"];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
v7 = v12;
const v13 = JSON.stringify(v7);
// v13 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v15 = JSON.parse(v13,0);
// v15 = .unknown
const v17 = [1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v18 = [v17,-3856173342,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v19 = {a:13.37,d:v17,constructor:v4,length:v4,c:1337};
// v19 = .object(ofGroup: Object, withProperties: ["a", "length", "c", "__proto__", "constructor", "d"])
const v20 = {e:v4,d:13.37,valueOf:-3856173342,b:"43Wuhi4r4T",constructor:v18,toString:v4};
// v20 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "valueOf", "d", "__proto__", "e", "b"])
let v21 = 1337;
function v22(v23,v24) {
    for (const v26 in "boolean") {
        let v29 = 0;
        const v31 = RegExp.bind(RegExp);
        // v31 = .unknown
        for (const v33 in "boolean") {
            let v36 = 0;
            do {
                let v39 = 0;
                do {
                    const v40 = v39 + 1;
                    // v40 = .primitive
                    v39 = v40;
                } while (v39 < 7);
                const v41 = v36 + 1;
                // v41 = .primitive
                v36 = v41;
            } while (v36 < 8);
        }
        const v42 = v31();
        // v42 = .unknown
        const v45 = new Float32Array(64408);
        // v45 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
        "boolean".toString = v22;
        let v48 = 0;
        const v49 = v48 + 1;
        // v49 = .primitive
        v48 = v49;
    }
    return v23;
}
const v55 = [1337];
// v55 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v56 = v55;
const v57 = v22(v56);
// v57 = .unknown
}
%NeverOptimizeFunction(main);
main();
