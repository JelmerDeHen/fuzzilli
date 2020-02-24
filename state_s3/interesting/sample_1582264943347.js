function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {b:v7,length:1337,valueOf:1337,toString:RegExp};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "length"], withMethods: ["toString"])
const v9 = {length:v4,valueOf:v8,c:v6,e:1337,__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "c", "e", "valueOf"])
let v10 = v9;
function v12(v13,v14) {
    let v21 = 0;
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            try {
                let v28 = 0;
                do {
                    const v29 = v28 + 1;
                    // v29 = .primitive
                    v28 = v29;
                } while (v28 < 7);
            } catch(v30) {
                let v33 = 0;
            }
            const v37 = v25 + 1;
            // v37 = .primitive
            v25 = v37;
        } while (v25 < 8);
    }
    do {
        const v38 = v21 + 1;
        // v38 = .primitive
        v21 = v38;
    } while (v21 < 3);
    for (const v40 in "object") {
    }
    return v21;
}
function v42(v43,v44) {
    for (let v49 = 0; v49 < 10; v49++) {
    }
    let v52 = 0;
    for (const v53 in "boolean") {
        const v57 = [13.37,13.37,13.37];
        // v57 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v59 = [1337,1337,1337,1337];
        // v59 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v60 = [];
        // v60 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v61 = {constructor:"symbol",length:9007199254740993};
        // v61 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
        const v62 = {};
        // v62 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v63 = v62;
        const v64 = {};
        // v64 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v65 = v64;
        const v68 = [13.37,13.37,13.37];
        // v68 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v69 = {};
        // v69 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v73 = {};
        // v73 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v75 = [];
        // v75 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v78 = "object".constructor;
        // v78 = .function()
        const v79 = v78(v75,v73,"symbol",Reflect);
        // v79 = .unknown
        const v80 = {};
        // v80 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v81 = v80;
        const v85 = {..."symbol",...v80,..."symbol",...1337,...v81};
        // v85 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["startsWith", "repeat", "indexOf", "endsWith", "slice", "padStart", "lastIndexOf", "split", "codePointAt", "replace", "padEnd", "charAt", "concat", "includes", "substring", "charCodeAt", "trim"])
        const v86 = v69 % 1337;
        // v86 = .number
        const v88 = {};
        // v88 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v89 = gc();
        // v89 = .undefined
        const v90 = Reflect.__proto__;
        // v90 = .unknown
        const v91 = (9007199254740993)[13.37];
        // v91 = .unknown
        const v93 = v79 >> Object;
        // v93 = .integer
        let v95 = 0;
        const v96 = v95 + 1;
        // v96 = .primitive
        let v99 = 0;
        do {
            let v101 = 0;
            const v102 = v101 + 1;
            // v102 = .primitive
            for (const v104 of "pvU0UUjoya") {
            }
            const v105 = v99 + 1;
            // v105 = .primitive
            v99 = v105;
        } while (v99 < 8);
    }
    const v106 = v52 + 1;
    // v106 = .primitive
    const v109 = 1337 == 13.37;
    // v109 = .boolean
    const v111 = Object();
    // v111 = .object()
    let v113 = 0;
    let v115 = 0;
    const v116 = v115 + 1;
    // v116 = .primitive
    let v118 = 0;
    const v119 = v118 + 1;
    // v119 = .primitive
}
const v122 = [1337];
// v122 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v123 = v122;
const v124 = v42(v123);
// v124 = .unknown
const v125 = v42(1024,4.0);
// v125 = .unknown
const v128 = [1337];
// v128 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v129 = v128;
const v130 = v12(v129);
// v130 = .unknown
const v131 = v12(1024,4.0);
// v131 = .unknown
}
%NeverOptimizeFunction(main);
main();
