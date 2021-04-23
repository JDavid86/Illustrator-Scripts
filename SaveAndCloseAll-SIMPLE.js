// Script for SAVE and CLOSE ALL opened files

while(documents.length > 0) {activeDocument.close(SaveOptions.SAVECHANGES)};
