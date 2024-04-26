import * as gulp from "gulp";
import { pack, StreamOptions } from "gulp-armapbo";
import del from "del";

let resultDir = "./result/";

gulp.task("clean", function () {
  return del([resultDir + "*", resultDir + "/*/"]);
});

gulp.task("createPbo", () => {
  return gulp
    .src("../AICommand/**/*")
    .pipe(
      pack({
        fileName: "aicommand.pbo",
        extensions: [
          {
            name: "author",
            value: "Nimmersatt",
          },
        ],
        compress: ["**/*.sqf", "mission.sqm", "description.ext"],
      } as StreamOptions)
    )
    .pipe(gulp.dest(resultDir + "/addons/"));
});

gulp.task("copy-additional-files", function() {
  return gulp
    .src(['../mod.cpp', '../logo.paa', '../steamLogo.jpg', '../keys/'])
    .pipe(gulp.dest(resultDir));
});

gulp.task(
  "default",
  gulp.series("clean", "createPbo", "copy-additional-files")
);
