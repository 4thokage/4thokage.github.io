(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
    /***/
    "./src/app/about/about-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/about/about-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AboutRoutingModule */

    /***/
    function srcAppAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
        return AboutRoutingModule;
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


      var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.component */
      "./src/app/about/about.component.ts");

      var routes = [{
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
      }];

      var AboutRoutingModule = function AboutRoutingModule() {
        _classCallCheck(this, AboutRoutingModule);
      };

      AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AboutRoutingModule
      });
      AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AboutRoutingModule_Factory(t) {
          return new (t || AboutRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/about/about.component.ts":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./job.service */
      "./src/app/about/job.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AboutComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var jobEntry_r1 = ctx.$implicit;
          var even_r2 = ctx.even;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", even_r2 ? "left" : "right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, jobEntry_r1.startDate), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, jobEntry_r1.endDate || ctx_r0.presentDate), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobEntry_r1.company, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobEntry_r1.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobEntry_r1.description);
        }
      }

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(jobService) {
          _classCallCheck(this, AboutComponent);

          this.jobService = jobService;
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.jobService.getSortedJobs().subscribe(function (fetchedJobs) {
              return _this.jobs = fetchedJobs;
            });
            this.presentDate = new Date();
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 14,
        vars: 1,
        consts: [["id", "about"], [1, "career-section"], [1, "timeline"], ["class", "container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "container", 3, "ngClass"], [1, "content"], [1, "date-range"], [3, "href"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A very brief summary of my professional experience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Career");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I studied Electronic and computing engineering. My career path is entirely focused on the Java programming language.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AboutComponent_div_13_Template, 10, 10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [".career-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.career-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .career-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.timeline[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 6px;\n  background-color: white;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n  position: relative;\n  background-color: inherit;\n  width: 50%;\n}\n\n.container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: -13px;\n  background-color: white;\n  border: 4px solid var(--secondary-color);\n  top: 15px;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  left: 50%;\n}\n\n.left[_ngcontent-%COMP%]::before {\n  content: \" \";\n  height: 0;\n  position: absolute;\n  top: 22px;\n  width: 0;\n  z-index: 1;\n  right: 30px;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent white;\n}\n\n.right[_ngcontent-%COMP%]::before {\n  content: \" \";\n  height: 0;\n  position: absolute;\n  top: 22px;\n  width: 0;\n  z-index: 1;\n  left: 30px;\n  border-color: transparent white transparent transparent;\n}\n\n.right[_ngcontent-%COMP%]::after {\n  left: -13px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  background-color: white;\n  position: relative;\n  border-radius: 6px;\n  color: black;\n}\n.content[_ngcontent-%COMP%]   .date-range[_ngcontent-%COMP%] {\n  font-size: calc(.8em + .9vw);\n  text-decoration: underline;\n}\n\n@media screen and (max-width: 600px) {\n  \n  .timeline[_ngcontent-%COMP%]::after {\n    left: 31px;\n  }\n\n  \n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px;\n  }\n\n  \n  .container[_ngcontent-%COMP%]::before {\n    left: 60px;\n    border-color: transparent white transparent transparent;\n  }\n\n  \n  .left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after {\n    left: 18px;\n  }\n\n  \n  .right[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw2QkFBQTtBQUFKO0FBR0U7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFLQSw2Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGRjtBQUtBLDZDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUZGO0FBS0EsNkJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFGRjtBQUtBLGdDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZGO0FBS0Esb0NBQUE7QUFDQTtFQUNFLE9BQUE7QUFGRjtBQUtBLHFDQUFBO0FBQ0E7RUFDRSxTQUFBO0FBRkY7QUFLQSxzREFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHVEQUFBO0FBRkY7QUFLQSxzREFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx1REFBQTtBQUZGO0FBS0Esb0RBQUE7QUFDQTtFQUNFLFdBQUE7QUFGRjtBQUtBLHVCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUlFO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQUZKO0FBTUEsd0VBQUE7QUFDQTtFQUNFLG1DQUFBO0VBQ0E7SUFDRSxVQUFBO0VBSEY7O0VBTUEsMEJBQUE7RUFDQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBSEY7O0VBTUEscURBQUE7RUFDQTtJQUNFLFVBQUE7SUFDQSx1REFBQTtFQUhGOztFQU1BLCtDQUFBO0VBQ0E7SUFDRSxVQUFBO0VBSEY7O0VBTUEsd0RBQUE7RUFDQTtJQUNFLE9BQUE7RUFIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZWVyLXNlY3Rpb24ge1xuICBoMyB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIH1cblxuICBwcmUsIGEge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB9XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4udGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4uY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHJpZ2h0OiAtMTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIHJpZ2h0ICovXG4ucmlnaHQge1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIEFkZCBhcnJvd3MgdG8gdGhlIGxlZnQgY29udGFpbmVyIChwb2ludGluZyByaWdodCkgKi9cbi5sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjJweDtcbiAgd2lkdGg6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XG59XG5cbi8qIEFkZCBhcnJvd3MgdG8gdGhlIHJpZ2h0IGNvbnRhaW5lciAocG9pbnRpbmcgbGVmdCkgKi9cbi5yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIHdpZHRoOiAwO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAzMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4vKiBGaXggdGhlIGNpcmNsZSBmb3IgY29udGFpbmVycyBvbiB0aGUgcmlnaHQgc2lkZSAqL1xuLnJpZ2h0OjphZnRlciB7XG4gIGxlZnQ6IC0xM3B4O1xufVxuXG4vKiBUaGUgYWN0dWFsIGNvbnRlbnQgKi9cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiBibGFjaztcblxuICAuZGF0ZS1yYW5nZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKC44ZW0gKyAuOXZ3KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4vKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAvKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbiAgLnRpbWVsaW5lOjphZnRlciB7XG4gICAgbGVmdDogMzFweDtcbiAgfVxuXG4gIC8qIEZ1bGwtd2lkdGggY29udGFpbmVycyAqL1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgfVxuXG4gIC8qIE1ha2Ugc3VyZSB0aGF0IGFsbCBhcnJvd3MgYXJlIHBvaW50aW5nIGxlZnR3YXJkcyAqL1xuICAuY29udGFpbmVyOjpiZWZvcmUge1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xuICAubGVmdDo6YWZ0ZXIsIC5yaWdodDo6YWZ0ZXIge1xuICAgIGxlZnQ6IDE4cHg7XG4gIH1cblxuICAvKiBNYWtlIGFsbCByaWdodCBjb250YWluZXJzIGJlaGF2ZSBsaWtlIHRoZSBsZWZ0IG9uZXMgKi9cbiAgLnJpZ2h0IHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [{
            type: _job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/about/about.module.ts":
    /*!***************************************!*\
      !*** ./src/app/about/about.module.ts ***!
      \***************************************/

    /*! exports provided: AboutModule */

    /***/
    function srcAppAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
        return AboutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-routing.module */
      "./src/app/about/about-routing.module.ts");
      /* harmony import */


      var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.component */
      "./src/app/about/about.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./job.service */
      "./src/app/about/job.service.ts");

      var AboutModule = function AboutModule() {
        _classCallCheck(this, AboutModule);
      };

      AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AboutModule
      });
      AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AboutModule_Factory(t) {
          return new (t || AboutModule)();
        },
        providers: [_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
          declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/about/job.service.ts":
    /*!**************************************!*\
      !*** ./src/app/about/job.service.ts ***!
      \**************************************/

    /*! exports provided: JobService */

    /***/
    function srcAppAboutJobServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobService", function () {
        return JobService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var JobService = /*#__PURE__*/function () {
        function JobService(http) {
          _classCallCheck(this, JobService);

          this.http = http;
        }

        _createClass(JobService, [{
          key: "getJobs",
          value: function getJobs() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'jobs');
          }
        }, {
          key: "getSortedJobs",
          value: function getSortedJobs() {
            var _this2 = this;

            return this.getJobs().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (j) {
              return _this2.sortJobs(j);
            }));
          }
        }, {
          key: "sortJobs",
          value: function sortJobs(j) {
            return j.sort(function (a, b) {
              return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
            });
          }
        }]);

        return JobService;
      }();

      JobService.ɵfac = function JobService_Factory(t) {
        return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      JobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JobService,
        factory: JobService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=about-about-module-es5.js.map