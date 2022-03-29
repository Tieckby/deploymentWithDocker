(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkgescabinet"] = self["webpackChunkgescabinet"] || []).push([["src_app_doctor_doctor_module_ts"], {
    /***/
    77310:
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CDK_DRAG_CONFIG": function CDK_DRAG_CONFIG() {
          return (
            /* binding */
            _CDK_DRAG_CONFIG
          );
        },

        /* harmony export */
        "CDK_DRAG_HANDLE": function CDK_DRAG_HANDLE() {
          return (
            /* binding */
            _CDK_DRAG_HANDLE
          );
        },

        /* harmony export */
        "CDK_DRAG_PARENT": function CDK_DRAG_PARENT() {
          return (
            /* binding */
            _CDK_DRAG_PARENT
          );
        },

        /* harmony export */
        "CDK_DRAG_PLACEHOLDER": function CDK_DRAG_PLACEHOLDER() {
          return (
            /* binding */
            _CDK_DRAG_PLACEHOLDER
          );
        },

        /* harmony export */
        "CDK_DRAG_PREVIEW": function CDK_DRAG_PREVIEW() {
          return (
            /* binding */
            _CDK_DRAG_PREVIEW
          );
        },

        /* harmony export */
        "CDK_DROP_LIST": function CDK_DROP_LIST() {
          return (
            /* binding */
            _CDK_DROP_LIST
          );
        },

        /* harmony export */
        "CDK_DROP_LIST_GROUP": function CDK_DROP_LIST_GROUP() {
          return (
            /* binding */
            _CDK_DROP_LIST_GROUP
          );
        },

        /* harmony export */
        "CdkDrag": function CdkDrag() {
          return (
            /* binding */
            _CdkDrag
          );
        },

        /* harmony export */
        "CdkDragHandle": function CdkDragHandle() {
          return (
            /* binding */
            _CdkDragHandle
          );
        },

        /* harmony export */
        "CdkDragPlaceholder": function CdkDragPlaceholder() {
          return (
            /* binding */
            _CdkDragPlaceholder
          );
        },

        /* harmony export */
        "CdkDragPreview": function CdkDragPreview() {
          return (
            /* binding */
            _CdkDragPreview
          );
        },

        /* harmony export */
        "CdkDropList": function CdkDropList() {
          return (
            /* binding */
            _CdkDropList
          );
        },

        /* harmony export */
        "CdkDropListGroup": function CdkDropListGroup() {
          return (
            /* binding */
            _CdkDropListGroup
          );
        },

        /* harmony export */
        "DragDrop": function DragDrop() {
          return (
            /* binding */
            _DragDrop
          );
        },

        /* harmony export */
        "DragDropModule": function DragDropModule() {
          return (
            /* binding */
            _DragDropModule
          );
        },

        /* harmony export */
        "DragDropRegistry": function DragDropRegistry() {
          return (
            /* binding */
            _DragDropRegistry
          );
        },

        /* harmony export */
        "DragRef": function DragRef() {
          return (
            /* binding */
            _DragRef
          );
        },

        /* harmony export */
        "DropListRef": function DropListRef() {
          return (
            /* binding */
            _DropListRef
          );
        },

        /* harmony export */
        "copyArrayItem": function copyArrayItem() {
          return (
            /* binding */
            _copyArrayItem
          );
        },

        /* harmony export */
        "moveItemInArray": function moveItemInArray() {
          return (
            /* binding */
            _moveItemInArray
          );
        },

        /* harmony export */
        "transferArrayItem": function transferArrayItem() {
          return (
            /* binding */
            _transferArrayItem
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      71386);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      80521);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      19238);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      47762);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      46665);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      41565);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      68559);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      872);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      33763);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      25755);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      69978);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      74294);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      99922);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      37540);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      70946);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Shallow-extends a stylesheet object with another stylesheet-like object.
       * Note that the keys in `source` have to be dash-cased.
       * @docs-private
       */


      function extendStyles(dest, source, importantProperties) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            var value = source[key];

            if (value) {
              dest.setProperty(key, value, (importantProperties === null || importantProperties === void 0 ? void 0 : importantProperties.has(key)) ? 'important' : '');
            } else {
              dest.removeProperty(key);
            }
          }
        }

        return dest;
      }
      /**
       * Toggles whether the native drag interactions should be enabled for an element.
       * @param element Element on which to toggle the drag interactions.
       * @param enable Whether the drag interactions should be enabled.
       * @docs-private
       */


      function toggleNativeDragInteractions(element, enable) {
        var userSelect = enable ? '' : 'none';
        extendStyles(element.style, {
          'touch-action': enable ? '' : 'none',
          '-webkit-user-drag': enable ? '' : 'none',
          '-webkit-tap-highlight-color': enable ? '' : 'transparent',
          'user-select': userSelect,
          '-ms-user-select': userSelect,
          '-webkit-user-select': userSelect,
          '-moz-user-select': userSelect
        });
      }
      /**
       * Toggles whether an element is visible while preserving its dimensions.
       * @param element Element whose visibility to toggle
       * @param enable Whether the element should be visible.
       * @param importantProperties Properties to be set as `!important`.
       * @docs-private
       */


      function toggleVisibility(element, enable, importantProperties) {
        extendStyles(element.style, {
          position: enable ? '' : 'fixed',
          top: enable ? '' : '0',
          opacity: enable ? '' : '0',
          left: enable ? '' : '-999em'
        }, importantProperties);
      }
      /**
       * Combines a transform string with an optional other transform
       * that exited before the base transform was applied.
       */


      function combineTransforms(transform, initialTransform) {
        return initialTransform && initialTransform != 'none' ? transform + ' ' + initialTransform : transform;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Parses a CSS time value to milliseconds. */


      function parseCssTimeUnitsToMs(value) {
        // Some browsers will return it in seconds, whereas others will return milliseconds.
        var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
        return parseFloat(value) * multiplier;
      }
      /** Gets the transform transition duration, including the delay, of an element in milliseconds. */


      function getTransformTransitionDurationInMs(element) {
        var computedStyle = getComputedStyle(element);
        var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
        var property = transitionedProperties.find(function (prop) {
          return prop === 'transform' || prop === 'all';
        }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

        if (!property) {
          return 0;
        } // Get the index of the property that we're interested in and match
        // it up to the same index in `transition-delay` and `transition-duration`.


        var propertyIndex = transitionedProperties.indexOf(property);
        var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
        var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
        return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
      }
      /** Parses out multiple values from a computed style into an array. */


      function parseCssPropertyValue(computedStyle, name) {
        var value = computedStyle.getPropertyValue(name);
        return value.split(',').map(function (part) {
          return part.trim();
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Gets a mutable version of an element's bounding `ClientRect`. */


      function getMutableClientRect(element) {
        var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
        // and we need to be able to update them. Also we can't use a spread here, because
        // the values on a `ClientRect` aren't own properties. See:
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

        return {
          top: clientRect.top,
          right: clientRect.right,
          bottom: clientRect.bottom,
          left: clientRect.left,
          width: clientRect.width,
          height: clientRect.height
        };
      }
      /**
       * Checks whether some coordinates are within a `ClientRect`.
       * @param clientRect ClientRect that is being checked.
       * @param x Coordinates along the X axis.
       * @param y Coordinates along the Y axis.
       */


      function isInsideClientRect(clientRect, x, y) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            left = clientRect.left,
            right = clientRect.right;
        return y >= top && y <= bottom && x >= left && x <= right;
      }
      /**
       * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
       * @param clientRect `ClientRect` that should be updated.
       * @param top Amount to add to the `top` position.
       * @param left Amount to add to the `left` position.
       */


      function adjustClientRect(clientRect, top, left) {
        clientRect.top += top;
        clientRect.bottom = clientRect.top + clientRect.height;
        clientRect.left += left;
        clientRect.right = clientRect.left + clientRect.width;
      }
      /**
       * Checks whether the pointer coordinates are close to a ClientRect.
       * @param rect ClientRect to check against.
       * @param threshold Threshold around the ClientRect.
       * @param pointerX Coordinates along the X axis.
       * @param pointerY Coordinates along the Y axis.
       */


      function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
        var top = rect.top,
            right = rect.right,
            bottom = rect.bottom,
            left = rect.left,
            width = rect.width,
            height = rect.height;
        var xThreshold = width * threshold;
        var yThreshold = height * threshold;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Keeps track of the scroll position and dimensions of the parents of an element. */


      var ParentPositionTracker = /*#__PURE__*/function () {
        function ParentPositionTracker(_document, _viewportRuler) {
          _classCallCheck(this, ParentPositionTracker);

          this._document = _document;
          this._viewportRuler = _viewportRuler;
          /** Cached positions of the scrollable parent elements. */

          this.positions = new Map();
        }
        /** Clears the cached positions. */


        _createClass(ParentPositionTracker, [{
          key: "clear",
          value: function clear() {
            this.positions.clear();
          }
          /** Caches the positions. Should be called at the beginning of a drag sequence. */

        }, {
          key: "cache",
          value: function cache(elements) {
            var _this = this;

            this.clear();
            this.positions.set(this._document, {
              scrollPosition: this._viewportRuler.getViewportScrollPosition()
            });
            elements.forEach(function (element) {
              _this.positions.set(element, {
                scrollPosition: {
                  top: element.scrollTop,
                  left: element.scrollLeft
                },
                clientRect: getMutableClientRect(element)
              });
            });
          }
          /** Handles scrolling while a drag is taking place. */

        }, {
          key: "handleScroll",
          value: function handleScroll(event) {
            var target = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
            var cachedPosition = this.positions.get(target);

            if (!cachedPosition) {
              return null;
            } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
            // parent is the `document`, we use the `documentElement`, because IE doesn't support
            // `contains` on the `document`.


            var scrolledParentNode = target === this._document ? target.documentElement : target;
            var scrollPosition = cachedPosition.scrollPosition;
            var newTop;
            var newLeft;

            if (target === this._document) {
              var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();

              newTop = viewportScrollPosition.top;
              newLeft = viewportScrollPosition.left;
            } else {
              newTop = target.scrollTop;
              newLeft = target.scrollLeft;
            }

            var topDifference = scrollPosition.top - newTop;
            var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
            // parents that are inside the element that was scrolled.

            this.positions.forEach(function (position, node) {
              if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
              }
            });
            scrollPosition.top = newTop;
            scrollPosition.left = newLeft;
            return {
              top: topDifference,
              left: leftDifference
            };
          }
        }]);

        return ParentPositionTracker;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Creates a deep clone of an element. */


      function deepCloneNode(node) {
        var clone = node.cloneNode(true);
        var descendantsWithId = clone.querySelectorAll('[id]');
        var nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

        clone.removeAttribute('id');

        for (var i = 0; i < descendantsWithId.length; i++) {
          descendantsWithId[i].removeAttribute('id');
        }

        if (nodeName === 'canvas') {
          transferCanvasData(node, clone);
        } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
          transferInputData(node, clone);
        }

        transferData('canvas', node, clone, transferCanvasData);
        transferData('input, textarea, select', node, clone, transferInputData);
        return clone;
      }
      /** Matches elements between an element and its clone and allows for their data to be cloned. */


      function transferData(selector, node, clone, callback) {
        var descendantElements = node.querySelectorAll(selector);

        if (descendantElements.length) {
          var cloneElements = clone.querySelectorAll(selector);

          for (var i = 0; i < descendantElements.length; i++) {
            callback(descendantElements[i], cloneElements[i]);
          }
        }
      } // Counter for unique cloned radio button names.


      var cloneUniqueId = 0;
      /** Transfers the data of one input element to another. */

      function transferInputData(source, clone) {
        // Browsers throw an error when assigning the value of a file input programmatically.
        if (clone.type !== 'file') {
          clone.value = source.value;
        } // Radio button `name` attributes must be unique for radio button groups
        // otherwise original radio buttons can lose their checked state
        // once the clone is inserted in the DOM.


        if (clone.type === 'radio' && clone.name) {
          clone.name = "mat-clone-".concat(clone.name, "-").concat(cloneUniqueId++);
        }
      }
      /** Transfers the data of one canvas element to another. */


      function transferCanvasData(source, clone) {
        var context = clone.getContext('2d');

        if (context) {
          // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
          // We can't do much about it so just ignore the error.
          try {
            context.drawImage(source, 0, 0);
          } catch (_a) {}
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options that can be used to bind a passive event listener. */


      var passiveEventListenerOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
        passive: true
      });
      /** Options that can be used to bind an active event listener. */

      var activeEventListenerOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
        passive: false
      });
      /**
       * Time in milliseconds for which to ignore mouse events, after
       * receiving a touch event. Used to avoid doing double work for
       * touch devices where the browser fires fake mouse events, in
       * addition to touch events.
       */

      var MOUSE_EVENT_IGNORE_TIME = 800;
      /** Inline styles to be set as `!important` while dragging. */

      var dragImportantProperties = new Set([// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
      'position']);
      /**
       * Reference to a draggable item. Used to manipulate or dispose of the item.
       */

      var _DragRef = /*#__PURE__*/function () {
        function _DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
          var _this2 = this;

          _classCallCheck(this, _DragRef);

          this._config = _config;
          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
          /**
           * CSS `transform` applied to the element when it isn't being dragged. We need a
           * passive transform in order for the dragged element to retain its new position
           * after the user has stopped dragging and because we need to know the relative
           * position in case they start dragging again. This corresponds to `element.style.transform`.
           */

          this._passiveTransform = {
            x: 0,
            y: 0
          };
          /** CSS `transform` that is applied to the element while it's being dragged. */

          this._activeTransform = {
            x: 0,
            y: 0
          };
          /**
           * Whether the dragging sequence has been started. Doesn't
           * necessarily mean that the element has been moved.
           */

          this._hasStartedDragging = false;
          /** Emits when the item is being moved. */

          this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Subscription to pointer movement events. */

          this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
          /** Subscription to the event that is dispatched when the user lifts their pointer. */

          this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
          /** Subscription to the viewport being scrolled. */

          this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
          /** Subscription to the viewport being resized. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
          /** Cached reference to the boundary element. */

          this._boundaryElement = null;
          /** Whether the native dragging interactions have been enabled on the root element. */

          this._nativeInteractionsEnabled = true;
          /** Elements that can be used to drag the draggable item. */

          this._handles = [];
          /** Registered handles that are currently disabled. */

          this._disabledHandles = new Set();
          /** Layout direction of the item. */

          this._direction = 'ltr';
          /**
           * Amount of milliseconds to wait after the user has put their
           * pointer down before starting to drag the element.
           */

          this.dragStartDelay = 0;
          this._disabled = false;
          /** Emits as the drag sequence is being prepared. */

          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the user starts dragging the item. */

          this.started = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = this._moveEvents;
          /** Handler for the `mousedown`/`touchstart` events. */

          this._pointerDown = function (event) {
            _this2.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


            if (_this2._handles.length) {
              var targetHandle = _this2._handles.find(function (handle) {
                var target = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
                return !!target && (target === handle || handle.contains(target));
              });

              if (targetHandle && !_this2._disabledHandles.has(targetHandle) && !_this2.disabled) {
                _this2._initializeDragSequence(targetHandle, event);
              }
            } else if (!_this2.disabled) {
              _this2._initializeDragSequence(_this2._rootElement, event);
            }
          };
          /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


          this._pointerMove = function (event) {
            var pointerPosition = _this2._getPointerPositionOnPage(event);

            if (!_this2._hasStartedDragging) {
              var distanceX = Math.abs(pointerPosition.x - _this2._pickupPositionOnPage.x);
              var distanceY = Math.abs(pointerPosition.y - _this2._pickupPositionOnPage.y);
              var isOverThreshold = distanceX + distanceY >= _this2._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
              // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
              // in the `pointerMove` subscription, because we're not guaranteed to have one move event
              // per pixel of movement (e.g. if the user moves their pointer quickly).

              if (isOverThreshold) {
                var isDelayElapsed = Date.now() >= _this2._dragStartTime + _this2._getDragStartDelay(event);

                var container = _this2._dropContainer;

                if (!isDelayElapsed) {
                  _this2._endDragSequence(event);

                  return;
                } // Prevent other drag sequences from starting while something in the container is still
                // being dragged. This can happen while we're waiting for the drop animation to finish
                // and can cause errors, because some elements might still be moving around.


                if (!container || !container.isDragging() && !container.isReceiving()) {
                  // Prevent the default action as soon as the dragging sequence is considered as
                  // "started" since waiting for the next event can allow the device to begin scrolling.
                  event.preventDefault();
                  _this2._hasStartedDragging = true;

                  _this2._ngZone.run(function () {
                    return _this2._startDragSequence(event);
                  });
                }
              }

              return;
            } // We only need the preview dimensions if we have a boundary element.


            if (_this2._boundaryElement) {
              // Cache the preview element rect if we haven't cached it already or if
              // we cached it too early before the element dimensions were computed.
              if (!_this2._previewRect || !_this2._previewRect.width && !_this2._previewRect.height) {
                _this2._previewRect = (_this2._preview || _this2._rootElement).getBoundingClientRect();
              }
            } // We prevent the default action down here so that we know that dragging has started. This is
            // important for touch devices where doing this too early can unnecessarily block scrolling,
            // if there's a dragging delay.


            event.preventDefault();

            var constrainedPointerPosition = _this2._getConstrainedPointerPosition(pointerPosition);

            _this2._hasMoved = true;
            _this2._lastKnownPointerPosition = pointerPosition;

            _this2._updatePointerDirectionDelta(constrainedPointerPosition);

            if (_this2._dropContainer) {
              _this2._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
            } else {
              var activeTransform = _this2._activeTransform;
              activeTransform.x = constrainedPointerPosition.x - _this2._pickupPositionOnPage.x + _this2._passiveTransform.x;
              activeTransform.y = constrainedPointerPosition.y - _this2._pickupPositionOnPage.y + _this2._passiveTransform.y;

              _this2._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


              if (typeof SVGElement !== 'undefined' && _this2._rootElement instanceof SVGElement) {
                var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

                _this2._rootElement.setAttribute('transform', appliedTransform);
              }
            } // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.


            if (_this2._moveEvents.observers.length) {
              _this2._ngZone.run(function () {
                _this2._moveEvents.next({
                  source: _this2,
                  pointerPosition: constrainedPointerPosition,
                  event: event,
                  distance: _this2._getDragDistance(constrainedPointerPosition),
                  delta: _this2._pointerDirectionDelta
                });
              });
            }
          };
          /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


          this._pointerUp = function (event) {
            _this2._endDragSequence(event);
          };

          this.withRootElement(element).withParent(_config.parentDragRef || null);
          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

          _dragDropRegistry.registerDragItem(this);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(_DragRef, [{
          key: "disabled",
          get: function get() {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
          },
          set: function set(value) {
            var newValue = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._toggleNativeDragInteractions();

              this._handles.forEach(function (handle) {
                return toggleNativeDragInteractions(handle, newValue);
              });
            }
          }
          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */

        }, {
          key: "getPlaceholderElement",
          value: function getPlaceholderElement() {
            return this._placeholder;
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._rootElement;
          }
          /**
           * Gets the currently-visible element that represents the drag item.
           * While dragging this is the placeholder, otherwise it's the root element.
           */

        }, {
          key: "getVisibleElement",
          value: function getVisibleElement() {
            return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
          }
          /** Registers the handles that can be used to drag the element. */

        }, {
          key: "withHandles",
          value: function withHandles(handles) {
            var _this3 = this;

            this._handles = handles.map(function (handle) {
              return (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(handle);
            });

            this._handles.forEach(function (handle) {
              return toggleNativeDragInteractions(handle, _this3.disabled);
            });

            this._toggleNativeDragInteractions(); // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
            // the set, rather than iterate over it and filter out the destroyed handles, because while
            // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
            // use an array internally which may throw an error.


            var disabledHandles = new Set();

            this._disabledHandles.forEach(function (handle) {
              if (_this3._handles.indexOf(handle) > -1) {
                disabledHandles.add(handle);
              }
            });

            this._disabledHandles = disabledHandles;
            return this;
          }
          /**
           * Registers the template that should be used for the drag preview.
           * @param template Template that from which to stamp out the preview.
           */

        }, {
          key: "withPreviewTemplate",
          value: function withPreviewTemplate(template) {
            this._previewTemplate = template;
            return this;
          }
          /**
           * Registers the template that should be used for the drag placeholder.
           * @param template Template that from which to stamp out the placeholder.
           */

        }, {
          key: "withPlaceholderTemplate",
          value: function withPlaceholderTemplate(template) {
            this._placeholderTemplate = template;
            return this;
          }
          /**
           * Sets an alternate drag root element. The root element is the element that will be moved as
           * the user is dragging. Passing an alternate root element is useful when trying to enable
           * dragging on an element that you might not have access to.
           */

        }, {
          key: "withRootElement",
          value: function withRootElement(rootElement) {
            var _this4 = this;

            var element = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(rootElement);

            if (element !== this._rootElement) {
              if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
              }

              this._ngZone.runOutsideAngular(function () {
                element.addEventListener('mousedown', _this4._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', _this4._pointerDown, passiveEventListenerOptions);
              });

              this._initialTransform = undefined;
              this._rootElement = element;
            }

            if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
              this._ownerSVGElement = this._rootElement.ownerSVGElement;
            }

            return this;
          }
          /**
           * Element to which the draggable's position will be constrained.
           */

        }, {
          key: "withBoundaryElement",
          value: function withBoundaryElement(boundaryElement) {
            var _this5 = this;

            this._boundaryElement = boundaryElement ? (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(boundaryElement) : null;

            this._resizeSubscription.unsubscribe();

            if (boundaryElement) {
              this._resizeSubscription = this._viewportRuler.change(10).subscribe(function () {
                return _this5._containInsideBoundaryOnResize();
              });
            }

            return this;
          }
          /** Sets the parent ref that the ref is nested in.  */

        }, {
          key: "withParent",
          value: function withParent(parent) {
            this._parentDragRef = parent;
            return this;
          }
          /** Removes the dragging functionality from the DOM element. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
            // stop being considered as dragged once it is removed.


            if (this.isDragging()) {
              // Since we move out the element to the end of the body while it's being
              // dragged, we have to make sure that it's removed if it gets destroyed.
              removeNode(this._rootElement);
            }

            removeNode(this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._dragDropRegistry.removeDragItem(this);

            this._removeSubscriptions();

            this.beforeStarted.complete();
            this.started.complete();
            this.released.complete();
            this.ended.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();

            this._moveEvents.complete();

            this._handles = [];

            this._disabledHandles.clear();

            this._dropContainer = undefined;

            this._resizeSubscription.unsubscribe();

            this._parentPositions.clear();

            this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
          }
          /** Checks whether the element is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._rootElement.style.transform = this._initialTransform || '';
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform = {
              x: 0,
              y: 0
            };
          }
          /**
           * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
           * @param handle Handle element that should be disabled.
           */

        }, {
          key: "disableHandle",
          value: function disableHandle(handle) {
            if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
              this._disabledHandles.add(handle);

              toggleNativeDragInteractions(handle, true);
            }
          }
          /**
           * Enables a handle, if it has been disabled.
           * @param handle Handle element to be enabled.
           */

        }, {
          key: "enableHandle",
          value: function enableHandle(handle) {
            if (this._disabledHandles.has(handle)) {
              this._disabledHandles["delete"](handle);

              toggleNativeDragInteractions(handle, this.disabled);
            }
          }
          /** Sets the layout direction of the draggable item. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /** Sets the container that the item is part of. */

        }, {
          key: "_withDropContainer",
          value: function _withDropContainer(container) {
            this._dropContainer = container;
          }
          /**
           * Gets the current position in pixels the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
            return {
              x: position.x,
              y: position.y
            };
          }
          /**
           * Sets the current position in pixels the draggable outside of a drop container.
           * @param value New position to be set.
           */

        }, {
          key: "setFreeDragPosition",
          value: function setFreeDragPosition(value) {
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform.x = value.x;
            this._passiveTransform.y = value.y;

            if (!this._dropContainer) {
              this._applyRootElementTransform(value.x, value.y);
            }

            return this;
          }
          /**
           * Sets the container into which to insert the preview element.
           * @param value Container into which to insert the preview.
           */

        }, {
          key: "withPreviewContainer",
          value: function withPreviewContainer(value) {
            this._previewContainer = value;
            return this;
          }
          /** Updates the item's sort order based on the last-known pointer position. */

        }, {
          key: "_sortFromLastPointerPosition",
          value: function _sortFromLastPointerPosition() {
            var position = this._lastKnownPointerPosition;

            if (position && this._dropContainer) {
              this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
            }
          }
          /** Unsubscribes from the global subscriptions. */

        }, {
          key: "_removeSubscriptions",
          value: function _removeSubscriptions() {
            this._pointerMoveSubscription.unsubscribe();

            this._pointerUpSubscription.unsubscribe();

            this._scrollSubscription.unsubscribe();
          }
          /** Destroys the preview element and its ViewRef. */

        }, {
          key: "_destroyPreview",
          value: function _destroyPreview() {
            if (this._preview) {
              removeNode(this._preview);
            }

            if (this._previewRef) {
              this._previewRef.destroy();
            }

            this._preview = this._previewRef = null;
          }
          /** Destroys the placeholder element and its ViewRef. */

        }, {
          key: "_destroyPlaceholder",
          value: function _destroyPlaceholder() {
            if (this._placeholder) {
              removeNode(this._placeholder);
            }

            if (this._placeholderRef) {
              this._placeholderRef.destroy();
            }

            this._placeholder = this._placeholderRef = null;
          }
          /**
           * Clears subscriptions and stops the dragging sequence.
           * @param event Browser event object that ended the sequence.
           */

        }, {
          key: "_endDragSequence",
          value: function _endDragSequence(event) {
            var _this6 = this;

            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!this._dragDropRegistry.isDragging(this)) {
              return;
            }

            this._removeSubscriptions();

            this._dragDropRegistry.stopDragging(this);

            this._toggleNativeDragInteractions();

            if (this._handles) {
              this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
            }

            if (!this._hasStartedDragging) {
              return;
            }

            this.released.next({
              source: this
            });

            if (this._dropContainer) {
              // Stop scrolling immediately, instead of waiting for the animation to finish.
              this._dropContainer._stopScrolling();

              this._animatePreviewToPlaceholder().then(function () {
                _this6._cleanupDragArtifacts(event);

                _this6._cleanupCachedDimensions();

                _this6._dragDropRegistry.stopDragging(_this6);
              });
            } else {
              // Convert the active transform into a passive one. This means that next time
              // the user starts dragging the item, its position will be calculated relatively
              // to the new passive transform.
              this._passiveTransform.x = this._activeTransform.x;

              var pointerPosition = this._getPointerPositionOnPage(event);

              this._passiveTransform.y = this._activeTransform.y;

              this._ngZone.run(function () {
                _this6.ended.next({
                  source: _this6,
                  distance: _this6._getDragDistance(pointerPosition),
                  dropPoint: pointerPosition
                });
              });

              this._cleanupCachedDimensions();

              this._dragDropRegistry.stopDragging(this);
            }
          }
          /** Starts the dragging sequence. */

        }, {
          key: "_startDragSequence",
          value: function _startDragSequence(event) {
            if (isTouchEvent(event)) {
              this._lastTouchEventTime = Date.now();
            }

            this._toggleNativeDragInteractions();

            var dropContainer = this._dropContainer;

            if (dropContainer) {
              var element = this._rootElement;
              var parent = element.parentNode;

              var placeholder = this._placeholder = this._createPlaceholderElement();

              var anchor = this._anchor = this._anchor || this._document.createComment(''); // Needs to happen before the root element is moved.


              var shadowRoot = this._getShadowRoot(); // Insert an anchor node so that we can restore the element's position in the DOM.


              parent.insertBefore(anchor, element); // There's no risk of transforms stacking when inside a drop container so
              // we can keep the initial transform up to date any time dragging starts.

              this._initialTransform = element.style.transform || ''; // Create the preview after the initial transform has
              // been cached, because it can be affected by the transform.

              this._preview = this._createPreviewElement(); // We move the element out at the end of the body and we make it hidden, because keeping it in
              // place will throw off the consumer's `:last-child` selectors. We can't remove the element
              // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

              toggleVisibility(element, false, dragImportantProperties);

              this._document.body.appendChild(parent.replaceChild(placeholder, element));

              this._getPreviewInsertionPoint(parent, shadowRoot).appendChild(this._preview);

              this.started.next({
                source: this
              }); // Emit before notifying the container.

              dropContainer.start();
              this._initialContainer = dropContainer;
              this._initialIndex = dropContainer.getItemIndex(this);
            } else {
              this.started.next({
                source: this
              });
              this._initialContainer = this._initialIndex = undefined;
            } // Important to run after we've called `start` on the parent container
            // so that it has had time to resolve its scrollable parents.


            this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
          }
          /**
           * Sets up the different variables and subscriptions
           * that will be necessary for the dragging sequence.
           * @param referenceElement Element that started the drag sequence.
           * @param event Browser event object that started the sequence.
           */

        }, {
          key: "_initializeDragSequence",
          value: function _initializeDragSequence(referenceElement, event) {
            var _this7 = this;

            // Stop propagation if the item is inside another
            // draggable so we don't start multiple drag sequences.
            if (this._parentDragRef) {
              event.stopPropagation();
            }

            var isDragging = this.isDragging();
            var isTouchSequence = isTouchEvent(event);
            var isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
            var rootElement = this._rootElement;
            var target = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
            var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
            var isFakeEvent = isTouchSequence ? (0, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.isFakeTouchstartFromScreenReader)(event) : (0, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.isFakeMousedownFromScreenReader)(event); // If the event started from an element with the native HTML drag&drop, it'll interfere
            // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
            // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
            // it's flaky and it fails if the user drags it away quickly. Also note that we only want
            // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
            // events from firing on touch devices.

            if (target && target.draggable && event.type === 'mousedown') {
              event.preventDefault();
            } // Abort if the user is already dragging or is using a mouse button other than the primary one.


            if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
              return;
            } // If we've got handles, we need to disable the tap highlight on the entire root element,
            // otherwise iOS will still add it, even though all the drag interactions on the handle
            // are disabled.


            if (this._handles.length) {
              this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
              rootElement.style.webkitTapHighlightColor = 'transparent';
            }

            this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
            // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

            this._removeSubscriptions();

            this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
            this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
            this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(function (scrollEvent) {
              return _this7._updateOnScroll(scrollEvent);
            });

            if (this._boundaryElement) {
              this._boundaryRect = getMutableClientRect(this._boundaryElement);
            } // If we have a custom preview we can't know ahead of time how large it'll be so we position
            // it next to the cursor. The exception is when the consumer has opted into making the preview
            // the same size as the root element, in which case we do know the size.


            var previewTemplate = this._previewTemplate;
            this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
              x: 0,
              y: 0
            } : this._getPointerPositionInElement(referenceElement, event);

            var pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

            this._pointerDirectionDelta = {
              x: 0,
              y: 0
            };
            this._pointerPositionAtLastDirectionChange = {
              x: pointerPosition.x,
              y: pointerPosition.y
            };
            this._dragStartTime = Date.now();

            this._dragDropRegistry.startDragging(this, event);
          }
          /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */

        }, {
          key: "_cleanupDragArtifacts",
          value: function _cleanupDragArtifacts(event) {
            var _this8 = this;

            // Restore the element's visibility and insert it at its old position in the DOM.
            // It's important that we maintain the position, because moving the element around in the DOM
            // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
            // while moving the existing elements in all other cases.
            toggleVisibility(this._rootElement, true, dragImportantProperties);

            this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._boundaryRect = this._previewRect = this._initialTransform = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

            this._ngZone.run(function () {
              var container = _this8._dropContainer;
              var currentIndex = container.getItemIndex(_this8);

              var pointerPosition = _this8._getPointerPositionOnPage(event);

              var distance = _this8._getDragDistance(pointerPosition);

              var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

              _this8.ended.next({
                source: _this8,
                distance: distance,
                dropPoint: pointerPosition
              });

              _this8.dropped.next({
                item: _this8,
                currentIndex: currentIndex,
                previousIndex: _this8._initialIndex,
                container: container,
                previousContainer: _this8._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance,
                dropPoint: pointerPosition
              });

              container.drop(_this8, currentIndex, _this8._initialIndex, _this8._initialContainer, isPointerOverContainer, distance, pointerPosition);
              _this8._dropContainer = _this8._initialContainer;
            });
          }
          /**
           * Updates the item's position in its drop container, or moves it
           * into a new one, depending on its current drag position.
           */

        }, {
          key: "_updateActiveDropContainer",
          value: function _updateActiveDropContainer(_ref, _ref2) {
            var _this9 = this;

            var x = _ref.x,
                y = _ref.y;
            var rawX = _ref2.x,
                rawY = _ref2.y;

            // Drop container that draggable has been moved into.
            var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
            // initial container, check whether the it's over the initial container. This handles the
            // case where two containers are connected one way and the user tries to undo dragging an
            // item into a new container.


            if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
              newContainer = this._initialContainer;
            }

            if (newContainer && newContainer !== this._dropContainer) {
              this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this9.exited.next({
                  item: _this9,
                  container: _this9._dropContainer
                });

                _this9._dropContainer.exit(_this9); // Notify the new container that the item has entered.


                _this9._dropContainer = newContainer;

                _this9._dropContainer.enter(_this9, x, y, newContainer === _this9._initialContainer && // If we're re-entering the initial container and sorting is disabled,
                // put item the into its starting index to begin with.
                newContainer.sortingDisabled ? _this9._initialIndex : undefined);

                _this9.entered.next({
                  item: _this9,
                  container: newContainer,
                  currentIndex: newContainer.getItemIndex(_this9)
                });
              });
            } // Dragging may have been interrupted as a result of the events above.


            if (this.isDragging()) {
              this._dropContainer._startScrollingIfNecessary(rawX, rawY);

              this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

              this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
            }
          }
          /**
           * Creates the element that will be rendered next to the user's pointer
           * and will be used as a preview of the element that is being dragged.
           */

        }, {
          key: "_createPreviewElement",
          value: function _createPreviewElement() {
            var previewConfig = this._previewTemplate;
            var previewClass = this.previewClass;
            var previewTemplate = previewConfig ? previewConfig.template : null;
            var preview;

            if (previewTemplate && previewConfig) {
              // Measure the element before we've inserted the preview
              // since the insertion could throw off the measurement.
              var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
              var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
              viewRef.detectChanges();
              preview = getRootNode(viewRef, this._document);
              this._previewRef = viewRef;

              if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
              } else {
                preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
              }
            } else {
              var element = this._rootElement;
              preview = deepCloneNode(element);
              matchElementSize(preview, element.getBoundingClientRect());

              if (this._initialTransform) {
                preview.style.transform = this._initialTransform;
              }
            }

            extendStyles(preview.style, {
              // It's important that we disable the pointer events on the preview, because
              // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
              'pointer-events': 'none',
              // We have to reset the margin, because it can throw off positioning relative to the viewport.
              'margin': '0',
              'position': 'fixed',
              'top': '0',
              'left': '0',
              'z-index': "".concat(this._config.zIndex || 1000)
            }, dragImportantProperties);
            toggleNativeDragInteractions(preview, false);
            preview.classList.add('cdk-drag-preview');
            preview.setAttribute('dir', this._direction);

            if (previewClass) {
              if (Array.isArray(previewClass)) {
                previewClass.forEach(function (className) {
                  return preview.classList.add(className);
                });
              } else {
                preview.classList.add(previewClass);
              }
            }

            return preview;
          }
          /**
           * Animates the preview element from its current position to the location of the drop placeholder.
           * @returns Promise that resolves when the animation completes.
           */

        }, {
          key: "_animatePreviewToPlaceholder",
          value: function _animatePreviewToPlaceholder() {
            var _this10 = this;

            // If the user hasn't moved yet, the transitionend event won't fire.
            if (!this._hasMoved) {
              return Promise.resolve();
            }

            var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


            this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


            this._applyPreviewTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
            // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
            // apply its style, we take advantage of the available info to figure out whether we need to
            // bind the event in the first place.


            var duration = getTransformTransitionDurationInMs(this._preview);

            if (duration === 0) {
              return Promise.resolve();
            }

            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                var handler = function handler(event) {
                  var _a;

                  if (!event || (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event) === _this10._preview && event.propertyName === 'transform') {
                    (_a = _this10._preview) === null || _a === void 0 ? void 0 : _a.removeEventListener('transitionend', handler);
                    resolve();
                    clearTimeout(timeout);
                  }
                }; // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.


                var timeout = setTimeout(handler, duration * 1.5);

                _this10._preview.addEventListener('transitionend', handler);
              });
            });
          }
          /** Creates an element that will be shown instead of the current element while dragging. */

        }, {
          key: "_createPlaceholderElement",
          value: function _createPlaceholderElement() {
            var placeholderConfig = this._placeholderTemplate;
            var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
            var placeholder;

            if (placeholderTemplate) {
              this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

              this._placeholderRef.detectChanges();

              placeholder = getRootNode(this._placeholderRef, this._document);
            } else {
              placeholder = deepCloneNode(this._rootElement);
            }

            placeholder.classList.add('cdk-drag-placeholder');
            return placeholder;
          }
          /**
           * Figures out the coordinates at which an element was picked up.
           * @param referenceElement Element that initiated the dragging.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "_getPointerPositionInElement",
          value: function _getPointerPositionInElement(referenceElement, event) {
            var elementRect = this._rootElement.getBoundingClientRect();

            var handleElement = referenceElement === this._rootElement ? null : referenceElement;
            var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
            var point = isTouchEvent(event) ? event.targetTouches[0] : event;

            var scrollPosition = this._getViewportScrollPosition();

            var x = point.pageX - referenceRect.left - scrollPosition.left;
            var y = point.pageY - referenceRect.top - scrollPosition.top;
            return {
              x: referenceRect.left - elementRect.left + x,
              y: referenceRect.top - elementRect.top + y
            };
          }
          /** Determines the point of the page that was touched by the user. */

        }, {
          key: "_getPointerPositionOnPage",
          value: function _getPointerPositionOnPage(event) {
            var scrollPosition = this._getViewportScrollPosition();

            var point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
            // to have a value, but Firefox in device emulation mode has a bug where both can be empty
            // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
            // throwing an error. The value returned here will be incorrect, but since this only
            // breaks inside a developer tool and the value is only used for secondary information,
            // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
            event.touches[0] || event.changedTouches[0] || {
              pageX: 0,
              pageY: 0
            } : event;
            var x = point.pageX - scrollPosition.left;
            var y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
            // coordinate system

            if (this._ownerSVGElement) {
              var svgMatrix = this._ownerSVGElement.getScreenCTM();

              if (svgMatrix) {
                var svgPoint = this._ownerSVGElement.createSVGPoint();

                svgPoint.x = x;
                svgPoint.y = y;
                return svgPoint.matrixTransform(svgMatrix.inverse());
              }
            }

            return {
              x: x,
              y: y
            };
          }
          /** Gets the pointer position on the page, accounting for any position constraints. */

        }, {
          key: "_getConstrainedPointerPosition",
          value: function _getConstrainedPointerPosition(point) {
            var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

            var _ref3 = this.constrainPosition ? this.constrainPosition(point, this) : point,
                x = _ref3.x,
                y = _ref3.y;

            if (this.lockAxis === 'x' || dropContainerLock === 'x') {
              y = this._pickupPositionOnPage.y;
            } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
              x = this._pickupPositionOnPage.x;
            }

            if (this._boundaryRect) {
              var _this$_pickupPosition = this._pickupPositionInElement,
                  pickupX = _this$_pickupPosition.x,
                  pickupY = _this$_pickupPosition.y;
              var boundaryRect = this._boundaryRect;
              var previewRect = this._previewRect;
              var minY = boundaryRect.top + pickupY;
              var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
              var minX = boundaryRect.left + pickupX;
              var maxX = boundaryRect.right - (previewRect.width - pickupX);
              x = clamp$1(x, minX, maxX);
              y = clamp$1(y, minY, maxY);
            }

            return {
              x: x,
              y: y
            };
          }
          /** Updates the current drag delta, based on the user's current pointer position on the page. */

        }, {
          key: "_updatePointerDirectionDelta",
          value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
            var x = pointerPositionOnPage.x,
                y = pointerPositionOnPage.y;
            var delta = this._pointerDirectionDelta;
            var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

            var changeX = Math.abs(x - positionSinceLastChange.x);
            var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
            // to change for every pixel, otherwise anything that depends on it can look erratic.
            // To make the delta more consistent, we track how much the user has moved since the last
            // delta change and we only update it after it has reached a certain threshold.

            if (changeX > this._config.pointerDirectionChangeThreshold) {
              delta.x = x > positionSinceLastChange.x ? 1 : -1;
              positionSinceLastChange.x = x;
            }

            if (changeY > this._config.pointerDirectionChangeThreshold) {
              delta.y = y > positionSinceLastChange.y ? 1 : -1;
              positionSinceLastChange.y = y;
            }

            return delta;
          }
          /** Toggles the native drag interactions, based on how many handles are registered. */

        }, {
          key: "_toggleNativeDragInteractions",
          value: function _toggleNativeDragInteractions() {
            if (!this._rootElement || !this._handles) {
              return;
            }

            var shouldEnable = this._handles.length > 0 || !this.isDragging();

            if (shouldEnable !== this._nativeInteractionsEnabled) {
              this._nativeInteractionsEnabled = shouldEnable;
              toggleNativeDragInteractions(this._rootElement, shouldEnable);
            }
          }
          /** Removes the manually-added event listeners from the root element. */

        }, {
          key: "_removeRootElementListeners",
          value: function _removeRootElementListeners(element) {
            element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
            element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
          }
          /**
           * Applies a `transform` to the root element, taking into account any existing transforms on it.
           * @param x New transform value along the X axis.
           * @param y New transform value along the Y axis.
           */

        }, {
          key: "_applyRootElementTransform",
          value: function _applyRootElementTransform(x, y) {
            var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
            // we don't want our own transforms to stack on top of each other.
            // Should be excluded none because none + translate3d(x, y, x) is invalid css

            if (this._initialTransform == null) {
              this._initialTransform = this._rootElement.style.transform && this._rootElement.style.transform != 'none' ? this._rootElement.style.transform : '';
            } // Preserve the previous `transform` value, if there was one. Note that we apply our own
            // transform before the user's, because things like rotation can affect which direction
            // the element will be translated towards.


            this._rootElement.style.transform = combineTransforms(transform, this._initialTransform);
          }
          /**
           * Applies a `transform` to the preview, taking into account any existing transforms on it.
           * @param x New transform value along the X axis.
           * @param y New transform value along the Y axis.
           */

        }, {
          key: "_applyPreviewTransform",
          value: function _applyPreviewTransform(x, y) {
            var _a; // Only apply the initial transform if the preview is a clone of the original element, otherwise
            // it could be completely different and the transform might not make sense anymore.


            var initialTransform = ((_a = this._previewTemplate) === null || _a === void 0 ? void 0 : _a.template) ? undefined : this._initialTransform;
            var transform = getTransform(x, y);
            this._preview.style.transform = combineTransforms(transform, initialTransform);
          }
          /**
           * Gets the distance that the user has dragged during the current drag sequence.
           * @param currentPosition Current position of the user's pointer.
           */

        }, {
          key: "_getDragDistance",
          value: function _getDragDistance(currentPosition) {
            var pickupPosition = this._pickupPositionOnPage;

            if (pickupPosition) {
              return {
                x: currentPosition.x - pickupPosition.x,
                y: currentPosition.y - pickupPosition.y
              };
            }

            return {
              x: 0,
              y: 0
            };
          }
          /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */

        }, {
          key: "_cleanupCachedDimensions",
          value: function _cleanupCachedDimensions() {
            this._boundaryRect = this._previewRect = undefined;

            this._parentPositions.clear();
          }
          /**
           * Checks whether the element is still inside its boundary after the viewport has been resized.
           * If not, the position is adjusted so that the element fits again.
           */

        }, {
          key: "_containInsideBoundaryOnResize",
          value: function _containInsideBoundaryOnResize() {
            var _this$_passiveTransfo = this._passiveTransform,
                x = _this$_passiveTransfo.x,
                y = _this$_passiveTransfo.y;

            if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
              return;
            }

            var boundaryRect = this._boundaryElement.getBoundingClientRect();

            var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
            // different tab). Don't do anything in this case so we don't clear the user's position.


            if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
              return;
            }

            var leftOverflow = boundaryRect.left - elementRect.left;
            var rightOverflow = elementRect.right - boundaryRect.right;
            var topOverflow = boundaryRect.top - elementRect.top;
            var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
            // do much to make it fit so we just anchor it to the left.

            if (boundaryRect.width > elementRect.width) {
              if (leftOverflow > 0) {
                x += leftOverflow;
              }

              if (rightOverflow > 0) {
                x -= rightOverflow;
              }
            } else {
              x = 0;
            } // If the element has become taller than the boundary, we can't
            // do much to make it fit so we just anchor it to the top.


            if (boundaryRect.height > elementRect.height) {
              if (topOverflow > 0) {
                y += topOverflow;
              }

              if (bottomOverflow > 0) {
                y -= bottomOverflow;
              }
            } else {
              y = 0;
            }

            if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
              this.setFreeDragPosition({
                y: y,
                x: x
              });
            }
          }
          /** Gets the drag start delay, based on the event type. */

        }, {
          key: "_getDragStartDelay",
          value: function _getDragStartDelay(event) {
            var value = this.dragStartDelay;

            if (typeof value === 'number') {
              return value;
            } else if (isTouchEvent(event)) {
              return value.touch;
            }

            return value ? value.mouse : 0;
          }
          /** Updates the internal state of the draggable element when scrolling has occurred. */

        }, {
          key: "_updateOnScroll",
          value: function _updateOnScroll(event) {
            var scrollDifference = this._parentPositions.handleScroll(event);

            if (scrollDifference) {
              var target = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event); // ClientRect dimensions are based on the scroll position of the page and its parent node so
              // we have to update the cached boundary ClientRect if the user has scrolled. Check for
              // the `document` specifically since IE doesn't support `contains` on it.

              if (this._boundaryRect && (target === this._document || target !== this._boundaryElement && target.contains(this._boundaryElement))) {
                adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
              }

              this._pickupPositionOnPage.x += scrollDifference.left;
              this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
              // it isn't relative to the viewport like the preview inside a drop list.

              if (!this._dropContainer) {
                this._activeTransform.x -= scrollDifference.left;
                this._activeTransform.y -= scrollDifference.top;

                this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
              }
            }
          }
          /** Gets the scroll position of the viewport. */

        }, {
          key: "_getViewportScrollPosition",
          value: function _getViewportScrollPosition() {
            var cachedPosition = this._parentPositions.positions.get(this._document);

            return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
          }
          /**
           * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
           * than saving it in property directly on init, because we want to resolve it as late as possible
           * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
           * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
           */

        }, {
          key: "_getShadowRoot",
          value: function _getShadowRoot() {
            if (this._cachedShadowRoot === undefined) {
              this._cachedShadowRoot = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._rootElement);
            }

            return this._cachedShadowRoot;
          }
          /** Gets the element into which the drag preview should be inserted. */

        }, {
          key: "_getPreviewInsertionPoint",
          value: function _getPreviewInsertionPoint(initialParent, shadowRoot) {
            var previewContainer = this._previewContainer || 'global';

            if (previewContainer === 'parent') {
              return initialParent;
            }

            if (previewContainer === 'global') {
              var documentRef = this._document; // We can't use the body if the user is in fullscreen mode,
              // because the preview will render under the fullscreen element.
              // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.

              return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
            }

            return (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(previewContainer);
          }
        }]);

        return _DragRef;
      }();
      /**
       * Gets a 3d `transform` that can be applied to an element.
       * @param x Desired position of the element along the X axis.
       * @param y Desired position of the element along the Y axis.
       */


      function getTransform(x, y) {
        // Round the transforms since some browsers will
        // blur the elements for sub-pixel transforms.
        return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
      }
      /** Clamps a value between a minimum and a maximum. */


      function clamp$1(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
      /**
       * Helper to remove a node from the DOM and to do all the necessary null checks.
       * @param node Node to be removed.
       */


      function removeNode(node) {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
      /** Determines whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /**
       * Gets the root HTML element of an embedded view.
       * If the root is not an HTML element it gets wrapped in one.
       */


      function getRootNode(viewRef, _document) {
        var rootNodes = viewRef.rootNodes;

        if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
          return rootNodes[0];
        }

        var wrapper = _document.createElement('div');

        rootNodes.forEach(function (node) {
          return wrapper.appendChild(node);
        });
        return wrapper;
      }
      /**
       * Matches the target element's size to the source's size.
       * @param target Element that needs to be resized.
       * @param sourceRect Dimensions of the source element.
       */


      function matchElementSize(target, sourceRect) {
        target.style.width = "".concat(sourceRect.width, "px");
        target.style.height = "".concat(sourceRect.height, "px");
        target.style.transform = getTransform(sourceRect.left, sourceRect.top);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Moves an item one index in an array to another.
       * @param array Array in which to move the item.
       * @param fromIndex Starting index of the item.
       * @param toIndex Index to which the item should be moved.
       */


      function _moveItemInArray(array, fromIndex, toIndex) {
        var from = clamp(fromIndex, array.length - 1);
        var to = clamp(toIndex, array.length - 1);

        if (from === to) {
          return;
        }

        var target = array[from];
        var delta = to < from ? -1 : 1;

        for (var i = from; i !== to; i += delta) {
          array[i] = array[i + delta];
        }

        array[to] = target;
      }
      /**
       * Moves an item from one array to another.
       * @param currentArray Array from which to transfer the item.
       * @param targetArray Array into which to put the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       */


      function _transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var from = clamp(currentIndex, currentArray.length - 1);
        var to = clamp(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
        }
      }
      /**
       * Copies an item from one array to another, leaving it in its
       * original position in current array.
       * @param currentArray Array from which to copy the item.
       * @param targetArray Array into which is copy the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       *
       */


      function _copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var to = clamp(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray[currentIndex]);
        }
      }
      /** Clamps a number between zero and a maximum. */


      function clamp(value, max) {
        return Math.max(0, Math.min(max, value));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Proximity, as a ratio to width/height, at which a
       * dragged item will affect the drop container.
       */


      var DROP_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
       * viewport. The value comes from trying it out manually until it feels right.
       */

      var SCROLL_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Reference to a drop list. Used to manipulate or dispose of the container.
       */

      var _DropListRef = /*#__PURE__*/function () {
        function _DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
          var _this11 = this;

          _classCallCheck(this, _DropListRef);

          this._dragDropRegistry = _dragDropRegistry;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          /** Whether starting a dragging sequence from this container is disabled. */

          this.disabled = false;
          /** Whether sorting items within the list is disabled. */

          this.sortingDisabled = false;
          /**
           * Whether auto-scrolling the view when the user
           * moves their pointer close to the edges is disabled.
           */

          this.autoScrollDisabled = false;
          /** Number of pixels to scroll for each frame when auto-scrolling an element. */

          this.autoScrollStep = 2;
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Functions that is used to determine whether an item can be sorted into a particular index. */


          this.sortPredicate = function () {
            return true;
          };
          /** Emits right before dragging has started. */


          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the user drops an item inside the container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Whether an item in the list is being dragged. */

          this._isDragging = false;
          /** Cache of the dimensions of all the items inside the container. */

          this._itemPositions = [];
          /**
           * Keeps track of the item that was last swapped with the dragged item, as well as what direction
           * the pointer was moving in when the swap occured and whether the user's pointer continued to
           * overlap with the swapped item after the swapping occurred.
           */

          this._previousSwap = {
            drag: null,
            delta: 0,
            overlaps: false
          };
          /** Draggable items in the container. */

          this._draggables = [];
          /** Drop lists that are connected to the current one. */

          this._siblings = [];
          /** Direction in which the list is oriented. */

          this._orientation = 'vertical';
          /** Connected siblings that currently have a dragged item. */

          this._activeSiblings = new Set();
          /** Layout direction of the drop list. */

          this._direction = 'ltr';
          /** Subscription to the window being scrolled. */

          this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
          /** Vertical direction in which the list is currently scrolling. */

          this._verticalScrollDirection = 0
          /* NONE */
          ;
          /** Horizontal direction in which the list is currently scrolling. */

          this._horizontalScrollDirection = 0
          /* NONE */
          ;
          /** Used to signal to the current auto-scroll sequence when to stop. */

          this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

          this._cachedShadowRoot = null;
          /** Starts the interval that'll auto-scroll the element. */

          this._startScrollInterval = function () {
            _this11._stopScrolling();

            (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(0, rxjs__WEBPACK_IMPORTED_MODULE_6__.animationFrameScheduler).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this11._stopScrollTimers)).subscribe(function () {
              var node = _this11._scrollNode;
              var scrollStep = _this11.autoScrollStep;

              if (_this11._verticalScrollDirection === 1
              /* UP */
              ) {
                incrementVerticalScroll(node, -scrollStep);
              } else if (_this11._verticalScrollDirection === 2
              /* DOWN */
              ) {
                incrementVerticalScroll(node, scrollStep);
              }

              if (_this11._horizontalScrollDirection === 1
              /* LEFT */
              ) {
                incrementHorizontalScroll(node, -scrollStep);
              } else if (_this11._horizontalScrollDirection === 2
              /* RIGHT */
              ) {
                incrementHorizontalScroll(node, scrollStep);
              }
            });
          };

          this.element = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(element);
          this._document = _document;
          this.withScrollableParents([this.element]);

          _dragDropRegistry.registerDropContainer(this);

          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        }
        /** Removes the drop list functionality from the DOM element. */


        _createClass(_DropListRef, [{
          key: "dispose",
          value: function dispose() {
            this._stopScrolling();

            this._stopScrollTimers.complete();

            this._viewportScrollSubscription.unsubscribe();

            this.beforeStarted.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();
            this.sorted.complete();

            this._activeSiblings.clear();

            this._scrollNode = null;

            this._parentPositions.clear();

            this._dragDropRegistry.removeDropContainer(this);
          }
          /** Whether an item from this list is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._isDragging;
          }
          /** Starts dragging an item. */

        }, {
          key: "start",
          value: function start() {
            this._draggingStarted();

            this._notifyReceivingSiblings();
          }
          /**
           * Emits an event to indicate that the user moved an item into the container.
           * @param item Item that was moved into the container.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param index Index at which the item entered. If omitted, the container will try to figure it
           *   out automatically.
           */

        }, {
          key: "enter",
          value: function enter(item, pointerX, pointerY, index) {
            this._draggingStarted(); // If sorting is disabled, we want the item to return to its starting
            // position if the user is returning it to its initial container.


            var newIndex;

            if (index == null) {
              newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

              if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
              }
            } else {
              newIndex = index;
            }

            var activeDraggables = this._activeDraggables;
            var currentIndex = activeDraggables.indexOf(item);
            var placeholder = item.getPlaceholderElement();
            var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
            // it means that we're trying to restore the item to its initial position. In this
            // case we should use the next item from the list as the reference.

            if (newPositionReference === item) {
              newPositionReference = activeDraggables[newIndex + 1];
            } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
            // into another container and back again), we have to ensure that it isn't duplicated.


            if (currentIndex > -1) {
              activeDraggables.splice(currentIndex, 1);
            } // Don't use items that are being dragged as a reference, because
            // their element has been moved down to the bottom of the body.


            if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
              var element = newPositionReference.getRootElement();
              element.parentElement.insertBefore(placeholder, element);
              activeDraggables.splice(newIndex, 0, item);
            } else if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
              var reference = activeDraggables[0].getRootElement();
              reference.parentNode.insertBefore(placeholder, reference);
              activeDraggables.unshift(item);
            } else {
              (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).appendChild(placeholder);
              activeDraggables.push(item);
            } // The transform needs to be cleared so it doesn't throw off the measurements.


            placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
            // but we need to refresh them since the amount of items has changed and also parent rects.

            this._cacheItemPositions();

            this._cacheParentPositions(); // Notify siblings at the end so that the item has been inserted into the `activeDraggables`.


            this._notifyReceivingSiblings();

            this.entered.next({
              item: item,
              container: this,
              currentIndex: this.getItemIndex(item)
            });
          }
          /**
           * Removes an item from the container after it was dragged into another container by the user.
           * @param item Item that was dragged out.
           */

        }, {
          key: "exit",
          value: function exit(item) {
            this._reset();

            this.exited.next({
              item: item,
              container: this
            });
          }
          /**
           * Drops an item into this container.
           * @param item Item being dropped into the container.
           * @param currentIndex Index at which the item should be inserted.
           * @param previousIndex Index of the item when dragging started.
           * @param previousContainer Container from which the item got dragged in.
           * @param isPointerOverContainer Whether the user's pointer was over the
           *    container when the item was dropped.
           * @param distance Distance the user has dragged since the start of the dragging sequence.
           */

        }, {
          key: "drop",
          value: function drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint) {
            this._reset();

            this.dropped.next({
              item: item,
              currentIndex: currentIndex,
              previousIndex: previousIndex,
              container: this,
              previousContainer: previousContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance,
              dropPoint: dropPoint
            });
          }
          /**
           * Sets the draggable items that are a part of this list.
           * @param items Items that are a part of this list.
           */

        }, {
          key: "withItems",
          value: function withItems(items) {
            var _this12 = this;

            var previousItems = this._draggables;
            this._draggables = items;
            items.forEach(function (item) {
              return item._withDropContainer(_this12);
            });

            if (this.isDragging()) {
              var draggedItems = previousItems.filter(function (item) {
                return item.isDragging();
              }); // If all of the items being dragged were removed
              // from the list, abort the current drag sequence.

              if (draggedItems.every(function (item) {
                return items.indexOf(item) === -1;
              })) {
                this._reset();
              } else {
                this._cacheItems();
              }
            }

            return this;
          }
          /** Sets the layout direction of the drop list. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /**
           * Sets the containers that are connected to this one. When two or more containers are
           * connected, the user will be allowed to transfer items between them.
           * @param connectedTo Other containers that the current containers should be connected to.
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(_connectedTo) {
            this._siblings = _connectedTo.slice();
            return this;
          }
          /**
           * Sets the orientation of the container.
           * @param orientation New orientation for the container.
           */

        }, {
          key: "withOrientation",
          value: function withOrientation(orientation) {
            this._orientation = orientation;
            return this;
          }
          /**
           * Sets which parent elements are can be scrolled while the user is dragging.
           * @param elements Elements that can be scrolled.
           */

        }, {
          key: "withScrollableParents",
          value: function withScrollableParents(elements) {
            var element = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element); // We always allow the current element to be scrollable
            // so we need to ensure that it's in the array.

            this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(_toConsumableArray(elements)) : elements.slice();
            return this;
          }
          /** Gets the scrollable parents that are registered with this drop container. */

        }, {
          key: "getScrollableParents",
          value: function getScrollableParents() {
            return this._scrollableElements;
          }
          /**
           * Figures out the index of an item in the container.
           * @param item Item whose index should be determined.
           */

        }, {
          key: "getItemIndex",
          value: function getItemIndex(item) {
            if (!this._isDragging) {
              return this._draggables.indexOf(item);
            } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
            // The rest of the logic still stands no matter what orientation we're in, however
            // we need to invert the array when determining the index.


            var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
            return findIndex(items, function (currentItem) {
              return currentItem.drag === item;
            });
          }
          /**
           * Whether the list is able to receive the item that
           * is currently being dragged inside a connected drop list.
           */

        }, {
          key: "isReceiving",
          value: function isReceiving() {
            return this._activeSiblings.size > 0;
          }
          /**
           * Sorts an item inside the container based on its position.
           * @param item Item to be sorted.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param pointerDelta Direction in which the pointer is moving along each axis.
           */

        }, {
          key: "_sortItem",
          value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
            // Don't sort the item if sorting is disabled or it's out of range.
            if (this.sortingDisabled || !this._clientRect || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
              return;
            }

            var siblings = this._itemPositions;

            var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

            if (newIndex === -1 && siblings.length > 0) {
              return;
            }

            var isHorizontal = this._orientation === 'horizontal';
            var currentIndex = findIndex(siblings, function (currentItem) {
              return currentItem.drag === item;
            });
            var siblingAtNewPosition = siblings[newIndex];
            var currentPosition = siblings[currentIndex].clientRect;
            var newPosition = siblingAtNewPosition.clientRect;
            var delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

            var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


            var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
            // We use this to check whether an item has been moved as a result of the sorting.


            var oldOrder = siblings.slice(); // Shuffle the array in place.

            _moveItemInArray(siblings, currentIndex, newIndex);

            this.sorted.next({
              previousIndex: currentIndex,
              currentIndex: newIndex,
              container: this,
              item: item
            });
            siblings.forEach(function (sibling, index) {
              // Don't do anything if the position hasn't changed.
              if (oldOrder[index] === sibling) {
                return;
              }

              var isDraggedItem = sibling.drag === item;
              var offset = isDraggedItem ? itemOffset : siblingOffset;
              var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

              sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
              // client rects to reflect their new position, as well as swap their positions in the cache.
              // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
              // elements may be mid-animation which will give us a wrong result.

              if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = combineTransforms("translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)"), sibling.initialTransform);
                adjustClientRect(sibling.clientRect, 0, offset);
              } else {
                elementToOffset.style.transform = combineTransforms("translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)"), sibling.initialTransform);
                adjustClientRect(sibling.clientRect, offset, 0);
              }
            }); // Note that it's important that we do this after the client rects have been adjusted.

            this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
            this._previousSwap.drag = siblingAtNewPosition.drag;
            this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
          }
          /**
           * Checks whether the user's pointer is close to the edges of either the
           * viewport or the drop list and starts the auto-scroll sequence.
           * @param pointerX User's pointer position along the x axis.
           * @param pointerY User's pointer position along the y axis.
           */

        }, {
          key: "_startScrollingIfNecessary",
          value: function _startScrollingIfNecessary(pointerX, pointerY) {
            var _this13 = this;

            if (this.autoScrollDisabled) {
              return;
            }

            var scrollNode;
            var verticalScrollDirection = 0
            /* NONE */
            ;
            var horizontalScrollDirection = 0
            /* NONE */
            ; // Check whether we should start scrolling any of the parent containers.

            this._parentPositions.positions.forEach(function (position, element) {
              // We have special handling for the `document` below. Also this would be
              // nicer with a  for...of loop, but it requires changing a compiler flag.
              if (element === _this13._document || !position.clientRect || scrollNode) {
                return;
              }

              if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                var _getElementScrollDire = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

                var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

                verticalScrollDirection = _getElementScrollDire2[0];
                horizontalScrollDirection = _getElementScrollDire2[1];

                if (verticalScrollDirection || horizontalScrollDirection) {
                  scrollNode = element;
                }
              }
            }); // Otherwise check if we can start scrolling the viewport.


            if (!verticalScrollDirection && !horizontalScrollDirection) {
              var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                  width = _this$_viewportRuler$.width,
                  height = _this$_viewportRuler$.height;

              var clientRect = {
                width: width,
                height: height,
                top: 0,
                right: width,
                bottom: height,
                left: 0
              };
              verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
              horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
              scrollNode = window;
            }

            if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
              this._verticalScrollDirection = verticalScrollDirection;
              this._horizontalScrollDirection = horizontalScrollDirection;
              this._scrollNode = scrollNode;

              if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
              } else {
                this._stopScrolling();
              }
            }
          }
          /** Stops any currently-running auto-scroll sequences. */

        }, {
          key: "_stopScrolling",
          value: function _stopScrolling() {
            this._stopScrollTimers.next();
          }
          /** Starts the dragging sequence within the list. */

        }, {
          key: "_draggingStarted",
          value: function _draggingStarted() {
            var styles = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).style;
            this.beforeStarted.next();
            this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
            // scrolling. The browser seems to round the value based on the snapping points which means
            // that we can't increment/decrement the scroll position.

            this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
            styles.scrollSnapType = styles.msScrollSnapType = 'none';

            this._cacheItems();

            this._viewportScrollSubscription.unsubscribe();

            this._listenToScrollEvents();
          }
          /** Caches the positions of the configured scrollable parents. */

        }, {
          key: "_cacheParentPositions",
          value: function _cacheParentPositions() {
            var element = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element);

            this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
            // so we can take advantage of the cached `ClientRect`.


            this._clientRect = this._parentPositions.positions.get(element).clientRect;
          }
          /** Refreshes the position cache of the items and sibling containers. */

        }, {
          key: "_cacheItemPositions",
          value: function _cacheItemPositions() {
            var isHorizontal = this._orientation === 'horizontal';
            this._itemPositions = this._activeDraggables.map(function (drag) {
              var elementToMeasure = drag.getVisibleElement();
              return {
                drag: drag,
                offset: 0,
                initialTransform: elementToMeasure.style.transform || '',
                clientRect: getMutableClientRect(elementToMeasure)
              };
            }).sort(function (a, b) {
              return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
            });
          }
          /** Resets the container to its initial state. */

        }, {
          key: "_reset",
          value: function _reset() {
            var _this14 = this;

            this._isDragging = false;
            var styles = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).style;
            styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

            this._activeDraggables.forEach(function (item) {
              var _a;

              var rootElement = item.getRootElement();

              if (rootElement) {
                var initialTransform = (_a = _this14._itemPositions.find(function (current) {
                  return current.drag === item;
                })) === null || _a === void 0 ? void 0 : _a.initialTransform;
                rootElement.style.transform = initialTransform || '';
              }
            });

            this._siblings.forEach(function (sibling) {
              return sibling._stopReceiving(_this14);
            });

            this._activeDraggables = [];
            this._itemPositions = [];
            this._previousSwap.drag = null;
            this._previousSwap.delta = 0;
            this._previousSwap.overlaps = false;

            this._stopScrolling();

            this._viewportScrollSubscription.unsubscribe();

            this._parentPositions.clear();
          }
          /**
           * Gets the offset in pixels by which the items that aren't being dragged should be moved.
           * @param currentIndex Index of the item currently being dragged.
           * @param siblings All of the items in the list.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getSiblingOffsetPx",
          value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var currentPosition = siblings[currentIndex].clientRect;
            var immediateSibling = siblings[currentIndex + delta * -1];
            var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

            if (immediateSibling) {
              var start = isHorizontal ? 'left' : 'top';
              var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
              // after it in the direction in which the user is dragging, or vice versa. We add it to the
              // offset in order to push the element to where it will be when it's inline and is influenced
              // by the `margin` of its siblings.

              if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
              } else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
              }
            }

            return siblingOffset;
          }
          /**
           * Gets the offset in pixels by which the item that is being dragged should be moved.
           * @param currentPosition Current position of the item.
           * @param newPosition Position of the item where the current item should be moved.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getItemOffsetPx",
          value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

            if (delta === -1) {
              itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
            }

            return itemOffset;
          }
          /**
           * Checks if pointer is entering in the first position
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           */

        }, {
          key: "_shouldEnterAsFirstChild",
          value: function _shouldEnterAsFirstChild(pointerX, pointerY) {
            if (!this._activeDraggables.length) {
              return false;
            }

            var itemPositions = this._itemPositions;
            var isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
            // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

            var reversed = itemPositions[0].drag !== this._activeDraggables[0];

            if (reversed) {
              var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
              return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
            } else {
              var firstItemRect = itemPositions[0].clientRect;
              return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
            }
          }
          /**
           * Gets the index of an item in the drop container, based on the position of the user's pointer.
           * @param item Item that is being sorted.
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           * @param delta Direction in which the user is moving their pointer.
           */

        }, {
          key: "_getItemIndexFromPointerPosition",
          value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
            var _this15 = this;

            var isHorizontal = this._orientation === 'horizontal';
            var index = findIndex(this._itemPositions, function (_ref4, _, array) {
              var drag = _ref4.drag,
                  clientRect = _ref4.clientRect;

              if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
              }

              if (delta) {
                var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
                // the item after we made the swap, and they didn't change the direction in which they're
                // dragging, we don't consider it a direction swap.

                if (drag === _this15._previousSwap.drag && _this15._previousSwap.overlaps && direction === _this15._previousSwap.delta) {
                  return false;
                }
              }

              return isHorizontal ? // Round these down since most browsers report client rects with
              // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
              pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
            });
            return index === -1 || !this.sortPredicate(index, item, this) ? -1 : index;
          }
          /** Caches the current items in the list and their positions. */

        }, {
          key: "_cacheItems",
          value: function _cacheItems() {
            this._activeDraggables = this._draggables.slice();

            this._cacheItemPositions();

            this._cacheParentPositions();
          }
          /**
           * Checks whether the user's pointer is positioned over the container.
           * @param x Pointer position along the X axis.
           * @param y Pointer position along the Y axis.
           */

        }, {
          key: "_isOverContainer",
          value: function _isOverContainer(x, y) {
            return this._clientRect != null && isInsideClientRect(this._clientRect, x, y);
          }
          /**
           * Figures out whether an item should be moved into a sibling
           * drop container, based on its current position.
           * @param item Drag item that is being moved.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_getSiblingContainerFromPosition",
          value: function _getSiblingContainerFromPosition(item, x, y) {
            return this._siblings.find(function (sibling) {
              return sibling._canReceive(item, x, y);
            });
          }
          /**
           * Checks whether the drop list can receive the passed-in item.
           * @param item Item that is being dragged into the list.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_canReceive",
          value: function _canReceive(item, x, y) {
            if (!this._clientRect || !isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
              return false;
            }

            var elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
            // the client rect is probably scrolled out of the view.


            if (!elementFromPoint) {
              return false;
            }

            var nativeElement = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element); // The `ClientRect`, that we're using to find the container over which the user is
            // hovering, doesn't give us any information on whether the element has been scrolled
            // out of the view or whether it's overlapping with other containers. This means that
            // we could end up transferring the item into a container that's invisible or is positioned
            // below another one. We use the result from `elementFromPoint` to get the top-most element
            // at the pointer position and to find whether it's one of the intersecting drop containers.

            return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
          }
          /**
           * Called by one of the connected drop lists when a dragging sequence has started.
           * @param sibling Sibling in which dragging has started.
           */

        }, {
          key: "_startReceiving",
          value: function _startReceiving(sibling, items) {
            var _this16 = this;

            var activeSiblings = this._activeSiblings;

            if (!activeSiblings.has(sibling) && items.every(function (item) {
              // Note that we have to add an exception to the `enterPredicate` for items that started off
              // in this drop list. The drag ref has logic that allows an item to return to its initial
              // container, if it has left the initial container and none of the connected containers
              // allow it to enter. See `DragRef._updateActiveDropContainer` for more context.
              return _this16.enterPredicate(item, _this16) || _this16._draggables.indexOf(item) > -1;
            })) {
              activeSiblings.add(sibling);

              this._cacheParentPositions();

              this._listenToScrollEvents();
            }
          }
          /**
           * Called by a connected drop list when dragging has stopped.
           * @param sibling Sibling whose dragging has stopped.
           */

        }, {
          key: "_stopReceiving",
          value: function _stopReceiving(sibling) {
            this._activeSiblings["delete"](sibling);

            this._viewportScrollSubscription.unsubscribe();
          }
          /**
           * Starts listening to scroll events on the viewport.
           * Used for updating the internal state of the list.
           */

        }, {
          key: "_listenToScrollEvents",
          value: function _listenToScrollEvents() {
            var _this17 = this;

            this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(function (event) {
              if (_this17.isDragging()) {
                var scrollDifference = _this17._parentPositions.handleScroll(event);

                if (scrollDifference) {
                  // Since we know the amount that the user has scrolled we can shift all of the
                  // client rectangles ourselves. This is cheaper than re-measuring everything and
                  // we can avoid inconsistent behavior where we might be measuring the element before
                  // its position has changed.
                  _this17._itemPositions.forEach(function (_ref5) {
                    var clientRect = _ref5.clientRect;
                    adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                  }); // We need two loops for this, because we want all of the cached
                  // positions to be up-to-date before we re-sort the item.


                  _this17._itemPositions.forEach(function (_ref6) {
                    var drag = _ref6.drag;

                    if (_this17._dragDropRegistry.isDragging(drag)) {
                      // We need to re-sort the item manually, because the pointer move
                      // events won't be dispatched while the user is scrolling.
                      drag._sortFromLastPointerPosition();
                    }
                  });
                }
              } else if (_this17.isReceiving()) {
                _this17._cacheParentPositions();
              }
            });
          }
          /**
           * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
           * than saving it in property directly on init, because we want to resolve it as late as possible
           * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
           * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
           */

        }, {
          key: "_getShadowRoot",
          value: function _getShadowRoot() {
            if (!this._cachedShadowRoot) {
              var shadowRoot = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element));
              this._cachedShadowRoot = shadowRoot || this._document;
            }

            return this._cachedShadowRoot;
          }
          /** Notifies any siblings that may potentially receive the item. */

        }, {
          key: "_notifyReceivingSiblings",
          value: function _notifyReceivingSiblings() {
            var _this18 = this;

            var draggedItems = this._activeDraggables.filter(function (item) {
              return item.isDragging();
            });

            this._siblings.forEach(function (sibling) {
              return sibling._startReceiving(_this18, draggedItems);
            });
          }
        }]);

        return _DropListRef;
      }();
      /**
       * Finds the index of an item that matches a predicate function. Used as an equivalent
       * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
       * @param array Array in which to look for matches.
       * @param predicate Function used to determine whether an item is a match.
       */


      function findIndex(array, predicate) {
        for (var i = 0; i < array.length; i++) {
          if (predicate(array[i], i, array)) {
            return i;
          }
        }

        return -1;
      }
      /**
       * Increments the vertical scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementVerticalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(0, amount);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollTop += amount;
        }
      }
      /**
       * Increments the horizontal scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementHorizontalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(amount, 0);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollLeft += amount;
        }
      }
      /**
       * Gets whether the vertical auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getVerticalScrollDirection(clientRect, pointerY) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            height = clientRect.height;
        var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
          return 1
          /* UP */
          ;
        } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
          return 2
          /* DOWN */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets whether the horizontal auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerX Position of the user's pointer along the x axis.
       */


      function getHorizontalScrollDirection(clientRect, pointerX) {
        var left = clientRect.left,
            right = clientRect.right,
            width = clientRect.width;
        var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
          return 1
          /* LEFT */
          ;
        } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
          return 2
          /* RIGHT */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets the directions in which an element node should be scrolled,
       * assuming that the user's pointer is already within it scrollable region.
       * @param element Element for which we should calculate the scroll direction.
       * @param clientRect Bounding client rectangle of the element.
       * @param pointerX Position of the user's pointer along the x axis.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
        var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
        var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
        var verticalScrollDirection = 0
        /* NONE */
        ;
        var horizontalScrollDirection = 0
        /* NONE */
        ; // Note that we here we do some extra checks for whether the element is actually scrollable in
        // a certain direction and we only assign the scroll direction if it is. We do this so that we
        // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
        // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

        if (computedVertical) {
          var scrollTop = element.scrollTop;

          if (computedVertical === 1
          /* UP */
          ) {
            if (scrollTop > 0) {
              verticalScrollDirection = 1
              /* UP */
              ;
            }
          } else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2
            /* DOWN */
            ;
          }
        }

        if (computedHorizontal) {
          var scrollLeft = element.scrollLeft;

          if (computedHorizontal === 1
          /* LEFT */
          ) {
            if (scrollLeft > 0) {
              horizontalScrollDirection = 1
              /* LEFT */
              ;
            }
          } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2
            /* RIGHT */
            ;
          }
        }

        return [verticalScrollDirection, horizontalScrollDirection];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event options that can be used to bind an active, capturing event. */


      var activeCapturingEventOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
        passive: false,
        capture: true
      });
      /**
       * Service that keeps track of all the drag item and drop container
       * instances, and manages global event listeners on the `document`.
       * @docs-private
       */
      // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
      // to avoid circular imports. If we were to reference them here, importing the registry into the
      // classes that are registering themselves will introduce a circular import.

      var _DragDropRegistry = /*#__PURE__*/function () {
        function _DragDropRegistry(_ngZone, _document) {
          var _this19 = this;

          _classCallCheck(this, _DragDropRegistry);

          this._ngZone = _ngZone;
          /** Registered drop container instances. */

          this._dropInstances = new Set();
          /** Registered drag item instances. */

          this._dragInstances = new Set();
          /** Drag item instances that are currently being dragged. */

          this._activeDragInstances = [];
          /** Keeps track of the event listeners that we've bound to the `document`. */

          this._globalListeners = new Map();
          /**
           * Predicate function to check if an item is being dragged.  Moved out into a property,
           * because it'll be called a lot and we don't want to create a new function every time.
           */

          this._draggingPredicate = function (item) {
            return item.isDragging();
          };
          /**
           * Emits the `touchmove` or `mousemove` events that are dispatched
           * while the user is dragging a drag item instance.
           */


          this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * Emits the `touchend` or `mouseup` events that are dispatched
           * while the user is dragging a drag item instance.
           */

          this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * Emits when the viewport has been scrolled while the user is dragging an item.
           * @deprecated To be turned into a private member. Use the `scrolled` method instead.
           * @breaking-change 13.0.0
           */

          this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * Event listener that will prevent the default browser action while the user is dragging.
           * @param event Event whose default action should be prevented.
           */

          this._preventDefaultWhileDragging = function (event) {
            if (_this19._activeDragInstances.length > 0) {
              event.preventDefault();
            }
          };
          /** Event listener for `touchmove` that is bound even if no dragging is happening. */


          this._persistentTouchmoveListener = function (event) {
            if (_this19._activeDragInstances.length > 0) {
              // Note that we only want to prevent the default action after dragging has actually started.
              // Usually this is the same time at which the item is added to the `_activeDragInstances`,
              // but it could be pushed back if the user has set up a drag delay or threshold.
              if (_this19._activeDragInstances.some(_this19._draggingPredicate)) {
                event.preventDefault();
              }

              _this19.pointerMove.next(event);
            }
          };

          this._document = _document;
        }
        /** Adds a drop container to the registry. */


        _createClass(_DragDropRegistry, [{
          key: "registerDropContainer",
          value: function registerDropContainer(drop) {
            if (!this._dropInstances.has(drop)) {
              this._dropInstances.add(drop);
            }
          }
          /** Adds a drag item instance to the registry. */

        }, {
          key: "registerDragItem",
          value: function registerDragItem(drag) {
            var _this20 = this;

            this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
            // won't preventDefault on a dynamically-added `touchmove` listener.
            // See https://bugs.webkit.org/show_bug.cgi?id=184250.


            if (this._dragInstances.size === 1) {
              this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this20._document.addEventListener('touchmove', _this20._persistentTouchmoveListener, activeCapturingEventOptions);
              });
            }
          }
          /** Removes a drop container from the registry. */

        }, {
          key: "removeDropContainer",
          value: function removeDropContainer(drop) {
            this._dropInstances["delete"](drop);
          }
          /** Removes a drag item instance from the registry. */

        }, {
          key: "removeDragItem",
          value: function removeDragItem(drag) {
            this._dragInstances["delete"](drag);

            this.stopDragging(drag);

            if (this._dragInstances.size === 0) {
              this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
            }
          }
          /**
           * Starts the dragging sequence for a drag instance.
           * @param drag Drag instance which is being dragged.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "startDragging",
          value: function startDragging(drag, event) {
            var _this21 = this;

            // Do not process the same drag twice to avoid memory leaks and redundant listeners
            if (this._activeDragInstances.indexOf(drag) > -1) {
              return;
            }

            this._activeDragInstances.push(drag);

            if (this._activeDragInstances.length === 1) {
              var _isTouchEvent = event.type.startsWith('touch'); // We explicitly bind __active__ listeners here, because newer browsers will default to
              // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
              // use `preventDefault` to prevent the page from scrolling while the user is dragging.


              this._globalListeners.set(_isTouchEvent ? 'touchend' : 'mouseup', {
                handler: function handler(e) {
                  return _this21.pointerUp.next(e);
                },
                options: true
              }).set('scroll', {
                handler: function handler(e) {
                  return _this21.scroll.next(e);
                },
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
              }) // Preventing the default action on `mousemove` isn't enough to disable text selection
              // on Safari so we need to prevent the selection event as well. Alternatively this can
              // be done by setting `user-select: none` on the `body`, however it has causes a style
              // recalculation which can be expensive on pages with a lot of elements.
              .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
              }); // We don't have to bind a move event for touch drag sequences, because
              // we already have a persistent global one bound from `registerDragItem`.


              if (!_isTouchEvent) {
                this._globalListeners.set('mousemove', {
                  handler: function handler(e) {
                    return _this21.pointerMove.next(e);
                  },
                  options: activeCapturingEventOptions
                });
              }

              this._ngZone.runOutsideAngular(function () {
                _this21._globalListeners.forEach(function (config, name) {
                  _this21._document.addEventListener(name, config.handler, config.options);
                });
              });
            }
          }
          /** Stops dragging a drag item instance. */

        }, {
          key: "stopDragging",
          value: function stopDragging(drag) {
            var index = this._activeDragInstances.indexOf(drag);

            if (index > -1) {
              this._activeDragInstances.splice(index, 1);

              if (this._activeDragInstances.length === 0) {
                this._clearGlobalListeners();
              }
            }
          }
          /** Gets whether a drag item instance is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging(drag) {
            return this._activeDragInstances.indexOf(drag) > -1;
          }
          /**
           * Gets a stream that will emit when any element on the page is scrolled while an item is being
           * dragged.
           * @param shadowRoot Optional shadow root that the current dragging sequence started from.
           *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
           *   be used to include an additional top-level listener at the shadow root level.
           */

        }, {
          key: "scrolled",
          value: function scrolled(shadowRoot) {
            var _this22 = this;

            var streams = [this.scroll];

            if (shadowRoot && shadowRoot !== this._document) {
              // Note that this is basically the same as `fromEvent` from rjxs, but we do it ourselves,
              // because we want to guarantee that the event is bound outside of the `NgZone`. With
              // `fromEvent` it'll only happen if the subscription is outside the `NgZone`.
              streams.push(new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
                return _this22._ngZone.runOutsideAngular(function () {
                  var eventOptions = true;

                  var callback = function callback(event) {
                    if (_this22._activeDragInstances.length) {
                      observer.next(event);
                    }
                  };

                  shadowRoot.addEventListener('scroll', callback, eventOptions);
                  return function () {
                    shadowRoot.removeEventListener('scroll', callback, eventOptions);
                  };
                });
              }));
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge).apply(void 0, streams);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this23 = this;

            this._dragInstances.forEach(function (instance) {
              return _this23.removeDragItem(instance);
            });

            this._dropInstances.forEach(function (instance) {
              return _this23.removeDropContainer(instance);
            });

            this._clearGlobalListeners();

            this.pointerMove.complete();
            this.pointerUp.complete();
          }
          /** Clears out the global event listeners from the `document`. */

        }, {
          key: "_clearGlobalListeners",
          value: function _clearGlobalListeners() {
            var _this24 = this;

            this._globalListeners.forEach(function (config, name) {
              _this24._document.removeEventListener(name, config.handler, config.options);
            });

            this._globalListeners.clear();
          }
        }]);

        return _DragDropRegistry;
      }();

      _DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
        return new (t || _DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
      };

      _DragDropRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
        factory: function DragDropRegistry_Factory() {
          return new _DragDropRegistry(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
        },
        token: _DragDropRegistry,
        providedIn: "root"
      });

      _DragDropRegistry.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_DragDropRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default configuration to be used when creating a `DragRef`. */


      var DEFAULT_CONFIG = {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
      /**
       * Service that allows for drag-and-drop functionality to be attached to DOM elements.
       */

      var _DragDrop = /*#__PURE__*/function () {
        function _DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
          _classCallCheck(this, _DragDrop);

          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
        }
        /**
         * Turns an element into a draggable item.
         * @param element Element to which to attach the dragging functionality.
         * @param config Object used to configure the dragging behavior.
         */


        _createClass(_DragDrop, [{
          key: "createDrag",
          value: function createDrag(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
            return new _DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
          }
          /**
           * Turns an element into a drop list.
           * @param element Element to which to attach the drop list functionality.
           */

        }, {
          key: "createDropList",
          value: function createDropList(element) {
            return new _DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
          }
        }]);

        return _DragDrop;
      }();

      _DragDrop.ɵfac = function DragDrop_Factory(t) {
        return new (t || _DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_DragDropRegistry));
      };

      _DragDrop.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
        factory: function DragDrop_Factory() {
          return new _DragDrop(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_DragDropRegistry));
        },
        token: _DragDrop,
        providedIn: "root"
      });

      _DragDrop.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler
        }, {
          type: _DragDropRegistry
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_DragDrop, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler
          }, {
            type: _DragDropRegistry
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
       * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
       * to avoid circular imports.
       * @docs-private
       */


      var _CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CDK_DRAG_PARENT');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
       * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var _CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDropListGroup');
      /**
       * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
       * elements that are placed inside a `cdkDropListGroup` will be connected to each other
       * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
       * from `cdkDropList`.
       */


      var _CdkDropListGroup = /*#__PURE__*/function () {
        function _CdkDropListGroup() {
          _classCallCheck(this, _CdkDropListGroup);

          /** Drop lists registered inside the group. */
          this._items = new Set();
          this._disabled = false;
        }
        /** Whether starting a dragging sequence from inside this group is disabled. */


        _createClass(_CdkDropListGroup, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._items.clear();
          }
        }]);

        return _CdkDropListGroup;
      }();

      _CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
        return new (t || _CdkDropListGroup)();
      };

      _CdkDropListGroup.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
        type: _CdkDropListGroup,
        selectors: [["", "cdkDropListGroup", ""]],
        inputs: {
          disabled: ["cdkDropListGroupDisabled", "disabled"]
        },
        exportAs: ["cdkDropListGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
          provide: _CDK_DROP_LIST_GROUP,
          useExisting: _CdkDropListGroup
        }])]
      });
      _CdkDropListGroup.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListGroupDisabled']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_CdkDropListGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
          args: [{
            selector: '[cdkDropListGroup]',
            exportAs: 'cdkDropListGroup',
            providers: [{
              provide: _CDK_DROP_LIST_GROUP,
              useExisting: _CdkDropListGroup
            }]
          }]
        }], function () {
          return [];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListGroupDisabled']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to configure the
       * behavior of the drag&drop-related components.
       */


      var _CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CDK_DRAG_CONFIG');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Asserts that a particular node is an element.
       * @param node Node to be checked.
       * @param name Name to attach to the error message.
       */


      function assertElementNode(node, name) {
        if (node.nodeType !== 1) {
          throw Error("".concat(name, " must be attached to an element node. ") + "Currently attached to \"".concat(node.nodeName, "\"."));
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique ids for drop zones. */


      var _uniqueIdCounter = 0;
      /**
       * Injection token that can be used to reference instances of `CdkDropList`. It serves as
       * alternative token to the actual `CdkDropList` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var _CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDropList');

      var ɵ0 = undefined;
      /** Container that wraps a set of draggable items. */

      var _CdkDropList = /*#__PURE__*/function () {
        function _CdkDropList(
        /** Element that the drop list is attached to. */
        element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
          var _this25 = this;

          _classCallCheck(this, _CdkDropList);

          this.element = element;
          this._changeDetectorRef = _changeDetectorRef;
          this._scrollDispatcher = _scrollDispatcher;
          this._dir = _dir;
          this._group = _group;
          /** Emits when the list has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * Other draggable containers that this container is connected to and into which the
           * container's items can be transferred. Can either be references to other drop containers,
           * or their unique IDs.
           */

          this.connectedTo = [];
          /**
           * Unique ID for the drop zone. Can be used as a reference
           * in the `connectedTo` of another `CdkDropList`.
           */

          this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Functions that is used to determine whether an item can be sorted into a particular index. */


          this.sortPredicate = function () {
            return true;
          };
          /** Emits when the user drops an item inside the container. */


          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /**
           * Keeps track of the items that are registered with this container. Historically we used to
           * do this with a `ContentChildren` query, however queries don't handle transplanted views very
           * well which means that we can't handle cases like dragging the headers of a `mat-table`
           * correctly. What we do instead is to have the items register themselves with the container
           * and then we sort them based on their position in the DOM.
           */

          this._unsortedItems = new Set();

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            assertElementNode(element.nativeElement, 'cdkDropList');
          }

          this._dropListRef = dragDrop.createDropList(element);
          this._dropListRef.data = this;

          if (config) {
            this._assignDefaults(config);
          }

          this._dropListRef.enterPredicate = function (drag, drop) {
            return _this25.enterPredicate(drag.data, drop.data);
          };

          this._dropListRef.sortPredicate = function (index, drag, drop) {
            return _this25.sortPredicate(index, drag.data, drop.data);
          };

          this._setupInputSyncSubscription(this._dropListRef);

          this._handleEvents(this._dropListRef);

          _CdkDropList._dropLists.push(this);

          if (_group) {
            _group._items.add(this);
          }
        }
        /** Whether starting a dragging sequence from this container is disabled. */


        _createClass(_CdkDropList, [{
          key: "disabled",
          get: function get() {
            return this._disabled || !!this._group && this._group.disabled;
          },
          set: function set(value) {
            // Usually we sync the directive and ref state right before dragging starts, in order to have
            // a single point of failure and to avoid having to use setters for everything. `disabled` is
            // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
            // the user in a disabled state, so we also need to sync it as it's being set.
            this._dropListRef.disabled = this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
          /** Registers an items with the drop list. */

        }, {
          key: "addItem",
          value: function addItem(item) {
            this._unsortedItems.add(item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Removes an item from the drop list. */

        }, {
          key: "removeItem",
          value: function removeItem(item) {
            this._unsortedItems["delete"](item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Gets the registered items in the list, sorted by their position in the DOM. */

        }, {
          key: "getSortedItems",
          value: function getSortedItems() {
            return Array.from(this._unsortedItems).sort(function (a, b) {
              var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
              // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
              // tslint:disable-next-line:no-bitwise


              return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var index = _CdkDropList._dropLists.indexOf(this);

            if (index > -1) {
              _CdkDropList._dropLists.splice(index, 1);
            }

            if (this._group) {
              this._group._items["delete"](this);
            }

            this._unsortedItems.clear();

            this._dropListRef.dispose();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */

        }, {
          key: "_setupInputSyncSubscription",
          value: function _setupInputSyncSubscription(ref) {
            var _this26 = this;

            if (this._dir) {
              this._dir.change.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this._dir.value), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(function (value) {
                return ref.withDirection(value);
              });
            }

            ref.beforeStarted.subscribe(function () {
              var siblings = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(_this26.connectedTo).map(function (drop) {
                if (typeof drop === 'string') {
                  var correspondingDropList = _CdkDropList._dropLists.find(function (list) {
                    return list.id === drop;
                  });

                  if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    console.warn("CdkDropList could not find connected drop list with id \"".concat(drop, "\""));
                  }

                  return correspondingDropList;
                }

                return drop;
              });

              if (_this26._group) {
                _this26._group._items.forEach(function (drop) {
                  if (siblings.indexOf(drop) === -1) {
                    siblings.push(drop);
                  }
                });
              } // Note that we resolve the scrollable parents here so that we delay the resolution
              // as long as possible, ensuring that the element is in its final place in the DOM.


              if (!_this26._scrollableParentsResolved) {
                var scrollableParents = _this26._scrollDispatcher.getAncestorScrollContainers(_this26.element).map(function (scrollable) {
                  return scrollable.getElementRef().nativeElement;
                });

                _this26._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.


                _this26._scrollableParentsResolved = true;
              }

              ref.disabled = _this26.disabled;
              ref.lockAxis = _this26.lockAxis;
              ref.sortingDisabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(_this26.sortingDisabled);
              ref.autoScrollDisabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(_this26.autoScrollDisabled);
              ref.autoScrollStep = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(_this26.autoScrollStep, 2);
              ref.connectedTo(siblings.filter(function (drop) {
                return drop && drop !== _this26;
              }).map(function (list) {
                return list._dropListRef;
              })).withOrientation(_this26.orientation);
            });
          }
          /** Handles events from the underlying DropListRef. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this27 = this;

            ref.beforeStarted.subscribe(function () {
              _this27._syncItemsWithRef();

              _this27._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this27.entered.emit({
                container: _this27,
                item: event.item.data,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this27.exited.emit({
                container: _this27,
                item: event.item.data
              });

              _this27._changeDetectorRef.markForCheck();
            });
            ref.sorted.subscribe(function (event) {
              _this27.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this27,
                item: event.item.data
              });
            });
            ref.dropped.subscribe(function (event) {
              _this27.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance,
                dropPoint: event.dropPoint
              }); // Mark for check since all of these events run outside of change
              // detection and we're not guaranteed for something else to have triggered it.


              _this27._changeDetectorRef.markForCheck();
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                draggingDisabled = config.draggingDisabled,
                sortingDisabled = config.sortingDisabled,
                listAutoScrollDisabled = config.listAutoScrollDisabled,
                listOrientation = config.listOrientation;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
            this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
            this.orientation = listOrientation || 'vertical';

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }
          }
          /** Syncs up the registered drag items with underlying drop list ref. */

        }, {
          key: "_syncItemsWithRef",
          value: function _syncItemsWithRef() {
            this._dropListRef.withItems(this.getSortedItems().map(function (item) {
              return item._dragRef;
            }));
          }
        }]);

        return _CdkDropList;
      }();

      _CdkDropList.ɵfac = function CdkDropList_Factory(t) {
        return new (t || _CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_CDK_DRAG_CONFIG, 8));
      };

      _CdkDropList.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
        type: _CdkDropList,
        selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
        hostAttrs: [1, "cdk-drop-list"],
        hostVars: 7,
        hostBindings: function CdkDropList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
          }
        },
        inputs: {
          connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
          id: "id",
          enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
          sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
          disabled: ["cdkDropListDisabled", "disabled"],
          sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
          autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
          orientation: ["cdkDropListOrientation", "orientation"],
          lockAxis: ["cdkDropListLockAxis", "lockAxis"],
          data: ["cdkDropListData", "data"],
          autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"]
        },
        outputs: {
          dropped: "cdkDropListDropped",
          entered: "cdkDropListEntered",
          exited: "cdkDropListExited",
          sorted: "cdkDropListSorted"
        },
        exportAs: ["cdkDropList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
        {
          provide: _CDK_DROP_LIST_GROUP,
          useValue: ɵ0
        }, {
          provide: _CDK_DROP_LIST,
          useExisting: _CdkDropList
        }])]
      });
      /** Keeps track of the drop lists that are currently on the page. */

      _CdkDropList._dropLists = [];

      _CdkDropList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
        }, {
          type: _DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }]
        }, {
          type: _CdkDropListGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_CDK_DROP_LIST_GROUP]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_CDK_DRAG_CONFIG]
          }]
        }];
      };

      _CdkDropList.propDecorators = {
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListConnectedTo']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListData']
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListOrientation']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListLockAxis']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListDisabled']
        }],
        sortingDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListSortingDisabled']
        }],
        enterPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListEnterPredicate']
        }],
        sortPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListSortPredicate']
        }],
        autoScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListAutoScrollDisabled']
        }],
        autoScrollStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDropListAutoScrollStep']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDropListDropped']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDropListEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDropListExited']
        }],
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDropListSorted']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_CdkDropList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
          args: [{
            selector: '[cdkDropList], cdk-drop-list',
            exportAs: 'cdkDropList',
            providers: [// Prevent child drop lists from picking up the same group as their parent.
            {
              provide: _CDK_DROP_LIST_GROUP,
              useValue: ɵ0
            }, {
              provide: _CDK_DROP_LIST,
              useExisting: _CdkDropList
            }],
            host: {
              'class': 'cdk-drop-list',
              '[attr.id]': 'id',
              '[class.cdk-drop-list-disabled]': 'disabled',
              '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
              '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
          }, {
            type: _DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }]
          }, {
            type: _CdkDropListGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_CDK_DROP_LIST_GROUP]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_CDK_DRAG_CONFIG]
            }]
          }];
        }, {
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListConnectedTo']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
          }],
          enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListEnterPredicate']
          }],
          sortPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListSortPredicate']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDropListDropped']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDropListEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDropListExited']
          }],
          sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDropListSorted']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListDisabled']
          }],
          sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListSortingDisabled']
          }],
          autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListAutoScrollDisabled']
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListOrientation']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListLockAxis']
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListData']
          }],
          autoScrollStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDropListAutoScrollStep']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
       * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var _CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragHandle');
      /** Handle that can be used to drag a CdkDrag instance. */


      var _CdkDragHandle = /*#__PURE__*/function () {
        function _CdkDragHandle(element, parentDrag) {
          _classCallCheck(this, _CdkDragHandle);

          this.element = element;
          /** Emits when the state of the handle has changed. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this._disabled = false;

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            assertElementNode(element.nativeElement, 'cdkDragHandle');
          }

          this._parentDrag = parentDrag;
        }
        /** Whether starting to drag through this handle is disabled. */


        _createClass(_CdkDragHandle, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

            this._stateChanges.next(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }]);

        return _CdkDragHandle;
      }();

      _CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
        return new (t || _CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_CDK_DRAG_PARENT, 12));
      };

      _CdkDragHandle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
        type: _CdkDragHandle,
        selectors: [["", "cdkDragHandle", ""]],
        hostAttrs: [1, "cdk-drag-handle"],
        inputs: {
          disabled: ["cdkDragHandleDisabled", "disabled"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
          provide: _CDK_DRAG_HANDLE,
          useExisting: _CdkDragHandle
        }])]
      });

      _CdkDragHandle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_CDK_DRAG_PARENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
          }]
        }];
      };

      _CdkDragHandle.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragHandleDisabled']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_CdkDragHandle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
          args: [{
            selector: '[cdkDragHandle]',
            host: {
              'class': 'cdk-drag-handle'
            },
            providers: [{
              provide: _CDK_DRAG_HANDLE,
              useExisting: _CdkDragHandle
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_CDK_DRAG_PARENT]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragHandleDisabled']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
       * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var _CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragPlaceholder');
      /**
       * Element that will be used as a template for the placeholder of a CdkDrag when
       * it is being dragged. The placeholder is displayed in place of the element being dragged.
       */


      var _CdkDragPlaceholder = /*#__PURE__*/_createClass(function _CdkDragPlaceholder(templateRef) {
        _classCallCheck(this, _CdkDragPlaceholder);

        this.templateRef = templateRef;
      });

      _CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
        return new (t || _CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef));
      };

      _CdkDragPlaceholder.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
        type: _CdkDragPlaceholder,
        selectors: [["ng-template", "cdkDragPlaceholder", ""]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
          provide: _CDK_DRAG_PLACEHOLDER,
          useExisting: _CdkDragPlaceholder
        }])]
      });

      _CdkDragPlaceholder.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
        }];
      };

      _CdkDragPlaceholder.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_CdkDragPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
          args: [{
            selector: 'ng-template[cdkDragPlaceholder]',
            providers: [{
              provide: _CDK_DRAG_PLACEHOLDER,
              useExisting: _CdkDragPlaceholder
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
       * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var _CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragPreview');
      /**
       * Element that will be used as a template for the preview
       * of a CdkDrag when it is being dragged.
       */


      var _CdkDragPreview = /*#__PURE__*/function () {
        function _CdkDragPreview(templateRef) {
          _classCallCheck(this, _CdkDragPreview);

          this.templateRef = templateRef;
          this._matchSize = false;
        }
        /** Whether the preview should preserve the same size as the item that is being dragged. */


        _createClass(_CdkDragPreview, [{
          key: "matchSize",
          get: function get() {
            return this._matchSize;
          },
          set: function set(value) {
            this._matchSize = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }]);

        return _CdkDragPreview;
      }();

      _CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
        return new (t || _CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef));
      };

      _CdkDragPreview.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
        type: _CdkDragPreview,
        selectors: [["ng-template", "cdkDragPreview", ""]],
        inputs: {
          matchSize: "matchSize",
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
          provide: _CDK_DRAG_PREVIEW,
          useExisting: _CdkDragPreview
        }])]
      });

      _CdkDragPreview.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
        }];
      };

      _CdkDragPreview.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
        }],
        matchSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_CdkDragPreview, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
          args: [{
            selector: 'ng-template[cdkDragPreview]',
            providers: [{
              provide: _CDK_DRAG_PREVIEW,
              useExisting: _CdkDragPreview
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
          }];
        }, {
          matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DRAG_HOST_CLASS = 'cdk-drag';
      /** Element that can be moved inside a CdkDropList container. */

      var _CdkDrag = /*#__PURE__*/function () {
        function _CdkDrag(
        /** Element that the draggable is attached to. */
        element,
        /** Droppable container that the draggable is a part of. */
        dropContainer,
        /**
         * @deprecated `_document` parameter no longer being used and will be removed.
         * @breaking-change 12.0.0
         */
        _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
          var _this28 = this;

          _classCallCheck(this, _CdkDrag);

          this.element = element;
          this.dropContainer = dropContainer;
          this._ngZone = _ngZone;
          this._viewContainerRef = _viewContainerRef;
          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._selfHandle = _selfHandle;
          this._parentDrag = _parentDrag;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the user starts dragging the item. */

          this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
            var subscription = _this28._dragRef.moved.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(function (movedEvent) {
              return {
                source: _this28,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
              };
            })).subscribe(observer);

            return function () {
              subscription.unsubscribe();
            };
          });
          this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
          });
          this._dragRef.data = this; // We have to keep track of the drag instances in order to be able to match an element to
          // a drag instance. We can't go through the global registry of `DragRef`, because the root
          // element could be different.

          _CdkDrag._dragInstances.push(this);

          if (config) {
            this._assignDefaults(config);
          } // Note that usually the container is assigned when the drop list is picks up the item, but in
          // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
          // where there are no items on the first change detection pass, but the items get picked up as
          // soon as the user triggers another pass by dragging. This is a problem, because the item would
          // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
          // is too late since the two modes save different kinds of information. We work around it by
          // assigning the drop container both from here and the list.


          if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);

            dropContainer.addItem(this);
          }

          this._syncInputs(this._dragRef);

          this._handleEvents(this._dragRef);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(_CdkDrag, [{
          key: "disabled",
          get: function get() {
            return this._disabled || this.dropContainer && this.dropContainer.disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
            this._dragRef.disabled = this._disabled;
          }
          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */

        }, {
          key: "getPlaceholderElement",
          value: function getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement();
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._dragRef.getRootElement();
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._dragRef.reset();
          }
          /**
           * Gets the pixel coordinates of the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this29 = this;

            // Normally this isn't in the zone, but it can cause major performance regressions for apps
            // using `zone-patch-rxjs` because it'll trigger a change detection when it unsubscribes.
            this._ngZone.runOutsideAngular(function () {
              // We need to wait for the zone to stabilize, in order for the reference
              // element to be in the proper place in the DOM. This is mostly relevant
              // for draggable elements inside portals since they get stamped out in
              // their original DOM position and then they get transferred to the portal.
              _this29._ngZone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this29._destroyed)).subscribe(function () {
                _this29._updateRootElement();

                _this29._setupHandlesListener();

                if (_this29.freeDragPosition) {
                  _this29._dragRef.setFreeDragPosition(_this29.freeDragPosition);
                }
              });
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var rootSelectorChange = changes['rootElementSelector'];
            var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
            // handled in `ngAfterViewInit` where it needs to be deferred.

            if (rootSelectorChange && !rootSelectorChange.firstChange) {
              this._updateRootElement();
            } // Skip the first change since it's being handled in `ngAfterViewInit`.


            if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
              this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this30 = this;

            if (this.dropContainer) {
              this.dropContainer.removeItem(this);
            }

            var index = _CdkDrag._dragInstances.indexOf(this);

            if (index > -1) {
              _CdkDrag._dragInstances.splice(index, 1);
            } // Unnecessary in most cases, but used to avoid extra change detections with `zone-paths-rxjs`.


            this._ngZone.runOutsideAngular(function () {
              _this30._destroyed.next();

              _this30._destroyed.complete();

              _this30._dragRef.dispose();
            });
          }
          /** Syncs the root element with the `DragRef`. */

        }, {
          key: "_updateRootElement",
          value: function _updateRootElement() {
            var element = this.element.nativeElement;
            var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

            if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              assertElementNode(rootElement, 'cdkDrag');
            }

            this._dragRef.withRootElement(rootElement || element);
          }
          /** Gets the boundary element, based on the `boundaryElement` value. */

        }, {
          key: "_getBoundaryElement",
          value: function _getBoundaryElement() {
            var boundary = this.boundaryElement;

            if (!boundary) {
              return null;
            }

            if (typeof boundary === 'string') {
              return getClosestMatchingAncestor(this.element.nativeElement, boundary);
            }

            var element = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(boundary);

            if ((typeof ngDevMode === 'undefined' || ngDevMode) && !element.contains(this.element.nativeElement)) {
              throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
            }

            return element;
          }
          /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */

        }, {
          key: "_syncInputs",
          value: function _syncInputs(ref) {
            var _this31 = this;

            ref.beforeStarted.subscribe(function () {
              if (!ref.isDragging()) {
                var dir = _this31._dir;
                var dragStartDelay = _this31.dragStartDelay;
                var placeholder = _this31._placeholderTemplate ? {
                  template: _this31._placeholderTemplate.templateRef,
                  context: _this31._placeholderTemplate.data,
                  viewContainer: _this31._viewContainerRef
                } : null;
                var preview = _this31._previewTemplate ? {
                  template: _this31._previewTemplate.templateRef,
                  context: _this31._previewTemplate.data,
                  matchSize: _this31._previewTemplate.matchSize,
                  viewContainer: _this31._viewContainerRef
                } : null;
                ref.disabled = _this31.disabled;
                ref.lockAxis = _this31.lockAxis;
                ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(dragStartDelay);
                ref.constrainPosition = _this31.constrainPosition;
                ref.previewClass = _this31.previewClass;
                ref.withBoundaryElement(_this31._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(_this31.previewContainer || 'global');

                if (dir) {
                  ref.withDirection(dir.value);
                }
              }
            }); // This only needs to be resolved once.

            ref.beforeStarted.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(function () {
              var _a, _b; // If we managed to resolve a parent through DI, use it.


              if (_this31._parentDrag) {
                ref.withParent(_this31._parentDrag._dragRef);
                return;
              } // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
              // the item was projected into another item by something like `ngTemplateOutlet`.


              var parent = _this31.element.nativeElement.parentElement;

              while (parent) {
                // `classList` needs to be null checked, because IE doesn't have it on some elements.
                if ((_a = parent.classList) === null || _a === void 0 ? void 0 : _a.contains(DRAG_HOST_CLASS)) {
                  ref.withParent(((_b = _CdkDrag._dragInstances.find(function (drag) {
                    return drag.element.nativeElement === parent;
                  })) === null || _b === void 0 ? void 0 : _b._dragRef) || null);
                  break;
                }

                parent = parent.parentElement;
              }
            });
          }
          /** Handles the events from the underlying `DragRef`. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this32 = this;

            ref.started.subscribe(function () {
              _this32.started.emit({
                source: _this32
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this32._changeDetectorRef.markForCheck();
            });
            ref.released.subscribe(function () {
              _this32.released.emit({
                source: _this32
              });
            });
            ref.ended.subscribe(function (event) {
              _this32.ended.emit({
                source: _this32,
                distance: event.distance,
                dropPoint: event.dropPoint
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this32._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this32.entered.emit({
                container: event.container.data,
                item: _this32,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this32.exited.emit({
                container: event.container.data,
                item: _this32
              });
            });
            ref.dropped.subscribe(function (event) {
              _this32.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this32,
                distance: event.distance,
                dropPoint: event.dropPoint
              });
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                dragStartDelay = config.dragStartDelay,
                constrainPosition = config.constrainPosition,
                previewClass = config.previewClass,
                boundaryElement = config.boundaryElement,
                draggingDisabled = config.draggingDisabled,
                rootElementSelector = config.rootElementSelector,
                previewContainer = config.previewContainer;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.dragStartDelay = dragStartDelay || 0;

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }

            if (constrainPosition) {
              this.constrainPosition = constrainPosition;
            }

            if (previewClass) {
              this.previewClass = previewClass;
            }

            if (boundaryElement) {
              this.boundaryElement = boundaryElement;
            }

            if (rootElementSelector) {
              this.rootElementSelector = rootElementSelector;
            }

            if (previewContainer) {
              this.previewContainer = previewContainer;
            }
          }
          /** Sets up the listener that syncs the handles with the drag ref. */

        }, {
          key: "_setupHandlesListener",
          value: function _setupHandlesListener() {
            var _this33 = this;

            // Listen for any newly-added handles.
            this._handles.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this._handles), // Sync the new handles with the DragRef.
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(function (handles) {
              var childHandleElements = handles.filter(function (handle) {
                return handle._parentDrag === _this33;
              }).map(function (handle) {
                return handle.element;
              }); // Usually handles are only allowed to be a descendant of the drag element, but if
              // the consumer defined a different drag root, we should allow the drag element
              // itself to be a handle too.

              if (_this33._selfHandle && _this33.rootElementSelector) {
                childHandleElements.push(_this33.element);
              }

              _this33._dragRef.withHandles(childHandleElements);
            }), // Listen if the state of any of the handles changes.
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(function (handles) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge).apply(void 0, _toConsumableArray(handles.map(function (item) {
                return item._stateChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(item));
              })));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(function (handleInstance) {
              // Enabled/disable the handle that changed in the DragRef.
              var dragRef = _this33._dragRef;
              var handle = handleInstance.element.nativeElement;
              handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
          }
        }]);

        return _CdkDrag;
      }();

      _CdkDrag.ɵfac = function CdkDrag_Factory(t) {
        return new (t || _CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_CDK_DRAG_HANDLE, 10), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_CDK_DRAG_PARENT, 12));
      };

      _CdkDrag.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
        type: _CdkDrag,
        selectors: [["", "cdkDrag", ""]],
        contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, _CDK_DRAG_PREVIEW, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, _CDK_DRAG_PLACEHOLDER, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, _CDK_DRAG_HANDLE, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._handles = _t);
          }
        },
        hostAttrs: [1, "cdk-drag"],
        hostVars: 4,
        hostBindings: function CdkDrag_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
          }
        },
        inputs: {
          disabled: ["cdkDragDisabled", "disabled"],
          dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
          lockAxis: ["cdkDragLockAxis", "lockAxis"],
          constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
          previewClass: ["cdkDragPreviewClass", "previewClass"],
          boundaryElement: ["cdkDragBoundary", "boundaryElement"],
          rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
          previewContainer: ["cdkDragPreviewContainer", "previewContainer"],
          data: ["cdkDragData", "data"],
          freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
        },
        outputs: {
          started: "cdkDragStarted",
          released: "cdkDragReleased",
          ended: "cdkDragEnded",
          entered: "cdkDragEntered",
          exited: "cdkDragExited",
          dropped: "cdkDragDropped",
          moved: "cdkDragMoved"
        },
        exportAs: ["cdkDrag"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
          provide: _CDK_DRAG_PARENT,
          useExisting: _CdkDrag
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]]
      });
      _CdkDrag._dragInstances = [];

      _CdkDrag.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_CDK_DROP_LIST]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_CDK_DRAG_CONFIG]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }]
        }, {
          type: _DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
        }, {
          type: _CdkDragHandle,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_CDK_DRAG_HANDLE]
          }]
        }, {
          type: _CdkDrag,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
            args: [_CDK_DRAG_PARENT]
          }]
        }];
      };

      _CdkDrag.propDecorators = {
        _handles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChildren,
          args: [_CDK_DRAG_HANDLE, {
            descendants: true
          }]
        }],
        _previewTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
          args: [_CDK_DRAG_PREVIEW]
        }],
        _placeholderTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
          args: [_CDK_DRAG_PLACEHOLDER]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragData']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragLockAxis']
        }],
        rootElementSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragRootElement']
        }],
        boundaryElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragBoundary']
        }],
        dragStartDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragStartDelay']
        }],
        freeDragPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragFreeDragPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragDisabled']
        }],
        constrainPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragConstrainPosition']
        }],
        previewClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragPreviewClass']
        }],
        previewContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['cdkDragPreviewContainer']
        }],
        started: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDragStarted']
        }],
        released: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDragReleased']
        }],
        ended: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDragEnded']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDragEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDragExited']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDragDropped']
        }],
        moved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
          args: ['cdkDragMoved']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_CdkDrag, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
          args: [{
            selector: '[cdkDrag]',
            exportAs: 'cdkDrag',
            host: {
              'class': DRAG_HOST_CLASS,
              '[class.cdk-drag-disabled]': 'disabled',
              '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
            },
            providers: [{
              provide: _CDK_DRAG_PARENT,
              useExisting: _CdkDrag
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_CDK_DROP_LIST]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_CDK_DRAG_CONFIG]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }]
          }, {
            type: _DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
          }, {
            type: _CdkDragHandle,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_CDK_DRAG_HANDLE]
            }]
          }, {
            type: _CdkDrag,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
              args: [_CDK_DRAG_PARENT]
            }]
          }];
        }, {
          started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDragStarted']
          }],
          released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDragReleased']
          }],
          ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDragEnded']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDragEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDragExited']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDragDropped']
          }],
          moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
            args: ['cdkDragMoved']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragDisabled']
          }],
          dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragStartDelay']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragLockAxis']
          }],
          constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragConstrainPosition']
          }],
          previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragPreviewClass']
          }],
          boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragBoundary']
          }],
          rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragRootElement']
          }],
          previewContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragPreviewContainer']
          }],
          _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChildren,
            args: [_CDK_DRAG_HANDLE, {
              descendants: true
            }]
          }],
          _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
            args: [_CDK_DRAG_PREVIEW]
          }],
          _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
            args: [_CDK_DRAG_PLACEHOLDER]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragData']
          }],
          freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
            args: ['cdkDragFreeDragPosition']
          }]
        });
      })();
      /** Gets the closest ancestor of an element that matches a selector. */


      function getClosestMatchingAncestor(element, selector) {
        var currentElement = element.parentElement;

        while (currentElement) {
          // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
          if (currentElement.matches ? currentElement.matches(selector) : currentElement.msMatchesSelector(selector)) {
            return currentElement;
          }

          currentElement = currentElement.parentElement;
        }

        return null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _DragDropModule = /*#__PURE__*/_createClass(function _DragDropModule() {
        _classCallCheck(this, _DragDropModule);
      });

      _DragDropModule.ɵfac = function DragDropModule_Factory(t) {
        return new (t || _DragDropModule)();
      };

      _DragDropModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _DragDropModule
      });
      _DragDropModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [_DragDrop],
        imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](_DragDropModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule,
          args: [{
            declarations: [_CdkDropList, _CdkDropListGroup, _CdkDrag, _CdkDragHandle, _CdkDragPreview, _CdkDragPlaceholder],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule, _CdkDropList, _CdkDropListGroup, _CdkDrag, _CdkDragHandle, _CdkDragPreview, _CdkDragPlaceholder],
            providers: [_DragDrop]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_DragDropModule, {
          declarations: function declarations() {
            return [_CdkDropList, _CdkDropListGroup, _CdkDrag, _CdkDragHandle, _CdkDragPreview, _CdkDragPlaceholder];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule, _CdkDropList, _CdkDropListGroup, _CdkDrag, _CdkDragHandle, _CdkDragPreview, _CdkDragPlaceholder];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=drag-drop.js.map

      /***/

    },

    /***/
    41565:
    /*!*********************************************************************!*\
      !*** ./node_modules/rxjs/dist/esm5/internal/observable/interval.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "interval": function interval() {
          return (
            /* binding */
            _interval
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      26902);
      /* harmony import */


      var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timer */
      77844);

      function _interval(period, scheduler) {
        if (period === void 0) {
          period = 0;
        }

        if (scheduler === void 0) {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler;
        }

        if (period < 0) {
          period = 0;
        }

        return (0, _timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
      } //# sourceMappingURL=interval.js.map

      /***/

    },

    /***/
    50778:
    /*!***************************************************************!*\
      !*** ./src/app/doctor/appointments/appointments.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppointmentsComponent": function AppointmentsComponent() {
          return (
            /* binding */
            _AppointmentsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form/form.component */
      53010);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/api-services/rest-api.service */
      75996);
      /* harmony import */


      var src_app_core_service_toast_service_toas_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/service/toast-service/toas-service.service */
      8259);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function AppointmentsComponent_mat_header_cell_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nom Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_mat_cell_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", row_r21.patient.nom, " ", row_r21.patient.prenom, "");
        }
      }

      function AppointmentsComponent_mat_header_cell_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Date et Heure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_mat_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, row_r22.rdvDate, "dd/MM/yyyy"), ", ", row_r22.rdvHeure, "");
        }
      }

      function AppointmentsComponent_mat_header_cell_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "T\xE9l\xE9phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_mat_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r23.patient.telephone, " ");
        }
      }

      function AppointmentsComponent_mat_header_cell_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_mat_cell_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r24.patient.email, "");
        }
      }

      function AppointmentsComponent_mat_header_cell_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Genre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_mat_cell_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r25.patient.genre);
        }
      }

      function AppointmentsComponent_mat_header_cell_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sympt\xF4me");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_mat_cell_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r26.symptom);
        }
      }

      function AppointmentsComponent_mat_header_cell_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Accepter");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_ng_container_58_mat_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "En attente");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_ng_container_58_mat_cell_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Non");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_ng_container_58_mat_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Oui");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_ng_container_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppointmentsComponent_ng_container_58_mat_cell_1_Template, 2, 0, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppointmentsComponent_ng_container_58_mat_cell_2_Template, 2, 0, "mat-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppointmentsComponent_ng_container_58_mat_cell_3_Template, 2, 0, "mat-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r27.isValid === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r27.isValid === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r27.isValid === true);
        }
      }

      function AppointmentsComponent_mat_header_cell_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AppointmentsComponent_mat_cell_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppointmentsComponent_mat_cell_61_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var row_r31 = restoredCtx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r33.detailsCall(row_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-menu", null, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppointmentsComponent_mat_cell_61_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var row_r31 = restoredCtx.$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r35.validRDV(row_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Valider");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppointmentsComponent_mat_cell_61_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var row_r31 = restoredCtx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r36.cancel(row_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Annuler");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r32);
        }
      }

      function AppointmentsComponent_mat_header_row_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function AppointmentsComponent_mat_row_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row");
        }
      }

      function AppointmentsComponent_div_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Vous n'avez pas encore de rendez-vous ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      var _AppointmentsComponent = /*#__PURE__*/function () {
        function _AppointmentsComponent(dialog, restApi, toatr) {
          _classCallCheck(this, _AppointmentsComponent);

          this.dialog = dialog;
          this.restApi = restApi;
          this.toatr = toatr;
          this.displayedColumns = ["nom", "dateTime", "telephone", "email", "genre", "symptom", "isValid", "actions"];
          this.myAllRDV = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
        }

        _createClass(_AppointmentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.refreshList();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.myAllRDV.paginator = this.paginator; //Add pagination

            this.myAllRDV.sort = this.sort;
          } //Search filter table

        }, {
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            filterValue = filterValue.trim();
            filterValue = filterValue.toLowerCase();
            this.myAllRDV.filter = filterValue;
          }
        }, {
          key: "refreshList",
          value: function refreshList() {
            var _this34 = this;

            this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe({
              next: function next(result) {
                _this34.currentUser = result;
                var postBody = {
                  "idPerson": _this34.currentUser.idPerson,
                  "person_type": "MEDECIN"
                }; //Get all RDV for the current medecin

                _this34.restApi.getRDVByMedecin(postBody, localStorage.getItem("token")).subscribe({
                  next: function next(result) {
                    _this34.myAllRDV.data = result;
                  }
                });
              }
            });
          }
        }, {
          key: "validRDV",
          value: function validRDV(row) {
            var _this35 = this;

            this.restApi.validRDV(row.idRDV, true, localStorage.getItem("token")).subscribe({
              next: function next(result) {
                if (result) {
                  _this35.refreshList();
                }

                _this35.toatr.showSuccessMessage("Rendez-vous accepté !");
              }
            });
          }
        }, {
          key: "cancel",
          value: function cancel(row) {
            var _this36 = this;

            this.restApi.validRDV(row.idRDV, false, localStorage.getItem("token")).subscribe({
              next: function next(result) {
                if (!result) {
                  _this36.refreshList();
                }

                _this36.toatr.showSuccessMessage("Rendez-vous annulé !");
              }
            });
          }
        }, {
          key: "detailsCall",
          value: function detailsCall(row) {
            var tempDirection;

            if (localStorage.getItem("isRtl") === "true") {
              tempDirection = "rtl";
            } else {
              tempDirection = "ltr";
            }

            this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_0__.FormComponent, {
              data: {
                rdv: row,
                action: "details"
              },
              direction: tempDirection,
              height: "60%",
              width: "50%"
            });
          }
        }]);

        return _AppointmentsComponent;
      }();

      _AppointmentsComponent.ɵfac = function AppointmentsComponent_Factory(t) {
        return new (t || _AppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__.RestApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_toast_service_toas_service_service__WEBPACK_IMPORTED_MODULE_2__.ToasServiceService));
      };

      _AppointmentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppointmentsComponent,
        selectors: [["app-appointments"]],
        viewQuery: function AppointmentsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 67,
        vars: 8,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/doctor/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "tabbable-line"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ms-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "nom"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "dateTime"], ["matColumnDef", "telephone"], ["matColumnDef", "email"], ["matColumnDef", "genre"], ["matColumnDef", "symptom"], ["matColumnDef", "isValid"], ["matColumnDef", "actions"], ["class", "tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "tbl-col-width-per-10", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["class", "no-results text-center mt-3", 4, "ngIf"], [3, "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-sort-header", ""], ["class", "col-red", 4, "ngIf"], ["class", "col-green", 4, "ngIf"], [1, "col-red"], [1, "col-green"], [1, "tbl-col-width-per-10"], ["mat-icon-button", "", 2, "color", "#40ea48", 3, "click"], [1, "material-icons"], ["mat-icon-button", "", 2, "color", "#3F51B5", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 2, "color", "#40ea48", 3, "click"], [1, "material-icons-two-tone", "align-middle", "msr-2"], ["mat-menu-item", "", 2, "color", "#ee2525", 3, "click"], [1, "material-icons", "align-middle", "msr-2"], [1, "no-results", "text-center", "mt-3"]],
        template: function AppointmentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Tous les rendez-vous");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Accueil");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Rendez-vous");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Rendez-vous");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function AppointmentsComponent_Template_input_keyup_35_listener($event) {
              return ctx.applyFilter($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-table", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](38, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AppointmentsComponent_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, AppointmentsComponent_mat_cell_40_Template, 2, 2, "mat-cell", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](41, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, AppointmentsComponent_mat_header_cell_42_Template, 2, 0, "mat-header-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, AppointmentsComponent_mat_cell_43_Template, 3, 5, "mat-cell", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](44, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AppointmentsComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, AppointmentsComponent_mat_cell_46_Template, 2, 1, "mat-cell", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](47, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, AppointmentsComponent_mat_header_cell_48_Template, 2, 0, "mat-header-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, AppointmentsComponent_mat_cell_49_Template, 2, 1, "mat-cell", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](50, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, AppointmentsComponent_mat_header_cell_51_Template, 2, 0, "mat-header-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, AppointmentsComponent_mat_cell_52_Template, 2, 1, "mat-cell", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](53, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AppointmentsComponent_mat_header_cell_54_Template, 2, 0, "mat-header-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, AppointmentsComponent_mat_cell_55_Template, 2, 1, "mat-cell", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](56, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, AppointmentsComponent_mat_header_cell_57_Template, 2, 0, "mat-header-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, AppointmentsComponent_ng_container_58_Template, 4, 3, "ng-container", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](59, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, AppointmentsComponent_mat_header_cell_60_Template, 2, 0, "mat-header-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, AppointmentsComponent_mat_cell_61_Template, 19, 1, "mat-cell", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, AppointmentsComponent_mat_header_row_62_Template, 1, 0, "mat-header-row", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, AppointmentsComponent_mat_row_63_Template, 1, 0, "mat-row", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, AppointmentsComponent_div_64_Template, 2, 0, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "mat-paginator", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.myAllRDV);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.myAllRDV.data.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBvaW50bWVudHMuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    53010:
    /*!************************************************************!*\
      !*** ./src/app/doctor/appointments/form/form.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormComponent": function FormComponent() {
          return (
            /* binding */
            _FormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);

      function FormComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_1_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.dialogRef.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "event_note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "phonelink_ring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "healing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.rdv.patient.prenom, " ", ctx_r0.rdv.patient.nom, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 13, ctx_r0.rdv.rdvDate, "d MMMM, yyyy"), " \xE0 ", ctx_r0.rdv.rdvHeure, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.rdv.patient.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.rdv.patient.telephone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.rdv.patient.adresse, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.rdv.symptom, " ");
        }
      }

      var _FormComponent = /*#__PURE__*/function () {
        function _FormComponent(dialogRef, data) {
          _classCallCheck(this, _FormComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.isDetails = false; // Set the defaults

          this.action = data.action;

          if (this.action === "details") {
            this.rdv = data.rdv;
            this.isDetails = true;
          } else {
            this.isDetails = false;
          }
        }

        _createClass(_FormComponent, [{
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return _FormComponent;
      }();

      _FormComponent.ɵfac = function FormComponent_Factory(t) {
        return new (t || _FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };

      _FormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormComponent,
        selectors: [["app-form"]],
        decls: 2,
        vars: 1,
        consts: [[1, "addContainer"], ["class", "contact-details", 4, "ngIf"], [1, "contact-details"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about", "contact-header"], [1, "contact-details-heading"], [1, "contact-details-name", "mb-2"], [1, "badge", "col-green"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], ["matTooltip", "Date et l'heure du rendez-vous", 1, "contact-details-field", 3, "matTooltipPosition"], [1, "material-icons-two-tone", "color-icon"], [1, "contact-detail-info"], ["matTooltip", "L'E-mail du patient", 1, "contact-details-field", 3, "matTooltipPosition"], ["matTooltip", "Num\xE9ro de t\xE9l\xE9phone du patient", 1, "contact-details-field", 3, "matTooltipPosition"], ["matTooltip", "Patient Address", 1, "contact-details-field", 3, "matTooltipPosition"], ["matTooltip", "Patient Disease", 1, "contact-details-field", 3, "matTooltipPosition"]],
        template: function FormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_1_Template, 41, 16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDetails);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    89261:
    /*!*********************************************************!*\
      !*** ./src/app/doctor/dashboard/dashboard.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/service/api-services/rest-api.service */
      75996);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function DashboardComponent_mat_header_cell_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nom patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_mat_cell_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", row_r20.patient.nom, " ", row_r20.patient.prenom, "");
        }
      }

      function DashboardComponent_mat_header_cell_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_mat_cell_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r21.patient.email);
        }
      }

      function DashboardComponent_mat_header_cell_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Genre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_mat_cell_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r22.patient.genre);
        }
      }

      function DashboardComponent_mat_header_cell_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_mat_cell_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, row_r23.rdvDate, "dd/MM/yyyy"), " ");
        }
      }

      function DashboardComponent_mat_header_cell_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Heure");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_mat_cell_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r24.rdvHeure);
        }
      }

      function DashboardComponent_mat_header_cell_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "T\xE9l Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_mat_cell_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r25.patient.telephone);
        }
      }

      function DashboardComponent_mat_header_cell_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sympt\xF4me");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_mat_cell_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r26.symptom);
        }
      }

      function DashboardComponent_mat_header_cell_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Accepter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_ng_container_94_mat_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "En attente");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_ng_container_94_mat_cell_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Non");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_ng_container_94_mat_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Oui");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_ng_container_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_ng_container_94_mat_cell_1_Template, 2, 0, "mat-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_ng_container_94_mat_cell_2_Template, 2, 0, "mat-cell", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_ng_container_94_mat_cell_3_Template, 2, 0, "mat-cell", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r27.isValid === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r27.isValid === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r27.isValid === true);
        }
      }

      function DashboardComponent_mat_header_row_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function DashboardComponent_mat_row_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
        }
      }

      function DashboardComponent_div_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vous n'avez pas encore de rendez-vous ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent(restApi) {
          _classCallCheck(this, _DashboardComponent);

          this.restApi = restApi;
          this.displayedColumns = ["nom", "email", "genre", "rdvDate", "rdvHeure", "telephone", "symptom", "isValid"];
          this.myTodayRDV = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource([]);
          this.currentDate = (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'yyyy-MM-dd', 'en');
        }

        _createClass(_DashboardComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.myTodayRDV.paginator = this.paginator;
            this.myTodayRDV.sort = this.sort;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this37 = this;

            this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe({
              next: function next(result) {
                _this37.currentUser = result;
                var postBody = {
                  "idPerson": _this37.currentUser.idPerson,
                  "person_type": "MEDECIN"
                }; //Get all today's distinct patient for the current medecin

                _this37.restApi.getDistinctPatientByMedecinAndDate(_this37.currentDate, postBody, localStorage.getItem("token")).subscribe({
                  next: function next(result) {
                    _this37.myTodayPatient = result;
                  }
                }); //Get all distinct patient for the current medecin


                _this37.restApi.getDistinctPatientByMedecin(postBody, localStorage.getItem("token")).subscribe({
                  next: function next(result) {
                    _this37.myAllPatient = result;
                  }
                }); //Get all RDV for the current medecin


                _this37.restApi.getRDVByMedecin(postBody, localStorage.getItem("token")).subscribe({
                  next: function next(result) {
                    _this37.myAllRDV = result;
                  }
                }); //Get today'RDV


                _this37.restApi.getRDVByMedecinAndDate(_this37.currentDate, postBody, localStorage.getItem("token")).subscribe({
                  next: function next(result) {
                    _this37.myTodayRDV.data = result;
                  }
                });
              }
            });
          }
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__.RestApiService));
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe])],
        decls: 100,
        vars: 12,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/doctor/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "l-bg-card1", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-15"], [1, "text-end"], [1, "fas", "fa-user-injured", "float-start"], [1, "m-b-0"], [1, "info-box7", "l-bg-card2", "order-info-box7"], [1, "far", "fa-calendar-check", "float-start"], [1, "info-box7", "l-bg-card3", "order-info-box7"], ["aria-hidden", "true", 1, "fa", "fa-users", "float-start"], [1, "info-box7", "l-bg-card4", "order-info-box7"], [1, "col-md-12"], [1, "tabbable-line"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive", "mat-elevation-z8"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["matColumnDef", "nom"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "genre"], ["matColumnDef", "rdvDate"], ["matColumnDef", "rdvHeure"], ["matColumnDef", "telephone"], ["matColumnDef", "symptom"], ["matColumnDef", "isValid"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["class", "no-results text-center mb-3 mt-3", 4, "ngIf"], [3, "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-sort-header", ""], ["class", "col-red", 4, "ngIf"], ["class", "col-green", 4, "ngIf"], [1, "col-red"], [1, "col-green"], [1, "no-results", "text-center", "mb-3", "mt-3"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Accueil");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "M\xE9decin Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Patients du jour");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Mes patients d'aujourd'hui");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rendez-vous du jour");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Mes rendez-vous d'aujourd'hui");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Tous mes patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Le total de mes patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Tous mes rendez-vous");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Le total de mes rendez-vous");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "La liste des rendez-vous d'aujourd'hui");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-table", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](71, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, DashboardComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, DashboardComponent_mat_cell_73_Template, 2, 2, "mat-cell", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](74, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, DashboardComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, DashboardComponent_mat_cell_76_Template, 2, 1, "mat-cell", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](77, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, DashboardComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, DashboardComponent_mat_cell_79_Template, 2, 1, "mat-cell", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](80, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, DashboardComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, DashboardComponent_mat_cell_82_Template, 3, 4, "mat-cell", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](83, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DashboardComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, DashboardComponent_mat_cell_85_Template, 2, 1, "mat-cell", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](86, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, DashboardComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, DashboardComponent_mat_cell_88_Template, 2, 1, "mat-cell", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](89, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, DashboardComponent_mat_header_cell_90_Template, 2, 0, "mat-header-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, DashboardComponent_mat_cell_91_Template, 2, 1, "mat-cell", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](92, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, DashboardComponent_mat_header_cell_93_Template, 2, 0, "mat-header-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, DashboardComponent_ng_container_94_Template, 4, 3, "ng-container", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, DashboardComponent_mat_header_row_95_Template, 1, 0, "mat-header-row", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, DashboardComponent_mat_row_96_Template, 1, 0, "mat-row", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, DashboardComponent_div_97_Template, 2, 0, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "mat-paginator", 44, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.myTodayPatient == null ? null : ctx.myTodayPatient.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.myTodayRDV.data.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.myAllPatient == null ? null : ctx.myAllPatient.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.myAllRDV == null ? null : ctx.myAllRDV.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.myTodayRDV);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myTodayRDV.data.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    16670:
    /*!*************************************************!*\
      !*** ./src/app/doctor/doctor-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorRoutingModule": function DoctorRoutingModule() {
          return (
            /* binding */
            _DoctorRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      89261);
      /* harmony import */


      var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./appointments/appointments.component */
      50778);
      /* harmony import */


      var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./doctors/doctors.component */
      47358);
      /* harmony import */


      var _patients_patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./patients/patients.component */
      48470);
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./settings/settings.component */
      10591);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: "appointments",
        component: _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_1__.AppointmentsComponent
      }, {
        path: "doctors",
        component: _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_2__.DoctorsComponent
      }, {
        path: "patients",
        component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_3__.PatientsComponent
      }, {
        path: "settings",
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__.SettingsComponent
      }];

      var _DoctorRoutingModule = /*#__PURE__*/_createClass(function _DoctorRoutingModule() {
        _classCallCheck(this, _DoctorRoutingModule);
      });

      _DoctorRoutingModule.ɵfac = function DoctorRoutingModule_Factory(t) {
        return new (t || _DoctorRoutingModule)();
      };

      _DoctorRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _DoctorRoutingModule
      });
      _DoctorRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_DoctorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    96520:
    /*!*****************************************!*\
      !*** ./src/app/doctor/doctor.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorModule": function DoctorModule() {
          return (
            /* binding */
            _DoctorModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-charts */
      86178);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-echarts */
      93104);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      77310);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _doctor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./doctor-routing.module */
      16670);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      89261);
      /* harmony import */


      var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./appointments/appointments.component */
      50778);
      /* harmony import */


      var _appointments_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./appointments/form/form.component */
      53010);
      /* harmony import */


      var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./doctors/doctors.component */
      47358);
      /* harmony import */


      var _patients_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./patients/patients.component */
      48470);
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings/settings.component */
      10591);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DoctorModule = /*#__PURE__*/_createClass(function _DoctorModule() {
        _classCallCheck(this, _DoctorModule);
      });

      _DoctorModule.ɵfac = function DoctorModule_Factory(t) {
        return new (t || _DoctorModule)();
      };

      _DoctorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _DoctorModule
      });
      _DoctorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _doctor_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoctorRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.ChartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_11__.NgxEchartsModule.forRoot({
          echarts: function echarts() {
            return __webpack_require__.e(
            /*! import() */
            "node_modules_echarts_index_js").then(__webpack_require__.t.bind(__webpack_require__,
            /*! echarts */
            95252, 23));
          }
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__.DragDropModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_DoctorModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_2__.AppointmentsComponent, _appointments_form_form_component__WEBPACK_IMPORTED_MODULE_3__.FormComponent, _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_4__.DoctorsComponent, _patients_patients_component__WEBPACK_IMPORTED_MODULE_5__.PatientsComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _doctor_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoctorRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.ChartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_11__.NgxEchartsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__.DragDropModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule]
        });
      })();
      /***/

    },

    /***/
    47358:
    /*!*****************************************************!*\
      !*** ./src/app/doctor/doctors/doctors.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorsComponent": function DoctorsComponent() {
          return (
            /* binding */
            _DoctorsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/service/api-services/rest-api.service */
      75996);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function DoctorsComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.userProfileImg, "", item_r1.username, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r1.nom, " ", item_r1.prenom, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.specialite.nom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.cabinetMedicale.nom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r1.cabinetMedicale.rive.nomRive, ", ", item_r1.cabinetMedicale.adresse, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r1.nom, " ", item_r1.prenom, " est l'un de nos m\xE9decins qui ont beaucoup d'exp\xE9riences avec comme sp\xE9cialit\xE9 ", item_r1.specialite.nom, " !");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.adresse);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.telephone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.etat);
        }
      }

      var _DoctorsComponent = /*#__PURE__*/function () {
        function _DoctorsComponent(restApi) {
          _classCallCheck(this, _DoctorsComponent);

          this.restApi = restApi;
          this.userProfileImg = this.restApi.userLink + '/getProfileImg/';
        }

        _createClass(_DoctorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this38 = this;

            this.restApi.getUserByProfile('MEDECIN', localStorage.getItem("token")).subscribe({
              next: function next(result) {
                _this38.allMedecins = result;
              }
            });
          }
        }]);

        return _DoctorsComponent;
      }();

      _DoctorsComponent.ɵfac = function DoctorsComponent_Factory(t) {
        return new (t || _DoctorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__.RestApiService));
      };

      _DoctorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DoctorsComponent,
        selectors: [["app-doctors"]],
        decls: 19,
        vars: 1,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/doctor/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], ["class", "body", 4, "ngFor", "ngForOf"], [1, "body"], [1, "col-12"], [1, "card", "p-3"], [1, "col-12", "col-md-2", "mb-0"], [1, "img-circle", "doc-card-image", 2, "width", "150px", 3, "src"], [1, "col-md-6", "border-right", "mb-0"], [1, "doc-card-title"], [1, "description"], [1, "d-flex", "col-md-4", "mb-0"], [1, "d-flex", "flex-column", "justify-content-start", "user-profile", "w-100"], [1, "fas", "fa-map-marker-alt", "pt-3", "psr-3"], [1, "fas", "fa-envelope", "pt-3", "psr-3"], [1, "fas", "fa-phone", "pt-3", "psr-3"], [1, "fas", "fa-briefcase", "pt-3", "psr-3"]],
        template: function DoctorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "M\xE9decins");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Accueil");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "M\xE9decins");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DoctorsComponent_div_18_Template, 38, 15, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allMedecins);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3JzLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    48470:
    /*!*******************************************************!*\
      !*** ./src/app/doctor/patients/patients.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientsComponent": function PatientsComponent() {
          return (
            /* binding */
            _PatientsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/service/api-services/rest-api.service */
      75996);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function PatientsComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Vous n'avez pas encore de patients !");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PatientsComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r1.userProfileImg, "", item_r2.username, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r2.nom, " ", item_r2.prenom, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Profession : ", item_r2.profession, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.adresse);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.telephone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.email);
        }
      }

      var _PatientsComponent = /*#__PURE__*/function () {
        function _PatientsComponent(restApi) {
          _classCallCheck(this, _PatientsComponent);

          this.restApi = restApi;
          this.userProfileImg = this.restApi.userLink + '/getProfileImg/';
        }

        _createClass(_PatientsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this39 = this;

            this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe({
              next: function next(result) {
                _this39.currentUser = result;
                var postBody = {
                  "idPerson": _this39.currentUser.idPerson,
                  "person_type": "MEDECIN"
                }; //Get all distinct patient for the current medecin

                _this39.restApi.getDistinctPatientByMedecin(postBody, localStorage.getItem("token")).subscribe({
                  next: function next(result) {
                    _this39.myAllPatient = result;
                  }
                });
              }
            });
          }
        }]);

        return _PatientsComponent;
      }();

      _PatientsComponent.ɵfac = function PatientsComponent_Factory(t) {
        return new (t || _PatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__.RestApiService));
      };

      _PatientsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PatientsComponent,
        selectors: [["app-patients"]],
        decls: 18,
        vars: 2,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/doctor/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], ["class", "text-center", 4, "ngIf"], ["class", "col-xs-12 col-sm-12 col-md-4 col-lg-4", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "card", "py-3", "py-md-3"], [1, "d-flex", "justify-content-between", "px-3", "px-md-4"], ["height", "55px", "width", "55px", "alt", "", 1, "rounded-circle", 3, "src"], [1, ""], [1, "col-green"], [1, "light-hr"], [1, "d-flex", "flex-column", "justify-content-start", "w-100", "px-3", "px-md-4"], [1, "fas", "fa-map-marker-alt", "pt-3", "psr-3"], [1, "fas", "fa-phone", "pt-3", "psr-3"], [1, "fas", "fa-envelope", "pt-3", "psr-3"]],
        template: function PatientsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Accueil");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Patients");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PatientsComponent_div_16_Template, 3, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PatientsComponent_div_17_Template, 20, 8, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.myAllPatient == null ? null : ctx.myAllPatient.length) === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.myAllPatient);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50cy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    10591:
    /*!*******************************************************!*\
      !*** ./src/app/doctor/settings/settings.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsComponent": function SettingsComponent() {
          return (
            /* binding */
            _SettingsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/service/api-services/rest-api.service */
      75996);
      /* harmony import */


      var src_app_core_service_toast_service_toas_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/service/toast-service/toas-service.service */
      8259);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      function SettingsComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.errorMsg1);
        }
      }

      function SettingsComponent_mat_error_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Veuilez remplir ce champ !");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function SettingsComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Veuilez remplir ce champ !");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _SettingsComponent = /*#__PURE__*/function () {
        function _SettingsComponent(restApi, toastr, router) {
          _classCallCheck(this, _SettingsComponent);

          this.restApi = restApi;
          this.toastr = toastr;
          this.router = router;
          this.passwordloading = false;
          this.loading = false;
          this.userProfileImg = this.restApi.userLink + '/getProfileImg/' + localStorage.getItem("username");
        }

        _createClass(_SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe({
              next: function next(result) {
                _this40.myProfile = result;
              }
            });
          }
        }, {
          key: "refreshPage",
          value: function refreshPage() {
            window.location.reload();
          }
        }, {
          key: "getPhoto",
          value: function getPhoto(event) {
            var _this41 = this;

            this.uploadImg = event.target.files[0];
            this.restApi.updateUserProfile(this.myProfile.username, this.uploadImg, localStorage.getItem("token")).subscribe({
              next: function next(result) {
                _this41.toastr.showSuccessMessage("Profile image modifié avec succès !");

                _this41.refreshPage();
              },
              error: function error(_error) {
                _this41.toastr.showWarningMessage("Veuillez ajouter un autre photo !");
              }
            });
          }
        }, {
          key: "updatePassword",
          value: function updatePassword(changePassword) {
            var _this42 = this;

            this.passwordloading = true;
            this.restApi.changeUserPassword(changePassword.value.username, localStorage.getItem("token")).subscribe({
              next: function next(result) {
                _this42.passwordloading = false;

                _this42.toastr.showSuccessMessage("Mot de passe modifié avec succès !");

                changePassword.resetForm();
              },
              error: function error(_error2) {
                _this42.passwordloading = false;
                _this42.errorMsg1 = "Nom d'utilisateur non trouvé !";
              }
            });
          }
        }, {
          key: "userUpdate",
          value: function userUpdate(changeUSer) {
            var _this43 = this;

            this.loading = true;
            this.updateBody = {
              "person_type": "MEDECIN",
              "profile": "MEDECIN",
              "nom": changeUSer.value.nom,
              "prenom": changeUSer.value.prenom,
              "adresse": changeUSer.value.adresse,
              "telephone": changeUSer.value.telephone,
              "email": changeUSer.value.email,
              "genre": this.myProfile.genre,
              "username": changeUSer.value.username,
              "password": null,
              "imageProfile": "imageLinnnkkk",
              "roles": [{
                "idRole": 3
              }]
            };
            this.restApi.updateUser(this.myProfile.idPerson, this.updateBody, localStorage.getItem("token")).subscribe({
              next: function next(result) {
                _this43.loading = false;
                localStorage.setItem("username", changeUSer.value.username);

                _this43.toastr.showSuccessMessage("Votre profile a été modifié avec succès !");

                _this43.router.navigate(['/doctor/dashboard']);
              },
              error: function error(_error3) {
                _this43.loading = false;

                _this43.toastr.showErrorMessage("Modification non éffectuée !");
              }
            });
          }
        }]);

        return _SettingsComponent;
      }();

      _SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || _SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_0__.RestApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_toast_service_toas_service_service__WEBPACK_IMPORTED_MODULE_1__.ToasServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SettingsComponent,
        selectors: [["app-settings"]],
        decls: 107,
        vars: 22,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/doctor/dashboard"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "card"], [1, "m-b-20"], [1, "contact-grid"], [1, "profile-header", 2, "background-color", "#99B9EC"], [1, "user-name"], [1, "name-center"], ["alt", "User profile", 1, "user-img", 3, "src"], ["for", "imgProfile", 2, "margin-left", "-18px"], [1, "fas", "fa-edit", 2, "font-size", "20px"], ["type", "file", "id", "imgProfile", 2, "display", "none", "visibility", "none", 3, "change"], [1, "phone"], [1, "material-icons"], [1, "header"], [1, "body"], [1, "example-container"], [3, "ngSubmit"], ["changePassword", "ngForm"], ["class", "mb-2 col-red", 4, "ngIf"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "name", "username", "ngModel", "", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "name", "newPassword", "ngModel", "", "required", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["changeUSer", "ngForm"], [1, "row", "clearfix"], [1, "col-lg-4", "col-md-12"], [1, "form-group"], ["matInput", "", "name", "username", "ngModel", "", "required", "", 3, "ngModel"], ["matInput", "", "name", "prenom", "ngModel", "", "required", "", 3, "ngModel"], ["matInput", "", "name", "nom", "ngModel", "", "required", "", 3, "ngModel"], ["matInput", "", "name", "adresse", "ngModel", "", "required", "", 3, "ngModel"], ["matInput", "", "name", "email", "ngModel", "", "required", "", 3, "ngModel"], ["matInput", "", "name", "telephone", "ngModel", "", "required", "", 3, "ngModel"], [1, "col-md-12"], [1, "mb-2", "col-red"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Accueil");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SettingsComponent_Template_input_change_26_listener($event) {
              return ctx.getPhoto($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Modifier votre mot de passe");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "form", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_43_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44);

              return ctx.updatePassword(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, SettingsComponent_div_45_Template, 2, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Nom d'utilisateur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, SettingsComponent_mat_error_50_Template, 2, 0, "mat-error", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Nouveau Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, SettingsComponent_mat_error_55_Template, 2, 0, "mat-error", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Envoyer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "form", 27, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_65_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](66);

              return ctx.userUpdate(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Nom d'utilisateur");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Pr\xE9nom");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Nom");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Adress");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "mat-form-field", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "T\xE9l\xE9phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Enregistrer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.myProfile == null ? null : ctx.myProfile.nom, " ", ctx.myProfile == null ? null : ctx.myProfile.prenom, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.myProfile == null ? null : ctx.myProfile.specialite.nom);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.userProfileImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Adresse : ", ctx.myProfile == null ? null : ctx.myProfile.adresse, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Cabinet M\xE9dicale : ", ctx.myProfile == null ? null : ctx.myProfile.cabinetMedicale.nom, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.myProfile == null ? null : ctx.myProfile.telephone);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("auth-spinner", ctx.passwordloading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.myProfile == null ? null : ctx.myProfile.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.myProfile == null ? null : ctx.myProfile.prenom);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.myProfile == null ? null : ctx.myProfile.nom);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.myProfile == null ? null : ctx.myProfile.adresse);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.myProfile == null ? null : ctx.myProfile.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.myProfile == null ? null : ctx.myProfile.telephone);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("auth-spinner", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r4.valid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2FzcyJ9 */", ".card1[_ngcontent-%COMP%]{\n    height: 35vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  #img[_ngcontent-%COMP%]{\n    height: 200px;\n    width: 1000px;\n    border-radius: 26px;\n  }\n  .profile[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    height: 55px;\n    width: auto;\n    border-radius: 50%;\n  }\n  .profile[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    font-size: 8px;\n    width: 300px;\n    height: 70px;\n    border-radius: 50px;\n    box-shadow: 5px 6px 8px 0px #00000065;\n    margin-top: -72px;\n    margin-left: 12em;\n    position: absolute;\n    z-index: 99;\n    background-color: rgb(255, 255, 255);\n  }"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_doctor_doctor_module_ts-es5.js.map