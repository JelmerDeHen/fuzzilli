function main() {
function v1(v2,v3) {
    const v5 = v1.toLocaleString();
    // v5 = .unknown
    const v6 = eval(v5);
    // v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    const v9 = gc(...arguments);
    // v9 = .undefined
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
}
let v15 = 0;
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
const v20 = v15 + 1;
// v20 = .primitive
v15 = v20;
const v21 = v1();
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
