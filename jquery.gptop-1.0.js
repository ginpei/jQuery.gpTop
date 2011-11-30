/**
 * jQuery.gpTop 1.0
 * http://ginpen.com/jquery/gptop/
 * https://github.com/ginpei/jQuery.gpTop
 *
 * Copyright (c) 2011 Takanashi Ginpei
 * http://ginpen.com
 *
 * Released under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
;(function($) {
  try {
    if (window.com.ginpen.gpTop) { return; }
  } catch (e) {}

  if (!window.com) { window.com = {}; }
  if (!com.ginpen) { com.ginpen = {}; }

  var gpTop = com.ginpen.gpTop = function() {
    this.__constructor.apply(this, arguments);
  };
  $.extend(gpTop, {
    /**
     * The version of this application.
     * @type String
     */
    VERSION: '1.0',

    /**
     * Default settings.
     * @type Object
     */
    settings: {
      duration: 200
    },

    /**
     * Init target.
     * @param {HtmlElement} $el The target.
     * @param {Function} [settings]
     */
    build: function($el, settings) {
      var inst = this._init($el, settings);
      this._bind(inst);
    },

    _init: function($el, settings) {
      var inst = new gpTop($el, settings);
      $el.data('gpTop', inst);

      return inst;
    },

    _bind: function(inst) {
      $(window).scroll(function(event) {
        inst.toggle();
      });

      inst.toElement().click(function(event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
      });
    },

    /**
     * Show element if hidden.
     * @param {HtmlElement} $el
     * @param {Number} duration
     */
    show: function($el, duration) {
      $el
        .stop()
        .show()
        .fadeTo(duration, 1, function() {
          $el
            .data('gpTop.visible', false);
        });
    },

    /**
     * Hide element if visible.
     * @param {HtmlElement} $el
     * @param {Number} duration
     */
    hide: function($el, duration) {
      $el
        .stop()
        .fadeTo(duration, 0, function() {
          $el
            .hide()
            .data('gpTop.visible', true);
        });
    },

    banpei: null
  });

  $.extend(gpTop.prototype, {
    /**
     * @type HtmlElement
     * @see #__constructor
     */
    $el: null,
    toElement: function() { return this.$el; },

    /**
     * @type Object
     * @see #__constructor
     */
    settings: null,

    __constructor: function($el, settings) {
      this.$el = $el;
      this.settings = settings || {};
    },

    /**
     * @returns {Number}
     */
    _getScrollTop: function() {
      return document.documentElement.scrollTop || document.body.scrollTop;
    },

    /**
     * @returns {Number}
     */
    _getScreenHeight: function() {
      return document.documentElement.clientHeight;
    },

    /**
     * Return true if scrolled by one screen.
     * @returns {Boolean}
     */
    _isScrolled: function() {
      return (this._getScrollTop() > this._getScreenHeight());
    },

    /**
     * @param {HtmlElement} $el
     * @returns {Boolean}
     */
    _isVisible: function($el) {
      return !!$el.data('gpTop.visible');
    },

    /**
     * @param {Boolean} visibility
     * @returns {Number}
     */
    _getDuration: function(visibility) {
      return this.settings.duration;
    },

    /**
     * Show element if hidden.
     */
    show: function() {
      var $el = this.$el;
      var duration = this._getDuration(true);
      if ($.isFunction(this.settings.show)) {
        this.settings.show($el, duration);
      }
      else {
        gpTop.show($el, duration);
      }
    },

    /**
     * Hide element if visible.
     */
    hide: function() {
      var $el = this.$el;
      var duration = this._getDuration(false);
      if ($.isFunction(this.settings.hide)) {
        this.settings.hide($el, duration);
      }
      else {
        gpTop.hide($el, duration);
      }
    },

    toggle: function() {
      if (this._isScrolled()) {
        this.show();
      }
      else {
        this.hide();
      }
    },

    /**
     * Alter position fiexed for IE 6.
     *
    fixPosition: function() {
      this.top = parseInt($el.css('top'), 10);
      if (!this.top) {
        this.bottom = parseInt($el.css('bottom'), 10);
        this.outerHeight = $el.outerHeight(true);
      }
    },

    _updatePosition: function() {
      $el.hide();
      var inst = $el.data('gpTop');

      var top = $el.data('gpTop.top');
      if (!top) {
        top = inst._getScreenHeight() - $el.data('gpTop.outerHeight') - $el.data('gpTop.bottom');
      }

      var absoluteTop = top + inst._getScrollTop();
      $el.css('top', absoluteTop);
      inst.toggle();
    },
    // */

    banpei: null
  });

  // jQuery method interface
  $.fn.gpTop = function(settings) {
    return this.each(function(i, el) {
      gpTop.build($(el), settings);
    });
  };
}(jQuery));
