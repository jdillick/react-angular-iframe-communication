var _typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                  return typeof e;
              }
            : function(e) {
                  return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
              },
    classCallCheck = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
    },
    createClass = (function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })(),
    get = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i);
        }
        if ('value' in o) return o.value;
        var s = o.get;
        return void 0 !== s ? s.call(i) : void 0;
    },
    inherits = function(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError(
                'Super expression must either be null or a function, not ' +
                    typeof t,
            );
        (e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
            },
        })),
            t &&
                (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
    },
    possibleConstructorReturn = function(e, t) {
        if (!e)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
            );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    },
    BellhopEventDispatcher = (function() {
        function e() {
            classCallCheck(this, e), (this._listeners = {});
        }
        return (
            createClass(e, [
                {
                    key: 'on',
                    value: function(e, t) {
                        var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 0;
                        this._listeners[e] || (this._listeners[e] = []),
                            (t._priority = parseInt(n) || 0),
                            -1 === this._listeners[e].indexOf(t) &&
                                (this._listeners[e].push(t),
                                this._listeners[e].length > 1 &&
                                    this._listeners[e].sort(
                                        this.listenerSorter,
                                    ));
                    },
                },
                {
                    key: 'listenerSorter',
                    value: function(e, t) {
                        return e._priority - t._priority;
                    },
                },
                {
                    key: 'off',
                    value: function(e, t) {
                        if (void 0 !== this._listeners[e])
                            if (void 0 !== t) {
                                var n = this._listeners[e].indexOf(t);
                                -1 < n && this._listeners[e].splice(n, 1);
                            } else delete this._listeners[e];
                    },
                },
                {
                    key: 'trigger',
                    value: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        if (
                            ('string' == typeof e &&
                                (e = {
                                    type: e,
                                    data:
                                        'object' ===
                                            (void 0 === t
                                                ? 'undefined'
                                                : _typeof(t)) && null !== t
                                            ? t
                                            : {},
                                }),
                            void 0 !== this._listeners[e.type])
                        )
                            for (
                                var n = this._listeners[e.type].length - 1;
                                n >= 0;
                                n--
                            )
                                this._listeners[e.type][n](e);
                    },
                },
                {
                    key: 'destroy',
                    value: function() {
                        this._listeners = {};
                    },
                },
            ]),
            e
        );
    })(),
    Bellhop = (function(e) {
        function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : (100 * Math.random()) | 0;
            classCallCheck(this, t);
            var n = possibleConstructorReturn(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this),
            );
            return (
                (n.id = 'BELLHOP:' + e),
                (n.connected = !1),
                (n.isChild = !0),
                (n.connecting = !1),
                (n.origin = '*'),
                (n._sendLater = []),
                (n.iframe = null),
                n
            );
        }
        return (
            inherits(t, BellhopEventDispatcher),
            createClass(t, [
                {
                    key: 'receive',
                    value: function(e) {
                        if (this.target === e.source)
                            if ('connected' === e.data)
                                this.onConnectionReceived(e.data);
                            else {
                                var t = e.data;
                                if ('string' == typeof t)
                                    try {
                                        t = JSON.parse(t);
                                    } catch (e) {
                                        console.error('Bellhop error: ', e);
                                    }
                                this.connected &&
                                    'object' ===
                                        (void 0 === t
                                            ? 'undefined'
                                            : _typeof(t)) &&
                                    t.type &&
                                    this.trigger(t);
                            }
                    },
                },
                {
                    key: 'onConnectionReceived',
                    value: function(e) {
                        (this.connecting = !1),
                            (this.connected = !0),
                            this.trigger('connected'),
                            this.isChild ||
                                this.target.postMessage(e, this.origin);
                        for (
                            var t = 0, n = this._sendLater.length;
                            t < n;
                            t++
                        ) {
                            var i = this._sendLater[t],
                                o = i.type,
                                r = i.data;
                            this.send(o, r);
                        }
                        this._sendLater.length = 0;
                    },
                },
                {
                    key: 'connect',
                    value: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : '*';
                        this.connecting ||
                            (this.disconnect(),
                            (this.connecting = !0),
                            e instanceof HTMLIFrameElement && (this.iframe = e),
                            (this.isChild = void 0 === e),
                            (this.supported = !0),
                            this.isChild && (this.supported = window != e),
                            (this.origin = t),
                            window.addEventListener(
                                'message',
                                this.receive.bind(this),
                            ),
                            this.isChild &&
                                (window === this.target
                                    ? this.trigger('failed')
                                    : this.target.postMessage(
                                          'connected',
                                          this.origin,
                                      )));
                    },
                },
                {
                    key: 'disconnect',
                    value: function() {
                        (this.connected = !1),
                            (this.connecting = !1),
                            (this.origin = null),
                            (this.iframe = null),
                            (this.isChild = !0),
                            (this._sendLater.length = 0),
                            window.removeEventListener('message', this.receive);
                    },
                },
                {
                    key: 'send',
                    value: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        if ('string' != typeof e)
                            throw 'The event type must be a string';
                        var n = { type: e, data: t };
                        this.connecting
                            ? this._sendLater.push(n)
                            : this.target.postMessage(
                                  JSON.stringify(n),
                                  this.origin,
                              );
                    },
                },
                {
                    key: 'fetch',
                    value: function(e, t) {
                        var n = this,
                            i =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {},
                            o =
                                arguments.length > 3 &&
                                void 0 !== arguments[3] &&
                                arguments[3];
                        if (!this.connecting && !this.connected)
                            throw 'No connection, please call connect() first';
                        this.on(e, function e(i) {
                            o && n.off(i.type, e), t(i);
                        }),
                            this.send(e, i);
                    },
                },
                {
                    key: 'respond',
                    value: function(e) {
                        var t = this,
                            n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            i =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                        this.on(e, function o(r) {
                            i && t.off(r.type, o), t.send(e, n);
                        });
                    },
                },
                {
                    key: 'destroy',
                    value: function() {
                        get(
                            t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                            'destroy',
                            this,
                        ).call(this),
                            this.disconnect(),
                            (this._sendLater.length = 0);
                    },
                },
                {
                    key: 'target',
                    get: function() {
                        return this.isChild
                            ? window.parent
                            : this.iframe.contentWindow;
                    },
                },
            ]),
            t
        );
    })();
export { BellhopEventDispatcher, Bellhop };
//# sourceMappingURL=bellhop.js.map
