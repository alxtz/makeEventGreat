import json

# some filters
frontEnd = ['html','css','javascript','js','vue','react','front','sass','web','bootstrap','ruby','網頁','SEO','fullstack','全端','bootstrap']
backEnd = ['back','rails','fullstack','全端','nodejs','node.js']
imageProcess = ['ps','photoshop','pr','premiere','adobe','圖層','影像','後製','illustrator','krita','攝影']
conf = ['conf','研討會','SITCON','HITCON']
campusAndClub = ['電機','資工','資管','大學','台大','臺大','臺灣大學','台灣大學','開源社','台科大']
software = ['software','engineer','framework','system','web','git','app','tech','資訊','linux','Ubuntu','開源','程式']
programmingLanguage = ['python','ruby','C','C++','java','perl','php','swift','程式','語言','C#','julia','lua','golang','javascript']
app = ['ios','swift','android','java','xamarin']
career = ['22k','實習','silicon']
game = ['rpg','遊戲','game','']
dataAndAI = ['google','data','數據','資料','分析','analy','static','人工智慧','機器學習','AI','chatbot']
security = ['hack','駭','黑','逆','碼','封包','HITCON','TDOH']
codingAndDeveloping = ['hackathon','黑客松','開發','coding','develop','studio','workshop','code','git','程式']
system = ['linux','mint','ubuntu','mac','windows']
hardware = ['duino','8051']
social = ['meetup','SOSCET','社群']
network = ['web','互聯網','雲端']

jsonFileOpen = open('events.json','r')
jsonContent = jsonFileOpen.read()
jsonObjects = json.loads(jsonContent)

for jsonObject in jsonObjects:
    

#print(jsonObjects[0])
#jsonObjects[0]['newKey'] = 'new'
#print(jsonObjects[0])

