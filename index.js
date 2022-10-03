//extract value between tag example : <p>This is Extracted</p> => This is Extracted

var extract = {
    byTag:(data,tag,removeAdditional = [])=>{
        var split_01 = data.split("<"+tag);
        var split_02 = [];
        var split_03 = [];
        var result = [];

        for(let y = 1 ; y < split_01.length ; y++){
            split_02.push(split_01[y].split("</"+tag+">"));
        }

        for(let y = 0 ; y < split_02.length ; y++){
            split_03.push(split_02[y][0].split(">"));
        }

        for(let y = 0 ; y < split_03.length ; y++){
            result.push(split_03[y][1]);
        }

        if(removeAdditional.length > 0){
            result = _removeAdditional(result,removeAdditional);
        }

        return result;
    }, 
    byClass:(data,tag,value,removeAdditional = [])=>{
        var split_01 = data.split('<'+tag+' class="'+value+'"');
        var split_02 = [];
        var split_03 = [];
        var result = [];

        for(let y = 1 ; y < split_01.length ; y++){
            split_02.push(split_01[y].split("</"+tag+">"));
        }

        for(let y = 0 ; y < split_02.length ; y++){
            split_03.push(split_02[y][0].split(">"));
        }

        for(let y = 0 ; y < split_03.length ; y++){
            result.push(split_03[y][1]);
        }

        if(removeAdditional.length > 0){
            result = _removeAdditional(result,removeAdditional);
        }

        return result;
    },
    byId:(data,tag,value,removeAdditional = [])=>{
        var split_01 = data.split('<'+tag+' id="'+value+'"');
        var split_02 = [];
        var split_03 = [];
        var result = [];

        for(let y = 1 ; y < split_01.length ; y++){
            split_02.push(split_01[y].split("</"+tag+">"));
        }

        for(let y = 0 ; y < split_02.length ; y++){
            split_03.push(split_02[y][0].split(">"));
        }

        for(let y = 0 ; y < split_03.length ; y++){
            result.push(split_03[y][1]);
        }

        if(removeAdditional.length > 0){
            result = _removeAdditional(result,removeAdditional);
        }

        return result;
    }
}

function _removeAdditional(result,removeAdditional){
    var replace = [];
    for(let z = 0 ; z < result.length ; z++){
        for(let x = 0 ; x < removeAdditional.length ; x++){
            replace.push(result[z].replaceAll(removeAdditional[x],""));
        }
    }
    return replace;
}

module.exports = extract;