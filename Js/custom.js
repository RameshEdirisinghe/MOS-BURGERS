(function ($) {
  var slice = Array.prototype.slice; // save ref to original slice()
  var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    className: 'is-sticky',
    wrapperClassName: 'sticky-wrapper',
    center: false,
    getWidthFrom: '',
    widthFromWrapper: true, // works only when .getWidthFrom is empty
    responsiveWidth: false
  },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function () {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;


    },
    resizer = function () {
      windowHeight = $window.height();

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
          if (s.responsiveWidth === true) {
            newWidth = $(s.getWidthFrom).width();
          }
        } else if (s.widthFromWrapper) {
          newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
          s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function (options) {
        var o = $.extend({}, defaults, options);
        return this.each(function () {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var stickyHeight = stickyElement.outerHeight();
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(wrapper);

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({ width: stickyElement.outerWidth(), marginLeft: "auto", marginRight: "auto" });
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({ "float": "none" }).parent().css({ "float": "right" });
          }

          stickyWrapper.css('height', stickyHeight);

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop = null;

          sticked.push(o);
        });
      },
      update: scroller,
      unstick: function (options) {
        return this.each(function () {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
              splice.call(sticked, i, 1);
              removeIdx = i;
            }
          }
          if (removeIdx != -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': ''
              })
              ;
          }
        });
      }
    };

 


  $.fn.sticky = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };


})(jQuery);

$(document).ready(function () {
  $(".navbar").sticky({ topSpacing: 0 });
});


