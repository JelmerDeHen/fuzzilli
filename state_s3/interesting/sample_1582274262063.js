function main() {
function v0(v1,v2,v3,v4,v5) {
    'use strict'
    for (const v8 in "boolean") {
        const v11 = undefined != undefined;
        // v11 = .boolean
        let v15 = 0;
        const v16 = v15 + 1;
        // v16 = .primitive
        v15 = v16;
        let v20 = 0;
        do {
            const v21 = v20 + 1;
            // v21 = .primitive
            const v24 = eval(1337);
            // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            v20 = v21;
        } while (v20 < 8);
    }
}
const v25 = v0();
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
