function main() {
let v2 = "isConcatSpreadable";
let v5 = 971212035;
for (const v7 in v2) {
    try {
        const v8 = typeof -2191158840;
        // v8 = .string
        const v9 = v8 === Uint8Array;
        // v9 = .boolean
        const v10 = v5.toLocaleString(v7,v9,1337);
        // v10 = .unknown
    } catch(v11) {
    }
}
}
%NeverOptimizeFunction(main);
main();
