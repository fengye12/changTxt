let fs=require('fs');
let iconv=require('iconv-lite');

let fileStr=fs.readFileSync('1.html',{encoding:'binary'});
let buf=new Buffer(fileStr,'binary');
let str0=iconv.decode(buf,"utf-8");
let str1="";
let ii=0;
let leftstr=str0;
while(leftstr.length>0){
  ii=leftstr.indexOf('\n');
  if(leftstr.indexOf('\n')==-1){
    str1+=leftstr.match(/(^\s*)/g)+"'"+leftstr.replace(/(^\s*)|(\s*$)/g,"")+"'";
    break;
  }
  // str1+=
  let content=leftstr.substring(0,ii+1);
  let contentAll=content.match(/(^\s*)/g)+"'"+content.replace(/(^\s*)|(\s*$)/g,"")+"',\n";
  str1+=contentAll;
  leftstr=leftstr.substr(ii+1);
}
// str1=str1.substr(0,str1.length-2);
fs.writeFile('answer.html',"[\n"+str1+"\n]",{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
  if(err){
    console.log('文件写入失败')
  }else{
    console.log('转化成功，打开answer.txt复制黏贴即可')
  }
})
