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
    }
  };

})(jQuery, Drupal);
