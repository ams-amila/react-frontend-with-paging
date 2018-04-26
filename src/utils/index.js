/**
 * Created by amsamila on 6/24/2017.
 */
import $ from 'jquery';

export const formatDate = (date) => {
    let d = new Date(date);
    return d.toLocaleDateString();
};

export const scrollToTop = () => {
    $("html, body").animate({scrollTop: 0}, "slow");
};

export const shortenString = (str, length = 50, indicator = '...') => `${str.substr(0, length)}${str.length > length ? indicator : ''}`;
