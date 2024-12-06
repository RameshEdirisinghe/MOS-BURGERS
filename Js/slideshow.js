(function ($) {
  var slice = Array.prototype.slice; 

  var defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    wrapperClassName: 'sticky-wrapper',
  },
    methods = {
      init: function (options) {
        var o = $.extend({}, defaults, options);
        return this.each(function () {
          var stickyElement = $(this);
          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);
        });
      },

    };

  $.fn.sticky = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } 
  };

})(jQuery);

$(document).ready(function () {
  $(".navbar").sticky({ topSpacing: 0 });
});


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


