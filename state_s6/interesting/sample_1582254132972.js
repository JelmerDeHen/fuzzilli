function main() {
Object.prototype = Uint8Array;
}
%NeverOptimizeFunction(main);
main();
