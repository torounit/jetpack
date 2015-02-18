(function($) {

	///////////////////////////////////////
	// INIT
	///////////////////////////////////////

	$(document).ready(function () {
		initEvents();
		configFixedElements();
	});

	///////////////////////////////////////
	// FUNCTIONS
	///////////////////////////////////////

	function configFixedElements() {
		var jpTopFrame = $('.frame.top'),
			jpBottomFrame = $('.frame.bottom'),
			$body = $('body');

		$body.scroll(function(){
			if ( 33 > jpTopFrame.offset().top ) {
				jpTopFrame.addClass('fixed');
				$body.addClass('jp-frame-top-fixed');
			}
			if ( 120 <= jpBottomFrame.offset().top ) {
				jpTopFrame.removeClass('fixed');
				$body.removeClass('jp-frame-top-fixed');
			}
		});
	}

	function initEvents() {
		// toggle search and filters at mobile resolution
		$('.filter-search').on('click', function () {
			$(this).toggleClass('active');
			$('.manage-right').toggleClass('show');
			$('.shade').toggle();
		});

		// Toggle all checkboxes
		$('.checkall').on('click', function () {
			$('.table-bordered').find(':checkbox').prop('checked', this.checked);
		});

		// Clicking outside modal, or close X closes modal
		$('.shade, .modal .close').on('click', function ( event ) {
			$('.shade, .modal').hide();
			$('.manage-right').removeClass('show');
			event.preventDefault();
		});

		$('.settings-view').click(function() {
			$('#classic_settings, #benefits, .classic-button, .benefits-button').toggle();
		})

		$( '.benefit-bucket a').click(function(){
			$('.benefit-bucket').removeClass('active');
			$(this).parent().addClass('active');
			$('.benefit-content').hide();
			$('#'+$(this).attr('class')).show();
		})

		$('.j-toggle').click(function(){
			$(this).children('.j-toggle-wrap').toggleClass('j-toggle-enabled');
		})
	}



})(jQuery);
