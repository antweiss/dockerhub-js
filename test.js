var dockerhub = require("./");
var test = require("tape");

var list;

function testImages(imagelist){
    list = JSON.parse(imagelist);
    console.log(list.length);
    test('images', function (assert) {
      assert.plan(1);
      assert.strictEqual(list.length, 151);
  });

}
function testTags(taglis){
    list = JSON.parse(taglist);
    console.log(list.length);
    test('images', function (assert) {
      assert.plan(1);
      assert.strictEqual(list.length, 31);
  });

}
console.log (dockerhub.images('busybox', testImages));
//dockerhub.tags('busybox', testTags)