!function (b) { "use strict"; function t(t, s) { this.elmt = t, this.settings = b.extend({}, e, b.vegas.defaults, s), this.slide = this.settings.slide, this.total = this.settings.slides.length, this.noshow = this.total < 2, this.paused = !this.settings.autoplay || this.noshow, this.ended = !1, this.$elmt = b(t), this.$timer = null, this.$overlay = null, this.$slide = null, this.timeout = null, this.first = !0, this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"], this.settings.transitionRegister instanceof Array || (this.settings.transitionRegister = [this.settings.transitionRegister]), this.settings.animationRegister instanceof Array || (this.settings.animationRegister = [this.settings.animationRegister]), this.transitions = this.transitions.concat(this.settings.transitionRegister), this.animations = this.animations.concat(this.settings.animationRegister), this.support = { objectFit: "objectFit" in document.body.style, transition: "transition" in document.body.style || "WebkitTransition" in document.body.style, video: b.vegas.isVideoCompatible() }, !0 === this.settings.shuffle && this.shuffle(), this._init() } var e = { slide: 0, delay: 5e3, loop: !0, preload: !1, preloadImage: !1, preloadVideo: !1, timer: !0, overlay: !1, autoplay: !0, shuffle: !1, cover: !0, color: null, align: "center", valign: "center", firstTransition: null, firstTransitionDuration: null, transition: "fade", transitionDuration: 1e3, transitionRegister: [], animation: null, animationDuration: "auto", animationRegister: [], slidesToKeep: 1, init: function () { }, play: function () { }, pause: function () { }, walk: function () { }, slides: [] }, n = {}; t.prototype = { _init: function () { var t, s, i, e, n = "BODY" === this.elmt.tagName, o = this.settings.timer, a = this.settings.overlay, r = this; this._preload(), n || (s = b('<div class="vegas-content-scrollable">'), t = b('<div class="vegas-content">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")), this.$elmt.css("padding") || t.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")), this.$elmt.css("padding", 0), this.$elmt.clone(!0).children().appendTo(t), this.elmt.innerHTML = ""), o && this.support.transition && (e = b('<div class="vegas-timer"><div class="vegas-timer-progress">'), this.$timer = e, this.$elmt.prepend(e)), a && (i = b('<div class="vegas-overlay">'), "string" == typeof a && i.css("background-image", "url(" + a + ")"), this.$overlay = i, this.$elmt.prepend(i)), this.$elmt.addClass("vegas-container"), n || (this.$elmt.append(s), s.append(t)), setTimeout(function () { r.trigger("init"), r._goto(r.slide), r.settings.autoplay && r.trigger("play") }, 1) }, _preload: function () { var t; for (t = 0; t < this.settings.slides.length; t++)(this.settings.preload || this.settings.preloadImages) && this.settings.slides[t].src && ((new Image).src = this.settings.slides[t].src), (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[t].video && (this.settings.slides[t].video instanceof Array ? this._video(this.settings.slides[t].video) : this._video(this.settings.slides[t].video.src)) }, _random: function (t) { return t[Math.floor(Math.random() * t.length)] }, _slideShow: function () { var t = this; 1 < this.total && !this.ended && !this.paused && !this.noshow && (this.timeout = setTimeout(function () { t.next() }, this._options("delay"))) }, _timer: function (t) { var s = this; clearTimeout(this.timeout), this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.ended || this.paused || this.noshow || t && setTimeout(function () { s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", s._options("delay") - 100 + "ms") }, 100)) }, _video: function (t) { var s, i, e = t.toString(); return n[e] ? n[e] : (t instanceof Array || (t = [t]), (s = document.createElement("video")).preload = !0, t.forEach(function (t) { (i = document.createElement("source")).src = t, s.appendChild(i) }), n[e] = s) }, _fadeOutSound: function (t, s) { var i = this, e = s / 10, n = t.volume - .09; 0 < n ? (t.volume = n, setTimeout(function () { i._fadeOutSound(t, s) }, e)) : t.pause() }, _fadeInSound: function (t, s) { var i = this, e = s / 10, n = t.volume + .09; n < 1 && (t.volume = n, setTimeout(function () { i._fadeInSound(t, s) }, e)) }, _options: function (t, s) { return void 0 === s && (s = this.slide), void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t] }, _goto: function (t) { void 0 === this.settings.slides[t] && (t = 0), this.slide = t; var s, i, e, n, o, a = this.$elmt.children(".vegas-slide"), r = this.settings.slides[t].src, h = this.settings.slides[t].video, d = this._options("delay"), l = this._options("align"), g = this._options("valign"), u = this._options("cover"), c = this._options("color") || this.$elmt.css("background-color"), p = this, m = a.length, f = this._options("transition"), v = this._options("transitionDuration"), y = this._options("animation"), _ = this._options("animationDuration"); function w() { p._timer(!0), setTimeout(function () { f && (p.support.transition ? (a.css("transition", "all " + v + "ms").addClass("vegas-transition-" + f + "-out"), a.each(function () { var t = a.find("video").get(0); t && (t.volume = 1, p._fadeOutSound(t, v)) }), s.css("transition", "all " + v + "ms").addClass("vegas-transition-" + f + "-in")) : s.fadeIn(v)); for (var t = 0; t < a.length - p.settings.slidesToKeep; t++)a.eq(t).remove(); p.trigger("walk"), p._slideShow() }, 100) } this.settings.firstTransition && this.first && (f = this.settings.firstTransition || f), this.settings.firstTransitionDuration && this.first && (v = this.settings.firstTransitionDuration || v), this.first && (this.first = !1), "repeat" !== u && (!0 === u ? u = "cover" : !1 === u && (u = "contain")), ("random" === f || f instanceof Array) && (f = f instanceof Array ? this._random(f) : this._random(this.transitions)), ("random" === y || y instanceof Array) && (y = y instanceof Array ? this._random(y) : this._random(this.animations)), ("auto" === v || d < v) && (v = d), "auto" === _ && (_ = d), s = b('<div class="vegas-slide"></div>'), this.support.transition && f && s.addClass("vegas-transition-" + f), this.support.video && h ? ((n = h instanceof Array ? this._video(h) : this._video(h.src)).loop = void 0 === h.loop || h.loop, n.muted = void 0 === h.mute || h.mute, !1 === n.muted ? (n.volume = 0, this._fadeInSound(n, v)) : n.pause(), e = b(n).addClass("vegas-video").css("background-color", c), this.support.objectFit ? e.css("object-position", l + " " + g).css("object-fit", u).css("width", "100%").css("height", "100%") : "contain" === u && e.css("width", "100%").css("height", "100%"), s.append(e)) : (o = new Image, i = b('<div class="vegas-slide-inner"></div>').css("background-image", 'url("' + r + '")').css("background-color", c).css("background-position", l + " " + g), "repeat" === u ? i.css("background-repeat", "repeat") : i.css("background-size", u), this.support.transition && y && i.addClass("vegas-animation-" + y).css("animation-duration", _ + "ms"), s.append(i)), this.support.transition || s.css("display", "none"), m ? a.eq(m - 1).after(s) : this.$elmt.prepend(s), a.css("transition", "all 0ms").each(function () { this.className = "vegas-slide", "VIDEO" === this.tagName && (this.className += " vegas-video"), f && (this.className += " vegas-transition-" + f, this.className += " vegas-transition-" + f + "-in") }), p._timer(!1), n ? (4 === n.readyState && (n.currentTime = 0), n.play(), w()) : (o.src = r, o.complete ? w() : o.onload = w) }, _end: function () { this.ended = !this.settings.autoplay, this._timer(!1), this.trigger("end") }, shuffle: function () { for (var t, s, i = this.total - 1; 0 < i; i--)s = Math.floor(Math.random() * (i + 1)), t = this.settings.slides[i], this.settings.slides[i] = this.settings.slides[s], this.settings.slides[s] = t }, play: function () { this.paused && (this.paused = !1, this.next(), this.trigger("play")) }, pause: function () { this._timer(!1), this.paused = !0, this.trigger("pause") }, toggle: function () { this.paused ? this.play() : this.pause() }, playing: function () { return !this.paused && !this.noshow }, current: function (t) { return t ? { slide: this.slide, data: this.settings.slides[this.slide] } : this.slide }, jump: function (t) { t < 0 || t > this.total - 1 || t === this.slide || (this.slide = t, this._goto(this.slide)) }, next: function () { if (this.slide++, this.slide >= this.total) { if (!this.settings.loop) return this._end(); this.slide = 0 } this._goto(this.slide) }, previous: function () { if (this.slide--, this.slide < 0) { if (!this.settings.loop) return void this.slide++; this.slide = this.total - 1 } this._goto(this.slide) }, trigger: function (t) { var s = []; s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]], this.$elmt.trigger("vegas" + t, s), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s) }, options: function (t, s) { var i = this.settings.slides.slice(); if ("object" == typeof t) this.settings = b.extend({}, e, b.vegas.defaults, t); else { if ("string" != typeof t) return this.settings; if (void 0 === s) return this.settings[t]; this.settings[t] = s } this.settings.slides !== i && (this.total = this.settings.slides.length, this.noshow = this.total < 2, this._preload()) }, destroy: function () { clearTimeout(this.timeout), this.$elmt.removeClass("vegas-container"), this.$elmt.find("> .vegas-slide").remove(), this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt), this.$elmt.find("> .vegas-wrapper").remove(), this.settings.timer && this.$timer.remove(), this.settings.overlay && this.$overlay.remove(), this.elmt._vegas = null } }, b.fn.vegas = function (s) { var i, e = arguments, n = !1; if (void 0 === s || "object" == typeof s) return this.each(function () { this._vegas || (this._vegas = new t(this, s)) }); if ("string" == typeof s) { if (this.each(function () { var t = this._vegas; if (!t) throw new Error("No Vegas applied to this element."); "function" == typeof t[s] && "_" !== s[0] ? i = t[s].apply(t, [].slice.call(e, 1)) : n = !0 }), n) throw new Error('No method "' + s + '" in Vegas.'); return void 0 !== i ? i : this } }, b.vegas = {}, b.vegas.defaults = e, b.vegas.isVideoCompatible = function () { return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent) } }(window.jQuery || window.Zepto || window.m4q);


(function ($) {



  $(function () {
    $('.hero-slides').vegas({
      slides: [
        { src: 'images/img1.jpg' },
        { src: 'images/img2.jpg' },
        { src: 'images/img3.jpg' }
      ],
      timer: false,
      animation: 'kenburns',
    });
  });



})(window.jQuery);


