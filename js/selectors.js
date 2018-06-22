'use-strict';
//add your code here

function h1Selector(){
  return $('h1')
}

function liInOlSelector(){
  return $('ol li')
}

function linkSelector(){
  return $('a','#box4','.box5')
}

function imageSelector(){
  return $("[alt='cat sleeping']")
}

function checkboxInputSelector(){
  return $('input[type=checkbox]')
}