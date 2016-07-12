(function() {
  'use strict';

  angular
    .module('storkcharts')
    .directive('rdashSidebar', rdashSidebar);

  /** @ngInject */
  function rdashSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {
      },
      transclude: true,
      controller: SideBarController,
      controllerAs: 'sb',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SideBarController() {
      var sb = this;
      sb.toggle = true;
      sb.toggleSidebar = function() {
          sb.toggle = !sb.toggle;
      };
    }
  }

})();
