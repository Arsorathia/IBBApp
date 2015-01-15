if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}

if (Projects.find().count() === 0) {
  Projects.insert({
    name: 'Project Name 1',
    sow: 'SOW 153'
  });

  Projects.insert({
    name: 'Project Name 2',
    sow: 'SOW 176'
  });

  Projects.insert({
    name: 'Project Name 3',
    sow: 'SOW 187'
  });
}
