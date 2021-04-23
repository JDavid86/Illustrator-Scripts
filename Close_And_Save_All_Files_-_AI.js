// Script for CLOSE and SAVE ALL opened files

while(documents.length > 0) {activeDocument.close(SaveOptions.SAVECHANGES)};
