(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showcase-showcase-module"],{

/***/ "./src/app/showcase/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/showcase/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ProjectService {
    constructor(http) {
        this.http = http;
    }
    getProjects() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'projects');
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/showcase-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/showcase/showcase-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ShowcaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseRoutingModule", function() { return ShowcaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showcase.component */ "./src/app/showcase/showcase.component.ts");





const routes = [{ path: '', component: _showcase_component__WEBPACK_IMPORTED_MODULE_2__["ShowcaseComponent"] }];
class ShowcaseRoutingModule {
}
ShowcaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowcaseRoutingModule });
ShowcaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowcaseRoutingModule_Factory(t) { return new (t || ShowcaseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/showcase/showcase.component.ts":
/*!************************************************!*\
  !*** ./src/app/showcase/showcase.component.ts ***!
  \************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.service */ "./src/app/showcase/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ShowcaseComponent_article_8_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r1.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", project_r1.name);
} }
function ShowcaseComponent_article_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowcaseComponent_article_8_img_1_Template, 1, 2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View on Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.imageURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.gitURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ShowcaseComponent {
    constructor(projectService) {
        this.projectService = projectService;
    }
    ngOnInit() {
        this.projectService.getProjects()
            .subscribe(fetchedProjects => this.projects = fetchedProjects);
    }
}
ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) { return new (t || ShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
ShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowcaseComponent, selectors: [["app-showcase"]], decls: 9, vars: 1, consts: [["id", "work"], [1, "lg-heading"], [1, "projects"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [3, "src", "alt", 4, "ngIf"], [1, "content"], [1, "footer"], ["role", "button", 1, "button", 3, "href"], [3, "src", "alt"]], template: function ShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A showcase of my personal projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShowcaseComponent_article_8_Template, 10, 4, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".projects[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.projects[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: white;\n  box-sizing: border-box;\n  margin: 1rem 0.25em;\n}\n.projects[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  border: 0;\n  width: 100%;\n  height: auto;\n}\n.projects[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1.4em;\n  color: black;\n}\n.projects[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n  font-weight: bold;\n}\n.projects[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n}\n.projects[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 1em 1.5em;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.projects[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n.projects[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  background-color: var(--secondary-color-dark);\n  color: white;\n}\n@media screen and (min-width: 40em) {\n  .card[_ngcontent-%COMP%] {\n    max-width: calc(45% - 3em);\n  }\n}\n@media screen and (min-width: 52em) {\n  .centered[_ngcontent-%COMP%] {\n    max-width: 52em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFDRTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ047QUFFSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQU47QUFFTTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFJSTtFQUNFLGFBQUE7QUFGTjtBQUdNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFJTTtFQUNFLHdDQUFBO0VBQ0EsMkJBQUE7QUFGUjtBQUtNO0VBQ0UsNkNBQUE7RUFDQSxZQUFBO0FBSFI7QUFTQTtFQUNFO0lBQ0UsMEJBQUE7RUFORjtBQUNGO0FBU0E7RUFDRTtJQUNFLGVBQUE7RUFQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDFyZW0gLjI1ZW07XG5cbiAgICBpbWcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxLjRlbTtcbiAgICAgIGNvbG9yOiBibGFjaztcblxuICAgICAgaDUge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIGE6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWRhcmspO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgLmNhcmQge1xuICAgIG1heC13aWR0aDogY2FsYyg0NSUgLSAzZW0pO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyZW0pIHtcbiAgLmNlbnRlcmVkIHtcbiAgICBtYXgtd2lkdGg6IDUyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase',
                templateUrl: './showcase.component.html',
                styleUrls: ['./showcase.component.scss']
            }]
    }], function () { return [{ type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showcase/showcase.module.ts":
/*!*********************************************!*\
  !*** ./src/app/showcase/showcase.module.ts ***!
  \*********************************************/
/*! exports provided: ShowcaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function() { return ShowcaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _showcase_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showcase-routing.module */ "./src/app/showcase/showcase-routing.module.ts");
/* harmony import */ var _showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showcase.component */ "./src/app/showcase/showcase.component.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.service */ "./src/app/showcase/project.service.ts");







class ShowcaseModule {
}
ShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowcaseModule });
ShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowcaseModule_Factory(t) { return new (t || ShowcaseModule)(); }, providers: [_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _showcase_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowcaseRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseModule, { declarations: [_showcase_component__WEBPACK_IMPORTED_MODULE_4__["ShowcaseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _showcase_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowcaseRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_showcase_component__WEBPACK_IMPORTED_MODULE_4__["ShowcaseComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _showcase_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowcaseRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=showcase-showcase-module-es2015.js.map