const { LinkedSet } = require('./set-linkedlist');



var cis = new LinkedSet();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new LinkedSet();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new LinkedSet();
it = cis.union(dmp);
it.show()
