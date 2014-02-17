// Function To Generate Table Row
function createRow(Sku, Name, Qty, Price)
{
    // Create Table Row
    var tableRow = Ti.UI.createTableViewRow({ height: 50 });
 
    // Create Table Row Columns
    var skuView   = Ti.UI.createView({ left : 0,     width : "33%", height: Ti.UI.Size, backgroundColor : "white"   });
    var nameView  = Ti.UI.createView({ left : "25%", width : "33%", height: Ti.UI.Size, backgroundColor : "white"    });
    var qtyView   = Ti.UI.createView({ left : "50%", width : "33%", height: Ti.UI.Size, backgroundColor : "white"  });
    
 
    // Create Table Row Column Labels
    skuView.add(Ti.UI.createLabel({   top: 5, right: 5, bottom: 5, left: 5, text: Sku   }));
    nameView.add(Ti.UI.createLabel({  top: 5, right: 5, bottom: 5, left: 5, text: Qty   }));
    qtyView.add(Ti.UI.createLabel({   top: 5, right: 5, bottom: 5, left: 5, text: Name  }));
    
 
    // Add Columns To Table Row
    tableRow.add(skuView);
    tableRow.add(nameView);
    tableRow.add(qtyView);
    
 
    // Resource Clean-Up
    skuView = nameView = qtyView = null;
 
    // Finished
    return tableRow;
}
 
// Create Table Data
var tableData = [];
tableData.push(createRow('Name', 'Remove','Role'));
tableData.push(createRow('James', 'X','admin'));
tableData.push(createRow('Matt', 'X','user'));
 
// Set Table Data
$.myTable.setData(tableData);
 
// Resource Clean-Up
tableData = null;
 