function bubble(ary) {
    var i,
        j,
        len,
        jen,
        temp;

    for (i = 0, len = ary.length; i < len; i++) {
        jen = len - i - 1;
        for (j = 0; j < jen; j++) {
            if (ary[j] > ary[j+1])
            {
                temp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = temp;
            }
        }
    }

    return ary;
}

function shaker(ary) {
    var l = 0,
        r = ary.length - 1,
        last,
        i,
        temp;

    while (true) {
        last = -1;

        for (i = l; i < r; i++) {
            if(ary[i] > ary[i+1]) {
                temp = ary[i];
                ary[i] = ary[i+1];
                ary[i+1] = temp;
                last = i;
            }
        }

        if(last == -1) {
            return ary;
        }

        r = last;

        last = -1;

        for(i = r; l < i; i--) {
            if(ary[i-1] > ary[i]) {
                temp = ary[i-1];
                ary[i-1] = ary[i];
                ary[i] = temp;
                last = i;
            }
        }

        if(last == -1) {
            return ary;
        }

        l = last;
    }
}

function comb(ary) {
    var sf = 1.3,
        gap = ary.length,
        flag = true,
        i,
        j,
        temp,
        len;

    while(flag || gap > 1) {
        gap = Math.floor(gap / sf);

        if (gap < 1) {
            gap = 1;
        }
        // if (gap === 9 || gap === 10) {
        //     gap = 11;    //　コムソート11の場合
        // }
        flag = true;

        for (i = 0, len = ary.length - gap; i <= len; i++)
        {
            j = i + gap;
            if (ary[i] > ary[j]) {
                temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp;
                flag = false;
            }
        }
    }

    return ary;
}
function comb11(ary) {
    var sf = 1.3,
        gap = ary.length,
        flag = true,
        i,
        j,
        temp,
        len;

    while(flag || gap > 1) {
        gap = Math.floor(gap / sf);

        if (gap < 1) {
            gap = 1;
        }
        if (gap === 9 || gap === 10) {
            gap = 11;    //　コムソート11の場合
        }
        flag = true;

        for (i = 0, len = ary.length - gap; i <= len; i++)
        {
            j = i + gap;
            if (ary[i] > ary[j]) {
                temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp;
                flag = false;
            }
        }
    }

    return ary;
}

function gnome(ary) {
    var i = 1,
        size = ary.length,
        temp;

    while (i < size) {
        if (ary[i - 1] <= ary[i]) {
            i++;
        }
        else {
            temp = ary[i - 1];
            ary[i - 1] = ary[i];
            ary[i] = temp;
            i--;

            if (i === 0) {
                i += 2;
            }
        }
    }

    return ary;
}

function selection(ary) {
    var min,
        i,
        j,
        len,
        temp;

    for (i = 0, len = ary.length; i < len; i++) {
        min = i;

        for (j = i + 1; j < len; j++) {
            if (ary[j] < ary[min]) {
                min = j;
            }
        }

        temp = ary[i];
        ary[i] = ary[min];
        ary[min] = temp;
    }

    return ary;
}

function insertion(ary) {
    var i = 1,
        j,
        len = ary.length,
        temp;

    for (; i < len; i++) {
        temp = ary[i];

        if (ary[i - 1] > temp) {
            j = i;

            do {
                ary[j] = ary[j - 1];
                j--;
            } while (j > 0 && ary[j - 1] > temp);

            ary[j] = temp;
        }
    }

    return ary;
}

function shell(ary) {
    var h = ary.length / 2,
        i,
        j,
        len,
        temp;

    for (; h > 0; h /= 2) {
        for (i = h, len = ary.length; i < len; i++) {
            temp = ary[i];
            j = i;

            while ((j >= h) && (temp < ary[j-h])) {
                ary[j] = ary[j-h];
                j -= h;
            }
            ary[j] = temp;
        }
    }

    return ary;
}

function marge(ary) {
    if (ary.length < 2) {
        return ary;
    }

    var left = marge(ary.splice(0, ary.length >>> 1)),
        right = marge(ary.splice(0));

    while (left.length && right.length) {
        ary.push(left[0] <= right[0] ? left.shift() : right.shift());
    }

    return ary.concat(left, right);
}

function quick(ary) {
    _quick(ary, 0, ary.length - 1);

    return ary;
}

function _quick(ary, start,end) {
    var x = ary[Math.floor((start + end) / 2)],
        i = start,
        j = end,
        n;

    while (true) {
        while (ary[i] < x) {
            i++;
        }
        while (x < ary[j]) {
            j--;
        }
        if (i >= j) {
            break;
        }

        n = ary[i];
        ary[i] = ary[j];
        ary[j] = n;
        i++;
        j--;
    }
    if (start < i - 1) {
        _quick(ary, start,i - 1);
    }
    if (j + 1 < end) {
        _quick(ary, j + 1,end);
    }
}

// console.log('bubble', bubble([-30,10,5,-99,44,65,31,-78]).toString());
// console.log('shaker', shaker([-30,10,5,-99,44,65,31,-78]).toString());
// console.log('comb', comb([-30,10,5,-99,44,65,31,-78]).toString());
// console.log('comb11', comb11([-30,10,5,-99,44,65,31,-78]).toString());
// console.log('gnome', gnome([-30,10,5,-99,44,65,31,-78]).toString());
// console.log('selection', selection([-30,10,5,-99,44,65,31,-78]).toString());
// console.log('insertion', insertion([-30,10,5,-99,44,65,31,-78]).toString());
// console.log('shell', shell([-30,10,5,-99,44,65,31,-78]).toString());
// console.log('marge', marge([-30,10,5,-99,44,65,31,-78]).toString());
console.log('quick', quick([-30,10,5,-99,44,65,31,-78]).toString());
