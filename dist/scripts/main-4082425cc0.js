"use strict";
+(function (t) {
  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend",
      };
    for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
    return !1;
  }
  (t.fn.emulateTransitionEnd = function (e) {
    var i = !1,
      n = this;
    t(this).one("bsTransitionEnd", function () {
      i = !0;
    });
    var o = function () {
      i || t(n).trigger(t.support.transition.end);
    };
    return setTimeout(o, e), this;
  }),
    t(function () {
      (t.support.transition = e()),
        t.support.transition &&
          (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
              if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          });
    });
})(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.alert");
        o || i.data("bs.alert", (o = new n(this))),
          "string" == typeof e && o[e].call(i);
      });
    }
    var i = '[data-dismiss="alert"]',
      n = function (e) {
        t(e).on("click", i, this.close);
      };
    (n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.close = function (e) {
        function i() {
          s.detach().trigger("closed.bs.alert").remove();
        }
        var o = t(this),
          a = o.attr("data-target");
        a || ((a = o.attr("href")), (a = a && a.replace(/.*(?=#[^\s]*$)/, "")));
        var s = t(a);
        e && e.preventDefault(),
          s.length || (s = o.closest(".alert")),
          s.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (s.removeClass("in"),
            t.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : i());
      });
    var o = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = n),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = o), this;
      }),
      t(document).on("click.bs.alert.data-api", i, n.prototype.close);
  })(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
+(function (t) {
  function e(e) {
    return this.each(function () {
      var n = t(this),
        o = n.data("bs.button"),
        a =
          "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e;
      o || n.data("bs.button", (o = new i(this, a))),
        "toggle" == e ? o.toggle() : e && o.setState(e);
    });
  }
  var i = function o(e, i) {
    (this.$element = t(e)),
      (this.options = t.extend({}, o.DEFAULTS, i)),
      (this.isLoading = !1);
  };
  (i.VERSION = "3.3.5"),
    (i.DEFAULTS = { loadingText: "loading..." }),
    (i.prototype.setState = function (e) {
      var i = "disabled",
        n = this.$element,
        o = n.is("input") ? "val" : "html",
        a = n.data();
      (e += "Text"),
        null == a.resetText && n.data("resetText", n[o]()),
        setTimeout(
          t.proxy(function () {
            n[o](null == a[e] ? this.options[e] : a[e]),
              "loadingText" == e
                ? ((this.isLoading = !0), n.addClass(i).attr(i, i))
                : this.isLoading &&
                  ((this.isLoading = !1), n.removeClass(i).removeAttr(i));
          }, this),
          0
        );
    }),
    (i.prototype.toggle = function () {
      var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
      if (e.length) {
        var i = this.$element.find("input");
        "radio" == i.prop("type")
          ? (i.prop("checked") && (t = !1),
            e.find(".active").removeClass("active"),
            this.$element.addClass("active"))
          : "checkbox" == i.prop("type") &&
            (i.prop("checked") !== this.$element.hasClass("active") && (t = !1),
            this.$element.toggleClass("active")),
          i.prop("checked", this.$element.hasClass("active")),
          t && i.trigger("change");
      } else
        this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
          this.$element.toggleClass("active");
    });
  var n = t.fn.button;
  (t.fn.button = e),
    (t.fn.button.Constructor = i),
    (t.fn.button.noConflict = function () {
      return (t.fn.button = n), this;
    }),
    t(document)
      .on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")),
          e.call(n, "toggle"),
          t(i.target).is('input[type="radio"]') ||
            t(i.target).is('input[type="checkbox"]') ||
            i.preventDefault();
      })
      .on(
        "focus.bs.button.data-api blur.bs.button.data-api",
        '[data-toggle^="button"]',
        function (e) {
          t(e.target)
            .closest(".btn")
            .toggleClass("focus", /^focus(in)?$/.test(e.type));
        }
      );
})(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
+(function (t) {
  function e(e) {
    return this.each(function () {
      var n = t(this),
        o = n.data("bs.carousel"),
        a = t.extend(
          {},
          i.DEFAULTS,
          n.data(),
          "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e
        ),
        s = "string" == typeof e ? e : a.slide;
      o || n.data("bs.carousel", (o = new i(this, a))),
        "number" == typeof e
          ? o.to(e)
          : s
          ? o[s]()
          : a.interval && o.pause().cycle();
    });
  }
  var i = function (e, i) {
    (this.$element = t(e)),
      (this.$indicators = this.$element.find(".carousel-indicators")),
      (this.options = i),
      (this.paused = null),
      (this.sliding = null),
      (this.interval = null),
      (this.$active = null),
      (this.$items = null),
      this.options.keyboard &&
        this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
      "hover" == this.options.pause &&
        !("ontouchstart" in document.documentElement) &&
        this.$element
          .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
          .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
  };
  (i.VERSION = "3.3.5"),
    (i.TRANSITION_DURATION = 600),
    (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
    (i.prototype.keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
          case 37:
            this.prev();
            break;
          case 39:
            this.next();
            break;
          default:
            return;
        }
        t.preventDefault();
      }
    }),
    (i.prototype.cycle = function (e) {
      return (
        e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval &&
          !this.paused &&
          (this.interval = setInterval(
            t.proxy(this.next, this),
            this.options.interval
          )),
        this
      );
    }),
    (i.prototype.getItemIndex = function (t) {
      return (
        (this.$items = t.parent().children(".item")),
        this.$items.index(t || this.$active)
      );
    }),
    (i.prototype.getItemForDirection = function (t, e) {
      var i = this.getItemIndex(e),
        n =
          ("prev" == t && 0 === i) ||
          ("next" == t && i == this.$items.length - 1);
      if (n && !this.options.wrap) return e;
      var o = "prev" == t ? -1 : 1,
        a = (i + o) % this.$items.length;
      return this.$items.eq(a);
    }),
    (i.prototype.to = function (t) {
      var e = this,
        i = this.getItemIndex(
          (this.$active = this.$element.find(".item.active"))
        );
      if (!(t > this.$items.length - 1 || t < 0))
        return this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              e.to(t);
            })
          : i == t
          ? this.pause().cycle()
          : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
    }),
    (i.prototype.pause = function (e) {
      return (
        e || (this.paused = !0),
        this.$element.find(".next, .prev").length &&
          t.support.transition &&
          (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
        (this.interval = clearInterval(this.interval)),
        this
      );
    }),
    (i.prototype.next = function () {
      if (!this.sliding) return this.slide("next");
    }),
    (i.prototype.prev = function () {
      if (!this.sliding) return this.slide("prev");
    }),
    (i.prototype.slide = function (e, n) {
      var o = this.$element.find(".item.active"),
        a = n || this.getItemForDirection(e, o),
        s = this.interval,
        r = "next" == e ? "left" : "right",
        l = this;
      if (a.hasClass("active")) return (this.sliding = !1);
      var d = a[0],
        c = t.Event("slide.bs.carousel", { relatedTarget: d, direction: r });
      if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
        if (((this.sliding = !0), s && this.pause(), this.$indicators.length)) {
          this.$indicators.find(".active").removeClass("active");
          var p = t(this.$indicators.children()[this.getItemIndex(a)]);
          p && p.addClass("active");
        }
        var u = t.Event("slid.bs.carousel", { relatedTarget: d, direction: r });
        return (
          t.support.transition && this.$element.hasClass("slide")
            ? (a.addClass(e),
              a[0].offsetWidth,
              o.addClass(r),
              a.addClass(r),
              o
                .one("bsTransitionEnd", function () {
                  a.removeClass([e, r].join(" ")).addClass("active"),
                    o.removeClass(["active", r].join(" ")),
                    (l.sliding = !1),
                    setTimeout(function () {
                      l.$element.trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(i.TRANSITION_DURATION))
            : (o.removeClass("active"),
              a.addClass("active"),
              (this.sliding = !1),
              this.$element.trigger(u)),
          s && this.cycle(),
          this
        );
      }
    });
  var n = t.fn.carousel;
  (t.fn.carousel = e),
    (t.fn.carousel.Constructor = i),
    (t.fn.carousel.noConflict = function () {
      return (t.fn.carousel = n), this;
    });
  var o = function (i) {
    var n,
      o = t(this),
      a = t(
        o.attr("data-target") ||
          ((n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
      );
    if (a.hasClass("carousel")) {
      var s = t.extend({}, a.data(), o.data()),
        r = o.attr("data-slide-to");
      r && (s.interval = !1),
        e.call(a, s),
        r && a.data("bs.carousel").to(r),
        i.preventDefault();
    }
  };
  t(document)
    .on("click.bs.carousel.data-api", "[data-slide]", o)
    .on("click.bs.carousel.data-api", "[data-slide-to]", o),
    t(window).on("load", function () {
      t('[data-ride="carousel"]').each(function () {
        var i = t(this);
        e.call(i, i.data());
      });
    });
})(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
+(function (t) {
  function e(e) {
    var i,
      n =
        e.attr("data-target") ||
        ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
    return t(n);
  }
  function i(e) {
    return this.each(function () {
      var i = t(this),
        o = i.data("bs.collapse"),
        a = t.extend(
          {},
          n.DEFAULTS,
          i.data(),
          "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e
        );
      !o && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
        o || i.data("bs.collapse", (o = new n(this, a))),
        "string" == typeof e && o[e]();
    });
  }
  var n = function a(e, i) {
    (this.$element = t(e)),
      (this.options = t.extend({}, a.DEFAULTS, i)),
      (this.$trigger = t(
        '[data-toggle="collapse"][href="#' +
          e.id +
          '"],[data-toggle="collapse"][data-target="#' +
          e.id +
          '"]'
      )),
      (this.transitioning = null),
      this.options.parent
        ? (this.$parent = this.getParent())
        : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
      this.options.toggle && this.toggle();
  };
  (n.VERSION = "3.3.5"),
    (n.TRANSITION_DURATION = 350),
    (n.DEFAULTS = { toggle: !0 }),
    (n.prototype.dimension = function () {
      var t = this.$element.hasClass("width");
      return t ? "width" : "height";
    }),
    (n.prototype.show = function () {
      if (!this.transitioning && !this.$element.hasClass("in")) {
        var e,
          o =
            this.$parent &&
            this.$parent.children(".panel").children(".in, .collapsing");
        if (
          !(
            o &&
            o.length &&
            ((e = o.data("bs.collapse")), e && e.transitioning)
          )
        ) {
          var a = t.Event("show.bs.collapse");
          if ((this.$element.trigger(a), !a.isDefaultPrevented())) {
            o &&
              o.length &&
              (i.call(o, "hide"), e || o.data("bs.collapse", null));
            var s = this.dimension();
            this.$element
              .removeClass("collapse")
              .addClass("collapsing")
              [s](0)
              .attr("aria-expanded", !0),
              this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
              (this.transitioning = 1);
            var r = function () {
              this.$element
                .removeClass("collapsing")
                .addClass("collapse in")
                [s](""),
                (this.transitioning = 0),
                this.$element.trigger("shown.bs.collapse");
            };
            if (!t.support.transition) return r.call(this);
            var l = t.camelCase(["scroll", s].join("-"));
            this.$element
              .one("bsTransitionEnd", t.proxy(r, this))
              .emulateTransitionEnd(n.TRANSITION_DURATION)
              [s](this.$element[0][l]);
          }
        }
      }
    }),
    (n.prototype.hide = function () {
      if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
          var i = this.dimension();
          this.$element[i](this.$element[i]())[0].offsetHeight,
            this.$element
              .addClass("collapsing")
              .removeClass("collapse in")
              .attr("aria-expanded", !1),
            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
            (this.transitioning = 1);
          var o = function () {
            (this.transitioning = 0),
              this.$element
                .removeClass("collapsing")
                .addClass("collapse")
                .trigger("hidden.bs.collapse");
          };
          return t.support.transition
            ? void this.$element[i](0)
                .one("bsTransitionEnd", t.proxy(o, this))
                .emulateTransitionEnd(n.TRANSITION_DURATION)
            : o.call(this);
        }
      }
    }),
    (n.prototype.toggle = function () {
      this[this.$element.hasClass("in") ? "hide" : "show"]();
    }),
    (n.prototype.getParent = function () {
      return t(this.options.parent)
        .find(
          '[data-toggle="collapse"][data-parent="' + this.options.parent + '"]'
        )
        .each(
          t.proxy(function (i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o);
          }, this)
        )
        .end();
    }),
    (n.prototype.addAriaAndCollapsedClass = function (t, e) {
      var i = t.hasClass("in");
      t.attr("aria-expanded", i),
        e.toggleClass("collapsed", !i).attr("aria-expanded", i);
    });
  var o = t.fn.collapse;
  (t.fn.collapse = i),
    (t.fn.collapse.Constructor = n),
    (t.fn.collapse.noConflict = function () {
      return (t.fn.collapse = o), this;
    }),
    t(document).on(
      "click.bs.collapse.data-api",
      '[data-toggle="collapse"]',
      function (n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var a = e(o),
          s = a.data("bs.collapse"),
          r = s ? "toggle" : o.data();
        i.call(a, r);
      }
    );
})(jQuery),
  +(function (t) {
    function e(e) {
      var i = e.attr("data-target");
      i ||
        ((i = e.attr("href")),
        (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
      var n = i && t(i);
      return n && n.length ? n : e.parent();
    }
    function i(i) {
      (i && 3 === i.which) ||
        (t(o).remove(),
        t(a).each(function () {
          var n = t(this),
            o = e(n),
            a = { relatedTarget: this };
          o.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              t.contains(o[0], i.target)) ||
              (o.trigger((i = t.Event("hide.bs.dropdown", a))),
              i.isDefaultPrevented() ||
                (n.attr("aria-expanded", "false"),
                o.removeClass("open").trigger("hidden.bs.dropdown", a))));
        }));
    }
    function n(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.dropdown");
        n || i.data("bs.dropdown", (n = new s(this))),
          "string" == typeof e && n[e].call(i);
      });
    }
    var o = ".dropdown-backdrop",
      a = '[data-toggle="dropdown"]',
      s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (s.VERSION = "3.3.5"),
      (s.prototype.toggle = function (n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
          var a = e(o),
            s = a.hasClass("open");
          if ((i(), !s)) {
            "ontouchstart" in document.documentElement &&
              !a.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", i);
            var r = { relatedTarget: this };
            if (
              (a.trigger((n = t.Event("show.bs.dropdown", r))),
              n.isDefaultPrevented())
            )
              return;
            o.trigger("focus").attr("aria-expanded", "true"),
              a.toggleClass("open").trigger("shown.bs.dropdown", r);
          }
          return !1;
        }
      }),
      (s.prototype.keydown = function (i) {
        if (
          /(38|40|27|32)/.test(i.which) &&
          !/input|textarea/i.test(i.target.tagName)
        ) {
          var n = t(this);
          if (
            (i.preventDefault(),
            i.stopPropagation(),
            !n.is(".disabled, :disabled"))
          ) {
            var o = e(n),
              s = o.hasClass("open");
            if ((!s && 27 != i.which) || (s && 27 == i.which))
              return (
                27 == i.which && o.find(a).trigger("focus"), n.trigger("click")
              );
            var r = " li:not(.disabled):visible a",
              l = o.find(".dropdown-menu" + r);
            if (l.length) {
              var d = l.index(i.target);
              38 == i.which && d > 0 && d--,
                40 == i.which && d < l.length - 1 && d++,
                ~d || (d = 0),
                l.eq(d).trigger("focus");
            }
          }
        }
      });
    var r = t.fn.dropdown;
    (t.fn.dropdown = n),
      (t.fn.dropdown.Constructor = s),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = r), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", a, s.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", a, s.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          s.prototype.keydown
        );
  })(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
+(function (t) {
  function e(e, n) {
    return this.each(function () {
      var o = t(this),
        a = o.data("bs.modal"),
        s = t.extend(
          {},
          i.DEFAULTS,
          o.data(),
          "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e
        );
      a || o.data("bs.modal", (a = new i(this, s))),
        "string" == typeof e ? a[e](n) : s.show && a.show(n);
    });
  }
  var i = function (e, i) {
    (this.options = i),
      (this.$body = t(document.body)),
      (this.$element = t(e)),
      (this.$dialog = this.$element.find(".modal-dialog")),
      (this.$backdrop = null),
      (this.isShown = null),
      (this.originalBodyPad = null),
      (this.scrollbarWidth = 0),
      (this.ignoreBackdropClick = !1),
      this.options.remote &&
        this.$element.find(".modal-content").load(
          this.options.remote,
          t.proxy(function () {
            this.$element.trigger("loaded.bs.modal");
          }, this)
        );
  };
  (i.VERSION = "3.3.5"),
    (i.TRANSITION_DURATION = 300),
    (i.BACKDROP_TRANSITION_DURATION = 150),
    (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
    (i.prototype.toggle = function (t) {
      return this.isShown ? this.hide() : this.show(t);
    }),
    (i.prototype.show = function (e) {
      var n = this,
        o = t.Event("show.bs.modal", { relatedTarget: e });
      this.$element.trigger(o),
        this.isShown ||
          o.isDefaultPrevented() ||
          ((this.isShown = !0),
          this.checkScrollbar(),
          this.setScrollbar(),
          this.$body.addClass("modal-open"),
          this.escape(),
          this.resize(),
          this.$element.on(
            "click.dismiss.bs.modal",
            '[data-dismiss="modal"]',
            t.proxy(this.hide, this)
          ),
          this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            n.$element.one("mouseup.dismiss.bs.modal", function (e) {
              t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0);
            });
          }),
          this.backdrop(function () {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body),
              n.$element.show().scrollTop(0),
              n.adjustDialog(),
              o && n.$element[0].offsetWidth,
              n.$element.addClass("in"),
              n.enforceFocus();
            var a = t.Event("shown.bs.modal", { relatedTarget: e });
            o
              ? n.$dialog
                  .one("bsTransitionEnd", function () {
                    n.$element.trigger("focus").trigger(a);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : n.$element.trigger("focus").trigger(a);
          }));
    }),
    (i.prototype.hide = function (e) {
      e && e.preventDefault(),
        (e = t.Event("hide.bs.modal")),
        this.$element.trigger(e),
        this.isShown &&
          !e.isDefaultPrevented() &&
          ((this.isShown = !1),
          this.escape(),
          this.resize(),
          t(document).off("focusin.bs.modal"),
          this.$element
            .removeClass("in")
            .off("click.dismiss.bs.modal")
            .off("mouseup.dismiss.bs.modal"),
          this.$dialog.off("mousedown.dismiss.bs.modal"),
          t.support.transition && this.$element.hasClass("fade")
            ? this.$element
                .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : this.hideModal());
    }),
    (i.prototype.enforceFocus = function () {
      t(document)
        .off("focusin.bs.modal")
        .on(
          "focusin.bs.modal",
          t.proxy(function (t) {
            this.$element[0] === t.target ||
              this.$element.has(t.target).length ||
              this.$element.trigger("focus");
          }, this)
        );
    }),
    (i.prototype.escape = function () {
      this.isShown && this.options.keyboard
        ? this.$element.on(
            "keydown.dismiss.bs.modal",
            t.proxy(function (t) {
              27 == t.which && this.hide();
            }, this)
          )
        : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }),
    (i.prototype.resize = function () {
      this.isShown
        ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
        : t(window).off("resize.bs.modal");
    }),
    (i.prototype.hideModal = function () {
      var t = this;
      this.$element.hide(),
        this.backdrop(function () {
          t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal");
        });
    }),
    (i.prototype.removeBackdrop = function () {
      this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
    }),
    (i.prototype.backdrop = function (e) {
      var n = this,
        o = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
        var a = t.support.transition && o;
        if (
          ((this.$backdrop = t(document.createElement("div"))
            .addClass("modal-backdrop " + o)
            .appendTo(this.$body)),
          this.$element.on(
            "click.dismiss.bs.modal",
            t.proxy(function (t) {
              return this.ignoreBackdropClick
                ? void (this.ignoreBackdropClick = !1)
                : void (
                    t.target === t.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus()
                      : this.hide())
                  );
            }, this)
          ),
          a && this.$backdrop[0].offsetWidth,
          this.$backdrop.addClass("in"),
          !e)
        )
          return;
        a
          ? this.$backdrop
              .one("bsTransitionEnd", e)
              .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
          : e();
      } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var s = function () {
          n.removeBackdrop(), e && e();
        };
        t.support.transition && this.$element.hasClass("fade")
          ? this.$backdrop
              .one("bsTransitionEnd", s)
              .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
          : s();
      } else e && e();
    }),
    (i.prototype.handleUpdate = function () {
      this.adjustDialog();
    }),
    (i.prototype.adjustDialog = function () {
      var t =
        this.$element[0].scrollHeight > document.documentElement.clientHeight;
      this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
      });
    }),
    (i.prototype.resetAdjustments = function () {
      this.$element.css({ paddingLeft: "", paddingRight: "" });
    }),
    (i.prototype.checkScrollbar = function () {
      var t = window.innerWidth;
      if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left);
      }
      (this.bodyIsOverflowing = document.body.clientWidth < t),
        (this.scrollbarWidth = this.measureScrollbar());
    }),
    (i.prototype.setScrollbar = function () {
      var t = parseInt(this.$body.css("padding-right") || 0, 10);
      (this.originalBodyPad = document.body.style.paddingRight || ""),
        this.bodyIsOverflowing &&
          this.$body.css("padding-right", t + this.scrollbarWidth);
    }),
    (i.prototype.resetScrollbar = function () {
      this.$body.css("padding-right", this.originalBodyPad);
    }),
    (i.prototype.measureScrollbar = function () {
      var t = document.createElement("div");
      (t.className = "modal-scrollbar-measure"), this.$body.append(t);
      var e = t.offsetWidth - t.clientWidth;
      return this.$body[0].removeChild(t), e;
    });
  var n = t.fn.modal;
  (t.fn.modal = e),
    (t.fn.modal.Constructor = i),
    (t.fn.modal.noConflict = function () {
      return (t.fn.modal = n), this;
    }),
    t(document).on(
      "click.bs.modal.data-api",
      '[data-toggle="modal"]',
      function (i) {
        var n = t(this),
          o = n.attr("href"),
          a = t(
            n.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))
          ),
          s = a.data("bs.modal")
            ? "toggle"
            : t.extend({ remote: !/#/.test(o) && o }, a.data(), n.data());
        n.is("a") && i.preventDefault(),
          a.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() ||
              a.one("hidden.bs.modal", function () {
                n.is(":visible") && n.trigger("focus");
              });
          }),
          e.call(a, s, this);
      }
    );
})(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
+(function (t) {
  function e(e) {
    return this.each(function () {
      var n = t(this),
        o = n.data("bs.tooltip"),
        a =
          "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e;
      (!o && /destroy|hide/.test(e)) ||
        (o || n.data("bs.tooltip", (o = new i(this, a))),
        "string" == typeof e && o[e]());
    });
  }
  var i = function (t, e) {
    (this.type = null),
      (this.options = null),
      (this.enabled = null),
      (this.timeout = null),
      (this.hoverState = null),
      (this.$element = null),
      (this.inState = null),
      this.init("tooltip", t, e);
  };
  (i.VERSION = "3.3.5"),
    (i.TRANSITION_DURATION = 150),
    (i.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1,
      viewport: { selector: "body", padding: 0 },
    }),
    (i.prototype.init = function (e, i, n) {
      if (
        ((this.enabled = !0),
        (this.type = e),
        (this.$element = t(i)),
        (this.options = this.getOptions(n)),
        (this.$viewport =
          this.options.viewport &&
          t(
            t.isFunction(this.options.viewport)
              ? this.options.viewport.call(this, this.$element)
              : this.options.viewport.selector || this.options.viewport
          )),
        (this.inState = { click: !1, hover: !1, focus: !1 }),
        this.$element[0] instanceof document.constructor &&
          !this.options.selector)
      )
        throw new Error(
          "`selector` option must be specified when initializing " +
            this.type +
            " on the window.document object!"
        );
      for (var o = this.options.trigger.split(" "), a = o.length; a--; ) {
        var s = o[a];
        if ("click" == s)
          this.$element.on(
            "click." + this.type,
            this.options.selector,
            t.proxy(this.toggle, this)
          );
        else if ("manual" != s) {
          var r = "hover" == s ? "mouseenter" : "focusin",
            l = "hover" == s ? "mouseleave" : "focusout";
          this.$element.on(
            r + "." + this.type,
            this.options.selector,
            t.proxy(this.enter, this)
          ),
            this.$element.on(
              l + "." + this.type,
              this.options.selector,
              t.proxy(this.leave, this)
            );
        }
      }
      this.options.selector
        ? (this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: "",
          }))
        : this.fixTitle();
    }),
    (i.prototype.getDefaults = function () {
      return i.DEFAULTS;
    }),
    (i.prototype.getOptions = function (e) {
      return (
        (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
        e.delay &&
          "number" == typeof e.delay &&
          (e.delay = { show: e.delay, hide: e.delay }),
        e
      );
    }),
    (i.prototype.getDelegateOptions = function () {
      var e = {},
        i = this.getDefaults();
      return (
        this._options &&
          t.each(this._options, function (t, n) {
            i[t] != n && (e[t] = n);
          }),
        e
      );
    }),
    (i.prototype.enter = function (e) {
      var i =
        e instanceof this.constructor
          ? e
          : t(e.currentTarget).data("bs." + this.type);
      return (
        i ||
          ((i = new this.constructor(
            e.currentTarget,
            this.getDelegateOptions()
          )),
          t(e.currentTarget).data("bs." + this.type, i)),
        e instanceof t.Event &&
          (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        i.tip().hasClass("in") || "in" == i.hoverState
          ? void (i.hoverState = "in")
          : (clearTimeout(i.timeout),
            (i.hoverState = "in"),
            i.options.delay && i.options.delay.show
              ? void (i.timeout = setTimeout(function () {
                  "in" == i.hoverState && i.show();
                }, i.options.delay.show))
              : i.show())
      );
    }),
    (i.prototype.isInStateTrue = function () {
      for (var t in this.inState) if (this.inState[t]) return !0;
      return !1;
    }),
    (i.prototype.leave = function (e) {
      var i =
        e instanceof this.constructor
          ? e
          : t(e.currentTarget).data("bs." + this.type);
      if (
        (i ||
          ((i = new this.constructor(
            e.currentTarget,
            this.getDelegateOptions()
          )),
          t(e.currentTarget).data("bs." + this.type, i)),
        e instanceof t.Event &&
          (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
        !i.isInStateTrue())
      )
        return (
          clearTimeout(i.timeout),
          (i.hoverState = "out"),
          i.options.delay && i.options.delay.hide
            ? void (i.timeout = setTimeout(function () {
                "out" == i.hoverState && i.hide();
              }, i.options.delay.hide))
            : i.hide()
        );
    }),
    (i.prototype.show = function () {
      var e = t.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        var n = t.contains(
          this.$element[0].ownerDocument.documentElement,
          this.$element[0]
        );
        if (e.isDefaultPrevented() || !n) return;
        var o = this,
          a = this.tip(),
          s = this.getUID(this.type);
        this.setContent(),
          a.attr("id", s),
          this.$element.attr("aria-describedby", s),
          this.options.animation && a.addClass("fade");
        var r =
            "function" == typeof this.options.placement
              ? this.options.placement.call(this, a[0], this.$element[0])
              : this.options.placement,
          l = /\s?auto?\s?/i,
          d = l.test(r);
        d && (r = r.replace(l, "") || "top"),
          a
            .detach()
            .css({ top: 0, left: 0, display: "block" })
            .addClass(r)
            .data("bs." + this.type, this),
          this.options.container
            ? a.appendTo(this.options.container)
            : a.insertAfter(this.$element),
          this.$element.trigger("inserted.bs." + this.type);
        var c = this.getPosition(),
          p = a[0].offsetWidth,
          u = a[0].offsetHeight;
        if (d) {
          var h = r,
            f = this.getPosition(this.$viewport);
          (r =
            "bottom" == r && c.bottom + u > f.bottom
              ? "top"
              : "top" == r && c.top - u < f.top
              ? "bottom"
              : "right" == r && c.right + p > f.width
              ? "left"
              : "left" == r && c.left - p < f.left
              ? "right"
              : r),
            a.removeClass(h).addClass(r);
        }
        var v = this.getCalculatedOffset(r, c, p, u);
        this.applyPlacement(v, r);
        var m = function () {
          var t = o.hoverState;
          o.$element.trigger("shown.bs." + o.type),
            (o.hoverState = null),
            "out" == t && o.leave(o);
        };
        t.support.transition && this.$tip.hasClass("fade")
          ? a
              .one("bsTransitionEnd", m)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : m();
      }
    }),
    (i.prototype.applyPlacement = function (e, i) {
      var n = this.tip(),
        o = n[0].offsetWidth,
        a = n[0].offsetHeight,
        s = parseInt(n.css("margin-top"), 10),
        r = parseInt(n.css("margin-left"), 10);
      isNaN(s) && (s = 0),
        isNaN(r) && (r = 0),
        (e.top += s),
        (e.left += r),
        t.offset.setOffset(
          n[0],
          t.extend(
            {
              using: function (t) {
                n.css({ top: Math.round(t.top), left: Math.round(t.left) });
              },
            },
            e
          ),
          0
        ),
        n.addClass("in");
      var l = n[0].offsetWidth,
        d = n[0].offsetHeight;
      "top" == i && d != a && (e.top = e.top + a - d);
      var c = this.getViewportAdjustedDelta(i, e, l, d);
      c.left ? (e.left += c.left) : (e.top += c.top);
      var p = /top|bottom/.test(i),
        u = p ? 2 * c.left - o + l : 2 * c.top - a + d,
        h = p ? "offsetWidth" : "offsetHeight";
      n.offset(e), this.replaceArrow(u, n[0][h], p);
    }),
    (i.prototype.replaceArrow = function (t, e, i) {
      this.arrow()
        .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
        .css(i ? "top" : "left", "");
    }),
    (i.prototype.setContent = function () {
      var t = this.tip(),
        e = this.getTitle();
      t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
        t.removeClass("fade in top bottom left right");
    }),
    (i.prototype.hide = function (e) {
      function n() {
        "in" != o.hoverState && a.detach(),
          o.$element
            .removeAttr("aria-describedby")
            .trigger("hidden.bs." + o.type),
          e && e();
      }
      var o = this,
        a = t(this.$tip),
        s = t.Event("hide.bs." + this.type);
      if ((this.$element.trigger(s), !s.isDefaultPrevented()))
        return (
          a.removeClass("in"),
          t.support.transition && a.hasClass("fade")
            ? a
                .one("bsTransitionEnd", n)
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : n(),
          (this.hoverState = null),
          this
        );
    }),
    (i.prototype.fixTitle = function () {
      var t = this.$element;
      (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
        t.attr("data-original-title", t.attr("title") || "").attr("title", "");
    }),
    (i.prototype.hasContent = function () {
      return this.getTitle();
    }),
    (i.prototype.getPosition = function (e) {
      e = e || this.$element;
      var i = e[0],
        n = "BODY" == i.tagName,
        o = i.getBoundingClientRect();
      null == o.width &&
        (o = t.extend({}, o, {
          width: o.right - o.left,
          height: o.bottom - o.top,
        }));
      var a = n ? { top: 0, left: 0 } : e.offset(),
        s = {
          scroll: n
            ? document.documentElement.scrollTop || document.body.scrollTop
            : e.scrollTop(),
        },
        r = n ? { width: t(window).width(), height: t(window).height() } : null;
      return t.extend({}, o, s, r, a);
    }),
    (i.prototype.getCalculatedOffset = function (t, e, i, n) {
      return "bottom" == t
        ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
        : "top" == t
        ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 }
        : "left" == t
        ? { top: e.top + e.height / 2 - n / 2, left: e.left - i }
        : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width };
    }),
    (i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
      var o = { top: 0, left: 0 };
      if (!this.$viewport) return o;
      var a = (this.options.viewport && this.options.viewport.padding) || 0,
        s = this.getPosition(this.$viewport);
      if (/right|left/.test(t)) {
        var r = e.top - a - s.scroll,
          l = e.top + a - s.scroll + n;
        r < s.top
          ? (o.top = s.top - r)
          : l > s.top + s.height && (o.top = s.top + s.height - l);
      } else {
        var d = e.left - a,
          c = e.left + a + i;
        d < s.left
          ? (o.left = s.left - d)
          : c > s.right && (o.left = s.left + s.width - c);
      }
      return o;
    }),
    (i.prototype.getTitle = function () {
      var t,
        e = this.$element,
        i = this.options;
      return (t =
        e.attr("data-original-title") ||
        ("function" == typeof i.title ? i.title.call(e[0]) : i.title));
    }),
    (i.prototype.getUID = function (t) {
      do t += ~~(1e6 * Math.random());
      while (document.getElementById(t));
      return t;
    }),
    (i.prototype.tip = function () {
      if (
        !this.$tip &&
        ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
      )
        throw new Error(
          this.type +
            " `template` option must consist of exactly 1 top-level element!"
        );
      return this.$tip;
    }),
    (i.prototype.arrow = function () {
      return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
    }),
    (i.prototype.enable = function () {
      this.enabled = !0;
    }),
    (i.prototype.disable = function () {
      this.enabled = !1;
    }),
    (i.prototype.toggleEnabled = function () {
      this.enabled = !this.enabled;
    }),
    (i.prototype.toggle = function (e) {
      var i = this;
      e &&
        ((i = t(e.currentTarget).data("bs." + this.type)),
        i ||
          ((i = new this.constructor(
            e.currentTarget,
            this.getDelegateOptions()
          )),
          t(e.currentTarget).data("bs." + this.type, i))),
        e
          ? ((i.inState.click = !i.inState.click),
            i.isInStateTrue() ? i.enter(i) : i.leave(i))
          : i.tip().hasClass("in")
          ? i.leave(i)
          : i.enter(i);
    }),
    (i.prototype.destroy = function () {
      var t = this;
      clearTimeout(this.timeout),
        this.hide(function () {
          t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            (t.$tip = null),
            (t.$arrow = null),
            (t.$viewport = null);
        });
    });
  var n = t.fn.tooltip;
  (t.fn.tooltip = e),
    (t.fn.tooltip.Constructor = i),
    (t.fn.tooltip.noConflict = function () {
      return (t.fn.tooltip = n), this;
    });
})(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
+(function (t) {
  function e(e) {
    return this.each(function () {
      var n = t(this),
        o = n.data("bs.popover"),
        a =
          "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e;
      (!o && /destroy|hide/.test(e)) ||
        (o || n.data("bs.popover", (o = new i(this, a))),
        "string" == typeof e && o[e]());
    });
  }
  var i = function (t, e) {
    this.init("popover", t, e);
  };
  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  (i.VERSION = "3.3.5"),
    (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    })),
    (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
    (i.prototype.constructor = i),
    (i.prototype.getDefaults = function () {
      return i.DEFAULTS;
    }),
    (i.prototype.setContent = function () {
      var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();
      t.find(".popover-title")[this.options.html ? "html" : "text"](e),
        t
          .find(".popover-content")
          .children()
          .detach()
          .end()
          [
            this.options.html
              ? "string" == typeof i
                ? "html"
                : "append"
              : "text"
          ](i),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide();
    }),
    (i.prototype.hasContent = function () {
      return this.getTitle() || this.getContent();
    }),
    (i.prototype.getContent = function () {
      var t = this.$element,
        e = this.options;
      return (
        t.attr("data-content") ||
        ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
      );
    }),
    (i.prototype.arrow = function () {
      return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
    });
  var n = t.fn.popover;
  (t.fn.popover = e),
    (t.fn.popover.Constructor = i),
    (t.fn.popover.noConflict = function () {
      return (t.fn.popover = n), this;
    });
})(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
+(function (t) {
  function e(i, n) {
    (this.$body = t(document.body)),
      (this.$scrollElement = t(t(i).is(document.body) ? window : i)),
      (this.options = t.extend({}, e.DEFAULTS, n)),
      (this.selector = (this.options.target || "") + " .nav li > a"),
      (this.offsets = []),
      (this.targets = []),
      (this.activeTarget = null),
      (this.scrollHeight = 0),
      this.$scrollElement.on(
        "scroll.bs.scrollspy",
        t.proxy(this.process, this)
      ),
      this.refresh(),
      this.process();
  }
  function i(i) {
    return this.each(function () {
      var n = t(this),
        o = n.data("bs.scrollspy"),
        a =
          "object" == ("undefined" == typeof i ? "undefined" : _typeof(i)) && i;
      o || n.data("bs.scrollspy", (o = new e(this, a))),
        "string" == typeof i && o[i]();
    });
  }
  (e.VERSION = "3.3.5"),
    (e.DEFAULTS = { offset: 10 }),
    (e.prototype.getScrollHeight = function () {
      return (
        this.$scrollElement[0].scrollHeight ||
        Math.max(
          this.$body[0].scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }),
    (e.prototype.refresh = function () {
      var e = this,
        i = "offset",
        n = 0;
      (this.offsets = []),
        (this.targets = []),
        (this.scrollHeight = this.getScrollHeight()),
        t.isWindow(this.$scrollElement[0]) ||
          ((i = "position"), (n = this.$scrollElement.scrollTop())),
        this.$body
          .find(this.selector)
          .map(function () {
            var e = t(this),
              o = e.data("target") || e.attr("href"),
              a = /^#./.test(o) && t(o);
            return (
              (a && a.length && a.is(":visible") && [[a[i]().top + n, o]]) ||
              null
            );
          })
          .sort(function (t, e) {
            return t[0] - e[0];
          })
          .each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1]);
          });
    }),
    (e.prototype.process = function () {
      var t,
        e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.getScrollHeight(),
        n = this.options.offset + i - this.$scrollElement.height(),
        o = this.offsets,
        a = this.targets,
        s = this.activeTarget;
      if ((this.scrollHeight != i && this.refresh(), e >= n))
        return s != (t = a[a.length - 1]) && this.activate(t);
      if (s && e < o[0]) return (this.activeTarget = null), this.clear();
      for (t = o.length; t--; )
        s != a[t] &&
          e >= o[t] &&
          (void 0 === o[t + 1] || e < o[t + 1]) &&
          this.activate(a[t]);
    }),
    (e.prototype.activate = function (e) {
      (this.activeTarget = e), this.clear();
      var i =
          this.selector +
          '[data-target="' +
          e +
          '"],' +
          this.selector +
          '[href="' +
          e +
          '"]',
        n = t(i).parents("li").addClass("active");
      n.parent(".dropdown-menu").length &&
        (n = n.closest("li.dropdown").addClass("active")),
        n.trigger("activate.bs.scrollspy");
    }),
    (e.prototype.clear = function () {
      t(this.selector)
        .parentsUntil(this.options.target, ".active")
        .removeClass("active");
    });
  var n = t.fn.scrollspy;
  (t.fn.scrollspy = i),
    (t.fn.scrollspy.Constructor = e),
    (t.fn.scrollspy.noConflict = function () {
      return (t.fn.scrollspy = n), this;
    }),
    t(window).on("load.bs.scrollspy.data-api", function () {
      t('[data-spy="scroll"]').each(function () {
        var e = t(this);
        i.call(e, e.data());
      });
    });
})(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.tab");
        o || n.data("bs.tab", (o = new i(this))),
          "string" == typeof e && o[e]();
      });
    }
    var i = function (e) {
      this.element = t(e);
    };
    (i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function () {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          n = e.data("target");
        if (
          (n ||
            ((n = e.attr("href")), (n = n && n.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var o = i.find(".active:last a"),
            a = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            s = t.Event("show.bs.tab", { relatedTarget: o[0] });
          if (
            (o.trigger(a),
            e.trigger(s),
            !s.isDefaultPrevented() && !a.isDefaultPrevented())
          ) {
            var r = t(n);
            this.activate(e.closest("li"), i),
              this.activate(r, r.parent(), function () {
                o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
              });
          }
        }
      }),
      (i.prototype.activate = function (e, n, o) {
        function a() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            o && o();
        }
        var s = n.find("> .active"),
          r =
            o &&
            t.support.transition &&
            ((s.length && s.hasClass("fade")) || !!n.find("> .fade").length);
        s.length && r
          ? s
              .one("bsTransitionEnd", a)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : a(),
          s.removeClass("in");
      });
    var n = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = i),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = n), this;
      });
    var o = function (i) {
      i.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', o)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
  })(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
+(function (t) {
  function e(e) {
    return this.each(function () {
      var n = t(this),
        o = n.data("bs.affix"),
        a =
          "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e;
      o || n.data("bs.affix", (o = new i(this, a))),
        "string" == typeof e && o[e]();
    });
  }
  var i = function o(e, i) {
    (this.options = t.extend({}, o.DEFAULTS, i)),
      (this.$target = t(this.options.target)
        .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
        .on(
          "click.bs.affix.data-api",
          t.proxy(this.checkPositionWithEventLoop, this)
        )),
      (this.$element = t(e)),
      (this.affixed = null),
      (this.unpin = null),
      (this.pinnedOffset = null),
      this.checkPosition();
  };
  (i.VERSION = "3.3.5"),
    (i.RESET = "affix affix-top affix-bottom"),
    (i.DEFAULTS = { offset: 0, target: window }),
    (i.prototype.getState = function (t, e, i, n) {
      var o = this.$target.scrollTop(),
        a = this.$element.offset(),
        s = this.$target.height();
      if (null != i && "top" == this.affixed) return o < i && "top";
      if ("bottom" == this.affixed)
        return null != i
          ? !(o + this.unpin <= a.top) && "bottom"
          : !(o + s <= t - n) && "bottom";
      var r = null == this.affixed,
        l = r ? o : a.top,
        d = r ? s : e;
      return null != i && o <= i
        ? "top"
        : null != n && l + d >= t - n && "bottom";
    }),
    (i.prototype.getPinnedOffset = function () {
      if (this.pinnedOffset) return this.pinnedOffset;
      this.$element.removeClass(i.RESET).addClass("affix");
      var t = this.$target.scrollTop(),
        e = this.$element.offset();
      return (this.pinnedOffset = e.top - t);
    }),
    (i.prototype.checkPositionWithEventLoop = function () {
      setTimeout(t.proxy(this.checkPosition, this), 1);
    }),
    (i.prototype.checkPosition = function () {
      if (this.$element.is(":visible")) {
        var e = this.$element.height(),
          n = this.options.offset,
          o = n.top,
          a = n.bottom,
          s = Math.max(t(document).height(), t(document.body).height());
        "object" != ("undefined" == typeof n ? "undefined" : _typeof(n)) &&
          (a = o = n),
          "function" == typeof o && (o = n.top(this.$element)),
          "function" == typeof a && (a = n.bottom(this.$element));
        var r = this.getState(s, e, o, a);
        if (this.affixed != r) {
          null != this.unpin && this.$element.css("top", "");
          var l = "affix" + (r ? "-" + r : ""),
            d = t.Event(l + ".bs.affix");
          if ((this.$element.trigger(d), d.isDefaultPrevented())) return;
          (this.affixed = r),
            (this.unpin = "bottom" == r ? this.getPinnedOffset() : null),
            this.$element
              .removeClass(i.RESET)
              .addClass(l)
              .trigger(l.replace("affix", "affixed") + ".bs.affix");
        }
        "bottom" == r && this.$element.offset({ top: s - e - a });
      }
    });
  var n = t.fn.affix;
  (t.fn.affix = e),
    (t.fn.affix.Constructor = i),
    (t.fn.affix.noConflict = function () {
      return (t.fn.affix = n), this;
    }),
    t(window).on("load", function () {
      t('[data-spy="affix"]').each(function () {
        var i = t(this),
          n = i.data();
        (n.offset = n.offset || {}),
          null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
          null != n.offsetTop && (n.offset.top = n.offsetTop),
          e.call(i, n);
      });
    });
})(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
!(function (t) {
  var e = !0;
  (t.flexslider = function (i, n) {
    var o = t(i);
    o.vars = t.extend({}, t.flexslider.defaults, n);
    var a,
      s = o.vars.namespace,
      r =
        window.navigator &&
        window.navigator.msPointerEnabled &&
        window.MSGesture,
      l =
        ("ontouchstart" in window ||
          r ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        o.vars.touch,
      d = "click touchend MSPointerUp keyup",
      c = "",
      p = "vertical" === o.vars.direction,
      u = o.vars.reverse,
      h = o.vars.itemWidth > 0,
      f = "fade" === o.vars.animation,
      v = "" !== o.vars.asNavFor,
      m = {};
    t.data(i, "flexslider", o),
      (m = {
        init: function () {
          (o.animating = !1),
            (o.currentSlide = parseInt(
              o.vars.startAt ? o.vars.startAt : 0,
              10
            )),
            isNaN(o.currentSlide) && (o.currentSlide = 0),
            (o.animatingTo = o.currentSlide),
            (o.atEnd = 0 === o.currentSlide || o.currentSlide === o.last),
            (o.containerSelector = o.vars.selector.substr(
              0,
              o.vars.selector.search(" ")
            )),
            (o.slides = t(o.vars.selector, o)),
            (o.container = t(o.containerSelector, o)),
            (o.count = o.slides.length),
            (o.syncExists = t(o.vars.sync).length > 0),
            "slide" === o.vars.animation && (o.vars.animation = "swing"),
            (o.prop = p ? "top" : "marginLeft"),
            (o.args = {}),
            (o.manualPause = !1),
            (o.stopped = !1),
            (o.started = !1),
            (o.startTimeout = null),
            (o.transitions =
              !o.vars.video &&
              !f &&
              o.vars.useCSS &&
              (function () {
                var t = document.createElement("div"),
                  e = [
                    "perspectiveProperty",
                    "WebkitPerspective",
                    "MozPerspective",
                    "OPerspective",
                    "msPerspective",
                  ];
                for (var i in e)
                  if (void 0 !== t.style[e[i]])
                    return (
                      (o.pfx = e[i].replace("Perspective", "").toLowerCase()),
                      (o.prop = "-" + o.pfx + "-transform"),
                      !0
                    );
                return !1;
              })()),
            (o.ensureAnimationEnd = ""),
            "" !== o.vars.controlsContainer &&
              (o.controlsContainer =
                t(o.vars.controlsContainer).length > 0 &&
                t(o.vars.controlsContainer)),
            "" !== o.vars.manualControls &&
              (o.manualControls =
                t(o.vars.manualControls).length > 0 &&
                t(o.vars.manualControls)),
            "" !== o.vars.customDirectionNav &&
              (o.customDirectionNav =
                2 === t(o.vars.customDirectionNav).length &&
                t(o.vars.customDirectionNav)),
            o.vars.randomize &&
              (o.slides.sort(function () {
                return Math.round(Math.random()) - 0.5;
              }),
              o.container.empty().append(o.slides)),
            o.doMath(),
            o.setup("init"),
            o.vars.controlNav && m.controlNav.setup(),
            o.vars.directionNav && m.directionNav.setup(),
            o.vars.keyboard &&
              (1 === t(o.containerSelector).length ||
                o.vars.multipleKeyboard) &&
              t(document).bind("keyup", function (t) {
                var e = t.keyCode;
                if (!o.animating && (39 === e || 37 === e)) {
                  var i =
                    39 === e
                      ? o.getTarget("next")
                      : 37 === e && o.getTarget("prev");
                  o.flexAnimate(i, o.vars.pauseOnAction);
                }
              }),
            o.vars.mousewheel &&
              o.bind("mousewheel", function (t, e, i, n) {
                t.preventDefault();
                var a = e < 0 ? o.getTarget("next") : o.getTarget("prev");
                o.flexAnimate(a, o.vars.pauseOnAction);
              }),
            o.vars.pausePlay && m.pausePlay.setup(),
            o.vars.slideshow &&
              o.vars.pauseInvisible &&
              m.pauseInvisible.init(),
            o.vars.slideshow &&
              (o.vars.pauseOnHover &&
                o.hover(
                  function () {
                    o.manualPlay || o.manualPause || o.pause();
                  },
                  function () {
                    o.manualPause || o.manualPlay || o.stopped || o.play();
                  }
                ),
              (o.vars.pauseInvisible && m.pauseInvisible.isHidden()) ||
                (o.vars.initDelay > 0
                  ? (o.startTimeout = setTimeout(o.play, o.vars.initDelay))
                  : o.play())),
            v && m.asNav.setup(),
            l && o.vars.touch && m.touch(),
            (!f || (f && o.vars.smoothHeight)) &&
              t(window).bind("resize orientationchange focus", m.resize),
            o.find("img").attr("draggable", "false"),
            setTimeout(function () {
              o.vars.start(o);
            }, 200);
        },
        asNav: {
          setup: function () {
            (o.asNav = !0),
              (o.animatingTo = Math.floor(o.currentSlide / o.move)),
              (o.currentItem = o.currentSlide),
              o.slides
                .removeClass(s + "active-slide")
                .eq(o.currentItem)
                .addClass(s + "active-slide"),
              r
                ? ((i._slider = o),
                  o.slides.each(function () {
                    var e = this;
                    (e._gesture = new MSGesture()),
                      (e._gesture.target = e),
                      e.addEventListener(
                        "MSPointerDown",
                        function (t) {
                          t.preventDefault(),
                            t.currentTarget._gesture &&
                              t.currentTarget._gesture.addPointer(t.pointerId);
                        },
                        !1
                      ),
                      e.addEventListener("MSGestureTap", function (e) {
                        e.preventDefault();
                        var i = t(this),
                          n = i.index();
                        t(o.vars.asNavFor).data("flexslider").animating ||
                          i.hasClass("active") ||
                          ((o.direction = o.currentItem < n ? "next" : "prev"),
                          o.flexAnimate(n, o.vars.pauseOnAction, !1, !0, !0));
                      });
                  }))
                : o.slides.on(d, function (e) {
                    e.preventDefault();
                    var i = t(this),
                      n = i.index(),
                      a = i.offset().left - t(o).scrollLeft();
                    a <= 0 && i.hasClass(s + "active-slide")
                      ? o.flexAnimate(o.getTarget("prev"), !0)
                      : t(o.vars.asNavFor).data("flexslider").animating ||
                        i.hasClass(s + "active-slide") ||
                        ((o.direction = o.currentItem < n ? "next" : "prev"),
                        o.flexAnimate(n, o.vars.pauseOnAction, !1, !0, !0));
                  });
          },
        },
        controlNav: {
          setup: function () {
            o.manualControls
              ? m.controlNav.setupManual()
              : m.controlNav.setupPaging();
          },
          setupPaging: function () {
            var e,
              i,
              n =
                "thumbnails" === o.vars.controlNav
                  ? "control-thumbs"
                  : "control-paging",
              a = 1;
            if (
              ((o.controlNavScaffold = t(
                '<ol class="' + s + "control-nav " + s + n + '"></ol>'
              )),
              o.pagingCount > 1)
            )
              for (var r = 0; r < o.pagingCount; r++) {
                (i = o.slides.eq(r)),
                  void 0 === i.attr("data-thumb-alt") &&
                    i.attr("data-thumb-alt", "");
                var l =
                  "" !== i.attr("data-thumb-alt")
                    ? (l = ' alt="' + i.attr("data-thumb-alt") + '"')
                    : "";
                if (
                  ((e =
                    "thumbnails" === o.vars.controlNav
                      ? '<img src="' + i.attr("data-thumb") + '"' + l + "/>"
                      : '<a href="#">' + a + "</a>"),
                  "thumbnails" === o.vars.controlNav &&
                    !0 === o.vars.thumbCaptions)
                ) {
                  var p = i.attr("data-thumbcaption");
                  "" !== p &&
                    void 0 !== p &&
                    (e += '<span class="' + s + 'caption">' + p + "</span>");
                }
                o.controlNavScaffold.append("<li>" + e + "</li>"), a++;
              }
            o.controlsContainer
              ? t(o.controlsContainer).append(o.controlNavScaffold)
              : o.append(o.controlNavScaffold),
              m.controlNav.set(),
              m.controlNav.active(),
              o.controlNavScaffold.delegate("a, img", d, function (e) {
                if ((e.preventDefault(), "" === c || c === e.type)) {
                  var i = t(this),
                    n = o.controlNav.index(i);
                  i.hasClass(s + "active") ||
                    ((o.direction = n > o.currentSlide ? "next" : "prev"),
                    o.flexAnimate(n, o.vars.pauseOnAction));
                }
                "" === c && (c = e.type), m.setToClearWatchedEvent();
              });
          },
          setupManual: function () {
            (o.controlNav = o.manualControls),
              m.controlNav.active(),
              o.controlNav.bind(d, function (e) {
                if ((e.preventDefault(), "" === c || c === e.type)) {
                  var i = t(this),
                    n = o.controlNav.index(i);
                  i.hasClass(s + "active") ||
                    (n > o.currentSlide
                      ? (o.direction = "next")
                      : (o.direction = "prev"),
                    o.flexAnimate(n, o.vars.pauseOnAction));
                }
                "" === c && (c = e.type), m.setToClearWatchedEvent();
              });
          },
          set: function () {
            var e = "thumbnails" === o.vars.controlNav ? "img" : "a";
            o.controlNav = t(
              "." + s + "control-nav li " + e,
              o.controlsContainer ? o.controlsContainer : o
            );
          },
          active: function () {
            o.controlNav
              .removeClass(s + "active")
              .eq(o.animatingTo)
              .addClass(s + "active");
          },
          update: function (e, i) {
            o.pagingCount > 1 && "add" === e
              ? o.controlNavScaffold.append(
                  t('<li><a href="#">' + o.count + "</a></li>")
                )
              : 1 === o.pagingCount
              ? o.controlNavScaffold.find("li").remove()
              : o.controlNav.eq(i).closest("li").remove(),
              m.controlNav.set(),
              o.pagingCount > 1 && o.pagingCount !== o.controlNav.length
                ? o.update(i, e)
                : m.controlNav.active();
          },
        },
        directionNav: {
          setup: function () {
            var e = t(
              '<ul class="' +
                s +
                'direction-nav"><li class="' +
                s +
                'nav-prev"><a class="' +
                s +
                'prev" href="#">' +
                o.vars.prevText +
                '</a></li><li class="' +
                s +
                'nav-next"><a class="' +
                s +
                'next" href="#">' +
                o.vars.nextText +
                "</a></li></ul>"
            );
            o.customDirectionNav
              ? (o.directionNav = o.customDirectionNav)
              : o.controlsContainer
              ? (t(o.controlsContainer).append(e),
                (o.directionNav = t(
                  "." + s + "direction-nav li a",
                  o.controlsContainer
                )))
              : (o.append(e),
                (o.directionNav = t("." + s + "direction-nav li a", o))),
              m.directionNav.update(),
              o.directionNav.bind(d, function (e) {
                e.preventDefault();
                var i;
                ("" !== c && c !== e.type) ||
                  ((i = t(this).hasClass(s + "next")
                    ? o.getTarget("next")
                    : o.getTarget("prev")),
                  o.flexAnimate(i, o.vars.pauseOnAction)),
                  "" === c && (c = e.type),
                  m.setToClearWatchedEvent();
              });
          },
          update: function () {
            var t = s + "disabled";
            1 === o.pagingCount
              ? o.directionNav.addClass(t).attr("tabindex", "-1")
              : o.vars.animationLoop
              ? o.directionNav.removeClass(t).removeAttr("tabindex")
              : 0 === o.animatingTo
              ? o.directionNav
                  .removeClass(t)
                  .filter("." + s + "prev")
                  .addClass(t)
                  .attr("tabindex", "-1")
              : o.animatingTo === o.last
              ? o.directionNav
                  .removeClass(t)
                  .filter("." + s + "next")
                  .addClass(t)
                  .attr("tabindex", "-1")
              : o.directionNav.removeClass(t).removeAttr("tabindex");
          },
        },
        pausePlay: {
          setup: function () {
            var e = t('<div class="' + s + 'pauseplay"><a href="#"></a></div>');
            o.controlsContainer
              ? (o.controlsContainer.append(e),
                (o.pausePlay = t("." + s + "pauseplay a", o.controlsContainer)))
              : (o.append(e), (o.pausePlay = t("." + s + "pauseplay a", o))),
              m.pausePlay.update(o.vars.slideshow ? s + "pause" : s + "play"),
              o.pausePlay.bind(d, function (e) {
                e.preventDefault(),
                  ("" !== c && c !== e.type) ||
                    (t(this).hasClass(s + "pause")
                      ? ((o.manualPause = !0), (o.manualPlay = !1), o.pause())
                      : ((o.manualPause = !1), (o.manualPlay = !0), o.play())),
                  "" === c && (c = e.type),
                  m.setToClearWatchedEvent();
              });
          },
          update: function (t) {
            "play" === t
              ? o.pausePlay
                  .removeClass(s + "pause")
                  .addClass(s + "play")
                  .html(o.vars.playText)
              : o.pausePlay
                  .removeClass(s + "play")
                  .addClass(s + "pause")
                  .html(o.vars.pauseText);
          },
        },
        touch: function () {
          var t,
            e,
            n,
            a,
            s,
            l,
            d,
            c,
            v,
            m = !1,
            g = 0,
            y = 0,
            b = 0;
          if (r) {
            var w = function (t) {
                t.stopPropagation(),
                  o.animating
                    ? t.preventDefault()
                    : (o.pause(),
                      i._gesture.addPointer(t.pointerId),
                      (b = 0),
                      (a = p ? o.h : o.w),
                      (l = Number(new Date())),
                      (n =
                        h && u && o.animatingTo === o.last
                          ? 0
                          : h && u
                          ? o.limit -
                            (o.itemW + o.vars.itemMargin) *
                              o.move *
                              o.animatingTo
                          : h && o.currentSlide === o.last
                          ? o.limit
                          : h
                          ? (o.itemW + o.vars.itemMargin) *
                            o.move *
                            o.currentSlide
                          : u
                          ? (o.last - o.currentSlide + o.cloneOffset) * a
                          : (o.currentSlide + o.cloneOffset) * a));
              },
              S = function (t) {
                t.stopPropagation();
                var e = t.target._slider;
                if (e) {
                  var o = -t.translationX,
                    r = -t.translationY;
                  return (
                    (b += p ? r : o),
                    (s = b),
                    (m = p
                      ? Math.abs(b) < Math.abs(-o)
                      : Math.abs(b) < Math.abs(-r)),
                    t.detail === t.MSGESTURE_FLAG_INERTIA
                      ? void setImmediate(function () {
                          i._gesture.stop();
                        })
                      : void (
                          (!m || Number(new Date()) - l > 500) &&
                          (t.preventDefault(),
                          !f &&
                            e.transitions &&
                            (e.vars.animationLoop ||
                              (s =
                                b /
                                ((0 === e.currentSlide && b < 0) ||
                                (e.currentSlide === e.last && b > 0)
                                  ? Math.abs(b) / a + 2
                                  : 1)),
                            e.setProps(n + s, "setTouch")))
                        )
                  );
                }
              },
              T = function (i) {
                i.stopPropagation();
                var o = i.target._slider;
                if (o) {
                  if (o.animatingTo === o.currentSlide && !m && null !== s) {
                    var r = u ? -s : s,
                      d = r > 0 ? o.getTarget("next") : o.getTarget("prev");
                    o.canAdvance(d) &&
                    ((Number(new Date()) - l < 550 && Math.abs(r) > 50) ||
                      Math.abs(r) > a / 2)
                      ? o.flexAnimate(d, o.vars.pauseOnAction)
                      : f ||
                        o.flexAnimate(o.currentSlide, o.vars.pauseOnAction, !0);
                  }
                  (t = null), (e = null), (s = null), (n = null), (b = 0);
                }
              };
            (i.style.msTouchAction = "none"),
              (i._gesture = new MSGesture()),
              (i._gesture.target = i),
              i.addEventListener("MSPointerDown", w, !1),
              (i._slider = o),
              i.addEventListener("MSGestureChange", S, !1),
              i.addEventListener("MSGestureEnd", T, !1);
          } else
            (d = function (s) {
              o.animating
                ? s.preventDefault()
                : (window.navigator.msPointerEnabled ||
                    1 === s.touches.length) &&
                  (o.pause(),
                  (a = p ? o.h : o.w),
                  (l = Number(new Date())),
                  (g = s.touches[0].pageX),
                  (y = s.touches[0].pageY),
                  (n =
                    h && u && o.animatingTo === o.last
                      ? 0
                      : h && u
                      ? o.limit -
                        (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo
                      : h && o.currentSlide === o.last
                      ? o.limit
                      : h
                      ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide
                      : u
                      ? (o.last - o.currentSlide + o.cloneOffset) * a
                      : (o.currentSlide + o.cloneOffset) * a),
                  (t = p ? y : g),
                  (e = p ? g : y),
                  i.addEventListener("touchmove", c, !1),
                  i.addEventListener("touchend", v, !1));
            }),
              (c = function (i) {
                (g = i.touches[0].pageX),
                  (y = i.touches[0].pageY),
                  (s = p ? t - y : t - g),
                  (m = p
                    ? Math.abs(s) < Math.abs(g - e)
                    : Math.abs(s) < Math.abs(y - e));
                var r = 500;
                (!m || Number(new Date()) - l > r) &&
                  (i.preventDefault(),
                  !f &&
                    o.transitions &&
                    (o.vars.animationLoop ||
                      (s /=
                        (0 === o.currentSlide && s < 0) ||
                        (o.currentSlide === o.last && s > 0)
                          ? Math.abs(s) / a + 2
                          : 1),
                    o.setProps(n + s, "setTouch")));
              }),
              (v = function (r) {
                if (
                  (i.removeEventListener("touchmove", c, !1),
                  o.animatingTo === o.currentSlide && !m && null !== s)
                ) {
                  var d = u ? -s : s,
                    p = d > 0 ? o.getTarget("next") : o.getTarget("prev");
                  o.canAdvance(p) &&
                  ((Number(new Date()) - l < 550 && Math.abs(d) > 50) ||
                    Math.abs(d) > a / 2)
                    ? o.flexAnimate(p, o.vars.pauseOnAction)
                    : f ||
                      o.flexAnimate(o.currentSlide, o.vars.pauseOnAction, !0);
                }
                i.removeEventListener("touchend", v, !1),
                  (t = null),
                  (e = null),
                  (s = null),
                  (n = null);
              }),
              i.addEventListener("touchstart", d, !1);
        },
        resize: function () {
          !o.animating &&
            o.is(":visible") &&
            (h || o.doMath(),
            f
              ? m.smoothHeight()
              : h
              ? (o.slides.width(o.computedW),
                o.update(o.pagingCount),
                o.setProps())
              : p
              ? (o.viewport.height(o.h), o.setProps(o.h, "setTotal"))
              : (o.vars.smoothHeight && m.smoothHeight(),
                o.newSlides.width(o.computedW),
                o.setProps(o.computedW, "setTotal")));
        },
        smoothHeight: function (t) {
          if (!p || f) {
            var e = f ? o : o.viewport;
            t
              ? e
                  .animate(
                    { height: o.slides.eq(o.animatingTo).innerHeight() },
                    t
                  )
                  .css("overflow", "visible")
              : e.innerHeight(o.slides.eq(o.animatingTo).innerHeight());
          }
        },
        sync: function (e) {
          var i = t(o.vars.sync).data("flexslider"),
            n = o.animatingTo;
          switch (e) {
            case "animate":
              i.flexAnimate(n, o.vars.pauseOnAction, !1, !0);
              break;
            case "play":
              i.playing || i.asNav || i.play();
              break;
            case "pause":
              i.pause();
          }
        },
        uniqueID: function (e) {
          return (
            e
              .filter("[id]")
              .add(e.find("[id]"))
              .each(function () {
                var e = t(this);
                e.attr("id", e.attr("id") + "_clone");
              }),
            e
          );
        },
        pauseInvisible: {
          visProp: null,
          init: function () {
            var t = m.pauseInvisible.getHiddenProp();
            if (t) {
              var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
              document.addEventListener(e, function () {
                m.pauseInvisible.isHidden()
                  ? o.startTimeout
                    ? clearTimeout(o.startTimeout)
                    : o.pause()
                  : o.started
                  ? o.play()
                  : o.vars.initDelay > 0
                  ? setTimeout(o.play, o.vars.initDelay)
                  : o.play();
              });
            }
          },
          isHidden: function () {
            var t = m.pauseInvisible.getHiddenProp();
            return !!t && document[t];
          },
          getHiddenProp: function () {
            var t = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var e = 0; e < t.length; e++)
              if (t[e] + "Hidden" in document) return t[e] + "Hidden";
            return null;
          },
        },
        setToClearWatchedEvent: function () {
          clearTimeout(a),
            (a = setTimeout(function () {
              c = "";
            }, 3e3));
        },
      }),
      (o.flexAnimate = function (e, i, n, a, r) {
        if (
          (o.vars.animationLoop ||
            e === o.currentSlide ||
            (o.direction = e > o.currentSlide ? "next" : "prev"),
          v &&
            1 === o.pagingCount &&
            (o.direction = o.currentItem < e ? "next" : "prev"),
          !o.animating && (o.canAdvance(e, r) || n) && o.is(":visible"))
        ) {
          if (v && a) {
            var d = t(o.vars.asNavFor).data("flexslider");
            if (
              ((o.atEnd = 0 === e || e === o.count - 1),
              d.flexAnimate(e, !0, !1, !0, r),
              (o.direction = o.currentItem < e ? "next" : "prev"),
              (d.direction = o.direction),
              Math.ceil((e + 1) / o.visible) - 1 === o.currentSlide || 0 === e)
            )
              return (
                (o.currentItem = e),
                o.slides
                  .removeClass(s + "active-slide")
                  .eq(e)
                  .addClass(s + "active-slide"),
                !1
              );
            (o.currentItem = e),
              o.slides
                .removeClass(s + "active-slide")
                .eq(e)
                .addClass(s + "active-slide"),
              (e = Math.floor(e / o.visible));
          }
          if (
            ((o.animating = !0),
            (o.animatingTo = e),
            i && o.pause(),
            o.vars.before(o),
            o.syncExists && !r && m.sync("animate"),
            o.vars.controlNav && m.controlNav.active(),
            h ||
              o.slides
                .removeClass(s + "active-slide")
                .eq(e)
                .addClass(s + "active-slide"),
            (o.atEnd = 0 === e || e === o.last),
            o.vars.directionNav && m.directionNav.update(),
            e === o.last && (o.vars.end(o), o.vars.animationLoop || o.pause()),
            f)
          )
            l
              ? (o.slides
                  .eq(o.currentSlide)
                  .css({ opacity: 0, zIndex: 1, display: "none" }),
                o.slides.eq(e).css({ opacity: 1, zIndex: 2, display: "block" }),
                o.wrapup(b))
              : (o.slides
                  .eq(o.currentSlide)
                  .css({ zIndex: 1, display: "none" })
                  .animate(
                    { opacity: 0 },
                    o.vars.animationSpeed,
                    o.vars.easing
                  ),
                o.slides
                  .eq(e)
                  .css({ zIndex: 2, display: "block" })
                  .animate(
                    { opacity: 1 },
                    o.vars.animationSpeed,
                    o.vars.easing,
                    o.wrapup
                  ));
          else {
            var c,
              g,
              y,
              b = p ? o.slides.filter(":first").height() : o.computedW;
            h
              ? ((c = o.vars.itemMargin),
                (y = (o.itemW + c) * o.move * o.animatingTo),
                (g = y > o.limit && 1 !== o.visible ? o.limit : y))
              : (g =
                  0 === o.currentSlide &&
                  e === o.count - 1 &&
                  o.vars.animationLoop &&
                  "next" !== o.direction
                    ? u
                      ? (o.count + o.cloneOffset) * b
                      : 0
                    : o.currentSlide === o.last &&
                      0 === e &&
                      o.vars.animationLoop &&
                      "prev" !== o.direction
                    ? u
                      ? 0
                      : (o.count + 1) * b
                    : u
                    ? (o.count - 1 - e + o.cloneOffset) * b
                    : (e + o.cloneOffset) * b),
              o.setProps(g, "", o.vars.animationSpeed),
              o.transitions
                ? ((o.vars.animationLoop && o.atEnd) ||
                    ((o.animating = !1), (o.currentSlide = o.animatingTo)),
                  o.container.unbind("webkitTransitionEnd transitionend"),
                  o.container.bind(
                    "webkitTransitionEnd transitionend",
                    function () {
                      clearTimeout(o.ensureAnimationEnd), o.wrapup(b);
                    }
                  ),
                  clearTimeout(o.ensureAnimationEnd),
                  (o.ensureAnimationEnd = setTimeout(function () {
                    o.wrapup(b);
                  }, o.vars.animationSpeed + 100)))
                : o.container.animate(
                    o.args,
                    o.vars.animationSpeed,
                    o.vars.easing,
                    function () {
                      o.wrapup(b);
                    }
                  );
          }
          o.vars.smoothHeight && m.smoothHeight(o.vars.animationSpeed);
        }
      }),
      (o.wrapup = function (t) {
        f ||
          h ||
          (0 === o.currentSlide &&
          o.animatingTo === o.last &&
          o.vars.animationLoop
            ? o.setProps(t, "jumpEnd")
            : o.currentSlide === o.last &&
              0 === o.animatingTo &&
              o.vars.animationLoop &&
              o.setProps(t, "jumpStart")),
          (o.animating = !1),
          (o.currentSlide = o.animatingTo),
          o.vars.after(o);
      }),
      (o.animateSlides = function () {
        !o.animating && e && o.flexAnimate(o.getTarget("next"));
      }),
      (o.pause = function () {
        clearInterval(o.animatedSlides),
          (o.animatedSlides = null),
          (o.playing = !1),
          o.vars.pausePlay && m.pausePlay.update("play"),
          o.syncExists && m.sync("pause");
      }),
      (o.play = function () {
        o.playing && clearInterval(o.animatedSlides),
          (o.animatedSlides =
            o.animatedSlides ||
            setInterval(o.animateSlides, o.vars.slideshowSpeed)),
          (o.started = o.playing = !0),
          o.vars.pausePlay && m.pausePlay.update("pause"),
          o.syncExists && m.sync("play");
      }),
      (o.stop = function () {
        o.pause(), (o.stopped = !0);
      }),
      (o.canAdvance = function (t, e) {
        var i = v ? o.pagingCount - 1 : o.last;
        return (
          !!e ||
          !(
            !v ||
            o.currentItem !== o.count - 1 ||
            0 !== t ||
            "prev" !== o.direction
          ) ||
          ((!v ||
            0 !== o.currentItem ||
            t !== o.pagingCount - 1 ||
            "next" === o.direction) &&
            !(t === o.currentSlide && !v) &&
            (!!o.vars.animationLoop ||
              ((!o.atEnd ||
                0 !== o.currentSlide ||
                t !== i ||
                "next" === o.direction) &&
                (!o.atEnd ||
                  o.currentSlide !== i ||
                  0 !== t ||
                  "next" !== o.direction))))
        );
      }),
      (o.getTarget = function (t) {
        return (
          (o.direction = t),
          "next" === t
            ? o.currentSlide === o.last
              ? 0
              : o.currentSlide + 1
            : 0 === o.currentSlide
            ? o.last
            : o.currentSlide - 1
        );
      }),
      (o.setProps = function (t, e, i) {
        var n = (function () {
          var i = t
              ? t
              : (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo,
            n = (function () {
              if (h)
                return "setTouch" === e
                  ? t
                  : u && o.animatingTo === o.last
                  ? 0
                  : u
                  ? o.limit -
                    (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo
                  : o.animatingTo === o.last
                  ? o.limit
                  : i;
              switch (e) {
                case "setTotal":
                  return u
                    ? (o.count - 1 - o.currentSlide + o.cloneOffset) * t
                    : (o.currentSlide + o.cloneOffset) * t;
                case "setTouch":
                  return u ? t : t;
                case "jumpEnd":
                  return u ? t : o.count * t;
                case "jumpStart":
                  return u ? o.count * t : t;
                default:
                  return t;
              }
            })();
          return n * -1 + "px";
        })();
        o.transitions &&
          ((n = p
            ? "translate3d(0," + n + ",0)"
            : "translate3d(" + n + ",0,0)"),
          (i = void 0 !== i ? i / 1e3 + "s" : "0s"),
          o.container.css("-" + o.pfx + "-transition-duration", i),
          o.container.css("transition-duration", i)),
          (o.args[o.prop] = n),
          (o.transitions || void 0 === i) && o.container.css(o.args),
          o.container.css("transform", n);
      }),
      (o.setup = function (e) {
        if (f)
          o.slides.css({
            width: "100%",
            float: "left",
            marginRight: "-100%",
            position: "relative",
          }),
            "init" === e &&
              (l
                ? o.slides
                    .css({
                      opacity: 0,
                      display: "none",
                      webkitTransition:
                        "opacity " + o.vars.animationSpeed / 1e3 + "s ease",
                      zIndex: 1,
                    })
                    .eq(o.currentSlide)
                    .css({ opacity: 1, zIndex: 2, display: "block" })
                : 0 == o.vars.fadeFirstSlide
                ? o.slides
                    .css({ opacity: 0, display: "none", zIndex: 1 })
                    .eq(o.currentSlide)
                    .css({ zIndex: 2, display: "block" })
                    .css({ opacity: 1 })
                : o.slides
                    .css({ opacity: 0, display: "none", zIndex: 1 })
                    .eq(o.currentSlide)
                    .css({ zIndex: 2, display: "block" })
                    .animate(
                      { opacity: 1 },
                      o.vars.animationSpeed,
                      o.vars.easing
                    )),
            o.vars.smoothHeight && m.smoothHeight();
        else {
          var i, n;
          "init" === e &&
            ((o.viewport = t('<div class="' + s + 'viewport"></div>')
              .css({ overflow: "hidden", position: "relative" })
              .appendTo(o)
              .append(o.container)),
            (o.cloneCount = 0),
            (o.cloneOffset = 0),
            u &&
              ((n = t.makeArray(o.slides).reverse()),
              (o.slides = t(n)),
              o.container.empty().append(o.slides))),
            o.vars.animationLoop &&
              !h &&
              ((o.cloneCount = 2),
              (o.cloneOffset = 1),
              "init" !== e && o.container.find(".clone").remove(),
              o.container
                .append(
                  m
                    .uniqueID(o.slides.first().clone().addClass("clone"))
                    .attr("aria-hidden", "true")
                )
                .prepend(
                  m
                    .uniqueID(o.slides.last().clone().addClass("clone"))
                    .attr("aria-hidden", "true")
                )),
            (o.newSlides = t(o.vars.selector, o)),
            (i = u
              ? o.count - 1 - o.currentSlide + o.cloneOffset
              : o.currentSlide + o.cloneOffset),
            p && !h
              ? (o.container
                  .height(200 * (o.count + o.cloneCount) + "%")
                  .css("position", "absolute")
                  .width("100%"),
                setTimeout(
                  function () {
                    o.newSlides.css({ display: "block" }),
                      o.doMath(),
                      o.viewport.height(o.h),
                      o.setProps(i * o.h, "init");
                  },
                  "init" === e ? 100 : 0
                ))
              : (o.container.width(200 * (o.count + o.cloneCount) + "%"),
                o.setProps(i * o.computedW, "init"),
                setTimeout(
                  function () {
                    o.doMath(),
                      o.newSlides.css({
                        width: o.computedW,
                        marginRight: o.computedM,
                        float: "left",
                        display: "block",
                      }),
                      o.vars.smoothHeight && m.smoothHeight();
                  },
                  "init" === e ? 100 : 0
                ));
        }
        h ||
          o.slides
            .removeClass(s + "active-slide")
            .eq(o.currentSlide)
            .addClass(s + "active-slide"),
          o.vars.init(o);
      }),
      (o.doMath = function () {
        var t = o.slides.first(),
          e = o.vars.itemMargin,
          i = o.vars.minItems,
          n = o.vars.maxItems;
        (o.w = void 0 === o.viewport ? o.width() : o.viewport.width()),
          (o.h = t.height()),
          (o.boxPadding = t.outerWidth() - t.width()),
          h
            ? ((o.itemT = o.vars.itemWidth + e),
              (o.itemM = e),
              (o.minW = i ? i * o.itemT : o.w),
              (o.maxW = n ? n * o.itemT - e : o.w),
              (o.itemW =
                o.minW > o.w
                  ? (o.w - e * (i - 1)) / i
                  : o.maxW < o.w
                  ? (o.w - e * (n - 1)) / n
                  : o.vars.itemWidth > o.w
                  ? o.w
                  : o.vars.itemWidth),
              (o.visible = Math.floor(o.w / o.itemW)),
              (o.move =
                o.vars.move > 0 && o.vars.move < o.visible
                  ? o.vars.move
                  : o.visible),
              (o.pagingCount = Math.ceil((o.count - o.visible) / o.move + 1)),
              (o.last = o.pagingCount - 1),
              (o.limit =
                1 === o.pagingCount
                  ? 0
                  : o.vars.itemWidth > o.w
                  ? o.itemW * (o.count - 1) + e * (o.count - 1)
                  : (o.itemW + e) * o.count - o.w - e))
            : ((o.itemW = o.w),
              (o.itemM = e),
              (o.pagingCount = o.count),
              (o.last = o.count - 1)),
          (o.computedW = o.itemW - o.boxPadding),
          (o.computedM = o.itemM);
      }),
      (o.update = function (t, e) {
        o.doMath(),
          h ||
            (t < o.currentSlide
              ? (o.currentSlide += 1)
              : t <= o.currentSlide && 0 !== t && (o.currentSlide -= 1),
            (o.animatingTo = o.currentSlide)),
          o.vars.controlNav &&
            !o.manualControls &&
            (("add" === e && !h) || o.pagingCount > o.controlNav.length
              ? m.controlNav.update("add")
              : (("remove" === e && !h) ||
                  o.pagingCount < o.controlNav.length) &&
                (h &&
                  o.currentSlide > o.last &&
                  ((o.currentSlide -= 1), (o.animatingTo -= 1)),
                m.controlNav.update("remove", o.last))),
          o.vars.directionNav && m.directionNav.update();
      }),
      (o.addSlide = function (e, i) {
        var n = t(e);
        (o.count += 1),
          (o.last = o.count - 1),
          p && u
            ? void 0 !== i
              ? o.slides.eq(o.count - i).after(n)
              : o.container.prepend(n)
            : void 0 !== i
            ? o.slides.eq(i).before(n)
            : o.container.append(n),
          o.update(i, "add"),
          (o.slides = t(o.vars.selector + ":not(.clone)", o)),
          o.setup(),
          o.vars.added(o);
      }),
      (o.removeSlide = function (e) {
        var i = isNaN(e) ? o.slides.index(t(e)) : e;
        (o.count -= 1),
          (o.last = o.count - 1),
          isNaN(e)
            ? t(e, o.slides).remove()
            : p && u
            ? o.slides.eq(o.last).remove()
            : o.slides.eq(e).remove(),
          o.doMath(),
          o.update(i, "remove"),
          (o.slides = t(o.vars.selector + ":not(.clone)", o)),
          o.setup(),
          o.vars.removed(o);
      }),
      m.init();
  }),
    t(window)
      .blur(function (t) {
        e = !1;
      })
      .focus(function (t) {
        e = !0;
      }),
    (t.flexslider.defaults = {
      namespace: "flex-",
      selector: ".slides > li",
      animation: "fade",
      easing: "swing",
      direction: "horizontal",
      reverse: !1,
      animationLoop: !0,
      smoothHeight: !1,
      startAt: 0,
      slideshow: !0,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      initDelay: 0,
      randomize: !1,
      fadeFirstSlide: !0,
      thumbCaptions: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      pauseInvisible: !0,
      useCSS: !0,
      touch: !0,
      video: !1,
      controlNav: !0,
      directionNav: !0,
      prevText: "Previous",
      nextText: "Next",
      keyboard: !0,
      multipleKeyboard: !1,
      mousewheel: !1,
      pausePlay: !1,
      pauseText: "Pause",
      playText: "Play",
      controlsContainer: "",
      manualControls: "",
      customDirectionNav: "",
      sync: "",
      asNavFor: "",
      itemWidth: 0,
      itemMargin: 0,
      minItems: 1,
      maxItems: 0,
      move: 0,
      allowOneSlide: !0,
      start: function () {},
      before: function () {},
      after: function () {},
      end: function () {},
      added: function () {},
      removed: function () {},
      init: function () {},
    }),
    (t.fn.flexslider = function (e) {
      if (
        (void 0 === e && (e = {}),
        "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)))
      )
        return this.each(function () {
          var i = t(this),
            n = e.selector ? e.selector : ".slides > li",
            o = i.find(n);
          (1 === o.length && e.allowOneSlide === !1) || 0 === o.length
            ? (o.fadeIn(400), e.start && e.start(i))
            : void 0 === i.data("flexslider") && new t.flexslider(this, e);
        });
      var i = t(this).data("flexslider");
      switch (e) {
        case "play":
          i.play();
          break;
        case "pause":
          i.pause();
          break;
        case "stop":
          i.stop();
          break;
        case "next":
          i.flexAnimate(i.getTarget("next"), !0);
          break;
        case "prev":
        case "previous":
          i.flexAnimate(i.getTarget("prev"), !0);
          break;
        default:
          "number" == typeof e && i.flexAnimate(e, !0);
      }
    });
})(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
!(function (t) {
  var e = -1,
    i = -1,
    n = function (t) {
      return parseFloat(t) || 0;
    },
    o = function (e) {
      var i = 1,
        o = t(e),
        a = null,
        s = [];
      return (
        o.each(function () {
          var e = t(this),
            o = e.offset().top - n(e.css("margin-top")),
            r = s.length > 0 ? s[s.length - 1] : null;
          null === r
            ? s.push(e)
            : Math.floor(Math.abs(a - o)) <= i
            ? (s[s.length - 1] = r.add(e))
            : s.push(e),
            (a = o);
        }),
        s
      );
    },
    a = function (e) {
      var i = { byRow: !0, property: "height", target: null, remove: !1 };
      return "object" === ("undefined" == typeof e ? "undefined" : _typeof(e))
        ? t.extend(i, e)
        : ("boolean" == typeof e
            ? (i.byRow = e)
            : "remove" === e && (i.remove = !0),
          i);
    },
    s = (t.fn.matchHeight = function (e) {
      var i = a(e);
      if (i.remove) {
        var n = this;
        return (
          this.css(i.property, ""),
          t.each(s._groups, function (t, e) {
            e.elements = e.elements.not(n);
          }),
          this
        );
      }
      return this.length <= 1 && !i.target
        ? this
        : (s._groups.push({ elements: this, options: i }),
          s._apply(this, i),
          this);
    });
  (s._groups = []),
    (s._throttle = 80),
    (s._maintainScroll = !1),
    (s._beforeUpdate = null),
    (s._afterUpdate = null),
    (s._apply = function (e, i) {
      var r = a(i),
        l = t(e),
        d = [l],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        u = l.parents().filter(":hidden");
      return (
        u.each(function () {
          var e = t(this);
          e.data("style-cache", e.attr("style"));
        }),
        u.css("display", "block"),
        r.byRow &&
          !r.target &&
          (l.each(function () {
            var e = t(this),
              i =
                "inline-block" === e.css("display") ? "inline-block" : "block";
            e.data("style-cache", e.attr("style")),
              e.css({
                display: i,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
              });
          }),
          (d = o(l)),
          l.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "");
          })),
        t.each(d, function (e, i) {
          var o = t(i),
            a = 0;
          if (r.target) a = r.target.outerHeight(!1);
          else {
            if (r.byRow && o.length <= 1) return void o.css(r.property, "");
            o.each(function () {
              var e = t(this),
                i =
                  "inline-block" === e.css("display")
                    ? "inline-block"
                    : "block",
                n = { display: i };
              (n[r.property] = ""),
                e.css(n),
                e.outerHeight(!1) > a && (a = e.outerHeight(!1)),
                e.css("display", "");
            });
          }
          o.each(function () {
            var e = t(this),
              i = 0;
            (r.target && e.is(r.target)) ||
              ("border-box" !== e.css("box-sizing") &&
                ((i +=
                  n(e.css("border-top-width")) +
                  n(e.css("border-bottom-width"))),
                (i += n(e.css("padding-top")) + n(e.css("padding-bottom")))),
              e.css(r.property, a - i));
          });
        }),
        u.each(function () {
          var e = t(this);
          e.attr("style", e.data("style-cache") || null);
        }),
        s._maintainScroll &&
          t(window).scrollTop((c / p) * t("html").outerHeight(!0)),
        this
      );
    }),
    (s._applyDataApi = function () {
      var e = {};
      t("[data-match-height], [data-mh]").each(function () {
        var i = t(this),
          n = i.attr("data-mh") || i.attr("data-match-height");
        n in e ? (e[n] = e[n].add(i)) : (e[n] = i);
      }),
        t.each(e, function () {
          this.matchHeight(!0);
        });
    });
  var r = function (e) {
    s._beforeUpdate && s._beforeUpdate(e, s._groups),
      t.each(s._groups, function () {
        s._apply(this.elements, this.options);
      }),
      s._afterUpdate && s._afterUpdate(e, s._groups);
  };
  (s._update = function (n, o) {
    if (o && "resize" === o.type) {
      var a = t(window).width();
      if (a === e) return;
      e = a;
    }
    n
      ? i === -1 &&
        (i = setTimeout(function () {
          r(o), (i = -1);
        }, s._throttle))
      : r(o);
  }),
    t(s._applyDataApi),
    t(window).bind("load", function (t) {
      s._update(!1, t);
    }),
    t(window).bind("resize orientationchange", function (t) {
      s._update(!0, t);
    });
})(jQuery),
  (function (t) {
    t.fn.fitVids = function (e) {
      var i = { customSelector: null, ignore: null };
      if (!document.getElementById("fit-vids-style")) {
        var n = document.head || document.getElementsByTagName("head")[0],
          o =
            ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
          a = document.createElement("div");
        (a.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>"),
          n.appendChild(a.childNodes[1]);
      }
      return (
        e && t.extend(i, e),
        this.each(function () {
          var e = [
            'iframe[src*="player.vimeo.com"]',
            'iframe[src*="youtube.com"]',
            'iframe[src*="youtube-nocookie.com"]',
            'iframe[src*="kickstarter.com"][src*="video.html"]',
            "object",
            "embed",
          ];
          i.customSelector && e.push(i.customSelector);
          var n = ".fitvidsignore";
          i.ignore && (n = n + ", " + i.ignore);
          var o = t(this).find(e.join(","));
          (o = o.not("object object")),
            (o = o.not(n)),
            o.each(function (e) {
              var i = t(this);
              if (
                !(
                  i.parents(n).length > 0 ||
                  ("embed" === this.tagName.toLowerCase() &&
                    i.parent("object").length) ||
                  i.parent(".fluid-width-video-wrapper").length
                )
              ) {
                i.css("height") ||
                  i.css("width") ||
                  (!isNaN(i.attr("height")) && !isNaN(i.attr("width"))) ||
                  (i.attr("height", 9), i.attr("width", 16));
                var o =
                    "object" === this.tagName.toLowerCase() ||
                    (i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)))
                      ? parseInt(i.attr("height"), 10)
                      : i.height(),
                  a = isNaN(parseInt(i.attr("width"), 10))
                    ? i.width()
                    : parseInt(i.attr("width"), 10),
                  s = o / a;
                if (!i.attr("id")) {
                  var r = "fitvid" + e;
                  i.attr("id", r);
                }
                i
                  .wrap('<div class="fluid-width-video-wrapper"></div>')
                  .parent(".fluid-width-video-wrapper")
                  .css("padding-top", 100 * s + "%"),
                  i.removeAttr("height").removeAttr("width");
              }
            });
        })
      );
    };
  })(window.jQuery || window.Zepto),
  (function (t) {
    var e = {
        common: {
          init: function () {
            t(".js-flexslider").each(function (e, i) {
              var n = t(this);
              n.flexslider({
                selector: ".slider_slides > .slider_slide",
                controlNav: !1,
                directionNav: !1,
              }),
                n.addClass("slider-active"),
                n.find(".js-flex-next").on("click", function (t) {
                  t.preventDefault(), n.flexslider("next");
                }),
                n.find(".js-flex-prev").on("click", function (t) {
                  t.preventDefault(), n.flexslider("prev");
                });
            }),
              (function () {
                t(".js-blockSlider").each(function (e, i) {
                  var n = t(this);
                  n.flexslider({
                    selector: ".js-blockSlider_slides > .js-blockSlider_slide",
                    controlNav: !0,
                    directionNav: !1,
                    controlsContainer: ".js-blockSlider_controls",
                  }),
                    n.addClass("is-active");
                });
              })(),
              t(".js-matchHeight").matchHeight(),
              t(".js-fitVids").fitVids(),
              t(".navBar_menu").on("show.bs.collapse", function () {
                t(this).closest(".navBar").addClass("show");
              }),
              t(".navBar_menu").on("hidden.bs.collapse", function () {
                t(this).closest(".navBar").removeClass("show");
              });
          },
          finalize: function () {},
        },
        home: { init: function () {}, finalize: function () {} },
        about_us: { init: function () {} },
      },
      i = {
        fire: function n(t, i, o) {
          var n,
            a = e;
          (i = void 0 === i ? "init" : i),
            (n = "" !== t),
            (n = n && a[t]),
            (n = n && "function" == typeof a[t][i]),
            n && a[t][i](o);
        },
        loadEvents: function () {
          i.fire("common"),
            t.each(
              document.body.className.replace(/-/g, "_").split(/\s+/),
              function (t, e) {
                i.fire(e), i.fire(e, "finalize");
              }
            ),
            i.fire("common", "finalize");
        },
      };
    t(document).ready(i.loadEvents);
  })(jQuery);

// .js-video-modal
(function ($) {
  $(document).ready(function () {
    var tvmodal = 0;
    $(".tv-modal").each(function () {
      if (tvmodal > 0) {
        $(this).remove();
      }
      tvmodal++;
    });

    var section = 0;
    $(".tvsection").each(function () {
      if (section > 0) {
        $(this).remove();
      }
      section++;
    });

    $(".tv-modal").modal({
      show: false,
    });

    $(".videoPlayer").on("click", function (e) {
      e.preventDefault();
      var title = $(this).data("title");
      var video = $(this).data("video");
      var transcript = $(this).data("transcript");
      $(".tv-modal-body").html(video);
      $(".tv-modal-title").html(title);
      $(".tv-modal-transcript").html(transcript);
      $(".tv-modal").modal("show");
    });
  });
})(jQuery);
