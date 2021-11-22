function NOD(a,b) {
    if ( b===0) return a;
    if (a>b)
        return NOD (b, a % b)
    else
        return NOD(b, a % b)
}
console.log();