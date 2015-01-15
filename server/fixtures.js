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
