(function() {
  'use strict';

  angular
    .module('storkcharts')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
