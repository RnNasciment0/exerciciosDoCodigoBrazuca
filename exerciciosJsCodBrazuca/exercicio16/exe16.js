function ehPalindromo(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const strReversa = str.split('').reverse().join('');
    return str === strReversa;
}