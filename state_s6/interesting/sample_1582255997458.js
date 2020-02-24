function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = 0;
            const v12 = v11 + 1;
            // v12 = .primitive
            v11 = v12;
            const v13 = v8 + 1;
            // v13 = .primitive
            v8 = v13;
        } while (v8 < 8);
    }
    for (let v18 = 0; v18 < 100; v18++) {
    }
    const v22 = Symbol.toPrimitive;
    // v22 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    "a"[v22] = Number;
    let v28 = 0;
    for (const v29 in "boolean") {
        let v32 = 0;
        const v33 = v32 + 1;
        // v33 = .primitive
        v32 = v33;
        let v36 = 0;
    }
    const v40 = v28 + 1;
    // v40 = .primitive
    v28 = v40;
}
for (let v44 = 0; v44 < 100; v44++) {
    const v45 = v1();
    // v45 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
