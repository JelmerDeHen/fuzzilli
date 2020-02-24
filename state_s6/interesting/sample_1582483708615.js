function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v12 = {__proto__:v11,a:v11,constructor:Number,e:13.37,length:"number",b:13.37};
    // v12 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "a", "length", "e"], withMethods: ["constructor"])
    const v13 = 13.37 && v12;
    // v13 = .boolean
    let v16 = 127;
    const v19 = String.fromCharCode(v16,4159299528);
    // v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    let v21 = "p8Xp0R1moN";
    v21 = v19;
    const v22 = JSON.stringify(v21);
    // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    v12[v22] = 13.37;
    let v24 = v13;
    const v25 = JSON.stringify(v24);
    // v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v27 = JSON.parse(v25,2435262485);
    // v27 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
