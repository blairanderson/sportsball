/**
 * Created by blairanderson on 8/16/14.
 */

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var async = require('async')

var rootUrl = 'http://www.retrosheet.org/schedule/';
var fileCount = 140;
// var fileCount = 3;
var starting = 1876
var files = [];
while (fileCount > 0) {
  var year = starting + fileCount;
  console.log("- ["+year+"](/mlb/sked/"+year+"sked.csv)")
  fileCount--
}

//
//
// while (fileCount > 0) {
//   files.push(
//     (starting + fileCount) + "sked.txt"
//   )
//   fileCount--
// }
// async.each(files, function(file, callback) {
//     // Perform operation on file here.
//     var fileUrl = rootUrl+file;
//     var fileOutput = './mlb/sked/'+file.replace(".txt", ".csv");
//     request(fileUrl, function (error, response, html) {
//       console.log('Processing file ' + fileUrl);
//       if (error) {
//         console.log(error)
//         callback(err)
//       } else {
//   //   1     Date in the form "yyyymmdd"
//   //   2     Number of game:
//   //            "0" -- a single game
//   //            "1" -- the first game of a double header
//   //                   including separate admission doubleheaders
//   //            "2" -- the second game of a double header
//   //                   including separate admission doubleheaders
//   //   3     Day of week  ("Sun","Mon","Tue","Wed","Thu","Fri","Sat")
//   // 4-5     Visiting team and league
//   //   6     Season game number for visiting team
//   // 7-8     Home team and league
//   //   9     Season game number for home team
//   //  10     Morning, day, night, or evening game (for twinight)
//   //  11     Postponement/cancellation indicator
//   //  12     Date of makeup if played
//         var header = ["date_in_the_form", "number_of_game", "day_of_week", "visiting_team", "visiting_league", "visiting_season_game_number", "home_team", "home_league", "home_season_game_number", "time_of_day", "postponement_cancellation","date_of_makeup"]
//         fs.writeFile(fileOutput, (header + html).replace(/['"]+/g, ''), callback)
//       }
//     });
// }, function(err) {
//     // if any of the file processing produced an error, err would equal that error
//     if( err ) {
//       // One of the iterations produced an error.
//       // All processing will now stop.
//       console.log('A file failed to process', err);
//     } else {
//       console.log('All files have been processed successfully');
//     }
// });
