var dataUrl = "http://jsrun.it/assets/r/y/M/v/ryMvJ.jpg";
var THRESHOLD = 115;

var objFile = document.getElementById("selfile");
objFile.addEventListener("change", function(evt) {
    var file = evt.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function() {
        dataUrl = reader.result;
    };
}, false);

function main() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var image = new Image();
        image.src = dataUrl;
        document.getElementById("ex").innerHTML = "width:" + image.width + "<br>height:" + image.height;
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
    }
}

function bw1() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        
        for (var i = 0; i < src.data.length; i = i + 4) {
            dst.data[i] = src.data[i];
            dst.data[i + 1] = src.data[i];
            dst.data[i + 2] = src.data[i];
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}

function bw2() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i = i + 4) {
            dst.data[i] = src.data[i + 1];
            dst.data[i + 1] = src.data[i + 1];
            dst.data[i + 2] = src.data[i + 1];
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}

function bw3() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i = i + 4) {
            dst.data[i] = src.data[i + 2];
            dst.data[i + 1] = src.data[i + 2];
            dst.data[i + 2] = src.data[i + 2];
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}

function bw4() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i = i + 4) {
            var x = (src.data[i ]+src.data[i + 1]+src.data[i + 2])/3;
            dst.data[i] = x;
            dst.data[i + 1] = x;
            dst.data[i + 2] = x;
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}

var put = 0;
function change() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        var i;
        if(put%6===0){
            for (i = 0; i < src.data.length; i = i + 4) {
                dst.data[i] = src.data[i];
                dst.data[i + 1] = src.data[i + 2];
                dst.data[i + 2] = src.data[i+1];
                dst.data[i + 3] = src.data[i + 3];
            }
        }else if(put%6===1){
            for (i = 0; i < src.data.length; i = i + 4) {
                dst.data[i] = src.data[i+1];
                dst.data[i + 1] = src.data[i+2];
                dst.data[i + 2] = src.data[i];
                dst.data[i + 3] = src.data[i + 3];
            }
        }else if(put%6===2){
            for (i = 0; i < src.data.length; i = i + 4) {
                dst.data[i] = src.data[i];
                dst.data[i + 1] = src.data[i+2];
                dst.data[i + 2] = src.data[i+1];
                dst.data[i + 3] = src.data[i + 3];
            }
        }else if(put%6===3){
            for (i = 0; i < src.data.length; i = i + 4) {
                dst.data[i] = src.data[i+2];
                dst.data[i + 1] = src.data[i+1];
                dst.data[i + 2] = src.data[i];
                dst.data[i + 3] = src.data[i + 3];
            }
        }else if(put%6===4){
            for (i = 0; i < src.data.length; i = i + 4) {
                dst.data[i] = src.data[i];
                dst.data[i + 1] = src.data[i+2];
                dst.data[i + 2] = src.data[i+1];
                dst.data[i + 3] = src.data[i + 3];
            }
        }else if(put%6===5){
            for (i = 0; i < src.data.length; i = i + 4) {
                dst.data[i] = src.data[i+2];
                dst.data[i + 1] = src.data[i];
                dst.data[i + 2] = src.data[i+1];
                dst.data[i + 3] = src.data[i + 3];
            }
        }
        put++;
        context.putImageData(dst, 0, 0);
    }
}

function bw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i = i + 4) {
            var y = ~~(0.299 * src.data[i] + 0.587 * src.data[i + 1] + 0.114 * src.data[i + 2]);
            var ret = (y > THRESHOLD) ? 255 : 0;
            dst.data[i] = dst.data[i + 1] = dst.data[i + 2] = ret;
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}

function blw1() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i = i + 4) {
            var y = ~~(0.299 * src.data[i] + 0.587 * src.data[i + 1] + 0.114 * src.data[i + 2]);
            var ret = (y > THRESHOLD) ? 255 : 0;
            dst.data[i] = dst.data[i + 1] = dst.data[i + 2] = ret;
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}


function blw2() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i = i + 2) {
            var y = ~~(0.299 * src.data[i] + 0.587 * src.data[i + 1] + 0.114 * src.data[i + 2]);
            var ret = (y > THRESHOLD) ? 255 : 0;
            dst.data[i] = dst.data[i + 1] = dst.data[i + 2] = ret;
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}



function re() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i += 4) {
            dst.data[i] = Math.abs(255 - src.data[i]);
            dst.data[i + 1] = Math.abs(255 - src.data[i + 1]);
            dst.data[i + 2] = Math.abs(255 - src.data[i + 2]);
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}

function pp() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i += 4) {
            dst.data[i] = Math.abs(src.data[i] + 5);
            dst.data[i + 1] = Math.abs(src.data[i + 1] + 5);
            dst.data[i + 2] = Math.abs(src.data[i + 2] + 5);
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}

