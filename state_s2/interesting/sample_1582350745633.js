function main() {
Symbol.toString = -571101210;
delete Symbol.toString;
}
%NeverOptimizeFunction(main);
main();
