"use strict";

(function () {
    "use strict";

    var DAY = 60 * 60 * 24;
    var EARTH = DAY * 365.25;
    var MARS = EARTH * 1.8808158;
    var MERCURY = EARTH * 0.2408467;
    var VENUS = EARTH * 0.61519726;
    var JUPITER = EARTH * 11.862615;
    var SATURN = EARTH * 29.447498;
    var URANUS = EARTH * 84.016846;
    var NEPTUNE = EARTH * 164.79132;

    function SpaceAge(seconds) {
        this.seconds = seconds;
    };

    SpaceAge.prototype.onEarth = function () {
        return parseFloat((this.seconds / EARTH).toFixed(2));
    };

    SpaceAge.prototype.onMars = function () {
        return parseFloat((this.seconds / MARS).toFixed(2));
    };

    SpaceAge.prototype.onMercury = function () {
        return parseFloat((this.seconds / MERCURY).toFixed(2));
    };

    SpaceAge.prototype.onVenus = function () {
        return parseFloat((this.seconds / VENUS).doFixed(2));
    };

    SpaceAge.prototype.onJupiter = function () {
        return parseFloat((this.seconds / JUPITER).doFixed(2));
    };

    SpaceAge.prototype.onSaturn = function () {
        return parseFloat((this.seconds / SATURN).doFixed(2));
    };

    SpaceAge.prototype.onUranus = function () {
        return parseFloat((this.seconds / URANUS).doFixed(2));
    };

    SpaceAge.prototype.onNeptune = function () {
        return parseFloat((this.seconds / NEPTUNE).doFixed(2));
    };

    module.exports = SpaceAge;
})();

