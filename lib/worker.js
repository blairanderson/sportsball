/**
 * Created by blairanderson on 8/16/14.
 */

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var async = require('async')

var rootUrl = 'http://www.retrosheet.org/schedule/';
var startingfileCount = 140;
var fileCount = startingfileCount;
// var fileCount = 3;
var starting = 1876
var files = [];
while (fileCount > 0) {
  files.push(
    (starting + fileCount) + "sked.txt"
  )
  fileCount--
}
async.each(files, function(file, callback) {
    // Perform operation on file here.
    var fileUrl = rootUrl+file;
    var fileOutput = './mlb/sked/'+file.replace(".txt", ".csv");
    request(fileUrl, function (error, response, html) {
      console.log('Processing file ' + fileUrl);
      if (error) {
        console.log(error)
        callback(err)
      } else {
        var header = ["date_in_the_form", "number_of_game", "day_of_week", "visiting_team", "visiting_league", "visiting_season_game_number", "home_team", "home_league", "home_season_game_number", "time_of_day", "postponement_cancellation","date_of_makeup"]
        fs.writeFile(fileOutput, (header +"\r\n"+ html).replace(/['"]+/g, ''), callback)
      }
    });
}, function(err) {
    // if any of the file processing produced an error, err would equal that error
    if( err ) {
      // One of the iterations produced an error.
      // All processing will now stop.
      console.log('A file failed to process', err);
    } else {
      console.log('All files have been processed successfully');
      fileCount = startingfileCount;
      while (fileCount > 0) {
        var year = starting + fileCount;
        console.log("- ["+year+"](/mlb/sked/"+year+"sked.csv)")
        fileCount--
      }

    }
});
