function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {constructor:"symbol",length:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = [];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v11 = {valueOf:v10,length:13.37,d:127,e:127};
// v11 = .object(ofGroup: Object, withProperties: ["d", "length", "valueOf", "e", "__proto__"])
let v12 = v11;
function v17(v18,v19) {
    const v20 = v18 in v17;
    // v20 = .boolean
    const v26 = [3156875969,3156875969,1337,DataView];
    // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v27 = {constructor:v26,c:v26,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v27 = .object(ofGroup: Object, withProperties: ["constructor", "e", "c", "__proto__", "a", "d"])
    for (let v32 = 0; v32 < 10; v32++) {
    }
    let v36 = 0;
    for (const v37 in "boolean") {
        let v40 = 0;
        do {
            try {
                let v43 = 0;
                const v45 = [1337,1337,1337,1337];
                // v45 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                const v47 = Object.freeze(v45);
                // v47 = .undefined
                do {
                    const v48 = v43 + 1;
                    // v48 = .primitive
                    v43 = v48;
                } while (v43 < 7);
            } catch(v49) {
                let v52 = 0;
                while (v52 < 10) {
                    for (let v56 = 0; v56 < 0; v56++) {
                    }
                }
                try {
                } catch(v57) {
                }
            }
            const v58 = v40 + 1;
            // v58 = .primitive
            v40 = v58;
        } while (v40 < 8);
    }
    do {
        const v59 = DataView + 1;
        // v59 = .primitive
        v36 = v59;
    } while (v36 < 3);
    for (const v63 in "object") {
    }
}
const v72 = [1337];
// v72 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v74 = v72;
const v80 = v17(v74);
// v80 = .unknown
const v81 = Reflect.preventExtensions(v3);
// v81 = .boolean
const v82 = Array(3156875969);
// v82 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v83 = {get:v17,ownKeys:v80,deleteProperty:v17,construct:v80,defineProperty:v80,set:v80,call:v17,setPrototypeOf:v17};
// v83 = .object(ofGroup: Object, withProperties: ["defineProperty", "construct", "set", "ownKeys", "__proto__"], withMethods: ["call", "setPrototypeOf", "deleteProperty", "get"])
const v85 = new Proxy(v9,v83);
// v85 = .unknown
const v87 = [13.37,13.37,13.37,13.37,13.37];
// v87 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v88 = (1337)[1337];
// v88 = .unknown
const v90 = v17(1337,1337);
// v90 = .unknown
}
%NeverOptimizeFunction(main);
main();
