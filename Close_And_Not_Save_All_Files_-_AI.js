// Script for CLOSE ALL and NOT SAVE opened files

while(documents.length > 0) {activeDocument.close(SaveOptions.DONOTSAVECHANGES)};
