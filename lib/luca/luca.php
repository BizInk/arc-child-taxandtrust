<?php

/**
 * Menus
 */

add_filter('luca/global_fields/menus/topbar_navigation/args', function($args) {
  $args['menu_class'] = 'navList';
  return $args;
});

add_filter('luca/global_fields/menus/header_navigation/args', function($args) {
  $args['menu_class'] = 'navList';
  $args['walker'] = new wp_bootstrap_navwalker();
  return $args;
});

add_filter('luca/global_fields/menus/footer_navigation/args', function($args) {
  $args['menu_class'] = 'navList';
  return $args;
});
