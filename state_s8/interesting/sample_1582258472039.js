function main() {
for (let v3 = 0; v3 < 8; v3++) {
    let v6 = 0;
    do {
        const v11 = (1337).__proto__;
        // v11 = .unknown
        const v13 = v11.toLocaleString(0);
        // v13 = .unknown
        const v14 = v6 + 1;
        // v14 = .primitive
        v6 = v14;
    } while (v6 < 8);
}
}
%NeverOptimizeFunction(main);
main();
