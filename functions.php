<?php
if (!defined('ABSPATH')) exit;

// Enqueue scripts and styles
function segucargo_enqueue_scripts() {
    // Enqueue main CSS
    wp_enqueue_style(
        'segucargo-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );

    // Enqueue React bundle
    wp_enqueue_script(
        'segucargo-react',
        get_template_directory_uri() . '/dist/assets/index.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );

    // Add WordPress data to window object
    wp_localize_script(
        'segucargo-react',
        'wpData',
        array(
            'restUrl' => esc_url_raw(rest_url()),
            'nonce' => wp_create_nonce('wp_rest'),
            'themeUrl' => get_template_directory_uri(),
            'siteUrl' => get_site_url()
        )
    );
}
add_action('wp_enqueue_scripts', 'segucargo_enqueue_scripts');

// Register custom post types and taxonomies
function segucargo_register_post_types() {
    // Services
    register_post_type('service', array(
        'labels' => array(
            'name' => 'Servicios',
            'singular_name' => 'Servicio'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-cart'
    ));

    // Container Types
    register_post_type('container', array(
        'labels' => array(
            'name' => 'Contenedores',
            'singular_name' => 'Contenedor'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-archive'
    ));

    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => 'Testimonios',
            'singular_name' => 'Testimonio'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-format-quote'
    ));
}
add_action('init', 'segucargo_register_post_types');

// Add ACF fields
function segucargo_acf_fields() {
    if (function_exists('acf_add_local_field_group')):
        // Services Fields
        acf_add_local_field_group(array(
            'key' => 'group_services',
            'title' => 'Detalles del Servicio',
            'fields' => array(
                array(
                    'key' => 'field_service_icon',
                    'label' => 'Icono',
                    'name' => 'icon',
                    'type' => 'select',
                    'choices' => array(
                        'ship' => 'Barco',
                        'truck' => 'Camión',
                        'plane' => 'Avión',
                        'package' => 'Paquete'
                    )
                ),
                array(
                    'key' => 'field_service_features',
                    'label' => 'Características',
                    'name' => 'features',
                    'type' => 'repeater',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_feature_text',
                            'label' => 'Texto',
                            'name' => 'text',
                            'type' => 'text'
                        )
                    )
                )
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'service'
                    )
                )
            )
        ));

        // Container Fields
        acf_add_local_field_group(array(
            'key' => 'group_containers',
            'title' => 'Especificaciones del Contenedor',
            'fields' => array(
                array(
                    'key' => 'field_container_dimensions',
                    'label' => 'Dimensiones',
                    'name' => 'dimensions',
                    'type' => 'group',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_length',
                            'label' => 'Largo (m)',
                            'name' => 'length',
                            'type' => 'number'
                        ),
                        array(
                            'key' => 'field_width',
                            'label' => 'Ancho (m)',
                            'name' => 'width',
                            'type' => 'number'
                        ),
                        array(
                            'key' => 'field_height',
                            'label' => 'Alto (m)',
                            'name' => 'height',
                            'type' => 'number'
                        )
                    )
                ),
                array(
                    'key' => 'field_container_capacity',
                    'label' => 'Capacidad (m³)',
                    'name' => 'capacity',
                    'type' => 'number'
                ),
                array(
                    'key' => 'field_container_max_weight',
                    'label' => 'Peso Máximo (kg)',
                    'name' => 'max_weight',
                    'type' => 'number'
                )
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'container'
                    )
                )
            )
        ));

        // Testimonial Fields
        acf_add_local_field_group(array(
            'key' => 'group_testimonials',
            'title' => 'Detalles del Testimonio',
            'fields' => array(
                array(
                    'key' => 'field_testimonial_company',
                    'label' => 'Empresa',
                    'name' => 'company',
                    'type' => 'text'
                ),
                array(
                    'key' => 'field_testimonial_position',
                    'label' => 'Cargo',
                    'name' => 'position',
                    'type' => 'text'
                )
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'testimonial'
                    )
                )
            )
        ));
    endif;
}
add_action('acf/init', 'segucargo_acf_fields');

// Add theme support
function segucargo_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'segucargo_theme_support');