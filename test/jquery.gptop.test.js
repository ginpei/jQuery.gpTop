var gpTop = com.ginpen.gpTop;
var $spacer = $('<div id="spacer" />')
      .height(9999)

function build($el, settings) {
  if (!$el) {
    $el = $('<div />');
  }
  return gpTop._init($el, settings);
}

module('units', {
  setup: function() {
    $spacer.appendTo('body');
    g_inst = build();
  },
  teardown: function() {
    $spacer.remove();
  }
});

test('general', function() {
  ok(com.ginpen.gpTop, 'name space');

  var $el = $('<div />');
  equal($el.gpTop()[0], $el[0], 'method chain');
});

test('get scroll top', function() {
  $(window).scrollTop(100);
  equal(g_inst._getScrollTop(), 100, '100');
});

test('get screen height', function() {
  ok(g_inst._getScreenHeight() > 0, 'common');
});

test('is visible', function() {
  ok(!g_inst._isVisible($('<div />')), 'new');
  ok(g_inst._isVisible($('<div />').data('gpTop.visible', true)), 'true');
  ok(!g_inst._isVisible($('<div />').data('gpTop.visible', false)), 'false');
});
