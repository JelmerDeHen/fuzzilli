function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,Map];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["MAX_VALUE",v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:"MAX_VALUE",length:v6,c:v7};
// v8 = .object(ofGroup: Object, withProperties: ["b", "length", "__proto__", "c"])
const v9 = {constructor:v4,c:13.37,d:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "c", "constructor"])
let v10 = v8;
function v11(v12,v13) {
    const v16 = {length:"N0Xx92zvHQ"};
    // v16 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            let v26 = 0;
            const v27 = v26 + 1;
            // v27 = .primitive
            v26 = v27;
            const v31 = {length:"N0Xx92zvHQ"};
            // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v32 = {constructor:13.37,length:13.37,__proto__:v31,toString:Number,a:"N0Xx92zvHQ"};
            // v32 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
            const v39 = {length:"N0Xx92zvHQ"};
            // v39 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v40 = {constructor:13.37,length:13.37,__proto__:v39,toString:Number,a:"N0Xx92zvHQ"};
            // v40 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "a"], withMethods: ["toString"])
            let v43 = 0;
            const v44 = v43 + 1;
            // v44 = .primitive
            v43 = v44;
            const v45 = {length:"N0Xx92zvHQ"};
            // v45 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v46 = {constructor:13.37,length:13.37,__proto__:v45,toString:Number,a:"N0Xx92zvHQ"};
            // v46 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
            let v49 = 0;
            const v50 = v49 + 1;
            // v50 = .primitive
            v49 = v50;
            const v51 = v23 + 1;
            // v51 = .primitive
            v23 = v51;
        } while (v23 < 8);
    }
    return Map;
}
const v53 = [1337];
// v53 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v54 = v53;
const v55 = v11(v54);
// v55 = .unknown
const v56 = v11();
// v56 = .unknown
delete "MAX_VALUE".constructor;
v4.__proto__ = Map;
const v57 = v6.keys();
// v57 = .object()
let v58 = v6;
if (v55) {
    delete v54[-128];
    v58 = v54;
} else {
    let v61 = 0;
    while (v61 < 6) {
        const v62 = ~v56;
        // v62 = .boolean
        const v63 = v61 + 1;
        // v63 = .primitive
        v61 = v63;
    }
    v58 = v61;
}
const v64 = v11();
// v64 = .unknown
}
%NeverOptimizeFunction(main);
main();
