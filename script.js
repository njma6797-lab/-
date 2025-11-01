const installBtn = document.getElementById('installBtn');
const previewContainer = document.getElementById('previewContainer');
const previewFrame = document.getElementById('previewFrame');
const iconInput = document.getElementById('appIconFile');
const rrllInput = document.getElementById('rrllCode');

installBtn.addEventListener('click', () => {
  const html = document.getElementById('htmlCode').value;
  const css = document.getElementById('cssCode').value;
  const js = document.getElementById('jsCode').value;
  const name = document.getElementById('appName').value;
  const rrllCode = rrllInput.value;

  // التحقق من كود RR.LL
  if(rrllCode.length !==5 || !/^\d+$/.test(rrllCode)){
    alert("أدخل 5 أرقام صحيحة لكود RR.LL!");
    return;
  }

  const [n1,n2,n3,n4,n5] = rrllCode.split('').map(Number);
  const bodyStyles = [];

  if(n1===1) bodyStyles.push("background: linear-gradient(135deg,#0f0,#00f);");
  if(n2===1) bodyStyles.push("color:#ff0;");
  if(n3===1) console.log("الصوت مفعل");
  if(n4===1) bodyStyles.push("font-family:Courier New;");
  if(n5===1) bodyStyles.push("font-size:18px;");

  let iconURL = '';
  const file = iconInput.files[0];
  if(file){
    iconURL = URL.createObjectURL(file);
  }

  const fullCode = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<style>
${css}
body{${bodyStyles.join('')}}
</style>
<title>${name}</title>
</head>
<body>
<div style="text-align:center;">
${iconURL ? `<img src="${iconURL}" style="width:100px;height:100px;margin:10px;">` : ''}
<h2>${name}</h2>
${html}
<script>${js}<\/script>
</div>
<div style="position:fixed;bottom:0;width:100%;background:#222;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:5px 10px;font-weight:bold;">
<span>تم الصنع من موقع النجم</span>
<a href="https://wa.me/201206561893" target="_blank" style="color:#fff;display:flex;align-items:center;">
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" style="width:25px;height:25px;margin-right:5px;">
01206561893
</a>
</div>
</body>
</html>
  `;

  const blob = new Blob([fullCode], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  previewFrame.src = url;
  previewContainer.style.display = 'block';
});
