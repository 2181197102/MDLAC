/*
 Template Name: Zinzer - Responsive Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Vector Maps
 */

!function($) {
    "use strict";

    var VectorMap = function() {};

    VectorMap.prototype.init = function() {
        //various examples
        $('#china_mill_zh').vectorMap({
			map : 'china_mill_zh',
			scaleColors : ['#46cd93', '#46cd93'],
			normalizeFunction : 'polynomial',
			hoverOpacity : 0.7,
			hoverColor : false,
			regionStyle : {
				initial : {
					fill : '#d48149'
				}
			},
			 markerStyle: {
                initial: {
                    r: 9,
                    'fill': '#46cd93',
                    'fill-opacity': 0.9,
                    'stroke': '#fff',
                    'stroke-width' : 7,
                    'stroke-opacity': 0.4
                },

                hover: {
                    'stroke': '#fff',
                    'fill-opacity': 1,
                    'stroke-width': 1.5
                }
            },
			backgroundColor : 'transparent',
		});

  },
    //init
    $.VectorMap = new VectorMap, $.VectorMap.Constructor = VectorMap
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.VectorMap.init()
}(window.jQuery);
