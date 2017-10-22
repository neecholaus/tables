class Table {
  
  constructor(container, data) {
    this.container = container;
    this.options = data.options;
    this.data = data;
    this.type = data.options.type ? data.options.type : 'vertical_bar';

    
    this.runBuildFunction();   
  }



  runBuildFunction() {
    // Stores built HTML strings and final injection function
    this.build();
    // Runs final injection
    this.inject();
    // Styles up the table
    this.styleIt();
  }



  // Loops through data and builds html string
  // based on type of table
  build() {
    switch (this.type) {
      case 'vertical_bar':
	this.buildItems = this.vertical_bar_build();
	this.inject = this.bar_injection();
	this.styleIt = this.vertical_bar_style();
	break;
    }
  }
  
  





  // ================================== BUILDS ================================== \\
  
  // VERTICAL BUILD 
  vertical_bar_build() {
    var items = [];
    for(var item in this.data.items) {
      var height = this.data.max - (this.data.max / this.data.items[item].height);
      var item = `<div class="vertical-bar" data-height="${height}"><div class="vertical-bar-title">${this.data.items[item].name}</div></div>`;
      items.push(item);
    }
    return items;
  }









  // ================================== INJECTIONS ================================== \\
  // Injection for bar type graphs
  bar_injection() {
    return function() {
      var con = document.getElementById(this.container);
      var htmlString = '';
      for(var item in this.buildItems) {
	htmlString += this.buildItems[item];
      }
      con.innerHTML = htmlString;
      con.classList += `${this.type}_table_con`;
    }
  }








  // ================================== STYLING ================================== \\
  vertical_bar_style() {
    return function() {
      var all_bars = document.querySelectorAll('.vertical-bar');
      var count_bars = all_bars.length;
      var width = 100 / count_bars.toFixed('2');
      all_bars.forEach(function(e) {
	e.style.width = `${width}%`;
	e.style.textAlign = 'center';
      });
    }
  }

  



  
// End of constructor
}







// Test Data for a vertical bar table.
var data = {
  'items' : [
    {'name': 'bar1', 'height': 7},
    {'name': 'bar2', 'height': 8},
    {'name': 'bar3', 'height': 9}
  ],
  'max': 300,
  'x_title': 'X axis',
  'y_title': 'Y axis',
  'options': {}
}
new Table('container', data);


