"use strict";

// source-map support for ES6 compiled code
require('source-map-support/register');

// expose Settings object to allow overriding of some basic defaults
exports.Settings = require("./settings");


// === Include Park Libs ===

// Walt Disney World Resort
var WaltDisneyWorldEpcot = require("./disney/waltdisneyworldepcot");
var WaltDisneyWorldMagicKingdom = require("./disney/waltdisneyworldmagickingdom");
var WaltDisneyWorldHollywoodStudios = require("./disney/waltdisneyworldhollywoodstudios");
var WaltDisneyWorldAnimalKingdom = require("./disney/waltdisneyworldanimalkingdom");

// Disneyland Paris
var DisneylandParisMagicKingdom = require("./disney/disneylandparismagickingdom");
var DisneylandParisWaltDisneyStudios = require("./disney/disneylandpariswaltdisneystudios");

// Shanghai Disney Resort
var ShanghaiDisneyResortMagicKingdom = require("./disney/shanghaidisneyresort");


// === Expose Parks ===

// Array of available theme parks in the API
//  we manually add each one of these as any nice IDEs that "intellisense" will pick them up :)
exports.AllParks = [
    // Walt Disney World Resort
    WaltDisneyWorldMagicKingdom,
    WaltDisneyWorldEpcot,
    WaltDisneyWorldHollywoodStudios,
    WaltDisneyWorldAnimalKingdom,
    // Disneyland Paris
    DisneylandParisMagicKingdom,
    DisneylandParisWaltDisneyStudios,
    // Shanghai Disney Resort 
    ShanghaiDisneyResortMagicKingdom,
];

// export all parks by name
exports.Parks = {
    // Walt Disney World Resort
    "WaltDisneyWorldMagicKingdom": WaltDisneyWorldMagicKingdom,
    "WaltDisneyWorldEpcot": WaltDisneyWorldEpcot,
    "WaltDisneyWorldHollywoodStudios": WaltDisneyWorldHollywoodStudios,
    "WaltDisneyWorldAnimalKingdom": WaltDisneyWorldAnimalKingdom,
    // Disneyland Paris
    "DisneylandParisMagicKingdom": DisneylandParisMagicKingdom,
    "DisneylandParisWaltDisneyStudios": DisneylandParisWaltDisneyStudios,
    // Shanghai Disney Resort
    "ShanghaiDisneyResortMagicKingdom": ShanghaiDisneyResortMagicKingdom,
};