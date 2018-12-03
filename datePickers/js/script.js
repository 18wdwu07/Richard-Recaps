
 $( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#startDate" )
        .datepicker({
          changeMonth: true
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#endDate" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );


$("#form").submit(function(){
	event.preventDefault();
	var startDate = $("#startDate").val();
	var endDate = $("#endDate").val();

	if( (startDate.length > 0) && (endDate.length > 0) ){

		console.log(startDate);
		console.log(endDate);

		startDate = new Date(startDate);
		endDate = new Date(endDate);
		console.log(startDate);
		console.log(endDate);

		var dif = endDate - startDate;
		console.log(dif);
		dif = dif/86400000;
		console.log(dif);

		//distance

		//distance * time

	} else {
		console.log("you must include a start and a end date");
	}


});