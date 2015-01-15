Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('projects'); }
});

//Router.route('/', {name: 'postsList'});
Router.route('/', {name: 'userDashboard'});
Router.route('/projects', {name: 'projectList'});


Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/projects/:_id', {
  name: 'projectPage',
  data: function() { return Projects.findOne(this.params._id); }
});

Router.route('/addnewproject', {name: 'projectSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin);