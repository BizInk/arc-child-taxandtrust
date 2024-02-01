<?php
/**
 * Template Name: TV
 */
//do_action('luca/theme/page-header'); ?>

<div class="section tvsection">
  <div class="container">
    <div class="tvWrapper">
      <?php if(get_field('block_title')): ?>
        <div class="blockHeader">
          <h2 class="blockHeader_title ">
            <?php echo get_field('block_title'); ?>
          </h2>
        </div>
      <?php endif; 
      $featured = get_field('featured_video');
      if($featured): 
      ?>
        <div class="row">
          <div class="col-sm-6">
            <div class="videoPlayer videoPlayer-big" data-title="<?php echo $featured->post_title; ?>" data-video='<?php echo get_field('video', $featured->ID); ?>'>
              <?php $thumbnail = get_field('thumbnail', $featured->ID); ?>
              <?php if($thumbnail): ?>
                <div class="vthumbnail">
                  <img width="400" src="<?php echo $thumbnail['url']; ?>" alt="<?php echo $featured->post_title; ?>" />
                </div>
              <?php endif; ?>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="u-editorContent">
              <h2><?php echo $featured->post_title; ?></h2>
              <div class="videoPlayer_content">
                <?php echo get_field('featured_video_content'); ?>
              </div>
            </div>
          </div>
        </div>
      <?php endif; 
      $videos = get_field('videos');
      if($videos):
      ?>
        <div class="section">
          <div class="row">
            <?php 
            foreach ($videos as $video): 
              setup_postdata($video);
            ?>
              <div class="col-sm-4 col-md-4 col-verticalSpacing u-smartClear">
                <div class="videoPlayer" data-title="<?php echo $video->post_title; ?>" data-video='<?php echo get_field('video', $video->ID); ?>'>
                  <?php $thumbnail = get_field('thumbnail', $video->ID); ?>
                  <?php if($thumbnail): ?>
                    <img width="380" src="<?php echo $thumbnail['url']; ?>" alt="<?php echo $video->post_title; ?>" />
                  <?php endif; ?>
                </div>
                <div class="videoPlayer_title u-editorContent">
                  <?php echo $video->post_title; ?>
                </div>
              </div>
            <?php 
            endforeach;
            wp_reset_postdata();
            ?>
          </div>
        </div>
      <?php endif; ?>
    </div>
  </div> <!-- /.container -->
</div> <!-- /.section -->

<div class="modal fade tv-modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title tv-modal-title"></h4>
      </div>
      <div class="modal-body">
        <div class="embed-responsive embed-responsive-16by9 tv-modal-body">
        
        </div>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
