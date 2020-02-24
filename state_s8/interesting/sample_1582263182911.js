function main() {
for (const v2 in "undefined") {
    let v4 = 0;
    function v5(v6,v7) {
    }
    try {
        const v8 = v4 in "undefined";
        // v8 = .boolean
    } catch(v9) {
    }
    const v10 = !0;
    // v10 = .boolean
    try {
        const v11 = Promise(...v10,...v5);
        // v11 = .unknown
    } catch(v12) {
    }
}
}
%NeverOptimizeFunction(main);
main();
