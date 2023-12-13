const draw={};
draw.path=(ctx,path,color="pink")=>{
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(...path[0]);
    for(let i=1;i<path.length;i++){
        ctx.lineTo(...path[i]);
    }
    ctx.stroke();
}