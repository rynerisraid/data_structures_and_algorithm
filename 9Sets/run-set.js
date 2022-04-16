const { Set } = require('./set1');

var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
it.show()

/**
 * Test intersection
 */

 var inter = cis.intersect(dmp);
 inter.show()


/**
 * Test subset
 */

if (dmp.subset(it)) {
    console.log("DMP is a subset of IT.");
}
else {
    console.log("DMP is not a subset of IT.");
}

var diff = new Set();
diff = it.difference(cis);
console.log('difference');
cis.show();
it.show();
diff.show();

