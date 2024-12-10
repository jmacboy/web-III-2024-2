import json
from channels.generic.websocket import AsyncWebsocketConsumer

class MyConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("actualizaciones", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("actualizaciones", self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        print(data)

    async def send_update(self, event):
        await self.send(text_data=json.dumps(event["data"]))
