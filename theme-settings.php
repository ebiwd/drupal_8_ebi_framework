<?php
/**
 * @file
 * Add custom theme settings to the ZURB Foundation sub-theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter().
 * @param $form
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 */
function ebi_framework_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {

  $form['ebi_framework'] = [
    '#type' => 'fieldset',
    '#title' => t('EBI Framework Settings'),
  ];

  $form['ebi_framework']['enable_header_bar'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable EBI Header bar'),
    '#default_value' => theme_get_setting('enable_header_bar')
  ];

  $form['ebi_framework']['enable_ebi_footer'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable EBI Footer'),
    '#default_value' => theme_get_setting('enable_ebi_footer')
  ];

  $form['ebi_framework']['enable_copyright_footer'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable footer copyrights'),
    '#default_value' => theme_get_setting('enable_copyright_footer')
  ];

  $form['ebi_framework']['header_type'] = [
    '#type' => 'select',
    '#title' => t('Website header type'),
    '#default_value' => theme_get_setting('header_type'),
    '#options' => [
      'simple' => 'Simple with color background',
      'image' => 'Image Background',
    ]
  ];

  $form['ebi_framework']['header_background_color'] = [
    '#type' => 'color',
    '#title' => t('Header background color'),
    '#default_value' => theme_get_setting('header_background_color'),
    '#required' => TRUE,
  ];

  $form['ebi_framework']['header_background_images'] = [
    '#type' => 'managed_file',
    '#upload_location'      => 'public://images',
    '#title' => t('Header background images'),
    '#default_value' => theme_get_setting('header_background_images'),
    '#multiple' => TRUE,
    '#upload_validators' => [
      'file_validate_is_image'      => array(),
      'file_validate_extensions'    => array('gif png jpg jpeg'),
      'file_validate_size'          => array(25600000)
    ],
  ];
}
