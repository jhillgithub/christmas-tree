$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

var tree = $(".tree");
var count = 0;

function buildTree(rows = 9) {
  for (var i = 1; i < rows; i++) {
    var treeRow = document.createElement("div");
    treeRow.classList.add("tree-row");

    var treeBranch = document.createElement("div");
    treeBranch.classList.add("tree-branch");

    for (var j = 0; j <= i; j++) {
      var bauble = htmlToElement(`
      <div class="green-bauble">
      <input type="checkbox" id="g${count}">
      <label for="g${count}">&nbsp;</label>
      </div>`);
      treeBranch.appendChild(bauble);
      count += 1;
    }

    treeRow.appendChild(treeBranch);
    tree.appendChild(treeRow);
  }
}

function buildBauble(elem, num = 3) {
  for (var i = 0; i < 3; i++) {
    var bauble = htmlToElement(`
    <div class="green-bauble">
    <input type="checkbox" id="g${count}">
    <label for="g${count}">&nbsp;</label>
    </div>`);
    elem.appendChild(bauble);
    count += 1;
  }
}

function buildTrunk() {
  /* Build 3 baubles, 1 trunk, 3 baubles for the bottom row */

  var treeRow = document.createElement("div");
  treeRow.classList.add("tree-row");

  var treeBranch = document.createElement("div");
  treeBranch.classList.add("tree-branch");

  buildBauble(treeBranch);

  var trunk = htmlToElement(`
    <div class="trunk">
    <img src="images/trunk.jpg" />
    </div>`);

  treeBranch.append(trunk);

  buildBauble(treeBranch);

  treeRow.appendChild(treeBranch);
  tree.appendChild(treeRow);
}

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

buildTree();
buildTrunk();
