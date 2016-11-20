import json

jsonFileOpen = open('events.json','r')
jsonContent = jsonFileOpen.read()

jsonObjects = json.loads(jsonContent)

print(jsonObjects[0])

