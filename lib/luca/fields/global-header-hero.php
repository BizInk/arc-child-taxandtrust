<?php

$admin_only = 1;
if (get_field('video_option', 'options') == 1) {
  $admin_only = 0;
}

function acf_admin_only_prepare_field($field)
{
  if (empty($field['admin_only'])) return $field;
  if (get_field('video_option', 'options') == 0) return false;
  return $field;
}

add_filter('acf/prepare_field', 'acf_admin_only_prepare_field');

return array(
  'key' => 'group__header_hero__luca_foto',
  'title' => 'Header Hero',
  'fields' => array(
    array(
      'key' => 'header_hero_bg',
      'label' => 'Background',
      'name' => 'header_hero_bg',
      'type' => 'radio',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'admin_only' => $admin_only,
      'choices' => array(
        'image' => 'Image',
        'video' => 'Video',
      ),
      'allow_null' => 0,
      'other_choice' => 0,
      'default_value' => '',
      'layout' => 'vertical',
      'return_format' => 'value',
      'save_other_choice' => 0,
    ),
    array(
      'key' => 'field__header_hero_image__luca_foto',
      'label' => 'Image',
      'name' => 'header_hero_image',
      'type' => 'image',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'header_hero_bg',
            'operator' => '==',
            'value' => 'image',
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'return_format' => 'array',
      'preview_size' => 'thumbnail',
      'library' => 'all',
      'min_width' => '',
      'min_height' => '',
      'min_size' => '',
      'max_width' => '',
      'max_height' => '',
      'max_size' => '',
      'mime_types' => 'jpg',
    ),
    array(
      'key' => 'header_hero_video_host',
      'label' => 'Video host',
      'name' => 'header_hero_video_host',
      'type' => 'radio',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'header_hero_bg',
            'operator' => '==',
            'value' => 'video',
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'admin_only' => $admin_only,
      'choices' => array(
        'vimeo' => 'Vimeo or Youtube',
        'wp_media' => 'This site (in the Wordpress media folder)',
      ),
      'allow_null' => 0,
      'other_choice' => 0,
      'default_value' => '',
      'layout' => 'vertical',
      'return_format' => 'value',
      'save_other_choice' => 0,
    ),
    array(
      'key' => 'header_hero_video_wp_webm',
      'label' => 'Video in webm format',
      'name' => 'header_hero_video_wp_webm',
      'type' => 'file',
      'instructions' => 'This field is required',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'header_hero_bg',
            'operator' => '==',
            'value' => 'video',
          ),
          array(
            'field' => 'header_hero_video_host',
            'operator' => '==',
            'value' => 'wp_media',
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'admin_only' => $admin_only,
      'return_format' => 'array',
      'library' => 'all',
      'min_size' => '',
      'max_size' => '',
      'mime_types' => 'webm',
    ),
    array(
      'key' => 'header_hero_video_wp_mp4',
      'label' => 'Video in mp4 format',
      'name' => 'header_hero_video_wp_mp4',
      'type' => 'file',
      'instructions' => 'This field is required',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'header_hero_bg',
            'operator' => '==',
            'value' => 'video',
          ),
          array(
            'field' => 'header_hero_video_host',
            'operator' => '==',
            'value' => 'wp_media',
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'admin_only' => $admin_only,
      'return_format' => 'array',
      'library' => 'all',
      'min_size' => '',
      'max_size' => '',
      'mime_types' => 'mp4',
    ),
    array(
      'key' => 'header_hero_video',
      'label' => 'Video',
      'name' => 'header_hero_video',
      'type' => 'oembed',
      'instructions' => 'Youtube or Vimeo link. For best results use Vimeo. Has to be 16:9 aspect ratio fo fill the hero.',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'header_hero_bg',
            'operator' => '==',
            'value' => 'video',
          ),
          array(
            'field' => 'header_hero_video_host',
            'operator' => '==',
            'value' => 'vimeo',
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'admin_only' => $admin_only,
      'width' => '',
      'height' => '',
    ),
    array(
      'key' => 'header_hero_video_thumb',
      'label' => 'Video snapshot image',
      'name' => 'header_hero_video_thumb',
      'type' => 'image',
      'instructions' => 'Is shown during video loading',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'header_hero_bg',
            'operator' => '==',
            'value' => 'video',
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'admin_only' => $admin_only,
      'return_format' => 'array',
      'preview_size' => 'thumbnail',
      'library' => 'all',
      'min_width' => '',
      'min_height' => '',
      'min_size' => '',
      'max_width' => '',
      'max_height' => '',
      'max_size' => '',
      'mime_types' => 'jpg',
    ),
    array(
      'key' => 'field__header_hero_title__luca_foto',
      'label' => 'Title',
      'name' => 'header_hero_title',
      'type' => 'text',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'field__header_hero_show_hero__luca_foto',
            'operator' => '==',
            'value' => 1,
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'placeholder' => '',
      'prepend' => '',
      'append' => '',
      'maxlength' => '',
      'readonly' => 0,
      'disabled' => 0,
    ),
    array(
      'key' => 'field__header_hero_content__luca_foto',
      'label' => 'Content',
      'name' => 'header_hero_content',
      'type' => 'wysiwyg',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'field__header_hero_show_hero__luca_foto',
            'operator' => '==',
            'value' => 1,
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'tabs' => 'all',
      'toolbar' => 'full',
      'media_upload' => 0,
    ),
    array(
      'key' => 'field__header_hero_text_shadow__luca_foto',
      'label' => 'Text shadow?',
      'name' => 'header_hero_text_shadow',
      'type' => 'true_false',
      'instructions' => 'Use text shadow for title and description?',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'field__header_hero_show_hero__luca_foto',
            'operator' => '==',
            'value' => 1,
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'message' => 'Text shadow',
      'default_value' => 0,
    ),
    array(
      'key' => 'field__header_hero_text_color__luca_foto',
      'label' => 'Text color',
      'name' => 'header_hero_text_color',
      'type' => 'color_picker',
      'instructions' => 'Change the text color',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'field__header_hero_show_hero__luca_foto',
            'operator' => '==',
            'value' => 1,
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '#FFFFFF',
    ),
    array(
      'key' => 'field__header_btn_text__luca_foto',
      'label' => 'Button text',
      'name' => 'header_hero_btn_text',
      'type' => 'text',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'field__header_hero_show_hero__luca_foto',
            'operator' => '==',
            'value' => 1,
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'placeholder' => '',
      'prepend' => '',
      'append' => '',
      'maxlength' => '',
      'readonly' => 0,
      'disabled' => 0,
    ),
    array(
      'key' => 'field__header_hero_btn_url__luca_foto',
      'label' => 'Button URL',
      'name' => 'header_hero_btn_url',
      'type' => 'text',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => array(
        array(
          array(
            'field' => 'field__header_hero_show_hero__luca_foto',
            'operator' => '==',
            'value' => 1,
          ),
        ),
      ),
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'placeholder' => '',
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'post_type',
        'operator' => '==',
        'value' => 'landing-page',
      ),
    ),
    array(
      array(
        'param' => 'page_template',
        'operator' => '==',
        'value' => 'template-front.php',
      ),
    ),
  ),
  'menu_order' => -10,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => '',
);
