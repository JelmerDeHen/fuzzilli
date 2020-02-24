function main() {
const v2 = new Int8Array(2041210309);
const v4 = v2.sort(Object);
}
%NeverOptimizeFunction(main);
main();
