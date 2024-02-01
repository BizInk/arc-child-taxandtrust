<?php namespace Luca\Theme\Utils;

function get_acf_image($image, $size) {
  if (isset($image['sizes'][$size])) {
    return $image['sizes'][$size];
  } else {
    return $image['url'];
  }

}

/**
 * Detect video provider by url
 * @param string $url
 * @return string
 */
function detect_video_provider($url) {
  $videoProvider = 'unknown';

  if (stripos($url, 'vimeo')) {
    $videoProvider = 'vimeo';
  }

  if (stripos($url, 'youtube')) {
    $videoProvider = 'youtube';
  }

  return $videoProvider;
}

/**
 * get iframe src
 * @param string $iframe
 * @return string
 */
function get_iframe_src($iframe) {
  // use preg_match to find iframe src
  preg_match('/src="(.+?)"/', $iframe, $matches);
  return $matches[1];
}

/**
 * Add extra query params to iframe
 * @param string $iframe
 * @param array $args
 * @return string
 */
function iframe_extra_query_params($iframe, $args)
{
  $src = get_iframe_src($iframe);

  // add extra params to iframe src
  if ($args['query_params']) {
    $new_src = add_query_arg($args['query_params'], $src);

    $iframe = str_replace($src, $new_src, $iframe);
  }

  return $iframe;
}

/**
 * Add extra html attributes to iframe
 * @param string $iframe
 * @param string $attrs
 * @return string
 */
function iframe_extra_html_attributes($iframe, $attrs) {
  if ($attrs) {
    $iframe = str_replace('></iframe>', ' ' . $attrs . '></iframe>', $iframe);
  }

  return $iframe;
}

/**
 * Add extra attributes to iframe video to remove ui elements and make autoplay possible
 * @param string $iframe
 * @return string
 */
function make_background_iframe_video($iframe) {

  $provider = detect_video_provider(get_iframe_src($iframe));

  if ($provider == 'vimeo') {
    $iframe = iframe_extra_query_params($iframe, [
      'query_params' => [
        'autoplay' => 1,
        'loop' => 1,
        'title' => 0,
        'byline' => 0,
        'portrait' => 0,
        'background' => 1,
        'controls' => 0,
      ]
    ]);
  }

  if ($provider == 'youtube') {
    $iframe = iframe_extra_query_params($iframe, [
      'query_params' => [
        'controls' => 0,
        'autoplay' => 1,
        'loop' => 1,
        'mute' => 1,
        'showinfo' => 0,
        'modestbranding' => 1,
        'autohide' => 1,
        'playlist' => getYoutubeIdFromIframe($iframe),
      ]
    ]);
  }

  return $iframe;
}

/**
 * Get Youtube video ID from iframe
 * @param string $iframe
 * @return string
 */
function getYoutubeIdFromIframe($iframe) {

  $url = get_iframe_src($iframe);

  preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $url, $match);

  return $match[1];
}
