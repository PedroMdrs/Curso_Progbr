const sharp = require('sharp');
const compress_images = require("compress-images")
let fs = require('fs')
let path = process.argv[2]
let width = Number(process.argv[3]);

function resize(inputPath, outputPath, width) {
    sharp(inputPath).resize({ width: width }).toFile(outputPath, (erro) => {
        if (erro) {
            console.log(erro)
        } else {
            console.log("imagem redimensionada")

        }
        compressImg(outputPath, "./compressed/" + "compressedAND")
        
    })
}
resize(path, "./temp/" + "resized" + path, width)



function compressImg(input, output) {

    compress_images(input, output, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");

            fs.unlink(input, (erro) => {
                if(erro){
                    console.log(erro)
                }else{
                    console.log(input, "apagado")
                }
            })
        }
        
    );
}

