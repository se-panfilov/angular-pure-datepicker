exports.CommonUtils = (function () {
    'use strict';

    var exports = {
        isValidNumber: function (num) {
            var isNumber = !isNaN(parseFloat(num));
            var isNotInfinity = isFinite(num);
            return isNumber && isNotInfinity;
        },
        getArrayOfNumbers: function (start, end) {
            if (!exports.isValidNumber(start) || !exports.isValidNumber(end)) return [];

            var isReverse = (start > end);
            var targetLength = isReverse ? (start - end) + 1 : (end - start ) + 1;
            var arr = new Array(targetLength);
            var b = Array.apply(null, arr);
            var result = b.map(function (discard, n) {
                return (isReverse) ? n + end : n + start;
            });

            return (isReverse) ? result.reverse() : result;
        },
        intArraySort: function (arr, direction) {
            var DESC = 'desc';

            function desc(a, b) {
                return b - a;
            }

            switch (direction) {
                default:
                    return arr.sort(function (a, b) {
                        return a - b;
                    });
                case DESC:
                    return arr.sort(desc);
            }
        },
        getIntArr: function (length) {
            if (!length && length !== 0) return;
            return length ? exports.getIntArr(length - 1).concat(length) : [];
        }
    };

    return exports;
})();