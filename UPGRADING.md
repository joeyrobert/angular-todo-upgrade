# Upgrading an Angular 1 application to Angular 2

*By Joey Robert*

## Universals

- **Module Loader**: Legacy Angular 1 apps built with Grunt or Gulp typically rely on concatenated source files, which are order-dependent and error prone. A first step towards Angular 2 compatability would be to introduce a module loader like [webpack](https://webpack.github.io/) or [SystemJS](https://github.com/systemjs/systemjs). Angular 2's dependency injection relies on using a class reference to load @Injectable singletons. It is possible to use strings for DI, however it is more cumbersome so a module system is preferred.

## Strategies

### ngUpgrade (UpgradeAdapter)

#### Description

Angular 2's suggested way forward. Allows for complete bi-directional interoperability with Angular 1 components and services.

#### Links

- [Guide](https://angular.io/docs/ts/latest/guide/upgrade.html)
- [UpgradeAdapter class](https://angular.io/docs/ts/latest/api/upgrade/index/UpgradeAdapter-class.html)
- [Open upgrade issues](https://github.com/angular/angular/issues?q=is%3Aissue+is%3Aopen+label%3A%22comp%3A+upgrade%22)

#### Pros

- Existing app works out of the box
- Allows for a gradual transition to full Angular 2 application
- Business logic in NG1 services can be leveraged in an Angular 2 codebase
- Eliminates the need for `$scope.$apply()` -- even in Angular 1, as code is executed in the context of an Angular 2 zone, which triggers change detection implicitly. `$scope.$apply()` in Angular 1 becomes a no-op.

#### Cons

- To upgrade Angular 1 components to Angular 2, requires "well behaved" components
	- `compile`, `replace`, `terminal` and `priority` are not supported
	- `$attrs` or `$transclude` in NG1 component through DI are not supported
	- Angular 1 can only use an `replace: 'E'` element selector (attribute/class/comment level selectors not supported).
	- `transclusion` compiles Angular 2's content projection
- Larger vendor file (bundling NG1 and NG2 in the same application incurs a double), requires bundling of both Angular 1 and Angular 2 (and associated libraries: Zone.js, RxJS)
- Interop between NG1 and NG2 libraries is poor. Suggested solution is to build a form exclusively in NG1 or NG2, not both.
- Angular 2 does not have the concept of [`$templateCache`](https://docs.angularjs.org/api/ng/service/$templateCache) -- NG1 components that use this should switch to inline templates or `require`.
- AoT compilation for NG2 templates is not supported with ngUpgrade
- `UpgradeAdapter`, which is used often, needs to be a singleton
- Testing situation is a bit merky. See [this GitHub issue](https://github.com/angular/angular/issues/5462).

#### Issues

- ["Upgrade module fires error when upgrading ng1 directives without templates."](https://github.com/angular/angular/issues/4891)
	- Any non-component directive (i.e. something without a template or controller) will fail loudly
	- Has implications for angular 1's material library (e.g. cannot upgrade mdIcon)
- ["Can't upgrade ng1 component that references $attrs in the controller function"](https://github.com/angular/angular/issues/6715)
- ["[Blocker for upgrade] ng2 upgrade adapter does not call ng1 controller lifecycle methods"](https://github.com/angular/angular/issues/8304)
- ["Support AOT when using NgUpgrade"](https://github.com/angular/angular/issues/11765)

### ng-metadata

#### Description

ng-metadata this is a viable solution for people who want to gradually update existing ng1 codebase to Typescript/ES2015 using Angular 2 conventions and styles that runs today on Angular 1.4+.

#### Links

- [GitHub](https://github.com/ngParty/ng-metadata)
	
#### Pros

- Allows components to be written in Angular 2 style today while still running on Angular 1. `@Component` and `@Injectable` can be leveraged.
- Upgrade can be done piecemeal, with new components being written in this style, and older components upgraded over time.
- Creates "well-behaved" components for an easy upgrade to NG2 style.
- More "pure" NG2 coding style than using [`.component`](https://docs.angularjs.org/guide/component) -- emulates NG2 decorator API
- Can be used in combination with ngUpgrade.

#### Cons

- Upgrade becomes two part:
	- Upgrade to NG2 style components using ng-metadata
	- Switch to NG2 entirely
- @NgModule support is not complete, @Components still require use of a `directives: []` array (no module-wide component namespace).
- Third-party (not maintained by the core Angular team)
- Appears equivalent to NG2 downgraded component (requires similar dependencies: `reflect-metadata` `core-js` `rxjs@5.0.0-beta.11` and a Typescript transpiler)
- No performance benefit compared to NG2

### ui-router ng1-to-ng2

#### Description

This module provides ngUpgrade integration with UI-Router, enabling routing to both Angular 1 and Angular 2 Components (and/or templates).

Your app will be hosted on Angular 1 while you incrementally upgrade it to Angular 2. With ui-router-ng1-to-ng2, you can use either an Angular 1 or Angular 2 component as a view in your state definitions.

#### Links

- [GitHub](https://github.com/ui-router/ng1-to-ng2)

### ng-forward

#### Description

"The default solution for those that want to write Angular 2.x style code in Angular 1.x"

#### Links

- [GitHub](https://github.com/ngUpgraders/ng-forward)

#### Pros

- Write ng2 style code in ng1

#### Cons

- Big warning on homepage: "This Project is no longer under active development. Consider using ng-metadata."
- You may encounter this in the wild as a previous upgrade attempt. As the warning states, it's best to switch to ng-metadata which is a maintained variant of this library.

### Questions

#### At what point does using ngUpgrade become not worth it (at which point a full NG2 rewrite would be recommended)?

_It depends_. The following considerations should be taken into account when deciding to upgrade an app:

- **Download Size**: A hybrid application.

#### What is the performance of an Angular 1 component in an NG1/NG2 hybrid app (and vice versa)?

It appears there is no performance penalty for using Angular 1 and Angular 2 in the same application. Code is executed "natively" in each framework.

This was tested with the following scenario. Two components were created:
- ng1 component named `renderAlotNg1`
- ng2 component named `renderAlotNg2`

They both accept two inputs: `text` and `count`. An input from the To Do example application was used as `text`, and `count` was calculated to be 2<sup>n</sup> where `n` is the number of keypresses in the input. The component then renders `text` `count` number of times. This allows us to test the behavior of each framework as the number of DOM elements scales exponentially. A CPU profile was performed, and upon

Additionally, testing with [`ng-stats`](https://github.com/kentcdodds/ng-stats) shows digest cycle times in the Angular 1 portion of the app performs similarly when using `UpgradeAdapter.prototype.bootstrap` and `angular.bootstrap`.

#### What are the download sizes for 1) an Angular 1 app, 2) an Angular 2 app and 3) an Angular 1/Angular 2 hybrid app?

Tree shaking can be leveraged to reduce the download size, see: http://www.syntaxsuccess.com/viewarticle/optimizing-ngupgrade-bundle-sizes-in-angular-2

| Framework                  | Raw | Minified | Minified + Gzipped | Tree Shaken + Minified + Gzipped |
|----------------------------|-----|----------|--------------------|----------------------------------|
| Angular 1                  |     |          |                    | N/A                              |
| Angular 2                  |     |          |                    |                                  |
| Angular 1/2 with ngUpgrade |     |          |                    |                                  |

#### What is the testing situation for existing Angular 1 tests in an hybrid app?

### Quotes

> Generally, your angular directives should be written using angular.component() to increase the likelihood of meeting upgrade requirements.

> I've been slowly upgrading an app which has more 50k lines of code and I find it easier and less painful to start from top leafs to bottom, write NG2 components and downgrade them to NG1 (I've experienced little to no problem with this route). Most NG1 components that I need to upgrade, I usually just rewrite in NG2 and downgrade back to NG1 so I can share with my existing views.

-- *[guojenman](https://github.com/angular/angular/issues/11785#issuecomment-249079069)*

http://www.blog.wishtack.com/single-post/2016/05/18/AngularJS-vs-Angular-2-Should-I-Stay-or-Should-I-Go