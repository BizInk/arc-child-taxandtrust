<?php namespace Luca\Theme;

// Add fields to Luca's existing field groups
function header_minihero_field($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/settings-header-mini-hero.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__website_settings__luca_global', __NAMESPACE__ . '\header_minihero_field');

function admin_logo_white($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/admin-logo-white.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__logo__luca_logo', __NAMESPACE__ . '\admin_logo_white');

function admin_logo_footer($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/admin-logo-footer.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__logo__luca_logo', __NAMESPACE__ . '\admin_logo_footer');

// Column images
function columns_style_field($field_group) {
  $field_group['fields'][2]['sub_fields'][2] = require('fields/column-images.php');
  unset($field_group['fields'][2]['sub_fields'][0]);
  unset($field_group['fields'][2]['sub_fields'][1]);
  unset($field_group['fields'][0]);
  unset($field_group['fields'][1]);
  return $field_group;
}
add_filter('luca/columns/fields/blocks/content', __NAMESPACE__ . '\\columns_style_field');

// Testimonial background
function testimonials_background($field_group) {
  $field_group['fields'][3] = require('fields/testimonials-background.php');
  return $field_group;
}
add_filter('luca/testimonials/fields/blocks/content', __NAMESPACE__ . '\\testimonials_background');

function testimonials_background_data($data, $block) {
  $data['background_image'] = $block->getField('testimonials_background_image');
  return $data;
}
add_filter('luca/testimonials/blocks/data', __NAMESPACE__ . '\\testimonials_background_data', 10, 2);

function footer_title_field($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/settings-footer-title.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__settings__luca_admin', __NAMESPACE__ . '\footer_title_field');

function footer_newsletter_field($field_group) {
  $field_group['fields'][] = require('fields/settings-footer-newsletter.php');
  return $field_group;
}
add_filter('luca/acf/field_group/group__settings__luca_admin', __NAMESPACE__ . '\footer_newsletter_field');

function footer_infobar_field($field_group) {
  $field_group['fields'] = array_merge($field_group['fields'], require('fields/global-footer-infobar.php'));
  return $field_group;
}
add_filter('luca/acf/field_group/group__website_settings__luca_global', __NAMESPACE__ . '\footer_infobar_field');

function header_hero() {
  acf_add_local_field_group(require('fields/global-header-hero.php'));
}
header_hero();

/**
 * Add columns type2 block
 */
function columns_type_2() {
  acf_add_local_field_group(require('fields/front-columns-type-2.php'));
}
columns_type_2();

/**
 * Add newsletter block
 */
function newsletter() {
  acf_add_local_field_group(require('fields/front-newsletter.php'));
}
newsletter();

/**
 * Add background columns block
 */
function columns_background() {
  acf_add_local_field_group(require('fields/front-columns-background.php'));
}
columns_background();

/**
 * Add file list page
 */
function file_list() {
  acf_add_local_field_group(require('fields/file-list.php'));
}
file_list();

/**
 * Services template
 */
function services_fields() {
  require('fields/services-fields.php');
}
services_fields();

// Services
require('fields/services.php');

// hero video option check
function hero_video_check() {
  acf_add_local_field_group(require('fields/global-header-hero-check.php'));
}
hero_video_check();


require_once('fields/tv.php');