/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.ebiFoundation = {
    attach: function (context, settings) {
      //alert("I'm alive!");
      $(document).foundationExtendEBI();
      // Add active class for parent dropdown menu.
      $('ul.menu.dropdown li.is-dropdown-submenu-parent a.is-active').parents('li.is-dropdown-submenu-parent').find('> a').addClass('is-active');
      $('.responsive-menu-expand').once().click(function() {
        console.log('asdadsad');
        $('.menu-wrapper').toggleClass('hide-for-small-only');
      });
    }
  };

})(jQuery, Drupal);
