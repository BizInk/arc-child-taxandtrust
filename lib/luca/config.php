<?php

add_action('after_setup_theme', function () {
  remove_theme_support('luca-resources');
  remove_theme_support('luca-xero-resources');
  remove_theme_support('luca-covid-19-resources');
  add_theme_support('luca-dynamic-resources');
  add_theme_support('luca-disclaimer');
});

/**
 * Registered image sizes
 */
add_image_size('luca_hero', 1920, 500, true);
add_image_size('luca_banner', 1920, 400, true);
add_image_size('luca_featured_image', 1920, 400, true);
add_image_size('luca_logos_logo', 180, 180);
add_image_size('luca_blog_featured', 720, 422, true);
add_image_size('luca_testimonial_logo', 150, 150);
add_image_size('luca_team_featured', 380, 380, true);
add_image_size('luca_columns', 378, 378, true);

// Theme-specific
add_image_size('luca_foto_header_hero', 1920, 1100, true);
add_image_size('luca_foto_footer_infobar', 1920, 400, true);
add_image_size('luca_testimonials_background', 1920, 1000, true);

/**
 * Page template configuration
 */
add_action('luca_init_after', function () {

  /**
   * Front page
   */
  luca()->getModule('columns')->registerContentBlock('front-columns', '', 'front', 1);
  luca()->getModule('banners')->registerContentBlock('front-banner0', '', 'front', 2);
  luca()->getModule('banners')->registerContentBlock('front-banner2', '', 'front', 3);
  // 4 is columns with background
  luca()->getModule('banners')->registerContentBlock('front-banner', '', 'front', 5);
  luca()->getModule('banners')->registerContentBlock('front-banner3', '', 'front', 6);
  // 7 is newsletter
  luca()->getModule('testimonials')->registerContentBlock('front-testimonials', '', 'front', 8);
  luca()->getModule('logos')->registerContentBlock('front-logos', '', 'front', 9);


  /**
   * Landing page
   */
  luca()->getModule('columns')->registerContentBlock('landing-columns', '', ['post_type' => 'landing-page'], 0);
  luca()->getModule('textarea')->registerContentBlock('landing-textarea', '', ['post_type' => 'landing-page'], 1);
  luca()->getModule('testimonials')->registerContentBlock('landing-testimonials', '', ['post_type' => 'landing-page'], 10);
  luca()->getModule('logos')->registerContentBlock('landing-logos', '', ['post_type' => 'landing-page'], 20);

  /**
   *  Packages page
   */
  luca()->getModule('fixed-price-packages')->registerContentBlock('packages-page', '', 'fixed-price-packages', 1);

  /**
   * Team page
   */
  luca()->getModule('team-members')->registerContentBlock('team-page', '', 'team', 1);

  /**
   * Testimonials page
   */
  luca()->getModule('testimonials')->registerContentBlock('testimonials-page', '', 'testimonials', 1);

  /**
   * How we help page
   */
  luca()->getModule('textarea')->registerContentBlock('help-textarea-1', '', 'help', 0);
  luca()->getModule('textarea')->registerContentBlock('help-textarea-2', '', 'help', 10);
  luca()->getModule('testimonials')->registerContentBlock('help-testimonials', '', 'help', 20);


  /**
   * Contact page
   */
  luca()->getModule('maps')->registerContentBlock('contact-map', '', 'contact', 0);

  /**
   * Disclaimer
   */
  luca()->getModule('disclaimer')->registerContentBlock('disclaimer', '', ['post_type' => 'not_exists'], 100);
});


function remove_editor_init()
{

  if (!is_admin()) {
    return;
  }

  if (isset($_GET['post']) && 'template-help.php' === get_page_template_slug($_GET['post'])) {
    remove_post_type_support('page', 'editor');
  }

}

add_action('init', 'remove_editor_init', PHP_INT_MAX);

// add admin only check to fields
//
function acf_admin_only_settings($field)
{
  acf_render_field_setting($field, array(
    'label' => __('Admin Only?'),
    'instructions' => '',
    'name' => 'admin_only',
    'type' => 'true_false',
    'ui' => 1,
  ), true);
}

add_action('acf/render_field_settings', 'acf_admin_only_settings');
