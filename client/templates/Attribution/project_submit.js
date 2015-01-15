Template.projectSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var project = {
      name: $(e.target).find('[name=name]').val(),
      sow: $(e.target).find('[name=sow]').val()
    };

    project._id = Projects.insert(project);
    Router.go('projectPage', project);
  }
});