import Ember from 'ember';

export function breakLines (params) {
  let string = params[0];
  string = Ember.Handlebars.Utils.escapeExpression(string);
  string = string.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new Ember.Handlebars.SafeString(string);
}

export default Ember.HTMLBars.makeBoundHelper(breakLines);
