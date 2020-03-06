exports.generate = function(content, sortBy) {
    console.log("Generating...");

    var entries = exports.parse(content);

    if(sortBy == "year"){
        return exports.generateSortByYear(entries);
    }else if(sortBy == "type"){
        return exports.generateSortByType(entries);
    }

    return "<p>You should define the sort by before";
}

exports.generateSortByYear = function(entries){
    console.log("Generate Sort By Year...");

    var values = exports.getMaxAndMinYears(entries);

    var categories = {};

    for(var i = values.max; i >= values.min; i--){
        categories[i+"_"+i] = [];
    }

    entries.forEach(function(entry, index){
        categories[entry["year"]+"_"+entry["year"]].push(entry);
    });

    var str = "";

    for(var index in categories){
        var split = index.split("_");

        str += exports.appendType(split[0], categories[index]);
    }

    console.log("Done");

    return str;
}

exports.generateSortByType = function(entries){
    console.log("Generate Sort By Type...");

    var categories = {};

    categories["article"] = [];
    categories["inproceedings"]= [];
    categories["conferences"]= [];
    categories["workshops"]= [];
    categories["book"]= [];
    categories["phdthesis"]= [];
    categories["techreport"]= [];
    categories["abstracts"]= [];
    categories["mastersthesis"]= [];


    entries.forEach(function(entry, index){
        categories[entry["entryType"]].push(entry);
    });

    var name = {};

    name["article"] = "Journal Papers";
    name["inproceedings"]= "Conference Papers";
    name["conferences"]= "Conference Papers";
    name["workshops"]= "Workshop Papers";
    name["book"]= "Books";
    name["phdthesis"]= "PhD Thesis";
    name["techreport"]= "Technical Reports";
    name["abstracts"]= "Abstracts";
    name["mastersthesis"]= "Master's Thesis";

    categories["inproceedings"].forEach(function(entry, index){
        if(entry.custom_is_workshop && entry.custom_is_workshop == "yes"){
            categories["workshops"].push(entry);
        }else if(entry.custom_is_abstract && entry.custom_is_abstract == "yes"){
            categories["abstracts"].push(entry);
        }else{
            categories["conferences"].push(entry);
        }
    });

    categories["inproceedings"] = [];

    var str = "";

    for(var index in categories){
        str += exports.appendType(name[index], categories[index]);
    }

    console.log("Done");

    return str;
}

exports.appendType = function(name, array){

    if(array.length == 0){
        return "";
    }

    var str = "";

    str += "<h4>"+name+"</h4>";
    str += exports.appendList(array);

    return str;
};

this.appendList = function(entries){

    var str = "<ul>";

    entries.forEach(function(entry, index){
        str += "<li>"+exports.convertEntryToReference(entry)+"</li>";
    });

    str += "</ul>";

    return str;
};

exports.getMaxAndMinYears = function(entries){
    var values = {
        max: Number.MIN_VALUE,
        min: Number.MAX_VALUE
    }

    entries.forEach(function(entry, index){
        if(entry.year < values.min){
            values.min = entry.year;
        }
        if(entry.year > values.max){
            values.max = entry.year;
        }
    });

    return values;
}

