'use strict';

angular.module('AMS.version', [
  'AMS.version.interpolate-filter',
  'AMS.version.version-directive'
])

.value('version', '0.1');
