$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

var tree = $(".tree");
count = 0;
for (var i = 1; i < 9; i++) {

  var treeRow = document.createElement("div");
  treeRow.classList.add('tree-row');

  treeBranch = document.createElement("div");
  treeBranch.classList.add('tree-branch');


  for (var j = 0; j <= i; j++) {
    count += 1;
    console.log("count", count);
    var bauble = htmlToElement(`
    <div class="green-bauble">
      <input type="checkbox" id="g${count}">
      <label for="g${count}">&nbsp;</label>
    </div>`)
    treeBranch.appendChild(bauble);
  }

  treeRow.appendChild(treeBranch);
  tree.appendChild(treeRow);
  console.log("End Loop", i);
}

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

var bauble = htmlToElement(`
<div class="tree-row">
  <div class="tree-branch">
    <div class="green-bauble">
      <input type="checkbox" id="g45">
      <label for="g45">&nbsp;</label>
    </div>
    <div class="green-bauble">
      <input type="checkbox" id="g46">
      <label for="g46">&nbsp;</label>
    </div>
    <div class="green-bauble">
      <input type="checkbox" id="g47">
      <label for="g47">&nbsp;</label>
    </div>
    <div class="trunk">
      <img src="images/trunk.jpg" />
    </div>
    <div class="green-bauble">
      <input type="checkbox" id="g48">
      <label for="g48">&nbsp;</label>
    </div>
    <div class="green-bauble">
      <input type="checkbox" id="g49">
      <label for="g49">&nbsp;</label>
    </div>
    <div class="green-bauble">
      <input type="checkbox" id="g50">
      <label for="g50">&nbsp;</label>
    </div>
  </div>
</div>`)
tree.appendChild(bauble);
