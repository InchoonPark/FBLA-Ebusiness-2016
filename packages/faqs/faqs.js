Template.Faqs.onRendered(() => {
  $("form").sticky({
    topSpacing: 90,
    bottomSpacing: 600
  });
});

Template.Faqs.events({
  "submit": (event) => {
    event.preventDefault();
    if($('textarea').val() == '') {
      toastr.error('It appears that you did not type anything.');
    } else {
      $('textarea').val('');
      toastr.success("Your response has been recorded!");
    }
  }
});
