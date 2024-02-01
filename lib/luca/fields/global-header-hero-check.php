<?php return array (
  'key' => 'group_hero_video_display',
  'title' => 'Hero video fields display',
  'fields' => array (
    array(
      'key' => 'video_option',
      'label' => 'Show video option',
      'name' => 'video_option',
      'type' => 'true_false',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'message' => '',
      'default_value' => 0,
      'ui' => 1,
      'ui_on_text' => 'Show',
      'ui_off_text' => 'Hide',
    )
  ),
  'location' => array(
    array(
      array(
        'param' => 'options_page',
        'operator' => '==',
        'value' => 'luca-settings',
      ),
      array(
        'param' => 'current_user_role',
        'operator' => '==',
        'value' => 'administrator',
      ),
    ),
  ),
  'menu_order' => 1000,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => '',
);
