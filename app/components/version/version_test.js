'use strict';

describe('AMS.version module', function() {
  beforeEach(module('AMS.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
