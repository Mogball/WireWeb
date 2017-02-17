var formatMoney = function (n, showPlus, hideDollar) {
    hideDollar = !!hideDollar;
    showPlus = !!showPlus;
    n /= 100;
    var s = n < 0 ? '—' : (showPlus ? '+' : '') + '';
    s += hideDollar ? '' : '$';
    var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(2)));
    var j;
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + ',' : '')
        + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',')
        + (2 ? '.' + Math.abs(n - i).toFixed(2).slice(2) : '');
};

var formatComma = function (n, c) {
    var s = n < 0 ? '—' : '';
    var i = String(parseInt(Math.abs(Number(n) || 0).toFixed(c)));
    var j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + ',' : '')
        + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',');
}


String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};

const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var formatDate = function (date, showYear) {
    var hour = date.getHours();
    var minute = date.getMinutes();
    var day = date.getDate();
    var month = date.getMonth();
    var year = !!showYear ? ", {0}".format(date.getYear()) : "";
    return "{0}:{1}{2}, {3} {4}{5}".format(
        hour == 0 ? 12 : hour > 12 ? hour - 12 : hour,
        minute >= 10 ? minute : '0' + minute,
        hour >= 12 ? 'pm' : 'am', monthMap[month], day, year);
};


exports.formatMoney = formatMoney;
exports.formatComma = formatComma;
exports.formatDate = formatDate;