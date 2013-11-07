!function($){
  var cssName = /[_a-zA-Z0-9-]/,
    upper = /[A-Z]/,
    defaults = {
      kerned: 'tinykerned'
    },
    settings;

  function injector(i, elem) {
    var $elem = $(elem),
      a = $elem.text().split(''),
      inject = '',
      klass;
    if (a.length) {
      $(a).each(function(i, char) {
        klass = 'code-' + char.charCodeAt(0).toString(16);
        if (cssName.test(char)) {
          klass += ' char-';
          if (upper.test(char)) {
            klass += 'cap-';
          }
          klass += char.toLowerCase();
        }
        inject += '<span class="' + klass + '">' + char + '</span>';
      });
      $elem.empty()
        .append(inject);
    }
  }

  $.fn.tinykern = function(options) {
    settings = $.extend(defaults, options);

    this.not(settings.kerned)
      .each(injector)
      .addClass(settings.kerned);
    return this;
  };
}(jQuery);