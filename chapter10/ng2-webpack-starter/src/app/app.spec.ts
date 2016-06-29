import {provide} from '@angular/core';
import {Location, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT} from '@angular/router';
import {RootRouter} from '@angular/src/router/router';
import {SpyLocation} from '@angular/router/testing';
import {beforeEach, beforeEachProviders, inject, it} from '@angular/testing';

import {MyApp} from './app';

describe('Router', () => {
  let location: Location;
  let router: Router;

  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation}),
    provide(Router, {useClass: RootRouter}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: MyApp})
  ]);

  beforeEach(inject([Router, Location], (_router, _location) => {
    location = _location;
    router = _router;
  }));

  it('should be able to navigate to Home', done => {
    router.navigate(['/Home']).then(() => {
      expect(location.path()).toBe('');
      done();
    }).catch(e => done.fail(e));
  });

  it('should be able to navigate to About by route name', done => {
    router.navigate(['/About']).then(() => {
      expect(location.path()).toBe('/about');
      done();
    }).catch(e => done.fail(e));
  });

  it('should be able to navigate to Weather by URL', done => {
    router.navigateByUrl('/about').then(() => {
      expect(location.path()).toBe('/about');
      done();
    }).catch(e => done.fail(e));
  });
});