function mm() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        var z = 0;
        for (var i = 0; i < src.data.length; i += 4) {
            z++;
            dst.data[i] = Math.abs(src.data[i] - 5);
            dst.data[i + 1] = Math.abs(src.data[i + 1] - 5);
            dst.data[i + 2] = Math.abs(src.data[i + 2] - 5);
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}
var BKS = 0;

function bks() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        
        for (i = canvas.width*4; i < src.data.length-canvas.width*4; i += 4) {
            dst.data[i]     = Math.round((src.data[i-4]+src.data[i] + src.data[i + 4]+
                                          src.data[i-4+canvas.width*4]+src.data[i+4+canvas.width*4]+src.data[i+canvas.width*4]+
                                         src.data[i-4-canvas.width*4]+src.data[i+4-canvas.width*4]+src.data[i-canvas.width*4]) / 9);
            i++;
            dst.data[i]     = Math.round((src.data[i-4]+src.data[i] + src.data[i + 4]+
                                          src.data[i-4+canvas.width*4]+src.data[i+4+canvas.width*4]+src.data[i+canvas.width*4]+
                                         src.data[i-4-canvas.width*4]+src.data[i+4-canvas.width*4]+src.data[i-canvas.width*4]) / 9);
            i++;
            dst.data[i]     = Math.round((src.data[i-4]+src.data[i] + src.data[i + 4]+
                                          src.data[i-4+canvas.width*4]+src.data[i+4+canvas.width*4]+src.data[i+canvas.width*4]+
                                         src.data[i-4-canvas.width*4]+src.data[i+4-canvas.width*4]+src.data[i-canvas.width*4]) /9);
            i--;i--;
            dst.data[i + 3] = src.data[i + 3];
        }
        for(i=0;i<canvas.width*4;i++){
            dst.data[i]=src.data[i];
        }
        for(i=src.data.length-canvas.width*4;i<src.data.length;i++){
            dst.data[i]=src.data[i];
        }
        context.putImageData(dst, 0, 0);
    }
}

function edge1() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i += 4) {
            dst.data[i] = tr(src.data[i], 255 / 2);
            dst.data[i + 1] = tr(src.data[i + 1], 255 / 2);
            dst.data[i + 2] = tr(src.data[i + 2], 255 / 2);
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }

    function tr(x, y) {
        if (x > y) {
            return x * 1.05;
        } else {
            return x * 0.95;
        }
    }
}

function edge2() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i += 4) {
            dst.data[i] = tr(src.data[i], THRESHOLD);
            dst.data[i + 1] = tr(src.data[i + 1], THRESHOLD);
            dst.data[i + 2] = tr(src.data[i + 2], THRESHOLD);
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }

    function tr(x, y) {
        if (x > y) {
            return 255;
        } else {
            return 0;
        }
    }
}

function skell() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i += 4) {
            dst.data[i] = src.data[i];
            dst.data[i + 1] = src.data[i + 1];
            dst.data[i + 2] = src.data[i + 2];
            dst.data[i + 3] = src.data[i + 3] - 10;
        }
        context.putImageData(dst, 0, 0);
    }
}

function edge3() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i += 4) {
            dst.data[i] = tr(src.data[i], 255 / 2 - 30);
            dst.data[i + 1] = tr(src.data[i + 1], 255 / 2 - 30);
            dst.data[i + 2] = tr(src.data[i + 2], 255 / 2 - 30);
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
        re();
    }

    function tr(x, y) {
        if (x > y) {
            return 0;
        } else {
            return 255;
        }
    }
}

function red() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i += 4) {
            dst.data[i] = src.data[i];
            dst.data[i + 1] = 0;
            dst.data[i + 2] = 0;
            dst.data[i + 3] = src.data[i + 3];
        }
        context.putImageData(dst, 0, 0);
    }
}

function turn180(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i = i + 4) {
            dst.data[i] = src.data[src.data.length-i -4];
            dst.data[i + 1] = src.data[src.data.length-i -3];
            dst.data[i + 2] = src.data[src.data.length-i -2];
            dst.data[i + 3] = src.data[src.data.length-i -1];
        }
         
        context.putImageData(dst, 0, 0);
    }
}

function turn90(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i < src.data.length; i += canvas.width) {
            dst.data[canvas.width+i] = src.data[canvas.height+i];
            dst.data[canvas.width+i+1] = src.data[canvas.height+i+1];
            dst.data[canvas.width+i+2] = src.data[canvas.height+i+2];
            dst.data[canvas.width+i+3] = src.data[canvas.height+i+3];
        }
        
        context.putImageData(dst, 0, 0);
    }
}

