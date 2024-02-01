<?php

// Register Custom Post Type
function nk_tv_videos()
{

	$labels = array(
		'name'                  => _x('TV Videos', 'Post Type General Name', 'arc-theme'),
		'singular_name'         => _x('TV Video', 'Post Type Singular Name', 'arc-theme'),
		'menu_name'             => __('TV Videos', 'arc-theme'),
		'name_admin_bar'        => __('TV Videos', 'arc-theme'),
		'archives'              => __('Item Videos', 'arc-theme'),
		'attributes'            => __('Item Videos', 'arc-theme'),
		'parent_item_colon'     => __('Parent Video:', 'arc-theme'),
		'all_items'             => __('All Videos', 'arc-theme'),
		'add_new_item'          => __('Add New Video', 'arc-theme'),
		'add_new'               => __('Add New', 'arc-theme'),
		'new_item'              => __('New Video', 'arc-theme'),
		'edit_item'             => __('Edit Video', 'arc-theme'),
		'update_item'           => __('Update Video', 'arc-theme'),
		'view_item'             => __('View Video', 'arc-theme'),
		'view_items'            => __('View Videos', 'arc-theme'),
		'search_items'          => __('Search Videos', 'arc-theme'),
		'not_found'             => __('Not found', 'arc-theme'),
		'not_found_in_trash'    => __('Not found in Trash', 'arc-theme'),
		'featured_image'        => __('Featured Image', 'arc-theme'),
		'set_featured_image'    => __('Set featured image', 'arc-theme'),
		'remove_featured_image' => __('Remove featured image', 'arc-theme'),
		'use_featured_image'    => __('Use as featured image', 'arc-theme'),
		'insert_into_item'      => __('Insert into Video', 'arc-theme'),
		'uploaded_to_this_item' => __('Uploaded to this item', 'arc-theme'),
		'items_list'            => __('Videos list', 'arc-theme'),
		'items_list_navigation' => __('Videos list navigation', 'arc-theme'),
		'filter_items_list'     => __('Filter Videos list', 'arc-theme'),
	);
	$args = array(
		'label'                 => __('TV Video', 'arc-theme'),
		'description'           => __('The videos that are for the TV Section & Page', 'arc-theme'),
		'labels'                => $labels,
		'supports'              => array('title', 'editor', 'thumbnail'),
		'taxonomies'            => array('category', 'post_tag'),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 10,
		'menu_icon'             => 'dashicons-format-video',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => 'videos',
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'post',
	);
	register_post_type('video', $args);
}
add_action('init', 'nk_tv_videos', 0);

require 'plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;
$myUpdateChecker = PucFactory::buildUpdateChecker('https://github.com/BizInk/arc-child-taxandtrust',__FILE__,'arc-child-taxandtrust');
// Set the branch that contains the stable release.
$myUpdateChecker->setBranch('master');
// Using a private repository, specify the access token 
$myUpdateChecker->setAuthentication('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');