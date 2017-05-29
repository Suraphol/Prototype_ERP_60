(function($){
    $.widget("ui.combobox", {
        _create: function(){
//            var self = this, select = this.element.hide(), selected = select.children(":selected"), value = selected.val() ? selected.text() : "";
        	var self = this, select = this.element.hide(), selected = select.children(":selected"), value = selected.text(); // ทำให้เมื่อเริ่มต้นสร้าง autoCombobox สามารถแสดง select option ตัวที่ไม่มีค่าได้
        	var eleCSS = this.element[0].className;
			var maxRepSize = 100; // maximum response size
            var input = this.input = $("<input>").insertAfter(select).val(value).autocomplete({
                delay: 500,
                minLength: 0,
                source: function( request, response ) {
                    var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
                    var select_el = select.get(0); // get dom element
                    var rep = new Array(); // response array
                    // simple loop for the options
                    for (var i = 0; i < select_el.length; i++) {
                        var text = select_el.options[i].text;
//                        if ( select_el.options[i].value && ( !request.term || matcher.test(text) ) )
                        if ( !request.term || matcher.test(text) ) // ทำให้สามารถแสดง option ตัวที่ไม่มีค่าได้
                            // add element to result array
                            rep.push({
                                label: text.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" +
                                        $.ui.autocomplete.escapeRegex(request.term) +
                                        ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>"), // no more bold
                                value: text,
                                option: select_el.options[i]
                            });
                        if ( rep.length > maxRepSize ) {
                            rep.push({
                                label: "... เพิ่มเติม",
                                value: "maxRepSizeReached",
                                option: ""
                            });
                            break;
                        }
                     }
                     input.isFullMenu = false;
                     // send response
                     response( rep );
                },    
                open: function(event, ui) {
                	maxRepSize = 100; // reset max options
                },
                select: function( event, ui ) {
                    if ( ui.item.value == "maxRepSizeReached") {
                    	input.val('');
                    	return false;
                    } else {
                    	ui.item.option.selected = true;
                        self._trigger("selected", event, {
                            item: ui.item.option
                        });
                        // 13/01/55 Myexzolo
    					if($(this)){
    						if(ui.item.option.value != ""){
    							$(this).removeClass("validate");
    						}else{
    							$(this).addClass("validate");
    						}
    					}
                        // 4/11/54 nut : เพิ่มเข้ามา ให้สามารถใช้ $.change() ได้
                        select.trigger("change");
                        ////////////////////////////////////////////
                    }
                    maxRepSize = 100; // reset max options
                },
                focus: function( event, ui ) {
                    if ( ui.item.value == "maxRepSizeReached") {
                        //return false;
                    	maxRepSize += 100;
                    	$(this).autocomplete("search");
                    }
                },
                change: function(event, ui){
                    if (!ui.item) {
                        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i"), valid = false;
                        select.children("option").each(function(){
                            if ($(this).text().match(matcher)) {
                                this.selected = valid = true;
//                                return false;
                            }
                        });
                        if (!valid || $(this).val() == "") {
                            // remove invalid value, as it didn't match anything
                            $(this).val("");
                            select.val("");
                            input.data("autocomplete").term = "";
//                            return false;
                        } 
                        select.trigger("change"); // edit 13/7/55 12:32
                        return false;
                    }
                }
            }).addClass("ui-widget ui-widget-content ui-corner-left " + eleCSS);
			// Oak Comment .addClass("ui-widget ui-widget-content ui-corner-left");
            
// comment this line at 13/7/55 12:32         input.change(function(){select.trigger("change");});
            input.data("autocomplete")._renderItem = function(ul, item){
                return $("<li></li>").data("item.autocomplete", item).append("<a>" + item.label + "</a>").appendTo(ul);
            };
            
            this.button = $("<button type='button'>&nbsp;</button>").attr("tabIndex", -1).attr("title", "Show All Items").insertAfter(input).button({
                icons: {
                    primary: "ui-icon-triangle-1-s"
                },
                text: false
            }).removeClass("ui-corner-all").addClass("ui-corner-right ui-button-icon select select-size").click(function(){
            	input.isFullMenu = true;
                // close if already visible
                if (input.autocomplete("widget").is(":visible")) {
                    input.autocomplete("close");
                    // return; // Oak Comment
					return false;
                }
                
                // work around a bug (likely same cause as #5265)
                $(this).blur();

                // pass empty string as value to search for, displaying all results
                input.autocomplete("search", "");
                input.focus();
				return false; // Oak Add
            });
        },
        
        destroy: function(){
            this.input.remove();
            this.button.remove();
            this.element.show();
            $.Widget.prototype.destroy.call(this);
        },
		
		// -------------------------------------------------------------------------------------------------
		// เพิ่มเข้ามาใหม่วันที่ 28/11/2554
		// -------------------------------------------------------------------------------------------------
		disable: function() {
            this.button.button("disable");
            this.input.autocomplete("disable"); // this disables just the popup menu (widget),
            // this.input.propAttr( "disabled", true );  // so disable the text input too...
			this.input.attr( "disabled", true );
//            this.input.addClass("ui-autocomplete-disabled ui-state-disabled").attr( "aria-disabled", true );
        },
        enable: function() {
            this.button.button("enable");
            this.input.autocomplete("enable");
            // this.input.propAttr( "disabled", false );
			this.input.attr( "disabled", false );
//            this.input.removeClass("ui-autocomplete-disabled ui-state-disabled").attr( "aria-disabled", false );
        },
		// -------------------------------------------------------------------------------------------------
        // 4/11/54 nut : เพิ่มเข้ามา ให้สามารถ set ค่าที่แสดงใน input(type=text) ที่ ui สร้างขึ้นมาได้
        // ตัวอย่าง $("#s1sel5").combobox('setText','text');
		// -------------------------------------------------------------------------------------------------
        setText: function(text){
            this.input.val(text);
        }
    });
})(jQuery);