function addMenuColor(element) {
  element.style.color = "rgb(65, 105, 225)";
}

function removeMenuColor(element) {
  element.style.color = "rgb(255, 255, 255)";
}




function trust_popup (){
  document.getElementById('accountability_popup').style.display = 'none';
  document.getElementById('transparency_popup').style.display = 'none';
  document.getElementById('success_popup').style.display = 'none';
  document.getElementById('trust_popup').style.display = 'block';
  setTimeout(()=>{
      document.getElementById('trust_popup').style.display = 'none';
  },3000)
}

function transparency_popup (){
  document.getElementById('trust_popup').style.display = 'none';
  document.getElementById('accountability_popup').style.display = 'none';
  document.getElementById('success_popup').style.display = 'none';
  document.getElementById('transparency_popup').style.display = 'block';
  setTimeout(()=>{
      document.getElementById('transparency_popup').style.display = 'none';
  },3000)
}

function accountability_popup (){
  document.getElementById('trust_popup').style.display = 'none';
  document.getElementById('transparency_popup').style.display = 'none';
  document.getElementById('success_popup').style.display = 'none';
  document.getElementById('accountability_popup').style.display = 'block';
  setTimeout(()=>{
      document.getElementById('accountability_popup').style.display = 'none';
  },3000)
}
function success_popup (){
  document.getElementById('trust_popup').style.display = 'none';
  document.getElementById('transparency_popup').style.display = 'none';
  document.getElementById('accountability_popup').style.display = 'none';
  document.getElementById('success_popup').style.display = 'block';
  setTimeout(()=>{
      document.getElementById('success_popup').style.display = 'none';
  },3000)
}


$(document).ready(function() {
  $('.first-next').click(function(event) {
      event.preventDefault(); // prevent the form from submitting

      var fname = $('#exampleInputFName1').val();
      var lname = $('#exampleInputLName1').val();
      var radioChecked = $('input[name="exampleRadios"]:checked').val();

      if (fname == '' || lname == '' || radioChecked == undefined) {
          alert('Please fill all the fields');
      } else {
          $('#Fist_Step').hide(); // hide the first step
          $('#Second_Step').show(); // show the second step
      }
  });
});
$(document).ready(function() {
  $('.second-next').click(function(event) {
      event.preventDefault(); // prevent the form from submitting

      var age = $('#exampleInputAge1').val();

      if (age == '') {
          alert('Please fill all the fields');
      } else {
          $('#Second_Step').hide(); // hide the first step
          $('#Third_Step').show(); // show the second step
      }
  });
});
$(document).ready(function() {
  $('.third-next').click(function(event) {
      event.preventDefault(); // prevent the form from submitting

      var lumpsum = $('#exampleInputlumpsum1').val();
      var sip = $('#exampleInputsip1').val();
      var lsip = $('#exampleInputLsip1').val();

      if (lumpsum == '' || sip == '' || lsip == '') {
          alert('Please fill all the fields');
      } else {
          $('#Third_Step').hide(); // hide the first step
          $('#Fourth_Step').show(); // show the second step
      }
  });
});
$(document).ready(function() {
  $('.fourth-next').click(function(event) {
      event.preventDefault(); // prevent the form from submitting

      var year = $('#select-year').val();

      if (year == '') {
          alert('Please fill all the fields');
      } else {
          $('#Fourth_Step').hide(); // hide the first step
          $('#Fifth_Step').show(); // show the second step
      }
  });
});
$(document).ready(function() {
  $('.fifth-next').click(function(event) {
    event.preventDefault(); // prevent the form from submitting

    var checkboxes = $('#Fifth_Step input[type="checkbox"]:checked');

    if (checkboxes.length == 0) {
      alert('Please fill all the fields');
    } else {
      $('#Fifth_Step').hide(); // hide the first step
      $('#Six_Step').show(); // show the second step
    }
  });
});
$(document).ready(function() {
  $('.six-next').click(function(event) {
      event.preventDefault(); // prevent the form from submitting

      var year = $('#select-price').val();

      if (year == '') {
          alert('Please fill all the fields');
      } else {
          $('#Six_Step').hide(); // hide the first step
          $('#Seven_Step').show(); // show the second step
      }
  });
});
$(document).ready(function() {
  $('.seven-next').click(function(event) {
      var year = $('#select-type').val();

      if (year == '') {
          alert('Please fill all the fields');
      } else {
          $('#Six_Step').hide(); // hide the first step
          $('#exampleModalCenter').hide(); // hide the current step
          $('form.needs-validation').submit(); // submit the form
      }
  });
});



$(document).ready(function() {
  $('.first-previous').click(function(event) {
      event.preventDefault(); // prevent the form from submitting

      $('#Second_Step').hide(); // hide the second step
      $('#Fist_Step').show(); // show the first step
  });

  $('.second-previous').click(function(event) {
      event.preventDefault(); // prevent the form from submitting

      $('#Third_Step').hide(); // hide the third step
      $('#Second_Step').show(); // show the second step
  });
  
  $('.third-previous').click(function(event) {
    event.preventDefault(); // prevent the form from submitting

    $('#Fourth_Step').hide(); // hide the third step
    $('#Third_Step').show(); // show the second step
});
$('.fourth-previous').click(function(event) {
  event.preventDefault(); // prevent the form from submitting

  $('#Fifth_Step').hide(); // hide the third step
  $('#Fourth_Step').show(); // show the second step
});
$('.five-previous').click(function(event) {
  event.preventDefault(); // prevent the form from submitting

  $('#Six_Step').hide(); // hide the third step
  $('#Fifth_Step').show(); // show the second step
});
$('.six-previous').click(function(event) {
  event.preventDefault(); // prevent the form from submitting

  $('#Seven_Step').hide(); // hide the third step
  $('#Six_Step').show(); // show the second step
});
});