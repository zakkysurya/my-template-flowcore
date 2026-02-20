$(document).ready(function() {
    'use strict';

    // Page Loader Logic
    const $loader = $('#page-loader');

    // Hide loader when page is fully loaded
    $(window).on('load', function() {
        setTimeout(function() {
            $loader.fadeOut(400, function() {
                $(this).addClass('hidden').removeAttr('style');
            });
        }, 300);
    });

    // Show loader on page transition (internal links)
    $(document).on('click', 'a', function(e) {
        const href = $(this).attr('href');
        const target = $(this).attr('target');

        // Logic to detect if it's an internal page link
        if (href && 
            href !== '#' && 
            !href.startsWith('#') && 
            !href.startsWith('javascript:') && 
            (!target || target === '_self') &&
            !$(this).data('bs-toggle') &&
            !$(this).data('bs-dismiss') &&
            !$(this).hasClass('no-loader')) {
            
            // Check if the link is to a different page or same page
            const currentUrl = window.location.href.split('#')[0];
            const targetUrl = new URL(href, window.location.origin).href.split('#')[0];

            if (currentUrl !== targetUrl) {
                e.preventDefault();
                $loader.removeClass('hidden').fadeIn(300, function() {
                    window.location.href = href;
                });
            }
        }
    });

    // Sidebar Toggle Logic for 3-Level Nesting
    $('.nav-item > .nav-link').on('click', function(e) {
        // Check if it has a submenu
        if ($(this).next('.nav-treeview').length) {
            e.preventDefault();
            
            const $parent = $(this).parent();
            const $submenu = $(this).next('.nav-treeview');
            
            if ($parent.hasClass('menu-open')) {
                $submenu.slideUp(300, function() {
                    $parent.removeClass('menu-open');
                });
            } else {
                // Close other open menus at the same level (Optional: Accordion style)
                $parent.siblings('.menu-open').children('.nav-treeview').slideUp(300, function() {
                    $(this).parent().removeClass('menu-open');
                });

                $submenu.slideDown(300, function() {
                    $parent.addClass('menu-open');
                });
            }
        }
    });

    // Mobile Bottom Nav Active State
    $('.mobile-nav-item').on('click', function() {
        $('.mobile-nav-item').removeClass('active');
        $(this).addClass('active');
        // Logic to switch views or open offcanvas could go here
    });

    // Mobile Offcanvas Trigger
    $('#mobile-menu-btn').on('click', function(e) {
        e.preventDefault();
        // Use Bootstrap 5 Offcanvas API if available, or simple toggle
        // For this template, we assume an offcanvas element exists
        var offcanvasElement = document.getElementById('sidebarOffcanvas');
        if (offcanvasElement) {
            var bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
            bsOffcanvas.show();
        }
    });

    // Desktop Sidebar Collapse
    $('#sidebar-toggle').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-collapsed');
    });

    // SweetAlert2 Toast Mixin
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    // Global helper for notifications
    window.notify = function(icon, title) {
        Toast.fire({
            icon: icon,
            title: title
        });
    };

    // Logout Confirmation Logic
    $('.btn-logout').on('click', function(e) {
        e.preventDefault();
        
        Swal.fire({
            title: 'Sign Out?',
            text: "Are you sure you want to end your session?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4a6fa5',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign Out',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // Optional: Show loading state before redirect
                let timerInterval;
                Swal.fire({
                  title: 'Signing Out...',
                  html: 'Redirecting to login page.',
                  timer: 800,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading()
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                  window.location.href = 'login.html';
                });
            }
        });
    });
});
