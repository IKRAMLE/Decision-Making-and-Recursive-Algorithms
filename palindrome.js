function isPalindrome(str, start = 0, end = str.length - 1) {
    str = str.toLowerCase();
    if (start >= end) {
        return true;
    }
    if (str[start] === ' ') {
        return isPalindrome(str, start + 1, end);
    }
    if (str[end] === ' ') {
        return isPalindrome(str, start, end - 1);
    }
    if (str[start] !== str[end]) {
        return false;
    }
    return isPalindrome(str, start + 1, end - 1);
}

