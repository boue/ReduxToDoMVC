import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

//Mock the document and the window objects, normally provided by the browser
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

//Tell chai that we are using immutable data structures with the package 
chai.use(chaiImmutable);