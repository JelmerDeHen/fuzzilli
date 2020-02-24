function main() {
function v2(v3,v4,v5) {
}
let v6 = this;
let v7 = v6;
const v10 = {get:v2};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(v7,"a",v10);
// v12 = .undefined
let v15 = 0;
while (v15 < 2) {
    for (let v19 = 0; v19 < 100; v19++) {
        const v20 = eval("a");
        // v20 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    }
    const v21 = v15 + 1;
    // v21 = .primitive
    v15 = v21;
}
}
%NeverOptimizeFunction(main);
main();
