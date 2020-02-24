function main() {
for (const v2 in "unscopable") {
    function v3(v4,v5) {
        const v8 = 4294967297 + "iterator";
        // v8 = .primitive
        for (const v10 in "boolean") {
            let v13 = 0;
            let v16 = 0;
            const v17 = v16 + 1;
            // v17 = .primitive
            v16 = v17;
            const v18 = v8 + 1;
            // v18 = .primitive
            v13 = v18;
        }
    }
    let v19 = Int32Array;
    const v20 = v3(v19);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
