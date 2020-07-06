function on(type, selector, cb) {
  window.addEventListener(type, function (event) {
    var target = event.target.closest(selector);

    if (null === target) {
      return;
    }

    var callback = cb.bind(target);

    callback(event);
  });
}
