function main() {
function v1(v2,v3) {
    const v4 = v2 in v1;
    // v4 = .boolean
    const v10 = [13.37,13.37,13.37,13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v11 = new Uint16Array(v10);
    // v11 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
    const v14 = [3156875969,3156875969,1337,DataView];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v15 = {constructor:v14,c:v14,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v15 = .object(ofGroup: Object, withProperties: ["c", "constructor", "a", "d", "e", "__proto__"])
    const v16 = {e:DataView,constructor:1337,valueOf:1337,d:v14};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor", "d", "e"])
    for (let v22 = 0; v22 < 10; v22++) {
    }
    const v24 = [3156875969,13.37,13.37,13.37,13.37];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v25 = v24;
    let v28 = 0;
    for (const v29 in "boolean") {
        let v32 = 0;
        do {
            try {
                let v35 = 0;
                do {
                    const v36 = v35 + 1;
                    // v36 = .primitive
                    v35 = v36;
                } while (v35 < 7);
            } catch(v37) {
                let v40 = 0;
                for (let v44 = 0; v44 < 0; v44++) {
                }
                try {
                } catch(v45) {
                }
            }
            v2.__proto__ = 13.37;
            const v46 = v32 + 1;
            // v46 = .primitive
            v32 = v46;
        } while (v32 < 8);
    }
    do {
        const v47 = v28 + 1;
        // v47 = .primitive
        v28 = Uint16Array;
    } while (v28 < 3);
    for (const v48 in 13.37) {
    }
    return v14;
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v51 = v50;
const v52 = v1(v51);
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
