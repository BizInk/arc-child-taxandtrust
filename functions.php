<?php

// Register Custom Post Type
function tv_videos()
{

	$labels = array(
		'name'                  => _x('Videos', 'Post Type General Name', 'arc-child-taxandtrust'),
		'singular_name'         => _x('Video', 'Post Type Singular Name', 'arc-child-taxandtrust'),
		'menu_name'             => __('Videos', 'arc-child-taxandtrust'),
		'name_admin_bar'        => __('Videos', 'arc-child-taxandtrust'),
		'archives'              => __('Videos Archives', 'arc-child-taxandtrust'),
		'attributes'            => __('Videos Attributes', 'arc-child-taxandtrust'),
		'parent_item_colon'     => __('Parent Video:', 'arc-child-taxandtrust'),
		'all_items'             => __('All Videos', 'arc-child-taxandtrust'),
		'add_new_item'          => __('Add New Video', 'arc-child-taxandtrust'),
		'add_new'               => __('Add New', 'arc-child-taxandtrust'),
		'new_item'              => __('New Video', 'arc-child-taxandtrust'),
		'edit_item'             => __('Edit Video', 'arc-child-taxandtrust'),
		'update_item'           => __('Update Video', 'arc-child-taxandtrust'),
		'view_item'             => __('View Video', 'arc-child-taxandtrust'),
		'view_items'            => __('View Videos', 'arc-child-taxandtrust'),
		'search_items'          => __('Search Videos', 'arc-child-taxandtrust'),
		'not_found'             => __('Not found', 'arc-child-taxandtrust'),
		'not_found_in_trash'    => __('Not found in Trash', 'arc-child-taxandtrust'),
		'featured_image'        => __('Featured Image', 'arc-child-taxandtrust'),
		'set_featured_image'    => __('Set featured image', 'arc-child-taxandtrust'),
		'remove_featured_image' => __('Remove featured image', 'arc-child-taxandtrust'),
		'use_featured_image'    => __('Use as featured image', 'arc-child-taxandtrust'),
		'insert_into_item'      => __('Insert into Video', 'arc-child-taxandtrust'),
		'uploaded_to_this_item' => __('Uploaded to this item', 'arc-child-taxandtrust'),
		'items_list'            => __('Videos list', 'arc-child-taxandtrust'),
		'items_list_navigation' => __('Videos list navigation', 'arc-child-taxandtrust'),
		'filter_items_list'     => __('Filter Videos list', 'arc-child-taxandtrust'),
	);
	$args = array(
		'label'                 => __('Videos', 'arc-child-taxandtrust'),
		'description'           => __('The videos that are for the TV Section & Page', 'arc-child-taxandtrust'),
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
add_action('init', 'tv_videos', 0);

require 'plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;
$myUpdateChecker = PucFactory::buildUpdateChecker('https://github.com/BizInk/arc-child-taxandtrust',__FILE__,'arc-child-taxandtrust');
// Set the branch that contains the stable release.
$myUpdateChecker->setBranch('master');
// Using a private repository, specify the access token 
$myUpdateChecker->setAuthentication('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');