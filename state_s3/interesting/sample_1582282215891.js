function main() {
try {
    const v4 = {valueOf:4.0,length:"search"};
    // v4 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__"])
    JSON[v4] = 13.37;
    const v7 = JSON.stringify(JSON,JSON,"search");
    // v7 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    const v8 = JSON.parse(v7,Uint32Array);
    // v8 = .unknown
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();
