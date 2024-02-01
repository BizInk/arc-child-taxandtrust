<?php namespace Luca\Theme;

function get_header_image_url() {

    if (is_singular('landing-page')) {
      $image = \Luca\Theme\Utils\get_acf_image(get_field('header_hero_image'), 'luca_foto_header_hero');

      if ($image) {
        return $image;
      }
    }

    if (is_front_page()) {
        return \Luca\Theme\Utils\get_acf_image(get_field('header_hero_image', get_option( 'page_on_front' )), 'luca_foto_header_hero');
    }

    $imageData = luca()->getModule('featured-image')->getData();
    return \Luca\Theme\Utils\get_acf_image($imageData['image']['data'], 'luca_foto_header_hero');
}
