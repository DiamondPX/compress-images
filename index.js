const compress_images = require("compress-images");
 
function run() {
  compress_images(
    "source/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
    "out/",
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (err, completed) {
      if (completed === true) {
        console.log('Successful!');
      }
    }
  );
}

run()