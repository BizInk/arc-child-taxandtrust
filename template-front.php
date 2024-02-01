<?php
/**
 * Template Name: Front page
 */
?>

<?php luca()->getModule('columns')->renderBlock('front-columns', 'default', ['wrapper' => 'section section-frontColumns', 'container' => true, 'modifier' => 'mod-flowOverTop']); ?>

<?php luca()->getModule('banners')->renderBlock('front-banner0', 'default', ['wrapper' => 'section section-frontBanner0']); ?>

<?php luca()->getModule('banners')->renderBlock('front-banner2', 'default', ['wrapper' => 'section section-frontBanner2']); ?>

<?php get_template_part('templates/front/columns-background'); ?>

<?php get_template_part('templates/front/nktv'); ?>

<?php luca()->getModule('banners')->renderBlock('front-banner', 'default', ['wrapper' => 'section section-frontBanner']); ?>

<?php luca()->getModule('banners')->renderBlock('front-banner3', 'default', ['wrapper' => 'section section-frontBanner3']); ?>

<?php get_template_part('templates/front/newsletter'); ?>

<?php //luca()->getModule('blog')->renderBlock('front-blog', 'default', ['wrapper' => 'section section-frontBlog', 'container' => true]); ?>

<?php //luca()->getModule('fixed-price-packages')->renderBlock('front-packages', 'default', ['wrapper' => 'section section-frontPackages', 'container' => true]); ?>

<?php luca()->getModule('testimonials')->renderBlock('front-testimonials', 'default', ['wrapper' => 'section section-frontTestimonials', 'container' => false]); ?>

<?php luca()->getModule('logos')->renderBlock('front-logos', 'default', ['wrapper' => 'section section-frontLogos', 'container' => true]); ?>
