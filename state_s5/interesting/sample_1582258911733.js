function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {e:Int16Array,c:1337,valueOf:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "c", "valueOf"])
const v9 = {c:Int16Array,__proto__:v7,length:Int16Array};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "c"])
let v10 = 1337;
const v21 = [1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v22 = {b:13.37,d:1607264097,e:1607264097,constructor:v21,valueOf:WeakSet};
// v22 = .object(ofGroup: Object, withProperties: ["b", "constructor", "valueOf", "__proto__", "d", "e"])
let v25 = 0;
while (v25 < 0) {
    v4[v6] = 1607264097;
    const v26 = v25 + 1;
    // v26 = .primitive
    v25 = v26;
}
const v27 = v9[4294967297];
// v27 = .unknown
v22.d = 0;
let v41 = 0;
const v42 = v41 + 1;
// v42 = .primitive
v41 = v42;
let v53 = 0;
do {
    const v54 = v53 + 1;
    // v54 = .primitive
    v53 = v54;
} while (v53 != 7);
let v56 = 0;
const v57 = v56 + 1;
// v57 = .primitive
v56 = v57;
let v60 = 0;
do {
    let v61 = v41;
    if (v27) {
        const v63 = Symbol.toPrimitive;
        // v63 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        "undefined"[v63] = v63;
        v61 = Symbol;
    } else {
        let v66 = 0;
        while (v66 < 4) {
            Object[1] = 1337;
            const v67 = v66 + 1;
            // v67 = .primitive
            v66 = v67;
        }
        v61 = 1337;
    }
    let v70 = 0;
    do {
        const v71 = "object".padEnd(7,"undefined");
        // v71 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        const v72 = v70 + 1;
        // v72 = .primitive
        v70 = v72;
    } while (v70 < 2);
    const v73 = typeof 1337;
    // v73 = .string
    const v75 = v73 === "number";
    // v75 = .boolean
    "undefined".toString = v70;
    const v76 = {ownKeys:Object};
    // v76 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys"])
    const v78 = new Proxy(Object,v76);
    // v78 = .unknown
    const v79 = v57 + 1;
    // v79 = .primitive
    const v80 = v60 + 1;
    // v80 = .primitive
    v60 = v80;
} while (v60 < 2);
let v81 = 1607264097;
try {
    let v84 = 0;
    while (v84 < 0) {
        for (const v86 in "object") {
        }
        for (let v90 = 0; v90 < 1; v90++) {
            function v91(v92,v93,v94) {
            }
        }
    }
} catch(v95) {
}
}
%NeverOptimizeFunction(main);
main();
