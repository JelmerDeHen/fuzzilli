function main() {
const v1 = (1075001128)[1075001128];
// v1 = .unknown
function v2(v3,v4) {
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
    const v13 = [13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v15 = {constructor:-4294967295,length:1337,__proto__:v13};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
    function v16(v17,v18) {
        for (const v20 in "boolean") {
            let v23 = 0;
            do {
                const v24 = v23 + 1;
                // v24 = .primitive
                v23 = v24;
                const v28 = {constructor:13.37,length:13.37,__proto__:v17,toString:Number,a:"N0Xx92zvHQ"};
                // v28 = .object(ofGroup: Object, withProperties: ["length", "constructor", "a", "__proto__"], withMethods: ["toString"])
            } while (v23 < 7);
        }
    }
    const v29 = v16(v15,"dVmqACI+Vs");
    // v29 = .unknown
    const v32 = new Int16Array(19873);
    // v32 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
    for (const v33 of v32) {
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v36 = v35;
const v37 = v2(v36);
// v37 = .unknown
const v38 = v2();
// v38 = .unknown
const v39 = v2();
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();