function mirror(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        for (var i = 0; i <canvas.height; i ++) {
            for(var j=0;j<canvas.width*4;j=j+4){
                dst.data[canvas.width*4*i+j] = src.data[canvas.width*4*(1+i)-j -4];
                dst.data[canvas.width*4*i+j + 1] = src.data[canvas.width*4*(1+i)-j -3];
                dst.data[canvas.width*4*i+j + 2] = src.data[canvas.width*4*(1+i)-j -2];
                dst.data[canvas.width*4*i+j + 3] = src.data[canvas.width*4*(1+i)-j -1];
            }
            
        }
        
         
        context.putImageData(dst, 0, 0);
    }
}



function openPage() {
    var canvas = document.getElementById('canvas');
    var jpg = "";
    if (canvas.getContext) {
        try {
            jpg = canvas.toDataURL();
        } catch (e) {
            alert(e);
        }
    } else {
        alert("ERROR!");
    }
    var tw = window.open();
    tw.document.open();
    tw.document.write("<img src=" + jpg + ">");
    tw.document.close();
}

function sq() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        
        var i;
        for (i = 0; i < src.data.length; i = i + 4) {
            dst.data[i] = src.data[i];
            dst.data[i + 1] = src.data[i+1];
            dst.data[i + 2] = src.data[i+2];
            dst.data[i + 3] = src.data[i + 3];
            
        }
        for (i = 0; i < src.data.length; i = i + 4) {
            if(i%12===0){
            dst.data[i] = src.data[i];
            dst.data[i + 1] = src.data[i];
            dst.data[i + 2] = src.data[i];
            dst.data[i + 3] = src.data[i + 3];
            }
        }
        
        context.putImageData(dst, 0, 0);
    }
}


function compressArray(data,width,height){
    
    var i,j;
    var array;
    if(data===0){
        array = new Array(height); 
        for( i=0;i < height;i++){
            array[i] = new Array(width);
            for( j=0;j < width;j++){
                array[i][j] = data[0];
            }
        }
        
    }else{
        array = new Array(height); 
        for( i=0;i < height;i++){
            array[i] = new Array(width);
            for( j=0;j < width;j++){
                array[i][j] = data[i*width+j];
            }
        }
    }
    return array;
    
}

function decompressArray(data){
    var x =[];
    for (var i = 0; i < data.length; i++){
        for (var j = 0; j < data[i].length; j++){
            x.push(data[i][j]);
        }
    }
    
    return x;
}


function differential(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        var src = context.getImageData(0, 0, canvas.width, canvas.height);
        var dst = context.createImageData(canvas.width, canvas.height);
        
        var i,z=0;
        dst.data=src.data;
        var sum,x,y;
        for (i = 0; i < src.data.length; i += 4) {
            x=Math.abs(((src.data[i]+src.data[i+1]+src.data[i+2])/3)-((src.data[i+4]+src.data[i+5]+src.data[i+6])/3));
            y=Math.abs(((src.data[i]+src.data[i+1]+src.data[i+2])/3)-((src.data[i+canvas.width*4]+src.data[i+canvas.width*4]+src.data[i+canvas.width*4])/3));
            sum=x+y;
            dst.data[i]=sum;
            dst.data[i+1]=sum;
            dst.data[i+2]=sum;
            dst.data[i+3]=src.data[i+3];
        }
        context.putImageData(dst, 0, 0);
    }
}


document.getElementById("run").onclick = function() {
    main();
};
document.getElementById("bks").onclick = function() {
    bks();
};
document.getElementById("bw1").onclick = function() {
    bw1();
};
document.getElementById("bw2").onclick = function() {
    bw2();
};
document.getElementById("bw3").onclick = function() {
    bw3();
};
document.getElementById("bw4").onclick = function() {
    bw4();
};
document.getElementById("change").onclick = function() {
    change();
};
document.getElementById("skell").onclick = function() {
    skell();
};
document.getElementById("blw1").onclick = function() {
    blw1();
};
document.getElementById("blw2").onclick = function() {
    try{
    blw2();
    }catch(e){alert(e);}
};
document.getElementById("re").onclick = function() {
    re();
};
document.getElementById("edge1").onclick = function() {
    edge1();
};
document.getElementById("edge2").onclick = function() {
    edge2();
};
document.getElementById("edge3").onclick = function() {
    edge3();
};
document.getElementById("pp").onclick = function() {
    pp();
};
document.getElementById("mm").onclick = function() {
    mm();
};
document.getElementById("red").onclick = function() {
    red();
};

document.getElementById("180").onclick = function() {
    turn180();
};
document.getElementById("mirror").onclick = function() {
    mirror();
};
document.getElementById("differential").onclick = function() {
        differential();
};
document.getElementById("openPage").onclick = function() {
    openPage();
};