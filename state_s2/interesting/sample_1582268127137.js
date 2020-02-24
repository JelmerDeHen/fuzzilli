function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v2(v3,v4) {
    const v6 = [13.37,13.37,13.37];
    // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v8 = [1337,1337,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v9 = [v6,v8];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v11 = new WeakSet(v9);
    // v11 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["delete", "has", "add"])
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    let v22 = 0;
    const v27 = Object.__proto__;
    // v27 = .unknown
    for (const v29 in "boolean") {
        let v32 = 0;
        do {
            let v34 = 0;
            const v35 = v34 + 1;
            // v35 = .primitive
            v34 = v35;
            const v39 = {length:"N0Xx92zvHQ"};
            // v39 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v40 = {constructor:13.37,length:13.37,__proto__:v39,toString:Number,a:"N0Xx92zvHQ"};
            // v40 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "length"], withMethods: ["toString"])
            const v47 = {length:"N0Xx92zvHQ"};
            // v47 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v48 = {constructor:13.37,length:13.37,__proto__:v47,toString:Number,a:"N0Xx92zvHQ"};
            // v48 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
            let v50 = 0;
            const v51 = v50 + 1;
            // v51 = .primitive
            v50 = v51;
            const v52 = {length:"N0Xx92zvHQ"};
            // v52 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v53 = {constructor:13.37,length:13.37,__proto__:v52,toString:Number,a:"N0Xx92zvHQ"};
            // v53 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "length"], withMethods: ["toString"])
            "N0Xx92zvHQ"[1337] = 1024;
            let v56 = 0;
            const v57 = v11.has();
            // v57 = .boolean
            const v58 = v56 + 1;
            // v58 = .primitive
            v56 = v58;
            delete "N0Xx92zvHQ"[-9007199254740991];
            let v60 = 0;
            const v61 = v60 + 1;
            // v61 = .primitive
            v60 = v61;
            const v62 = v32 + 1;
            // v62 = .primitive
            v32 = v62;
        } while (v32 < 8);
    }
}
const v64 = [1337];
// v64 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v65 = v64;
const v66 = v2(v65);
// v66 = .unknown
const v67 = v2();
// v67 = .unknown
}
%NeverOptimizeFunction(main);
main();
