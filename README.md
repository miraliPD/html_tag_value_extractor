# Html-Tag-Value-Extractor
# MiraliPD

## Install
```sh
npm install @miralipd/reverse-sentence
```

## API
```js
require("html_tag_value_extractor") => Object
extract.byTag(data,tag,removeAdditional=[]) => string,string, array
extract.byClass(data,tag,value,removeAdditional=[]) => string,string,string,array
extract.byId(data,tag,value,removeAdditional=[]) =>  string,string,string,array
```

## Example
```js
const htmlTagExtractor = require("html_tag_value_extractor");
const data = "<p>This is Paragraph</p>";
const tag = "p";
const result = htmlTagExtractor.byTag(data,tag);
console.log("Result : ",result)//This is Paragraph
```

## License
MIT