/* Helper function for formatting different types of bibtex entries */
exports.convertEntryToReference = function(entry){
   var that = this;

   var reference = "";

   // The formatting is based on APA (American Psychological Association)
   if(entry.entryType == "inproceedings" || entry.entryType == "conference"){
       reference = "AUTHORS (YEAR). TITLE. In <em>BOOKTITLE<\/em>, pp. PAGES, ADDRESS. LANGUAGE STATUS";
   } else if(entry.entryType == "article"){
       reference = "AUTHORS (YEAR). TITLE. <em> JOURNAL, VOLUME<\/em>NUMBER, pp. PAGES. LANGUAGE STATUS";
   } else if(entry.entryType == "book"){
       reference = "AUTHORS (YEAR). <em>TITLE<\/em>. ADDRESS: PUBLISHER. LANGUAGE STATUS";
   } else if(entry.entryType == "phdthesis" || entry.entryType == "mastersthesis"){
       reference = "AUTHORS (YEAR). <em>TITLE<\/em>. TYPE. ORGANIZATION, SCHOOL. LANGUAGE STATUS";
   } else if(entry.entryType == "misc"){
       reference = "AUTHORS (YEAR). <em>TITLE<\/em>. HOWPUBLISHED. NOTE. LANGUAGE STATUS";
   } else if(entry.entryType == "techreport"){
       reference = "AUTHORS (YEAR). TITLE. <em>INSTITUTION. NUMBER. Tech. Rep.<\/em> LANGUAGE STATUS";
   } else if(entry.entryType == "inbook"){
       reference = "AUTHORS (YEAR). TITLE in <em>BOOKTITLE<\/em>, Edited by EDITOR, PUBLISHER, pp. PAGES, <em> SERIES<\/em>, Vol. VOLUME, ISBN: ISBN LANGUAGE STATUS'";
   } else {
       reference = "AUTHORS (YEAR). TITLE. In <em>BOOKTITLE<\/em>, pp. PAGES, ADDRESS. LANGUAGE STATUS";
   }

   // Replace all key in the string;
   reference = exports._replaceKey(reference, "AUTHORS", exports.convertAuthorsToHTML(entry.author));
   reference = exports._replaceKey(reference, "TITLE", entry.title);
   reference = exports._replaceKey(reference, "BOOKTITLE", entry.booktitle);
   reference = exports._replaceKey(reference, "YEAR", entry.year);
   reference = exports._replaceKey(reference, "PAGES", entry.pages);
   reference = exports._replaceKey(reference, "ADDRESS", entry.address);
   reference = exports._replaceKey(reference, "JOURNAL", entry.journal);
   reference = exports._replaceKey(reference, "VOLUME", entry.volume);
   reference = exports._replaceKey(reference, "MONTH", entry.month);
   reference = exports._replaceKey(reference, "NUMBER", entry.number? "("+entry.number+")" : "");
   reference = exports._replaceKey(reference, "PUBLISHER", entry.publisher);
   reference = exports._replaceKey(reference, "ISSN", entry.issn);
   reference = exports._replaceKey(reference, "ISBN'", entry.isbn);
   reference = exports._replaceKey(reference, "SCHOOL", entry.school);
   reference = exports._replaceKey(reference, "ORGANIZATION", entry.organization);
   reference = exports._replaceKey(reference, "TYPE", entry.type);
   reference = exports._replaceKey(reference, "HOWPUBLISHED", entry.howpublished);
   reference = exports._replaceKey(reference, "NOTE", entry.note);
   reference = exports._replaceKey(reference, "INSTITUTION", entry.institution);
   reference = exports._replaceKey(reference, "CHAPTER", entry.chapter);
   reference = exports._replaceKey(reference, "EDITOR", entry.editor);
   reference = exports._replaceKey(reference, "SERIES", entry.series);
   reference = exports._replaceKey(reference, "LANGUAGE", entry.custom_is_portuguese? "[In Portuguese]": "");
   reference = exports._replaceKey(reference, "STATUS", entry.custom_status? "["+entry.custom_status+"]": "");

   // Add a link to paper's url
   if(entry.url){
       reference += " (<a class='pub-link' href='"+entry.url+"' target='_blank'>url</a>)";
   }

   // Add a link to paper's url
   if(entry.url_pdf){
        reference += " (<a class='pub-links' href='"+entry.url_pdf+"' target='_blank'>pdf</a>)";
    }

   reference = reference.replace("--", "-");

   // Add a link to paper's url
   if(entry.supporting_page){
       reference += " (<a class='pub-link' href='"+entry.supporting_page+"' target='_blank'>supporting page</a>)";
   }

   // UUID used to identify this entry when the user click at (bib) link
   var uuid = exports.generateUUID();

   reference += " (<a href='#' class='publication-list-open-bibtex' data-uuid='" + uuid + "'>bib</a>)";

   reference += "<div class='publication-list-bibtex' id='" + uuid + "'>";
   //reference += "<button data-remodal-action='close' class='remodal-close'></button>";
   reference += "<pre>";
   reference += exports.convertEntryToBibtex(entry);
   reference += "</pre>";
   reference += "</div>";

   return reference;
}

/* Converts the given author data into HTML*/
exports.convertAuthorsToHTML = function(authorData) {
   var authorsStr = '';

   for (var index = 0; index < authorData.length; index++) {
       if (index > 0) {
           authorsStr += ", ";
       }
       authorsStr += authorData[index].last;
   }

   return authorsStr;
}

/** Generate UUID used to uniquely identify a component*/
exports.generateUUID = function(){
   var d = new Date().getTime();

   var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = (d + Math.random()*16)%16 | 0;
       d = Math.floor(d/16);
       return (c=='x' ? r : (r&0x3|0x8)).toString(16);
   });

   return uuid;
}

/** Change a key of a string into a value */
exports._replaceKey = function(str, key, value){
    return str.replace(key, value);
};

exports.convertEntryToBibtex = function(entry){

   var str = "@" + entry.entryType + "{" + entry.cite + ", \n";

   for(var key in entry){
       var value = entry[key];
       if (key == "author") {
           str += "  author = {";
           for (var index = 0; index < value.length; index++) {
               if (index > 0) {
                   str += " and ";
               }
               str += value[index].last;
           }
           str += "},\n";
       } else if (key != "entryType" && key != "cite") {
           str += '  ' + key + " = {" + value + "},\n";
       }
   };

   return str + "}";
}

exports.parse = function(content){

    // Creating the bibtex object for parse the bibtext file
    var bibtex = BibTex();

    // Getting the div's content for parse it
    bibtex.content = content;

    // Parse the bibtext file
    bibtex.parse();

    // Save the warnings for showing it to the user
    this.warnings = bibtex.warnings;

    // Array with all entries
    var entries = [];

    // Save all converted entries
    for (var index = 0; index < bibtex.data.length; index++) {
        entries.push(bibtex.data[index]);
    }

    // Call TRIM function in the all fields
    entries.forEach(function(entry, index){
        for(c in entry){
            if(!Array.isArray(entry[c])){
                entry[c] = entry[c].trim();
            }
        }
    });

    return entries;
};
