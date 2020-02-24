function main() {
try {
    const v4 = {valueOf:4.0,length:"search"};
    // v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
    JSON[v4] = 13.37;
    const v7 = JSON.stringify(JSON,JSON,"search");
    // v7 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v8 = JSON.parse(v7,Uint32Array);
    // v8 = .unknown
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();
