'use strict';

const formatDate = function(date) {
    const temp    = new Date(date);
    const day     = temp.getDate();
    const month   = temp.getMonth();
    
    return day + '.' + month + '.';
}

const getWeekNumber = function() {
    const date    = new Date();
    const day     = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - day);
    const year    = new Date(Date.UTC(date.getUTCFullYear(),0,1));
    
    return Math.ceil((((date - year) / 86400000) + 1)/7);
};

const getFirstWeekday = function() {
    const date        = new Date();
    const weekstart   = date.getDate() - date.getDay() + 1;
    const monday      = new Date(date.setDate(weekstart));  

    return formatDate(date);
}

const getLastWeekday = function() {
    const date        = new Date();
    const weekstart   = date.getDate() - date.getDay() + 1;
    const weekend     = weekstart + 6;
    const sunday      = new Date(date.setDate(weekend));
    
    return formatDate(sunday);
}

module.export = {
    formatDate : formatDate,
    getWeekNumber : getWeekNumber,
    getFirstWeekday : getFirstWeekday,
    getLastWeekday : getLastWeekday
}