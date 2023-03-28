// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function enterClicked() {
  // input
  const radius = parseInt(document.getElementById('radius-of-circle').value)
  const pi= parseInt(document.getElementById('3.14').value)

  // process
  const area = pi * radius * radius

  // output
  document.getElementById('area').innerHTML = 
    'Area is: ' + (pi * radius * radius) + ' cm²'
}