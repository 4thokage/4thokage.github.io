(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component */
      "./src/app/home.component.ts");

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | about-about-module */
          [__webpack_require__.e("default~about-about-module~showcase-showcase-module"), __webpack_require__.e("about-about-module")]).then(__webpack_require__.bind(null,
          /*! ./about/about.module */
          "./src/app/about/about.module.ts")).then(function (m) {
            return m.AboutModule;
          });
        }
      }, {
        path: 'showcase',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | showcase-showcase-module */
          [__webpack_require__.e("default~about-about-module~showcase-showcase-module"), __webpack_require__.e("showcase-showcase-module")]).then(__webpack_require__.bind(null,
          /*! ./showcase/showcase.module */
          "./src/app/showcase/showcase.module.ts")).then(function (m) {
            return m.ShowcaseModule;
          });
        }
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/header/header.component */
      "./src/app/shared/header/header.component.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.currentNavigationId = 0;
          this.isReady = true;
        }

        _createClass(AppComponent, [{
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            if ('j' === event.key) {
              this.navigateForward();
            } else if ('k' === event.key) {
              this.navigateBackward();
            }
          }
        }, {
          key: "navigateForward",
          value: function navigateForward() {
            var _this = this;

            ++this.currentNavigationId;

            if (this.currentNavigationId > 2) {
              this.currentNavigationId = 0;
            }

            var aux = this.router.config[this.currentNavigationId].path;
            this.router.navigate([aux]).then(function (r) {
              return _this.isReady = r;
            });
          }
        }, {
          key: "navigateBackward",
          value: function navigateBackward() {
            var _this2 = this;

            --this.currentNavigationId;

            if (this.currentNavigationId < 0) {
              this.currentNavigationId = 2;
            }

            var aux = this.router.config[this.currentNavigationId].path;
            this.router.navigate([aux]).then(function (r) {
              return _this2.isReady = r;
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AppComponent_keypress_HostBindingHandler($event) {
              return ctx.handleKeyboardEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            template: "\n    <app-header></app-header>\n    <router-outlet></router-outlet>"
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keypress', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/header/header.component */
      "./src/app/shared/header/header.component.ts");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.component */
      "./src/app/home.component.ts");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
              enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/home.component.ts":
    /*!***********************************!*\
      !*** ./src/app/home.component.ts ***!
      \***********************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "onIconClicked",
          value: function onIconClicked(iconEndpoint) {
            window.location.href = iconEndpoint;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 27,
        vars: 0,
        consts: [["id", "home", 1, "container-center"], [1, "half-opaque"], [1, "icons"], ["accesskey", "g", "role", "button", "xmlns", "http://www.w3.org/2000/svg", 3, "click"], [0, "xlink", "href", "assets/icons/icons.svg#github"], ["accesskey", "c", "role", "button", "xmlns", "http://www.w3.org/2000/svg", 3, "click"], [0, "xlink", "href", "assets/icons/icons.svg#cv"], ["accesskey", "b", "role", "button", "xmlns", "http://www.w3.org/2000/svg", 3, "click"], [0, "xlink", "href", "assets/icons/icons.svg#blog"], ["accesskey", "l", "role", "button", "xmlns", "http://www.w3.org/2000/svg", 3, "click"], [0, "xlink", "href", "assets/icons/icons.svg#linkedin"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Jos\xE9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rodrigues");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Web Developer & Java nerd. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You can use j and k to navigate between pages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template__svg_svg_click_11_listener() {
              return ctx.onIconClicked("https://www.github.com/4thokage");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Github");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "use", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template__svg_svg_click_15_listener() {
              return ctx.onIconClicked("https://jose-rodrigues.info/cv");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Curriculum Vitae");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "use", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template__svg_svg_click_19_listener() {
              return ctx.onIconClicked("https://blog.jose-rodrigues.info");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "use", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template__svg_svg_click_23_listener() {
              return ctx.onIconClicked("https://www.linkedin.com/in/jos%C3%A9-rodrigues-b4b526b2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "use", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            template: "\n    <main id=\"home\" class=\"container-center\">\n      <h1>\n        Jos\xE9\n        <span>Rodrigues</span>\n      </h1>\n      <div class=\"half-opaque\">\n        <h2>\n          Web Developer & Java nerd.\n        </h2>\n        <em>You can use j and k to navigate between pages</em>\n      </div>\n      <div class=\"icons\">\n        <svg accesskey=\"g\" role=\"button\" xmlns=\"http://www.w3.org/2000/svg\"\n             (click)=\"onIconClicked('https://www.github.com/4thokage')\">\n          <title>Github</title>\n          <use xlink:href=\"assets/icons/icons.svg#github\"></use>\n        </svg>\n        <svg accesskey=\"c\" role=\"button\" xmlns=\"http://www.w3.org/2000/svg\"\n             (click)=\"onIconClicked('https://jose-rodrigues.info/cv')\">\n          <title>Curriculum Vitae</title>\n          <use xlink:href=\"assets/icons/icons.svg#cv\"></use>\n        </svg>\n        <svg accesskey=\"b\" role=\"button\" xmlns=\"http://www.w3.org/2000/svg\"\n             (click)=\"onIconClicked('https://blog.jose-rodrigues.info')\">\n          <title>Blog</title>\n          <use xlink:href=\"assets/icons/icons.svg#blog\"></use>\n        </svg>\n        <svg accesskey=\"l\" role=\"button\" xmlns=\"http://www.w3.org/2000/svg\"\n             (click)=\"onIconClicked('https://www.linkedin.com/in/jos%C3%A9-rodrigues-b4b526b2')\">\n          <title>Linkedin</title>\n          <use xlink:href=\"assets/icons/icons.svg#linkedin\"></use>\n        </svg>\n      </div>\n    </main>\n  "
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/header/header.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 9,
        vars: 2,
        consts: [["id", "header"], [1, "header"], [1, "header-right"], ["routerLink", "/", "routerLinkActive", "active", "accesskey", "h", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", "accesskey", "a"], ["routerLink", "/showcase", "routerLinkActive", "active", "accesskey", "s"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Showcase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: [".header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: transparent;\n  padding: 20px 10px;\n}\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 1em;\n  text-decoration: none;\n  font-size: calc(1em + 1.3vw);\n  line-height: 25px;\n  border-radius: 4px;\n  \n  \n  background-image: linear-gradient(var(--secondary-color), var(--secondary-color)), linear-gradient(transparent, transparent);\n  background-size: 0 5px, auto;\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  transition: all 0.2s ease-out;\n}\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-size: 100% 5px, auto;\n}\n\n.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n\n.header-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n@media screen and (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n\n  .header-right[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUEsMkJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLHVGQUFBO0VBQ0EsNEhBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQUFGO0FBR0EsOENBQUE7QUFDQTtFQUNFLCtCQUFBO0FBQUY7QUFHQSxpQ0FBQTtBQUNBO0VBQ0UsNkJBQUE7QUFBRjtBQUdBLHdDQUFBO0FBQ0E7RUFDRSxZQUFBO0FBQUY7QUFHQSx1SEFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBQUY7O0VBRUE7SUFDRSxXQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgdGhlIGhlYWRlciB3aXRoIGEgZ3JleSBiYWNrZ3JvdW5kIGFuZCBzb21lIHBhZGRpbmcgKi9cbi5oZWFkZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4vKiBTdHlsZSB0aGUgaGVhZGVyIGxpbmtzICovXG4uaGVhZGVyIGEge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IGNhbGMoMWVtICsgMS4zdncpO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIC8qIFNldCB1cCB0aGUgaG92ZXIgKi9cbiAgLyogSWYgeW91IGFyZW4ndCB1c2luZyBhdXRvcHJlZml4LCByZW1lbWJlciB0byBwcmVmaXggdGhlIGdyYWRpZW50IGZvciBvdGhlciBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSksIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDAgNXB4LCBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb24gbW91c2Utb3ZlciAqL1xuLmhlYWRlciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDVweCwgYXV0bztcbn1cblxuLyogU3R5bGUgdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsqL1xuLmhlYWRlciBhLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4vKiBGbG9hdCB0aGUgbGluayBzZWN0aW9uIHRvIHRoZSByaWdodCAqL1xuLmhlYWRlci1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogQWRkIG1lZGlhIHF1ZXJpZXMgZm9yIHJlc3BvbnNpdmVuZXNzIC0gd2hlbiB0aGUgc2NyZWVuIGlzIDUwMHB4IHdpZGUgb3IgbGVzcywgc3RhY2sgdGhlIGxpbmtzIG9uIHRvcCBvZiBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'https://devinfo.free.beeceptor.com/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/4thokage.github.io/4thokage.github.io/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map