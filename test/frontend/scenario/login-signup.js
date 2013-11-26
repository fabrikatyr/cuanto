
'user strict'

describe("sign up page tests", function() {
  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('home page render correnctly', function() {
    // title button exists
    expect(element('.titlebutton').count()).toBe(1);
    // sign-up, sign-in button exists
    expect(element('.nav .btn-toolbar button').count()).toBe(2);
    // sign-up modal doesn't exists
    expect(element('.modal').count()).toBe(0);
    // not authenticated
    expect(binding('global.authenticated')).toBe(false);
    expect(binding('global.user')).toBe(null);
  });


  it('sign up correnctly', function() {
    // show sign up modal
    element('button[title="Sign-up"]').query(function(el, done) {
      el.click();
      setTimeout(done, 1000);
    });

    expect(element('.modal').count()).toBe(1);

    // fill in inputs
    element('.modal #name').val('Test User');
    element('.modal #email').val('testUser@test.com');
    element('.modal #username').val('test');
    element('.modal #password').val('aaabbbccc');

    // click signup
    element('.modal button[type="submit"]').query(function(el, done) {
      el.click();
      setTimeout(done, 2000);
    });

    expect(binding('global.user.username')).toEqual('test');
    expect(binding('global.authenticated')).toBe(true);
    expect(element('ul.nav').last().css('display')).toEqual('block');
  });

  
  it('sign out correnctly', function() {
    // sign out
    element('.nav .dropdown a[href="/signout"]').query(function(el, done) {
      el.click();
      setTimeout(done, 2000);
    });

    expect(browser().window().path()).toEqual('/#!/');
    expect(binding('global.user')).toBe(null);
    expect(binding('global.authenticated')).toBe(false);
    expect(element('ul.nav').last().css('display')).toEqual('none');
  });

  it('sign in correnctly', function() {
    // show sign up modal
    element('button[title="Sign-in"]').query(function(el, done) {
      el.click();
      setTimeout(done, 1000);
    });

    expect(element('.modal').count()).toBe(1);

    // fill in inputs
    element('.modal #email').val('testUser@test.com');
    element('.modal #password').val('aaabbbccc');

    // click signup
    element('.modal button').query(function(el, done) {
      el.first().click();
      setTimeout(done, 2000);
    });

    expect(binding('global.user.username')).toEqual('test');
    expect(binding('global.authenticated')).toBe(true);
    expect(element('ul.nav').last().css('display')).toEqual('block');
  });

}

