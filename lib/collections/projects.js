Projects = new Mongo.Collection('projects');

Projects.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});


