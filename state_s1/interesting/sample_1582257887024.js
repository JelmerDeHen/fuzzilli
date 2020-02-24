function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v6,1337,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {constructor:-4294967295,length:1337,__proto__:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v9 = {a:-4294967295,e:13.37,__proto__:"dVmqACI+Vs",length:v4,b:-4294967295};
// v9 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "a", "b"])
let v10 = "dVmqACI+Vs";
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v14(v15,v16) {
    const v20 = [3156875969,3156875969,127,DataView];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v21 = {e:DataView,constructor:127,valueOf:127,d:v20};
    // v21 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d", "valueOf", "e"])
    let v27 = 0;
    for (const v28 in "boolean") {
        let v31 = 0;
        do {
            function v34(v35,v36,v37,v38,...v39) {
                v31 = 1337;
                v9.__proto__ = v7;
                return 7;
            }
            v4.__proto__ = v28;
            for (const v40 in v15) {
                let v41 = 0;
            }
            const v42 = {isExtensible:v34,getOwnPropertyDescriptor:v15,ownKeys:v16,defineProperty:Boolean,get:v34,apply:v15,set:v15,construct:Boolean,getPrototypeOf:v15};
            // v42 = .object(ofGroup: Object, withProperties: ["apply", "__proto__", "getPrototypeOf", "set", "getOwnPropertyDescriptor", "ownKeys"], withMethods: ["construct", "get", "defineProperty", "isExtensible"])
            const v44 = new Proxy(v34,v42);
            // v44 = .unknown
            let v47 = 0;
            do {
                const v48 = v42.construct(0,7,v27,v9,v34);
                // v48 = .unknown
                const v49 = v47 + 1;
                // v49 = .primitive
                v47 = v49;
            } while (v47 < 3);
            let v52 = 0;
            const v56 = {length:"N0Xx92zvHQ"};
            // v56 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v57 = {constructor:13.37,length:13.37,__proto__:v56,toString:Number,a:"N0Xx92zvHQ"};
            // v57 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
            let v58 = v57;
            const v62 = v52 + 1;
            // v62 = .primitive
            v52 = v62;
            let v63 = 0;
            const v64 = v63 + 1;
            // v64 = .primitive
            v63 = v64;
            for (let v68 = 0; v68 < 4; v68++) {
                let v69 = v68;
            }
            let v72 = 0;
            const v76 = v31 + 1;
            // v76 = .primitive
            v31 = v76;
        } while (v31 < 8);
        for (let v80 = 0; v80 < 1; v80++) {
            Boolean.prototype = 1;
        }
    }
    do {
        const v81 = v27 + 1;
        // v81 = .primitive
        v27 = v81;
    } while (v27 < "species");
    v7[DataView] = v27;
    const v83 = v16 & Boolean;
    // v83 = .integer
    v7[-4294967295] = Boolean;
    return v20;
}
const v85 = [1337];
// v85 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v86 = v85;
const v87 = v14(v86);
// v87 = .unknown
}
%NeverOptimizeFunction(main);
main();
