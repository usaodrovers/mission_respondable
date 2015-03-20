<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */


/**
 * Override or insert variables into the maintenance page template.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("maintenance_page" in this case.)
 */
/* -- Delete this line if you want to use this function
function mission_respondable_preprocess_maintenance_page(&$variables, $hook) {
  // When a variable is manipulated or added in preprocess_html or
  // preprocess_page, that same work is probably needed for the maintenance page
  // as well, so we can just re-use those functions to do that work here.
  mission_respondable_preprocess_html($variables, $hook);
  mission_respondable_preprocess_page($variables, $hook);
}
// */

/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
function mission_respondable_preprocess_html(&$variables, $hook) {
  drupal_add_js('http://use.typekit.com/cgw5wnf.js');
  drupal_add_js('try{Typekit.load();}catch(e){}', array('type' => 'inline'));
    drupal_add_js('/*<![CDATA[*/
    (function() {
      var sz = document.createElement("script"); sz.type = "text/javascript"; sz.async = true;
      sz.src = "//us1.siteimprove.com/js/siteanalyze_6013742.js";
      var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(sz, s);
    })();
/*]]>*/', array('type' => 'inline'));
  drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/quicktab-select.js');
  drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/qtabborder.js');
  $pageID = arg(0);
  $otherPageID = arg(1);
  if ($pageID == 'future-students' || $otherPageID == '38621' || $otherPageID =='39241') {
    drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/fscodes.js');
  }
  if ($otherPageID == 'athletic-staff') {
    drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/athleticsDirectoryRewrite.js');
  }
  drupal_add_library('system', 'ui.accordion');
  drupal_add_library('system', 'ui.accordion');
  drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/alignmentShift.js');
  drupal_add_css(libraries_get_path('slick-master') . '/slick/slick.css');
  drupal_add_js(libraries_get_path('slick-master') . '/slick/slick.js');
  drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/slick-slider.js');
  drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/slider-nav.js');

  if (isset($_GET['q'])) {
    $path = drupal_get_path_alias($_GET['q']);
    if (preg_match('#gallery#', $path)  ||
        preg_match('#gallery\/about#', $path) ||
        preg_match('#gallery\/directions#', $path)) {
      drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/buttonCollapse.js');
    }
  }

  // The body tag's classes are controlled by the $classes_array variable. To
  // remove a class from $classes_array, use array_diff().
  //$variables['classes_array'] = array_diff($variables['classes_array'], array('class-to-remove'));
}
// */

/**
 * Override or insert variables into the page templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */
function mission_respondable_preprocess_page(&$variables, $hook) {
 // if this is a panel page, add template suggestions
  if($panel_page = page_manager_get_current_page()) {
    // add a generic suggestion for all panel pages
    $variables['theme_hook_suggestions'][] = 'page__panel';

    // add the panel page machine name to the template suggestions
    $variables['theme_hook_suggestions'][] = 'page__' . $panel_page['name'];

    //add a body class for good measure
    $body_classes[] = 'page-panel';
  }
}
/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */
/* -- Delete this line if you want to use this function
function mission_respondable_preprocess_node(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // Optionally, run node-type-specific preprocess functions, like
  // mission_respondable_preprocess_node_page() or STARTERKIT_preprocess_node_story().
  $function = __FUNCTION__ . '_' . $variables['node']->type;
  if (function_exists($function)) {
    $function($variables, $hook);
  }
}
// */

/**
 * Override or insert variables into the comment templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function mission_respondable_preprocess_comment(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the region templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
/* -- Delete this line if you want to use this function
function mission_respondable_preprocess_region(&$variables, $hook) {
  // Don't use Zen's region--sidebar.tpl.php template for sidebars.
  //if (strpos($variables['region'], 'sidebar_') === 0) {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('region__sidebar'));
  //}
}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
 /*global $user;
 $roles = $user->roles;

 if (!in_array('administrator', $roles)){
   print_r($block_id);
 }*/
function mission_respondable_preprocess_block(&$variables, $hook) {
   $block_id = $variables['block']->module . '-' . $variables['block']->delta;
   $classes = &$variables['classes_array'];

   /* Add classes based on the block delta. */
   switch ($block_id) {
   case 'views--exp-search-search':
     $classes[] = 'search-block';
     break;
   }

  // Add a count to all the blocks in the region.
  // $variables['classes_array'][] = 'count-' . $variables['block_id'];

  // By default, Zen will use the block--no-wrapper.tpl.php for the main
  // content. This optional bit of code undoes that:
  //if ($variables['block_html_id'] == 'block-system-main') {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('block__no_wrapper'));
  //}
}
// */

function mission_respondable_form_alter(&$form, &$form_state, $form_id) {
  global $base_url;
  $site_path = $base_url . base_path();
  //drupal_set_message('<pre>'. print_r($form, TRUE) .'</pre>');
  //if ($form_id == 'views_exposed_form' && $form['#id'] == 'views-exposed-form-search-search') {
  if ($form_id == 'views_exposed_form' && $form['form_id']['#id'] == 'edit-views-exposed-form') {
      $form['search_api_views_fulltext']['#size'] = 15;  // define size of the textfield
      $form['submit'] = array('#type' => 'image_button', '#src' =>  $site_path . path_to_theme() . '/images/searchICON.png');

      // Alternative (HTML5) placeholder attribute instead of using the javascript
      $form['search_api_views_fulltext']['#attributes']['placeholder'] = t('Search USAO');
  }
  switch ($form_id) {
    case 'webform_client_form_38713':
      $form['webform_client_form_38713']['#after_build'] = array('load_my_javascript');
      break;
  }
}

function load_my_javascript($element){
  drupal_add_js(drupal_get_path('theme', 'mission_respondable') . '/js/printshop.js');
}

function mission_respondable_menu_tree__menu_future_students_resources($variables) {
  return '<ul class="menu menu__vertical">' . $variables['tree'] . '</ul>';
}
