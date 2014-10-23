//precompiled Handlebars template from widget.handlebars
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['widget'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <li>\n    <h3>"
    + escapeExpression(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"day","hash":{},"data":data}) : helper)))
    + "</h3>\n    <span class=\"high\">"
    + escapeExpression(((helper = (helper = helpers.high || (depth0 != null ? depth0.high : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"high","hash":{},"data":data}) : helper)))
    + "&deg;</span> /\n    <span class=\"low\">"
    + escapeExpression(((helper = (helper = helpers.low || (depth0 != null ? depth0.low : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"low","hash":{},"data":data}) : helper)))
    + "&deg;</span>\n  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<h1>"
    + escapeExpression(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"city","hash":{},"data":data}) : helper)))
    + "</h1>\n<article class=\"current\">\n  <h2 class=\"temperature\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.condition : depth0)) != null ? stack1.temp : stack1), depth0))
    + "&deg;</h2>\n  <p class=\"conditions\">\n    <img src=\"http://l.yimg.com/a/i/us/we/52/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.condition : depth0)) != null ? stack1.code : stack1), depth0))
    + ".gif\"/>\n    "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.condition : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n  </p>\n</article>\n<ol class=\"weekly-forecast\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.forecast : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ol>\n";
},"useData":true});
})();
