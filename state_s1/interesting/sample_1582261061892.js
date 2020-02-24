function main() {
for (const v1 in "boolean") {
    let v5 = 0;
    const v7 = v5 + 1;
    // v7 = .primitive
    const v10 = (1337)["__proto__"];
    // v10 = .unknown
    const v12 = Object.freeze(v10);
    // v12 = .undefined
    v5 = v7;
    let v16 = 0;
}
}
%NeverOptimizeFunction(main);
main();
