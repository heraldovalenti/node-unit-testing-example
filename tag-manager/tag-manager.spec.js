const assert = require('chai').assert
const setup = require('../test/test-setup.spec');

const TagManager = require('./tag-manager')

describe('Tag Manager', function() {

  it("#count is 0 after creation", function() {
    const tagManager = new TagManager();
    assert.equal(tagManager.count(), 0);
  });

  it("#count is 1 after adding one tag", function() {
    const tagManager = new TagManager();
    tagManager.add("Home")
    assert.equal(tagManager.count(), 1);
  });

  it("#count is 2 after adding two tags", function() {
    const tagManager = new TagManager();
    tagManager.add("Home");
    tagManager.add("Work");
    assert.equal(tagManager.count(), 2);
  });

  it("#add returns true when element is not present yet", function() {
    const tagManager = new TagManager();
    assert.isTrue(tagManager.add("Home"));
  });

  it("#add returns false when element is already present", function() {
    const tagManager = new TagManager();
    tagManager.add("Home");
    assert.isFalse(tagManager.add("Home"));
  });

  it("#add returns false when element is undefined", function() {
    const tagManager = new TagManager();
    assert.isFalse(tagManager.add(undefined));
  });

  it("#remove returns element when existed and was removed", function() {
    const tagManager = new TagManager();
    tagManager.add("Home");
    let removed = tagManager.remove("Home");
    assert.equal(removed, "Home");
  });

  it("#remove returns nothing when element is not present", function() {
    const tagManager = new TagManager();
    let removed = tagManager.remove("Home");
    assert.isUndefined(removed);
  });

  it("#contains is true when element is present", function() {
    const tagManager = new TagManager();
    tagManager.add("Home");
    assert.isTrue(tagManager.contains("Home"));
  });

  it("#contains is false when element is not present", function() {
    const tagManager = new TagManager();
    tagManager.add("Work");
    assert.isFalse(tagManager.contains("Home"));
  });

  it("#list returns current tags sorted", function() {
    const tagManager = new TagManager();
    tagManager.add("Work");
    tagManager.add("Home");
    let sortedTags = tagManager.list();
    assert.sameOrderedMembers(sortedTags, ["Home", "Work"]);
  });
});