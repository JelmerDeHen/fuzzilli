function main() {
const v1 = (1075001128)[1075001128];
// v1 = .unknown
function v2(v3,v4) {
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
    const v13 = [13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v15 = {constructor:-4294967295,length:1337,__proto__:v13};
    // v15 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
    function v16(v17,v18) {
        for (const v20 in "boolean") {
            let v23 = 0;
            do {
                const v24 = v23 + 1;
                // v24 = .primitive
                v23 = v24;
                const v28 = {constructor:13.37,length:13.37,__proto__:v17,toString:Number,a:"N0Xx92zvHQ"};
                // v28 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
            } while (v23 < 7);
        }
    }
    const v29 = v16(v15,"dVmqACI+Vs");
    // v29 = .unknown
    const v32 = new Int16Array(19873);
    // v32 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    for (const v33 of v32) {
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
