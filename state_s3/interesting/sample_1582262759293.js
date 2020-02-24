function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v2(v3,v4) {
    const v10 = [3156875969,3156875969,1337,DataView];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v11 = {constructor:v10,c:v10,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v11 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "e", "a", "c", "d"])
    let v18 = 0;
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            do {
                const v26 = v25 + 1;
                // v26 = .primitive
                v25 = v26;
            } while (v25 < 7);
            let v29 = 0;
            const v33 = v22 + 1;
            // v33 = .primitive
            v22 = v33;
        } while (v22 < 8);
    }
    const v36 = new Uint8Array(34640);
    // v36 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
    v36[1671934568] = v11;
    const v37 = v18 + 1;
    // v37 = .primitive
    v18 = v37;
}
let v39 = v1;
const v40 = v2(v39);
// v40 = .unknown
const v41 = v2();
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
