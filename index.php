<?php
/*
Plugin Name: JJ Custom Accessibility Containers
Description: Allows blocks to be nested inside a set of landmark tags to improve accessibility for visitors who use screen readers
Version: 1.0
Author: Joanna
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Jjcmc {
  function __construct() {
    add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
  }

  function adminAssets() {
    wp_enqueue_script('mainContainer', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'));
  }
}

$jjcmc = new Jjcmc();