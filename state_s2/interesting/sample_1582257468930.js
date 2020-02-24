function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v8 = 0;
            const v9 = 0 >> v8;
            // v9 = .integer
            const v12 = {constructor:"symbol",length:9007199254740993};
            // v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
            const v13 = v12[3196103978];
            // v13 = .unknown
            v8 = v9;
            let v16 = 0;
            do {
                const v17 = v16 + 1;
                // v17 = .primitive
                v16 = v17;
            } while (v16 < 7);
            const v18 = v7 + 1;
            // v18 = .primitive
            v7 = v18;
        } while (v7 < 8);
    }
}
const v19 = v0();
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
