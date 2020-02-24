function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v6,Set,"asyncIterator"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {toString:v4,length:"asyncIterator"};
// v8 = .object(ofGroup: Object, withProperties: ["length", "toString", "__proto__"])
const v9 = {length:v7,c:v6,e:v8,toString:v8,__proto__:1337};
// v9 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "toString", "e", "length"])
let v10 = 1337;
function v22(v23,v24,v25,v26,v27) {
    'use strict'
    if (v24) {
    } else {
        let v35 = 0;
        function v37(v38,v39) {
            let v48 = 0;
            let v51 = 0;
            const v73 = new Int16Array(19873);
            // v73 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
            for (let v81 = 0; v81 < 100; v81++) {
                const v82 = v73.copyWithin(3,v35,10);
                // v82 = .undefined
                const v84 = v6.findIndex(v39);
                // v84 = .integer
                const v85 = Symbol(v27);
                // v85 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
            }
            const v86 = 3 >> v6;
            // v86 = .integer
            return v35;
        }
        const v89 = v35 + 1;
        // v89 = .primitive
        v35 = v89;
    }
    return -1247882257;
}
const v100 = v22();
// v100 = .unknown
const v115 = v7[-536870912];
// v115 = .unknown
const v117 = {get:v115};
// v117 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v119 = Object.defineProperty(v4,3670355543,v117);
// v119 = .undefined
const v120 = gc();
// v120 = .undefined
}
%NeverOptimizeFunction(main);
main();
