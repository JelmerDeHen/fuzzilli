function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v2(v3,v4) {
    const v10 = [3156875969,3156875969,1337,DataView];
    // v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v11 = {constructor:v10,c:v10,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v11 = .object(ofGroup: Object, withProperties: ["a", "d", "e", "constructor", "__proto__", "c"])
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
    // v36 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
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
